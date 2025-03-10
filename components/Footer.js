// Footer component for Balatro Calculator
function createFooter() {
  return `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <a href="#calculator">Calculator</a>
          <a href="#features">Features</a>
          <a href="#guide">How to Use</a>
          <a href="balatro-calculator.html">Full Version</a>
        </div>
        <div class="footer-social">
          <a href="#" class="social-icon" title="Twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 4.01C21 4.5 20.02 4.69 19 5C18.36 4.32 17.52 3.89 16.62 3.79C15.72 3.69 14.8 3.95 14.08 4.51C13.36 5.07 12.87 5.9 12.67 6.83C12.53 7.64 12.58 8.48 12.82 9.26C10.65 9.17 8.58 8.55 6.69 7.44C5.41 6.59 4.34 5.43 3.58 4.05C3.06 5.06 2.98 6.24 3.35 7.31C3.72 8.38 4.5 9.27 5.5 9.77C4.76 9.74 4.05 9.52 3.4 9.13V9.17C3.41 10.2 3.78 11.2 4.43 11.97C5.09 12.75 6 13.26 7 13.47C6.35 13.65 5.67 13.7 5 13.63C5.3 14.53 5.87 15.32 6.62 15.9C7.37 16.48 8.28 16.82 9.2 16.89C7.54 18.2 5.5 18.91 3.4 18.89C3 18.89 2.6 18.86 2.21 18.81C4.34 20.21 6.82 20.97 9.34 20.96C16.73 20.96 20.77 14.87 20.77 9.6C20.77 9.4 20.77 9.2 20.76 9C21.75 8.29 22.62 7.4 23.33 6.38C22.42 6.79 21.44 7.04 20.45 7.13C21.5 6.5 22.28 5.52 22.65 4.37L22 4.01Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" class="social-icon" title="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" class="social-icon" title="Discord">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.89 4.21 14.76 4.48 14.67 4.7C13.1 4.47 11.53 4.47 10 4.7C9.9 4.48 9.77 4.21 9.67 4C8.16 4.26 6.73 4.71 5.39 5.33C3.21 8.58 2.7 11.74 2.95 14.86C4.66 16.1 6.33 16.92 7.96 17.48C8.36 16.95 8.71 16.37 9 15.77C8.3 15.53 7.63 15.22 7 14.86C7.2 14.71 7.33 14.57 7.45 14.43C10.76 15.86 14.39 15.86 17.67 14.43C17.8 14.57 17.93 14.71 18.07 14.86C17.45 15.22 16.79 15.53 16.09 15.77C16.39 16.37 16.73 16.95 17.14 17.48C18.77 16.92 20.44 16.1 22.15 14.86C22.44 11.26 21.58 8.13 19.27 5.33ZM8.57 13C7.64 13 6.86 12.11 6.86 11C6.86 9.9 7.63 9 8.57 9C9.5 9 10.27 9.89 10.26 11C10.25 12.11 9.5 13 8.57 13ZM15.43 13C14.5 13 13.73 12.11 13.73 11C13.73 9.9 14.49 9 15.43 9C16.38 9 17.14 9.89 17.14 11C17.14 12.11 16.36 13 15.43 13Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="footer-copyright">
        <p>© 2025 Balatro Calculator | Not affiliated with the official Balatro game</p>
        <p>Original calculator by: @EFHIII</p>
      </div>
      
      <!-- Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-S7M3VNSHKC"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-S7M3VNSHKC');
      </script>
      
      <!-- Plausible Analytics -->
      <script defer data-domain="balatro-calculator.com" src="https://bibleversegenerator.net/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"></script>
      <script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
    </footer>
  `;
}
