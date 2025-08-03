import { heroSections } from './HeroContent';

export function createHeroSection() {
  const container = document.createElement('section');
  container.className = 'hero-container';

  container.innerHTML = `
    <div class="hero-left">
      
      <img src="../../public/devFoto.webp" alt="Фото розробника Ялі Богдана">
      <h1>Ялі Богдан</h1>
    </div>
    <div class="hero-right">
      <div class="hero-content">
        <h2>${heroSections[0].title}</h2>
        <div class="hero-text">${heroSections[0].content}</div>
        <div class="hero-nav">
          <button id="prev-section">◀</button>
          <button id="next-section">▶</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(container);

  let currentIndex = 0;

  const updateContent = () => {
    const title = container.querySelector('.hero-content h2') as HTMLElement;
    const text = container.querySelector('.hero-text') as HTMLElement;
    title.innerText = heroSections[currentIndex].title;
    text.innerHTML = heroSections[currentIndex].content;
  };

  container.querySelector('#prev-section')?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + heroSections.length) % heroSections.length;
    updateContent();
  });

  container.querySelector('#next-section')?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % heroSections.length;
    updateContent();
  });
}
