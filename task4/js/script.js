// Sidebar navigation and section switching
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // Remove active class from all sidebar links
    document.querySelectorAll(".sidebar a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    // Remove active section and background from all
    document.querySelectorAll(".section").forEach(section => {
      section.classList.remove("active");
      section.classList.remove("active-section-bg");
    });

    // Add active to target section
    const target = document.querySelector(link.getAttribute("href"));
    target.classList.add("active");
    target.classList.add("active-section-bg");
  });
});

// Progress bar animations on page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".progress").forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });

  // Contact form popup on submit
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thanks, your message has been sent successfully!");
      contactForm.reset();
    });
  }
});

