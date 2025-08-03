export function createSkillsSection() {
  const section = document.createElement('section');
  section.className = 'skills';

  section.innerHTML = `
    <h2>Мої навички</h2>
    <div class="skills-grid">
      ${skills.map(skill => `
        <div class="skill-card">
          <div class="card-inner">
            <div class="card-front">
              <img src="${skill.logo}" alt="${skill.name}">
              <h3>${skill.name}</h3>
            </div>
            <div class="card-back">
              <p>${skill.journey}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  document.body.appendChild(section);

  // Flip on click
  const cards = section.querySelectorAll('.skill-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}

const skills = [
  {
    name: 'HTML & CSS',
    logo: 'logos/html-css.png',
    journey: 'Починав з верстки простих сторінок, зараз впевнено працюю з адаптивністю та сучасними підходами (Flexbox, Grid).',
  },
  {
    name: 'JavaScript',
    logo: 'logos/js.png',
    journey: 'З перших кроків у DOM до роботи з сучасним ES6+ синтаксисом та інтеграцією API.',
  },
  {
    name: 'Laravel',
    logo: 'logos/laravel.png',
    journey: 'Від Hello World до створення повноцінних CRUD-систем, взаємодії з БД та middleware.',
  },
  {
    name: 'React',
    logo: 'logos/react.png',
    journey: 'Розпочав із компонування простих UI, зараз працюю з хуками, стейт-менеджментом і кастомною логікою.',
  },
  {
    name: 'Three.js',
    logo: 'logos/threejs.png',
    journey: 'Знайомство з основами сцени, камери і mesh до створення інтерактивних 3D-ефектів для сайтів.',
  },
];
