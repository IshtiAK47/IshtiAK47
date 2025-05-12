// Fade-in animation for projects
document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');
  projects.forEach((project, index) => {
    setTimeout(() => {
      project.style.opacity = '1';
    }, 200 * index);
  });
});