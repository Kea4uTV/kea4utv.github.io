// Function to check connection and display or hide popup
function checkConnection() {
    const popup = document.getElementById('popup');
    if (navigator.onLine) {
        popup.style.display = 'none'; // Hide popup if online
    } else {
        popup.style.display = 'flex'; // Show popup if offline
    }
}

// Create and insert iframe dynamically
function createIframe() {
    // Create the iframe container div
    const iframeContainer = document.createElement('div');
    iframeContainer.className = 'iframe-container';

    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.id = 'webpage-frame';
    iframe.src = 'https://test4-0.blogspot.com/2024/08/p.html';
    iframe.frameBorder = '0';

    // Append the iframe to the container
    iframeContainer.appendChild(iframe);

    // Insert the container into the DOM
    const container = document.getElementById('iframe-container');
    container.appendChild(iframeContainer);
}

// Check connection status at regular intervals
setInterval(checkConnection, 5000); // Check connection every 5 seconds

// Check connection status when online status changes
window.addEventListener('online', checkConnection);
window.addEventListener('offline', checkConnection);

// Set up the iframe and check connection when the page loads
window.addEventListener('load', () => {
    createIframe(); // Create and insert iframe when the page loads
    checkConnection(); // Check connection when the page loads
});
