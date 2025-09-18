# PDF Download Section Implementation Guide
## For planning.gotoretreats.com

### 🚨 Current Problem
The link `https://planning.gotoretreats.com/#pdf-download` is not working because the website doesn't have the proper anchor link functionality implemented. Users get stuck at the first section instead of reaching the PDF download section.

### ✅ Solution: Add These Code Changes

#### 1. **Find the PDF Download Section** (NewsletterSignupSection or similar)
Add `id="pdf-download"` to the section element:

```jsx
// Before:
<section className="py-16 bg-[#444444] border border-[#e6e6e6]">

// After:
<section id="pdf-download" className="py-16 bg-[#444444] border border-[#e6e6e6]">
```

#### 2. **App.tsx - Add Global Scroll Handler**
Add this useEffect to your App.tsx:

```jsx
import React, { useEffect } from 'react';

function App() {
  // Handle anchor links for direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          // Multiple attempts to ensure scrolling works
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 300);
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 800);
        }
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
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ... rest of your components */}
    </div>
  );
}
```

#### 3. **NewsletterSignupSection.tsx - Add Component-Level Scroll Handler**
Add this useEffect to your NewsletterSignupSection component:

```jsx
import React, { useState, useEffect } from 'react';

const NewsletterSignupSection: React.FC = () => {
  // ... existing state

  // Ensure this section scrolls into view when accessed via anchor link
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#pdf-download') {
      // Wait for component to render, then scroll
      setTimeout(() => {
        const element = document.getElementById('pdf-download');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
    }
  }, []);

  // ... rest of component
};
```

#### 4. **index.css - Add Smooth Scroll Behavior**
Add this to your CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Smooth scroll behavior for anchor links */
html {
  scroll-behavior: smooth;
}
```

### 🔧 Alternative: Use the Working Script

If you can't modify the website code, use this JavaScript script:

```html
<script>
// Working script for planning.gotoretreats.com
function redirectToPDFDownloadWorking() {
    window.location.href = "https://planning.gotoretreats.com/#pdf-download";
    
    setTimeout(() => {
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
                }
            }, attempt.delay);
        });
    }, 500);
}
</script>
```

### 🎯 How It Works After Implementation

1. User clicks: `https://planning.gotoretreats.com/#pdf-download`
2. App.tsx detects the hash `#pdf-download`
3. Finds element with `id="pdf-download"`
4. Scrolls smoothly to that section
5. NewsletterSignupSection also has its own scroll handler as backup

### ✅ Result
The link `https://planning.gotoretreats.com/#pdf-download` will now take users directly to the PDF download section instead of the hero section!

### 📝 Quick Implementation Steps
1. Find the PDF download section in your code
2. Add `id="pdf-download"` to the section element
3. Add the useEffect to App.tsx
4. Add the useEffect to NewsletterSignupSection.tsx
5. Add smooth scroll to CSS
6. Test the link: `https://planning.gotoretreats.com/#pdf-download`
