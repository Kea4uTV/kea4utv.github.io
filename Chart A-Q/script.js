// Get references to HTML elements
const animCanvas = document.getElementById('animCanvas');
const ctx = animCanvas.getContext('2d');

const animationDurationInput = document.getElementById('animationDuration');
const holdDurationInput = document.getElementById('holdDuration');
const startDelayInput = document.getElementById('startDelay');
const bitRateInput = document.getElementById('bitRate');
const fontInput = document.getElementById('font');
const canvasWidthInput = document.getElementById('canvasWidth');
const canvasHeightInput = document.getElementById('canvasHeight');
const backColorInput = document.getElementById('backColor');
const backAlphaInput = document.getElementById('backAlpha');
const showNamesInput = document.getElementById('showNames');
const showTailsInput = document.getElementById('showTails');
const frameSpecifyInput = document.getElementById('frameSpecify');
const backgroundImageUrlInput = document.getElementById('backgroundImageUrl'); // Background image URL input
const backgroundImageUploadInput = document.getElementById('backgroundImageUpload'); // Background image upload input
const imageLoadStatus = document.getElementById('imageLoadStatus'); // Element to display image load status

let backgroundImage = null; // Variable to hold the loaded background image

// Function to update the image loading status message
function updateImageStatus(message, color = 'red') {
    imageLoadStatus.textContent = message;
    imageLoadStatus.style.color = color;
}

// Function to draw the canvas content
function drawCanvas() {
    // Clear the canvas
    ctx.clearRect(0, 0, animCanvas.width, animCanvas.height);

    // Set background color
    const backColor = backColorInput.value;
    const backAlpha = parseFloat(backAlphaInput.value);
    ctx.fillStyle = `rgba(${parseInt(backColor.slice(1, 3), 16)}, ${parseInt(backColor.slice(3, 5), 16)}, ${parseInt(backColor.slice(5, 7), 16)}, ${backAlpha})`;
    ctx.fillRect(0, 0, animCanvas.width, animCanvas.height);

    // Draw background image if available
    if (backgroundImage && backgroundImage.complete && backgroundImage.naturalWidth > 0) {
        try {
            ctx.drawImage(backgroundImage, 0, 0, animCanvas.width, animCanvas.height);
            updateImageStatus('រូបភាពផ្ទៃខាងក្រោយបានផ្ទុកដោយជោគជ័យ។', 'green'); // Image loaded successfully
        } catch (error) {
            console.error('Error drawing background image:', error);
            updateImageStatus('មានបញ្ហាក្នុងការគូររូបភាពផ្ទៃខាងក្រោយ។', 'red'); // Error drawing image
        }
    } else if (backgroundImage) {
        updateImageStatus('កំពុងផ្ទុករូបភាពផ្ទៃខាងក្រោយ...', 'orange'); // Image still loading
    } else {
        updateImageStatus('គ្មានរូបភាពផ្ទៃខាងក្រោយ។', 'gray'); // No image set
    }

    // You would add your chat animation drawing logic here
    // For now, let's just add some placeholder text to show it's working
    ctx.font = fontInput.value;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText('ផ្ទាំងគំនូរចលនាជជែក', animCanvas.width / 2, animCanvas.height / 2);
}

// Function to update canvas dimensions
function updateCanvasDimensions() {
    animCanvas.width = parseInt(canvasWidthInput.value);
    animCanvas.height = parseInt(canvasHeightInput.value);
    drawCanvas(); // Redraw after changing dimensions
}

// Event listeners for control changes
animationDurationInput.addEventListener('input', drawCanvas);
holdDurationInput.addEventListener('input', drawCanvas);
startDelayInput.addEventListener('input', drawCanvas);
bitRateInput.addEventListener('input', drawCanvas);
fontInput.addEventListener('input', drawCanvas);
canvasWidthInput.addEventListener('input', updateCanvasDimensions);
canvasHeightInput.addEventListener('input', updateCanvasDimensions);
backColorInput.addEventListener('input', drawCanvas);
backAlphaInput.addEventListener('input', drawCanvas);
showNamesInput.addEventListener('change', drawCanvas);
showTailsInput.addEventListener('change', drawCanvas);
frameSpecifyInput.addEventListener('change', drawCanvas);

// Event listener for background image URL input
backgroundImageUrlInput.addEventListener('input', () => {
    const imageUrl = backgroundImageUrlInput.value.trim();
    if (imageUrl) {
        // Clear file input if URL is used
        backgroundImageUploadInput.value = '';
        updateImageStatus('កំពុងផ្ទុករូបភាពពី URL...', 'orange');
        backgroundImage = new Image();
        backgroundImage.crossOrigin = 'Anonymous'; // Important for cross-origin images
        backgroundImage.onload = () => {
            drawCanvas(); // Redraw canvas once image is loaded
        };
        backgroundImage.onerror = () => {
            console.error('Failed to load background image from URL:', imageUrl);
            updateImageStatus('បរាជ័យក្នុងការផ្ទុករូបភាពពី URL។ (ពិនិត្យ URL ឬ Cross-Origin)', 'red');
            backgroundImage = null; // Clear image if loading fails
            drawCanvas(); // Redraw without the image
        };
        backgroundImage.src = imageUrl;
    } else if (!backgroundImageUploadInput.files.length) {
        // Only clear if no file is selected either
        backgroundImage = null; // Clear image if URL is empty and no file is selected
        drawCanvas(); // Redraw without the image
        updateImageStatus('គ្មានរូបភាពផ្ទៃខាងក្រោយ។', 'gray');
    }
});

// Event listener for background image upload input
backgroundImageUploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        // Clear URL input if file is uploaded
        backgroundImageUrlInput.value = '';
        updateImageStatus('កំពុងផ្ទុករូបភាពពីកុំព្យូទ័រ...', 'orange');

        const reader = new FileReader();
        reader.onload = (e) => {
            backgroundImage = new Image();
            backgroundImage.onload = () => {
                drawCanvas(); // Redraw canvas once image is loaded
            };
            backgroundImage.onerror = () => {
                console.error('Failed to load uploaded background image.');
                updateImageStatus('បរាជ័យក្នុងការផ្ទុករូបភាពដែលបានផ្ទុកឡើង។', 'red');
                backgroundImage = null; // Clear image if loading fails
                drawCanvas(); // Redraw without the image
            };
            backgroundImage.src = e.target.result; // Set image source to data URL
        };
        reader.onerror = (e) => {
            console.error('FileReader error:', e);
            updateImageStatus('មានបញ្ហាជាមួយ FileReader។', 'red');
            backgroundImage = null;
            drawCanvas();
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    } else if (!backgroundImageUrlInput.value.trim()) {
        // Only clear if no URL is entered either
        backgroundImage = null; // Clear image if no file is selected and no URL is entered
        drawCanvas(); // Redraw without the image
        updateImageStatus('គ្មានរូបភាពផ្ទៃខាងក្រោយ។', 'gray');
    }
});


// Initial setup
updateCanvasDimensions(); // Set initial canvas size and draw
drawCanvas(); // Initial draw to ensure everything is rendered
