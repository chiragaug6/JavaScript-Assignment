// Get the progress bar element
const progressBar = document.querySelector(".progress-bar");

// Function to update the progress bar based on scroll progress
function updateProgressBar() {
  const totalScrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const currentScrollPosition = window.scrollY;
  const scrollProgress = (currentScrollPosition / totalScrollableHeight) * 100;

  progressBar.style.width = `${scrollProgress}%`;
}

// Update the progress bar on scroll
window.addEventListener("scroll", updateProgressBar);
