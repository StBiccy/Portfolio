// Function to handle smooth scrolling with offset
function smoothScrollToSection(targetID) {
  const targetSection = document.querySelector(targetID); // Get the target section
  const navHeight = document.querySelector("nav").offsetHeight; // Get nav bar height

  if (targetSection) {
    // Smooth scroll to the target section, with the nav bar offset
    window.scrollTo({
      top: targetSection.offsetTop - navHeight,
      behavior: "smooth",
    });
  }
}

// Add event listener to all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default scroll behavior

    const targetID = this.getAttribute("href"); // Get the section ID
    smoothScrollToSection(targetID); // Scroll to section with offset
  });
});

// Check if the page loads with a hash in the URL (for external links)
document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash; // Get the URL hash (e.g., #about-me)

  if (hash) {
    // Use a timeout to delay the scroll action
    setTimeout(() => {
      smoothScrollToSection(hash); // Scroll to the section with offset
    }, 100); // Adjust the timeout duration if needed
  }
});
