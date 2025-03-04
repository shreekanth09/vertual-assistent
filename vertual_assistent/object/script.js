const video = document.getElementById('webcam');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const statusElement = document.getElementById('status');

// Load the COCO-SSD model
let model;
cocoSsd.load().then(loadedModel => {
  model = loadedModel;
  statusElement.textContent = "Model loaded. Starting webcam...";
  startWebcam();
});

// Start the webcam stream
function startWebcam() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
      video.addEventListener('loadeddata', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        detectObjects();
      });
    })
    .catch(err => {
      console.error("Error accessing webcam:", err);
      statusElement.textContent = "Error accessing webcam.";
    });
}

// Detect objects in the video stream
function detectObjects() {
  model.detect(video).then(predictions => {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the video frame
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Draw predictions
    predictions.forEach(prediction => {
      const [x, y, width, height] = prediction.bbox;
      ctx.strokeStyle = "#00FF00";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);

      ctx.fillStyle = "#00FF00";
      ctx.font = "18px Arial";
      ctx.fillText("${prediction.class} (${Math.round(prediction.score * 100)}%)",
        x,
        y > 10 ? y - 5 : 10
      );
    });

    // Call detectObjects again
    requestAnimationFrame(detectObjects);
  });
}