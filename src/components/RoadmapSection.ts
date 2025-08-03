export function createRoadmapSection() {
  const section = document.createElement('section');
  section.className = 'roadmap';

  section.innerHTML = `
    <h2>Навчальний роадмеп</h2>
    <div class="roadmap-grid">
      ${roadmapCards.map(card => `
        <div class="roadmap-card">
          <div class="card-inner">
            <div class="card-front">
              <h3>${card.title}</h3>
              <ul>
                ${card.steps.map(step => `<li>${step}</li>`).join('')}
              </ul>
            </div>
            <div class="card-back">
              <h4>Проєкти</h4>
              <ul>
                ${card.projects.map(project => `<li>${project}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  document.body.appendChild(section);

  const cards = section.querySelectorAll('.roadmap-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}

const roadmapCards = [
  {
    title: 'Three.js',
    steps: [
      'Етап 1 — Базова механіка (Foundation)',
      'Етап 2 — Інтерактивність та анімації',
      'Етап 3 — Рендеринг та ефекти',
      'Етап 4 — Оптимізація та продуктивність',
      'Етап 5 — Розширені шейдери та кастомні ефекти',
      'Додатково: Моніторинг FPS, аналіз проєктів Bruno Simon, GitHub.'
    ],
    projects: [
      'Проєкт 1: Крутящийся куб',
      'Проєкт 2: 3D-Текст',
      'Проєкт 3: Модель із GLTF',
      'Проєкт 4: Drag & Drop 3D-об\'єкта',
      'Проєкт 5: Кастомна анімація',
      'Проєкт 6: Інтерактивний HUD у 3D'
    ]
  },
  {
    title: 'Python',
    steps: [
      'Основи синтаксису та структура мови',
      'Робота з файлами, обробка даних',
      'ООП та модулі',
      'Розробка CLI-інструментів',
      'Автоматизація (Selenium, requests)',
      'Асинхронність (asyncio)'
    ],
    projects: [
      'Скрипт для автоматизації завантаження даних',
      'Парсер сайту з збереженням у CSV',
      'CLI-утиліта для керування файлами',
      'Бот для Telegram',
      'Проєкт з використанням API (OpenWeatherMap)'
    ]
  },
  {
    title: 'Go (Golang)',
    steps: [
      'Основи синтаксису, структура програми',
      'Горутини та канали',
      'Робота з файлами та мережею',
      'Створення простого web-сервера',
      'Використання Go Modules',
      'Тестування та бенчмаркінг'
    ],
    projects: [
      'Простий TCP сервер/клієнт',
      'Скорочувач посилань (URL Shortener)',
      'CLI-утиліта для конвертації файлів',
      'Міні REST API сервіс',
      'Моніторинг сервісів (ping + HTTP checker)'
    ]
  }
];
