export function createWorkflowSection() {
  const section = document.createElement('section');
  section.className = 'workflow';

  section.innerHTML = `
    <h2>Мій робочий процес</h2>
    <div class="workflow-steps">
      <div class="workflow-step">
        <div class="circle">1</div>
        <h3>Аналіз задачі</h3>
        <p>Ретельно вивчаю вимоги, ставлю запитання, складаю ТЗ.</p>
      </div>
      <div class="workflow-step">
        <div class="circle">2</div>
        <h3>Прототипування</h3>
        <p>Створюю базовий макет або wireframe для уявлення структури проєкту.</p>
      </div>
      <div class="workflow-step">
        <div class="circle">3</div>
        <h3>Розробка</h3>
        <p>Пишу код, верстаю адаптивні інтерфейси, інтегрую логіку.</p>
      </div>
      <div class="workflow-step">
        <div class="circle">4</div>
        <h3>Тестування</h3>
        <p>Перевіряю працездатність, шукаю баги, оптимізую продуктивність.</p>
      </div>
      <div class="workflow-step">
        <div class="circle">5</div>
        <h3>Реліз</h3>
        <p>Готую проєкт до запуску, налаштовую деплой, підтримую проект після запуску.</p>
      </div>
    </div>
  `;

  document.body.appendChild(section);
}
