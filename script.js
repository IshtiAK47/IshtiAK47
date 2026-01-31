// ========================================
// Mobile Navigation Toggle
// ========================================
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });

  // Close menu when clicking on a link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileToggle.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
      navLinks.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  });
}

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// ========================================
// Smooth Scroll Animation
// ========================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      
      // Animate skill bars when they come into view
      if (entry.target.classList.contains('skills')) {
        animateSkillBars();
      }
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.classList.add('animate-on-scroll');
  observer.observe(section);
});

// ========================================
// Skill Bar Animation
// ========================================
let skillsAnimated = false;

function animateSkillBars() {
  if (skillsAnimated) return;
  skillsAnimated = true;

  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach((bar, index) => {
    const width = bar.style.width;
    bar.style.width = '0';
    
    setTimeout(() => {
      bar.style.width = width;
    }, index * 100);
  });
}

// ========================================
// Contact Form Handling
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    
    // Create mailto link as fallback
    const mailtoLink = `mailto:m64445.0@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`;
    
    // Show confirmation
    if (confirm('Thank you for your message! You will be redirected to your email client to send the message.')) {
      window.location.href = mailtoLink;
      contactForm.reset();
    }
  });
}

// ========================================
// Typing Effect for Hero Section (Optional)
// ========================================
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const titles = [
    'Full-Stack Developer',
    'Mobile App Developer',
    'Web Designer',
    'Problem Solver'
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      heroTitle.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      heroTitle.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      // Pause at end
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  // Start typing effect after page load
  setTimeout(typeEffect, 1000);
}

// ========================================
// Active Navigation Link on Scroll
// ========================================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function highlightNavOnScroll() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${sectionId}`) {
          item.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavOnScroll);

// ========================================
// Parallax Effect for Hero Section
// ========================================
const heroSection = document.querySelector('.hero');
if (heroSection) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    heroSection.style.transform = `translateY(${parallax}px)`;
  });
}

// ========================================
// Project Card Tilt Effect (Optional)
// ========================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ========================================
// Loading Animation
// ========================================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Trigger initial animations
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.classList.add('fade-in');
  }
});

// ========================================
// Cursor Trail Effect (Optional - Advanced)
// ========================================
const createCursorTrail = () => {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll('.cursor-circle');
  
  if (circles.length === 0) return;

  circles.forEach((circle) => {
    circle.x = 0;
    circle.y = 0;
  });

  window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach((circle, index) => {
      circle.style.left = x - 12 + 'px';
      circle.style.top = y - 12 + 'px';
      circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();
};

// Uncomment to enable cursor trail
// createCursorTrail();

// ========================================
// Stats Counter Animation
// ========================================
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsAnimated) {
      statsAnimated = true;
      animateStats();
    }
  });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
  statsObserver.observe(aboutSection);
}

function animateStats() {
  statNumbers.forEach(stat => {
    const target = stat.textContent;
    const isPercentage = target.includes('%');
    const numericValue = parseInt(target);
    
    if (isNaN(numericValue)) return;
    
    let current = 0;
    const increment = numericValue / 50;
    const suffix = isPercentage ? '%' : '+';
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        stat.textContent = numericValue + suffix;
        clearInterval(timer);
      } else {
        stat.textContent = Math.floor(current) + suffix;
      }
    }, 30);
  });
}

// ========================================
// Console Message
// ========================================
console.log('%c👋 Hello there!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cLooking for something? Feel free to reach out!', 'font-size: 14px; color: #94a3b8;');
console.log('%cEmail: m64445.0@gmail.com', 'font-size: 12px; color: #64748b;');
