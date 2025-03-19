declare const WebMWriter: any;

async function ensureWebMWriterLoaded(): Promise<void> {
  if (typeof WebMWriter === 'undefined') {
    await new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = '/webm-wasm/webm-wasm.js';
      script.async = true;
      script.onload = () => {
        if (typeof WebMWriter === 'undefined') {
          reject(new Error('WebMWriter not found after script load'));
        } else {
          resolve();
        }
      };
      script.onerror = (error) => reject(new Error(`Failed to load WebMWriter: ${error}`));
      document.head.appendChild(script);
    });
  }
}

export async function convertToWebM(
  file: File,
  onProgress?: (progress: number) => void
): Promise<File> {
  try {
    // Ensure WebMWriter is loaded
    await ensureWebMWriterLoaded();

    // Create a video element to read the video
    const video = document.createElement('video');
    video.src = URL.createObjectURL(file);
    
    // Wait for video metadata to load
    await new Promise((resolve) => {
      video.onloadedmetadata = resolve;
    });

    // Create a canvas to capture frames
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    // Set canvas size to match video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Create WebM writer
    const writer = new WebMWriter({
      width: video.videoWidth,
      height: video.videoHeight,
      frameRate: 30,
      quality: 0.8,
    });

    // Start video playback
    video.play();

    // Capture frames and encode them
    const frameInterval = 1000 / 30; // 30fps
    const duration = video.duration * 1000; // Convert to milliseconds
    let currentTime = 0;

    while (currentTime < duration) {
      // Set video time and wait for seek
      video.currentTime = currentTime / 1000;
      await new Promise((resolve) => {
        video.onseeked = resolve;
      });

      // Draw frame to canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Add frame to WebM
      await writer.addFrame(canvas);

      // Update progress
      if (onProgress) {
        onProgress(Math.round((currentTime / duration) * 100));
      }

      currentTime += frameInterval;
    }

    // Get the WebM blob
    const blob = await writer.finalize();
    
    // Clean up
    URL.revokeObjectURL(video.src);

    // Create a new File object
    return new File([blob], file.name.replace(/\.[^/.]+$/, '.webm'), { type: 'video/webm' });
  } catch (error) {
    console.error('Error in convertToWebM:', error);
    throw error;
  }
} 