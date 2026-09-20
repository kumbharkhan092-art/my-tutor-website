/* ==========================================================================
   Shared site behaviour — runs on every page.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      var expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Fallback for the tutor photo (and any lesson photo) if the file path
  // hasn't been filled in yet or the image fails to load — shows a clean
  // initials placeholder instead of a broken-image icon.
  document.querySelectorAll("img[data-fallback-initials]").forEach(function (img) {
    img.addEventListener("error", function () {
      var initials = img.getAttribute("data-fallback-initials") || "?";
      var holder = document.createElement("div");
      holder.className = img.className + " image-fallback";
      holder.style.cssText =
        "display:flex;align-items:center;justify-content:center;" +
        "background:#EDE7D8;color:#14213D;font-family:'Fraunces',serif;" +
        "font-size:2.4rem;font-weight:600;height:100%;width:100%;";
      holder.textContent = initials;
      img.replaceWith(holder);
    }, { once: true });
  });
});
