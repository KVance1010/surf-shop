const https = require('https');
const fs = require('fs');
const path = require('path');

const files = [
  {
    url: 'https://cdn.jsdelivr.net/npm/webm-wasm@0.4.1/dist/webm-wasm.js',
    filename: 'webm-wasm.js'
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/webm-wasm@0.4.1/dist/webm-wasm.wasm',
    filename: 'webm-wasm.wasm'
  }
];

const targetDir = path.join(__dirname, '../public/webm-wasm');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, response => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        downloadFile(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(filepath);
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${path.basename(filepath)}`);
        resolve();
      });

      file.on('error', err => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', err => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  try {
    for (const { url, filename } of files) {
      const filepath = path.join(targetDir, filename);
      await downloadFile(url, filepath);
    }
  } catch (error) {
    console.error('Error downloading files:', error);
    process.exit(1);
  }
}

downloadAll(); 