// Working JavaScript script for planning.gotoretreats.com PDF download section
// This script handles the anchor link functionality that's missing from the website

// Enhanced redirect function that works with the existing website
function redirectToPDFDownloadWorking() {
    // Navigate to the page with hash
    window.location.href = "https://planning.gotoretreats.com/#pdf-download";
    
    // Wait for page to load, then handle scrolling
    setTimeout(() => {
        handlePDFDownloadScroll();
    }, 500);
}

// Function to handle PDF download section scrolling
function handlePDFDownloadScroll() {
    // Multiple attempts to find and scroll to the PDF section
    const scrollAttempts = [
        { delay: 300, selector: '#pdf-download' },
        { delay: 800, selector: '#pdf-download' },
        { delay: 1200, selector: '[data-section="pdf-download"]' },
        { delay: 1500, selector: '.pdf-download-section' },
        { delay: 2000, selector: '.newsletter-signup' },
        { delay: 2500, selector: '[id*="pdf"]' },
        { delay: 3000, selector: '[class*="pdf"]' }
    ];
    
    scrollAttempts.forEach(attempt => {
        setTimeout(() => {
            const element = document.querySelector(attempt.selector);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
                console.log(`Scrolled to PDF section using selector: ${attempt.selector}`);
            }
        }, attempt.delay);
    });
}

// Global scroll handler for anchor links (like the App.tsx example)
function setupGlobalScrollHandler() {
    const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash === '#pdf-download') {
            console.log('Hash detected: #pdf-download');
            handlePDFDownloadScroll();
        }
    };

    // Handle initial load with hash
    setTimeout(() => {
        handleHashChange();
    }, 500);

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
        window.removeEventListener('hashchange', handleHashChange);
    };
}

// Auto-setup when script loads
if (window.location.hash === '#pdf-download') {
    setupGlobalScrollHandler();
}

// Component-level scroll handler (like NewsletterSignupSection.tsx)
function setupComponentScrollHandler() {
    const hash = window.location.hash;
    if (hash === '#pdf-download') {
        // Wait for component to render, then scroll
        setTimeout(() => {
            const element = document.getElementById('pdf-download') || 
                           document.querySelector('[data-section="pdf-download"]') ||
                           document.querySelector('.pdf-download-section') ||
                           document.querySelector('.newsletter-signup');
            
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                console.log('Component-level scroll executed');
            }
        }, 1000);
    }
}

// Execute component scroll handler
setupComponentScrollHandler();

// Export functions for external use
window.redirectToPDFDownloadWorking = redirectToPDFDownloadWorking;
window.handlePDFDownloadScroll = handlePDFDownloadScroll;
window.setupGlobalScrollHandler = setupGlobalScrollHandler;
