// Enhanced JavaScript script for PDF download section redirect
// Handles scroll timing and multiple attempts to ensure proper navigation

// Enhanced redirect function with scroll handling
function redirectToPDFDownloadEnhanced() {
    // First, navigate to the page
    window.location.href = "https://planning.gotoretreats.com/#pdf-download";
    
    // Wait for page to load, then handle scrolling
    setTimeout(() => {
        scrollToPDFSection();
    }, 500); // Wait 500ms for page to load
}

// Function to scroll to PDF section with multiple attempts
function scrollToPDFSection() {
    // First scroll attempt at 300ms
    setTimeout(() => {
        const pdfSection = document.getElementById('pdf-download') || 
                          document.querySelector('[data-section="pdf-download"]') ||
                          document.querySelector('.pdf-download-section');
        
        if (pdfSection) {
            pdfSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        } else {
            // Fallback: scroll to top of page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 300);
    
    // Second scroll attempt at 800ms (backup)
    setTimeout(() => {
        const pdfSection = document.getElementById('pdf-download') || 
                          document.querySelector('[data-section="pdf-download"]') ||
                          document.querySelector('.pdf-download-section');
        
        if (pdfSection) {
            pdfSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }, 800);
}

// Component-level scroll handler for NewsletterSignupSection
function handleNewsletterSignupScroll() {
    // Wait 1000ms to ensure component is fully rendered
    setTimeout(() => {
        const newsletterSection = document.querySelector('.newsletter-signup') ||
                                 document.querySelector('[data-component="newsletter-signup"]') ||
                                 document.querySelector('#newsletter-signup');
        
        if (newsletterSection) {
            newsletterSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }, 1000);
}

// Auto-execute when page loads with PDF download hash
function autoRedirectOnPageLoad() {
    if (window.location.hash === '#pdf-download') {
        // Wait for page to fully load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => {
                    scrollToPDFSection();
                    handleNewsletterSignupScroll();
                }, 500);
            });
        } else {
            setTimeout(() => {
                scrollToPDFSection();
                handleNewsletterSignupScroll();
            }, 500);
        }
    }
}

// Initialize auto-redirect on page load
autoRedirectOnPageLoad();

// Export functions for external use
window.redirectToPDFDownloadEnhanced = redirectToPDFDownloadEnhanced;
window.scrollToPDFSection = scrollToPDFSection;
window.handleNewsletterSignupScroll = handleNewsletterSignupScroll;
