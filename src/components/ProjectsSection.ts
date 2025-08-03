export function createProjectsSection() {
  const section = document.createElement('section');
  section.className = 'projects';

  section.innerHTML = `
    <h2>Мої проєкти</h2>
    <div class="project-grid">
      ${Array.from({ length: 6 })
        .map(
          (_, i) => `
          <div class="project-card">
            <h3>Проєкт ${i + 1}</h3>
            <p>Короткий опис проєкту ${i + 1}.</p>
          </div>
        `
        )
        .join('')}
    </div>
  `;

  document.body.appendChild(section);

  // Smooth scroll
  const btn = document.getElementById('projects-btn');
  btn?.addEventListener('click', () => {
    section.scrollIntoView({ behavior: 'smooth' });
  });
}
