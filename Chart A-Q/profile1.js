import { playAnimationFromStart } from './animation.js';
 
export class Profile {
    constructor(profileName, imageLink, backColor = '#d8d8d8', isMainPerson = false, color = '#333333') {
        this.profileName = profileName;
        this.imageLink = imageLink;
        this.backColor = backColor;
        this.color = color;
        this.isMainPerson = isMainPerson;
        this.alphaValue = 1.0;
    }

    copy(otherProfile) {
        this.profileName = otherProfile.profileName + "2";
        this.imageLink = otherProfile.imageLink;
        this.image = otherProfile.image;
        this.backColor = otherProfile.backColor;
        this.color = otherProfile.color;
        this.isMainPerson = false;
        this.alphaValue = otherProfile.alphaValue;
    }

    getProfileName() {
        return this.profileName;
    }

    setProfileName(newName) {
        this.profileName = newName;
    }

    getImageLink() {
        return this.imageLink;
    }

    setImageLink(newLink) {
        this.imageLink = newLink;
    }
}

export function showProfiles(parentDiv, profiles, setupTextEntry, deleteProfile) {
    parentDiv.innerHTML = '';
    for (let profile of profiles) {
        const profileDiv = document.createElement('div');
        profileDiv.className = 'profileDiv';

        const img = document.createElement('img');
        img.src = profile.imageLink;
        img.className = 'profilePic';
        profileDiv.appendChild(img);

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.className = 'profileNameInput';
        nameInput.value = profile.profileName;
        nameInput.addEventListener('input', () => {
            profile.setProfileName(nameInput.value);
            playAnimationFromStart();
        });
        profileDiv.appendChild(nameInput);

        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.className = 'picker';
        colorInput.value = profile.backColor;
        colorInput.addEventListener('input', () => {
            profile.backColor = colorInput.value;
            playAnimationFromStart();
        });
        profileDiv.appendChild(colorInput);

        const textColorInput = document.createElement('input');
        textColorInput.type = 'color';
        textColorInput.className = 'picker';
        textColorInput.value = profile.color;
        textColorInput.addEventListener('input', () => {
            profile.color = textColorInput.value;
            playAnimationFromStart();
        });
        profileDiv.appendChild(textColorInput);

        const rightBubbleInput = document.createElement('input');
        rightBubbleInput.type = 'checkbox';
        rightBubbleInput.checked = profile.isMainPerson;
        rightBubbleInput.addEventListener('change', () => {
            profile.isMainPerson = rightBubbleInput.checked;
            playAnimationFromStart();
        });
        profileDiv.appendChild(rightBubbleInput);

        const fileInputButton = document.createElement('button');
        fileInputButton.innerHTML = `<img src='./images/photo.svg' alt="a photo icon"/>`;
        profileDiv.appendChild(fileInputButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<img src='./images/trash.svg' alt="a trash can"/>`;
        deleteButton.addEventListener('click', () => {
            deleteProfile(profile);
        });
        profileDiv.appendChild(deleteButton);

        fileInputButton.addEventListener('click', () => {
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = 'image/*';
                const thisProfile = profile;
                fileInput.addEventListener('change', (event) => {
                    const file = event.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            thisProfile.setImageLink(reader.result);
                            img.src = reader.result;
                            thisProfile.image = new Image();
                            thisProfile.image.src = reader.result;
                            playAnimationFromStart();
                        };
                        reader.readAsDataURL(file);
                    }
                });
                fileInput.click();
            } else {
                const messageBox = document.createElement('div');
                messageBox.textContent = "Uploading photo not supported on your current device";
                messageBox.style.cssText = `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid black; z-index: 1000;`;
                document.body.appendChild(messageBox);
                setTimeout(() => document.body.removeChild(messageBox), 3000);
            }
        });

        parentDiv.appendChild(profileDiv);
    }
}
