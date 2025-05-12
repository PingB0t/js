window.addEventListener('DOMContentLoaded', function () {
  const msg = document.getElementById('iframe-status');
  if (window.top === window.self) {
    msg.textContent = "Not in an iframe";
  } else {
    msg.textContent = "Running inside an iframe";
  }
});
