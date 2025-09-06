export var recorder;
export var recordedChunks = [];
export var webmFileName = 'chat-animator.webm';
export var mp4FileName = 'chat-animator.mp4';
export var recording = false;
export var finishedRecording = true;

export async function startRecording(canvas, durationSeconds) {
    recording = true;
    finishedRecording = false;
    const stream = canvas.captureStream(60);
    recorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });

    recorder.ondataavailable = handleDataAvailable;
    recorder.onstop = handleStop;

    recorder.start();
    setTimeout(() => {
        recorder.stop();
    }, durationSeconds * 1000);
}

function handleDataAvailable(event) {
    if (event.data.size > 0) {
        recordedChunks.push(event.data);
    }
}

async function handleStop() {
    const blob = new Blob(recordedChunks, {
        type: 'video/webm'
    });
    recordedChunks = [];
    const url = URL.createObjectURL(blob);
    finishedRecording = true;
    recording = false;
    const link = document.createElement('a');
    link.href = url;
    link.download = webmFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

export async function convertAndDownloadMp4(canvas, durationSeconds) {
    const messageBox = document.createElement('div');
    messageBox.textContent = "MP4 conversion is not supported in this client-side demo. Please use the Save .webm option.";
    messageBox.style.cssText = `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid black; z-index: 1000;`;
    document.body.appendChild(messageBox);
    setTimeout(() => document.body.removeChild(messageBox), 5000);
}
