const tracks = [
    { oldId: "1", url: "https://va.media.tumblr.com/tumblr_shy4dfyrPv1az2cda.mp4", title: "1" },
    { oldId: "2", url: "https://va.media.tumblr.com/tumblr_shy4hf6i251az2cda.mp4", title: "2" },
        { oldId: "3", url: "https://va.media.tumblr.com/tumblr_shy4pe0fcS1az2cda.mp4", title: "3" },
        { oldId: "4", url: "https://va.media.tumblr.com/tumblr_shy4wtzmb31az2cda.mp4", title: "4" },
        { oldId: "5", url: "https://va.media.tumblr.com/tumblr_shy50mqaKm1az2cda.mp4", title: "5" },
    // Add more tracks here
];
const popupContents = [
    { type: 'video', src: 'https://khmermov.com/videos/188_4-6-24.mp4' },
    { type: 'image', src: 'https://static-01.daraz.pk/p/b9f9d5ac8eda5ae8e7c0813b62806074.jpg' },
    { type: 'gif', src: 'https://www.activecampaign.com/wp-content/uploads/2021/10/lt5bzx5k_popups_3.gif' },
    { type: 'text', text: '«យើងទាំងអស់គ្នា រួមគ្នាបំបាត់គ្រឿងញៀន»' }
];

let currentTrackIndex = 0;
let isPopupShown = false;
let popupTimeout;

function getRandomPopupContent() {
    return popupContents[Math.floor(Math.random() * popupContents.length)];
}

function createPopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    const popupVideo = document.getElementById('popupVideo');
    const popupImage = document.getElementById('popupImage');
    const popupGif = document.getElementById('popupGif');
    const popupText = document.getElementById('popupText');
    const skipButton = document.getElementById('skipButton');

    const content = getRandomPopupContent();

    // Reset all popup elements
    popupVideo.style.display = 'none';
    popupImage.style.display = 'none';
    popupGif.style.display = 'none';
    popupText.style.display = 'none';

    if (content.type === 'video') {
        popupVideo.src = content.src;
        popupVideo.style.display = 'block';
        popupVideo.play();
    } else if (content.type === 'image') {
        popupImage.src = content.src;
        popupImage.style.display = 'block';
    } else if (content.type === 'gif') {
        popupGif.src = content.src;
        popupGif.style.display = 'block';
    } else if (content.type === 'text') {
        popupText.textContent = content.text;
        popupText.style.display = 'block';
    }

    skipButton.addEventListener('click', hidePopup);
}

function showPopup() {
    const popupOverlay = document.getElementById('popupOverlay');

    if (!isPopupShown) {
        createPopup();
        popupOverlay.style.display = 'flex';
        isPopupShown = true;
        // Hide popup after 15 seconds
        popupTimeout = setTimeout(hidePopup, 30000);
    }
}

function hidePopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    if (popupOverlay) {
        popupOverlay.style.display = 'none';
        // Pause the video if it's playing
        const popupVideo = document.getElementById('popupVideo');
        if (popupVideo) {
            popupVideo.pause();
        }
    }
    isPopupShown = false;
    clearTimeout(popupTimeout); // Clear timeout when popup is manually closed
}

function loadVideo(index) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const videoCover = document.getElementById('videoCover');
    const videoTitle = document.getElementById('videoTitle');
    const track = tracks[index];

    if (track) {
        // Show popup with advertisement
        if (!isPopupShown) {
            showPopup();
        }

        videoSource.src = track.url;
        videoTitle.textContent = track.title;
        videoPlayer.load();
        videoPlayer.play();
        videoCover.style.display = 'none'; // Hide cover image and title
    } else {
        alert('Track not found!');
    }
}

function prevTrack() {
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
        loadVideo(currentTrackIndex);
    }
}

function nextTrack() {
    if (currentTrackIndex < tracks.length - 1) {
        currentTrackIndex++;
        loadVideo(currentTrackIndex);
    }
}

// Event listeners for control buttons
document.getElementById('playButton').addEventListener('click', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
});

document.getElementById('prevButton').addEventListener('click', prevTrack);
document.getElementById('nextButton').addEventListener('click', nextTrack);

// Auto-play first track on page load
window.onload = () => {
    loadVideo(currentTrackIndex);
};

// Event listeners to hide cover image when video is playing
const videoPlayer = document.getElementById('videoPlayer');
videoPlayer.addEventListener('play', () => {
    document.getElementById('videoCover').style.display = 'none'; // Hide cover image
});
videoPlayer.addEventListener('pause', () => {
    document.getElementById('videoCover').style.display = 'none'; // Hide cover image
});
videoPlayer.addEventListener('ended', () => {
    document.getElementById('videoCover').style.display = 'none'; // Hide cover image
});
