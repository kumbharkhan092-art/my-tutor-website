/* ==========================================================================
   SHARED FOOTER
   Edit the links below (LinkedIn, Facebook, phone/WhatsApp if you want one)
   and every page updates automatically — you don't need to edit each page.
   ========================================================================== */

var SOCIAL_LINKS = {
  gmail: "mailto:hussainbuxkunbhar444@gmail.com",
  linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE", // <-- replace with your real profile URL
  facebook: "https://www.facebook.com/YOUR-FACEBOOK-PAGE",       // <-- replace with your real profile/page URL
};

document.addEventListener("DOMContentLoaded", function () {
  var mount = document.getElementById("site-footer");
  if (!mount) return;

  mount.innerHTML =
    '<div class="container footer-grid">' +
      '<div>' +
        '<h4>PrepCrest Academy</h4>' +
        '<p>Personal tutoring and online assessment by Hussain Bux Kunbhar. Structured lessons, honest testing, real progress.</p>' +
        '<div class="social-row">' +
          '<a href="' + SOCIAL_LINKS.gmail + '" aria-label="Email" title="Email">' + ICONS.gmail + '</a>' +
          '<a href="' + SOCIAL_LINKS.linkedin + '" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener">' + ICONS.linkedin + '</a>' +
          '<a href="' + SOCIAL_LINKS.facebook + '" aria-label="Facebook" title="Facebook" target="_blank" rel="noopener">' + ICONS.facebook + '</a>' +
        '</div>' +
      '</div>' +
      '<div>' +
        '<h4>Site</h4>' +
        '<ul class="footer-links">' +
          '<li><a href="index.html">Home</a></li>' +
          '<li><a href="about.html">About</a></li>' +
          '<li><a href="material.html">Educational Material</a></li>' +
          '<li><a href="test.html">Online Test</a></li>' +
          '<li><a href="contact.html">Contact</a></li>' +
        '</ul>' +
      '</div>' +
      '<div>' +
        '<h4>Contact</h4>' +
        '<p><a href="mailto:hussainbuxkunbhar444@gmail.com">hussainbuxkunbhar444@gmail.com</a></p>' +
      '</div>' +
    '</div>' +
    '<div class="container footer-bottom">' +
      '<span>&copy; <span id="year"></span> PrepCrest Academy \u2014 Hussain Bux Kunbhar</span>' +
      '<span>Built for focused learning.</span>' +
    '</div>';

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

var ICONS = {
  gmail:
    '<svg viewBox="0 0 24 24"><path d="M12 13.065 1.5 6.75V18a1.5 1.5 0 0 0 1.5 1.5h18A1.5 1.5 0 0 0 22.5 18V6.75L12 13.065ZM22.5 5.25a1.5 1.5 0 0 0-1.5-1.5H3a1.5 1.5 0 0 0-1.5 1.5v.51L12 12.06l10.5-6.3v-.51Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.9 8.65 23 11 23 14.3V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4V9Z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24"><path d="M13.5 21v-8.15h2.74l.41-3.18h-3.15V7.66c0-.92.26-1.55 1.58-1.55h1.68V3.25C16.46 3.17 15.44 3.1 14.25 3.1c-2.48 0-4.18 1.51-4.18 4.29v2.28H7.32v3.18h2.75V21h3.43Z"/></svg>',
};
