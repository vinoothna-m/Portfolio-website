// Simple form simulation (guard the element)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting me! (Fictional response)");
  });
}

// Scroll to Top Button (guard against missing element)
const scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
  const handleScrollForBtn = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  window.addEventListener("scroll", handleScrollForBtn);
  // Initialize visibility
  handleScrollForBtn();

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// === Reveal on Scroll Animation ===
function revealSections() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const revealPoint = 120; // how early the animation should start

  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active'); // remove if you want re-animation on scroll up
    }
  });
}

window.addEventListener('scroll', revealSections);
revealSections();

// === Optional Typing Effect ===
const tagline = document.querySelector('.tagline');
const text = "into Interactive Digital Solutions. ";
let i = 0;
function typeWriter() {
  if (i < text.length) { tagline.innerHTML += text.charAt(i); i++; setTimeout(typeWriter, 100); }
}
typeWriter();

// === View Code behavior ===
document.addEventListener('click', function (e) {
  const el = e.target.closest && e.target.closest('.view-code');
  if (!el) return;
  e.preventDefault();
  // If a preview URL is provided via data-preview, open it. Otherwise open the href.
  const preview = el.getAttribute('data-preview');
  const href = el.getAttribute('href');
  const urlToOpen = preview || href || '#';
  // open in new tab/window
  window.open(urlToOpen, '_blank', 'noopener');
});