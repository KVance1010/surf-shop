// NOTE: To use MP4 instead of WebM, you would need to:
// 1. Rename this file to convert-to-mp4.ts
// 2. Change the function name to convertToMP4
// 3. Use a different encoder since MediaRecorder doesn't widely support MP4
// 4. Consider using mp4box.js or similar library for MP4 encoding

interface ExtendedHTMLVideoElement extends HTMLVideoElement {
  mozHasAudio?: boolean;
  webkitAudioDecodedByteCount?: number;
  audioTracks?: { length: number };
}

export async function convertToWebM(
  file: File,
  onProgress?: (progress: number) => void
): Promise<File> {
  return new Promise((resolve, reject) => {
    try {
      const video = document.createElement('video');
      video.src = URL.createObjectURL(file);
      video.muted = true;

      video.onloadedmetadata = async () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d')!;

          const stream = canvas.captureStream(30); // 30 FPS

          // Calculate optimal bitrate based on resolution and input file size
          // More aggressive compression:
          // 1. Calculate bits per second from input file
          // 2. Use 60% of input bitrate
          // 3. Cap based on resolution
          const inputBitsPerSecond = (file.size * 8) / video.duration;
          const resolutionFactor = (video.videoWidth * video.videoHeight) / (1920 * 1080);
          const maxBitrate = Math.min(
            1_000_000, // 1 Mbps absolute max
            1_000_000 * resolutionFactor // Scale with resolution
          );
          
          const targetBitrate = Math.min(
            maxBitrate,
            Math.floor(inputBitsPerSecond * 0.6) // 60% of input bitrate
          );

          // NOTE: For MP4 conversion, this section would need to change:
          // const mp4Encoder = new MP4Encoder({
          //   width: video.videoWidth,
          //   height: video.videoHeight,
          //   fps: 30,
          //   bitrate: targetBitrate, // Use same bitrate calculation for MP4
          //   codec: 'h264',         // Use H.264 for better compatibility
          //   quality: 'medium'      // Balance between size and quality
          // });

          // Try VP9 first for better compression, fall back to VP8
          let mimeType = 'video/webm;codecs=vp9';
          if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'video/webm;codecs=vp8';
          }

          const recorder = new MediaRecorder(stream, {
            mimeType,
            videoBitsPerSecond: targetBitrate
          });

          const chunks: Blob[] = [];
          // Request larger chunks for better compression
          recorder.ondataavailable = (e) => chunks.push(e.data);

          // NOTE: For MP4, the output handling would change:
          // - Change Blob type to 'video/mp4'
          // - Change file extension to .mp4
          // - Use mp4box.js to properly mux the video
          recorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'video/webm' });
            resolve(new File([blob], file.name.replace(/\.[^/.]+$/, '.webm'), { type: 'video/webm' }));
            URL.revokeObjectURL(video.src);
          };

          // Start recording with larger timeslice for better compression
          recorder.start(1000); // 1 second chunks

          await video.play();

          const duration = video.duration;
          let currentTime = 0;
          const frameInterval = 1000 / 30; // 30fps

          // NOTE: Frame drawing would remain similar for MP4,
          // but the frames would be fed to the MP4 encoder instead
          // of the MediaRecorder. The MP4 encoder would need to handle
          // the raw frame data and encode it using the H.264 codec
          const drawFrame = async () => {
            if (currentTime <= duration) {
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              
              if (onProgress) {
                onProgress((currentTime / duration) * 100);
              }

              currentTime += frameInterval / 1000;
              video.currentTime = currentTime;

              await new Promise<void>((resolve) => {
                video.onseeked = () => resolve();
              });

              requestAnimationFrame(drawFrame);
            } else {
              recorder.stop();
              stream.getTracks().forEach(track => track.stop());
            }
          };

          drawFrame();
        } catch (error) {
          reject(error);
        }
      };

      video.onerror = (error) => {
        URL.revokeObjectURL(video.src);
        reject(new Error(`Error loading video: ${error}`));
      };
    } catch (error) {
      reject(error);
    }
  });
}