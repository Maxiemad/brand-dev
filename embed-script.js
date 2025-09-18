// Embeddable script for other websites
// This script can be added to any website to create a working PDF download link

(function() {
    'use strict';
    
    // Create a function that opens the PDF download section
    function openPDFDownload() {
        // Open in new tab to ensure it works properly
        const newWindow = window.open('https://planning.gotoretreats.com/#pdf-download', '_blank');
        
        // If popup was blocked, try direct navigation
        if (!newWindow) {
            window.location.href = 'https://planning.gotoretreats.com/#pdf-download';
        }
    }
    
    // Create a button element
    function createPDFButton(text = 'Download PDF', className = 'pdf-download-btn') {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        button.style.cssText = `
            background-color: #007bff;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-family: Arial, sans-serif;
            transition: background-color 0.3s;
        `;
        
        button.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#0056b3';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#007bff';
        });
        
        button.addEventListener('click', openPDFDownload);
        
        return button;
    }
    
    // Create a link element
    function createPDFLink(text = 'Download PDF', className = 'pdf-download-link') {
        const link = document.createElement('a');
        link.textContent = text;
        link.href = 'https://planning.gotoretreats.com/#pdf-download';
        link.target = '_blank';
        link.className = className;
        link.style.cssText = `
            background-color: #28a745;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            font-size: 16px;
            font-family: Arial, sans-serif;
            transition: background-color 0.3s;
        `;
        
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#218838';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#28a745';
        });
        
        return link;
    }
    
    // Auto-create button if element with id 'pdf-download-container' exists
    function autoCreateButton() {
        const container = document.getElementById('pdf-download-container');
        if (container) {
            const button = createPDFButton();
            container.appendChild(button);
        }
    }
    
    // Auto-create link if element with id 'pdf-download-link-container' exists
    function autoCreateLink() {
        const container = document.getElementById('pdf-download-link-container');
        if (container) {
            const link = createPDFLink();
            container.appendChild(link);
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            autoCreateButton();
            autoCreateLink();
        });
    } else {
        autoCreateButton();
        autoCreateLink();
    }
    
    // Export functions to global scope
    window.openPDFDownload = openPDFDownload;
    window.createPDFButton = createPDFButton;
    window.createPDFLink = createPDFLink;
    
})();
