import { Profile, showProfiles } from './profile1.js';
import { playAnimationFromStart, drawFrame, AnimationSettings, canvas } from './animation1.js';
import { ChatMessage } from './chatMessage1.js';
import { startRecording, convertAndDownloadMp4 } from './recording1.js';

var chatProfiles = [];
chatProfiles.push(new Profile1('Grump', './images/char1.svg', '#218aff', true, '#ffffff'));
chatProfiles.push(new Profile1('Olivia', './images/senior-transparent.svg', '#d8d8d8'));
chatProfiles.push(new Profile1('Chad', './images/char2.svg'));
chatProfiles.push(new Profile1('Tischman', './images/char3.svg'));

var allChatMessages = [];
allChatMessages.push(new ChatMessage("Have you heard about chat-animator?", chatProfiles[0]));
allChatMessages.push(new ChatMessage("It makes phone chat animations like this.", chatProfiles[0]));
allChatMessages.push(new ChatMessage("How cool 😉", chatProfiles[2]));
allChatMessages.push(new ChatMessage("You can use them anywhere for free! No attribution necessary. Even the customizable profile pictures are free for commercial use.", chatProfiles[3]));

var animationSettings = new AnimationSettings();

function drawFrameParent() {
    drawFrame(allChatMessages, animationSettings);
    window.requestAnimationFrame(drawFrameParent);
}

function setCanvasSize() {
    const canvasWidthInput = document.getElementById('canvasWidth');
    const canvasHeightInput = document.getElementById('canvasHeight');
    canvas.width = Number(canvasWidthInput.value);
    canvas.height = Number(canvasHeightInput.value);
    playAnimationFromStart();
}

function updateProfileDiv() {
    const profilesDiv = document.getElementById('profiles');
    showProfiles(profilesDiv, chatProfiles, setupTextEntry, deleteProfile);
}

function addMessage(text, profile) {
    allChatMessages.push(new ChatMessage(text, profile));
    updateTextFieldsDiv();
    playAnimationFromStart();
}

function setupTextEntry() {
    const textFieldsDiv = document.getElementById('textFields');
    textFieldsDiv.innerHTML = '';
    for (let message of allChatMessages) {
        const textMessageRowDiv = document.createElement('div');
        textMessageRowDiv.className = 'textFieldsDiv';

        const profileSelect = document.createElement('select');
        for (let profile of chatProfiles) {
            const option = document.createElement('option');
            option.value = profile.getProfileName();
            option.text = profile.getProfileName();
            profileSelect.appendChild(option);
        }
        profileSelect.value = message.getProfile().getProfileName();
        profileSelect.addEventListener('change', () => {
            const selectedProfile = chatProfiles.find(p => p.getProfileName() === profileSelect.value);
            if (selectedProfile) {
                message.profile = selectedProfile;
                playAnimationFromStart();
            }
        });
        textMessageRowDiv.appendChild(profileSelect);

        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.value = message.getMessage();
        textInput.className = 'textMessageInput';
        textInput.addEventListener('input', () => {
            message.message = textInput.value;
            playAnimationFromStart();
        });
        textMessageRowDiv.appendChild(textInput);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<img src='./images/trash.svg' alt="a trash can"/>`;
        deleteButton.addEventListener('click', () => {
            const index = allChatMessages.indexOf(message);
            allChatMessages.splice(index, 1);
            playAnimationFromStart();
            setupTextEntry();
        });
        textMessageRowDiv.appendChild(deleteButton);

        textFieldsDiv.appendChild(textMessageRowDiv);
    }
}

function deleteProfile(profile) {
    if (chatProfiles.length > 1) {
        const index = chatProfiles.indexOf(profile);
        for (var message of allChatMessages) {
            if (message.profile == profile1) {
                message.profile = chatProfiles1[0];
            }
        }
        chatProfiles.splice(index, 1);
        updateProfileDiv();
        setupTextEntry();
    }
}

document.getElementById('animationDuration').addEventListener('input', (event) => {
    animationSettings.durationMessageSlideUp = Number(event.target.value);
    playAnimationFromStart();
});
document.getElementById('holdDuration').addEventListener('input', (event) => {
    animationSettings.durationMessageHold = Number(event.target.value);
    playAnimationFromStart();
});
document.getElementById('startDelay').addEventListener('input', (event) => {
    animationSettings.startDelay = Number(event.target.value);
    playAnimationFromStart();
});

document.getElementById('backgroundPicker').addEventListener('input', (event) => {
    animationSettings.backgroundColor = event.target.value;
});

document.getElementById('showNames').addEventListener('change', (event) => {
    animationSettings.showNames = event.target.checked;
    playAnimationFromStart();
});

document.getElementById('showTails').addEventListener('change', (event) => {
    animationSettings.showTails = event.target.checked;
    playAnimationFromStart();
});

document.getElementById('canvasWidth').addEventListener('input', setCanvasSize);
document.getElementById('canvasHeight').addEventListener('input', setCanvasSize);

document.getElementById('backgroundImage').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            animationSettings.backgroundImage = new Image();
            animationSettings.backgroundImage.onload = function() {
                playAnimationFromStart();
            };
            animationSettings.backgroundImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('clearImageButton').addEventListener('click', () => {
    animationSettings.backgroundImage = null;
    document.getElementById('backgroundImage').value = '';
    playAnimationFromStart();
});

document.getElementById('newProfile').addEventListener('click', () => {
    var newProfile = new Profile('New User', './images/char2.svg', '#d8d8d8');
    chatProfiles.push(newProfile);
    updateProfileDiv();
    setupTextEntry();
});

document.getElementById('newMessage').addEventListener('click', () => {
    addMessage('New message...', chatProfiles[0]);
});

document.getElementById('saveWebmButton').addEventListener('click', () => {
    const totalDuration = (animationSettings.durationMessageSlideUp + animationSettings.durationMessageHold) * allChatMessages.length + animationSettings.startDelay;
    startRecording(canvas, totalDuration);
});

document.getElementById('saveMp4Button').addEventListener('click', () => {
    const totalDuration = (animationSettings.durationMessageSlideUp + animationSettings.durationMessageHold) * allChatMessages.length + animationSettings.startDelay;
    convertAndDownloadMp4(canvas, totalDuration);
});

document.addEventListener('DOMContentLoaded', (event) => {
    setCanvasSize();
    updateProfileDiv();
    setupTextEntry();
    playAnimationFromStart();
    window.requestAnimationFrame(drawFrameParent);
});
