// This script is responsible for loading and managing script2.js

document.addEventListener('DOMContentLoaded', function() {
    // Load script2.js dynamically
    const script = document.createElement('script');
    script.src = 'https://kea4utv.github.io/link-script2/script.js';
    script.onload = function() {
        console.log('script2.js loaded and ready to use.');
    };
    document.body.appendChild(script);
});
