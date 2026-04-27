// JavaScript script to redirect users to PDF download section
// This script can be embedded in any webpage

// Method 1: Immediate redirect
function redirectToPDFDownload() {
    window.location.href = "https://planning.gotoretreats.com/#pdf-download";
}

// Method 2: Redirect with delay (optional)
function redirectToPDFDownloadWithDelay(delayMs = 1000) {
    setTimeout(() => {
        window.location.href = "https://planning.gotoretreats.com/#pdf-download";
    }, delayMs);
}

// Method 3: Redirect in new tab/window
function redirectToPDFDownloadNewTab() {
    window.open("https://planning.gotoretreats.com/#pdf-download", "_blank");
}

// Method 4: Redirect with user confirmation
function redirectToPDFDownloadWithConfirmation() {
    if (confirm("You will be redirected to our PDF download section. Continue?")) {
        window.location.href = "https://planning.gotoretreats.com/#pdf-download";
    }
}

// Auto-execute redirect (uncomment to use)
// redirectToPDFDownload();

// Example usage with button click event
document.addEventListener('DOMContentLoaded', function() {
    // If you have a button with id 'pdf-redirect-btn', this will work
    const redirectButton = document.getElementById('pdf-redirect-btn');
    if (redirectButton) {
        redirectButton.addEventListener('click', redirectToPDFDownload);
    }
});
¸