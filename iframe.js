/**
 * Detects if the current page is running inside an iframe
 * @returns {boolean} true if in iframe, false otherwise
 */
function isInIframe() {
  try {
    // If window.self !== window.top, then we're in an iframe
    return window.self !== window.top;
  } catch (e) {
    // If we get a security error when accessing window.top,
    // we're definitely in a cross-origin iframe
    return true;
  }
}

// Example usage:
if (isInIframe()) {
  console.log("This page is running inside an iframe");
} else {
  console.log("This page is not running inside an iframe");
}

// You can also use this for conditional behavior
document.addEventListener("DOMContentLoaded", function() {
  if (isInIframe()) {
    // Add iframe-specific behavior
    document.body.classList.add("in-iframe");
    
    // Example: Maybe you want to hide certain elements
    const elementsToHide = document.querySelectorAll(".hide-in-iframe");
    elementsToHide.forEach(el => el.style.display = "none");
  }
});
