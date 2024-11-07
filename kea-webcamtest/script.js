// script.js

let mediaRecorder;
let recordedChunks = [];
let stream;

// Function to access the webcam and start video stream
function startWebcam() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (userStream) {
                stream = userStream;
                const videoElement = document.getElementById('webcam');
                videoElement.srcObject = stream;

                // Set up MediaRecorder once webcam stream is available
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = handleDataAvailable;
                mediaRecorder.onstop = handleStop;
            })
            .catch(function (error) {
                console.log('Error accessing webcam: ', error);
                alert('Cannot access webcam');
            });
    } else {
        alert('Your browser does not support webcam access');
    }
}

// Handle the data that is available when recording
function handleDataAvailable(event) {
    if (event.data.size > 0) {
        recordedChunks.push(event.data);
    }
}

// Handle the stop event of the media recorder
function handleStop() {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const videoUrl = URL.createObjectURL(blob);

    // Create a download link for the recorded video
    const downloadLink = document.createElement('a');
    downloadLink.href = videoUrl;
    downloadLink.download = 'recorded-video.webm';
    downloadLink.click();

    // Reset for next recording
    recordedChunks = [];
}

// Start recording when the "Start Recording" button is clicked
document.getElementById('startBtn').addEventListener('click', function () {
    if (mediaRecorder && stream) {
        mediaRecorder.start();
        console.log("Recording started...");
        document.getElementById('startBtn').disabled = true;
        document.getElementById('stopBtn').disabled = false;
    }
});

// Stop recording when the "Stop Recording" button is clicked
document.getElementById('stopBtn').addEventListener('click', function () {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        console.log("Recording stopped...");
        document.getElementById('startBtn').disabled = false;
        document.getElementById('stopBtn').disabled = true;
    }
});

// Initialize webcam and start video stream on page load
window.onload = startWebcam;
