export function setupThemeToggle() {
  const btn = document.getElementById('toggle-theme') as HTMLButtonElement;

  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}
