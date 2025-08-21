
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.fade-in-section');

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: unobserve after it's visible so it doesn't re-animate
                        // observer.unobserve(entry.target); 
                    }
                });
            }, {
                threshold: 0.1 // Trigger when 10% of the element is visible
            });

            sections.forEach(section => {
                observer.observe(section);
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // We calculate the offset to account for the fixed header if there was one.
                        // In this layout, a direct scroll is fine.
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });