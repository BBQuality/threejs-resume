export function createContactForm() {
  const section = document.createElement('section');
  section.className = 'contact';
  section.innerHTML = `
    <h2>Зв'язатися зі мною</h2>
    <form id="contact-form" action="https://formspree.io/f/mqaldjpe" method="POST" enctype="multipart/form-data">
      <label>
        Ваш Email:
        <input type="email" name="email" required>
      </label>
      <label>
        Ваше повідомлення:
        <textarea name="message" required></textarea>
      </label>
      <label>
        Додати файл:
        <input type="file" name="upload">
      </label>
      <button type="submit">Відправити</button>
      <p id="form-status"></p>
    </form>
  `;

  document.body.appendChild(section);

  const form = section.querySelector('#contact-form') as HTMLFormElement;
  const status = section.querySelector('#form-status') as HTMLElement;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = '✅ Дякую! Ваше повідомлення відправлено.';
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          status.textContent = result.errors.map((error: any) => error.message).join(', ');
        } else {
          status.textContent = '❌ Виникла помилка. Спробуйте ще раз.';
        }
      }
    } catch (error) {
      status.textContent = '❌ Проблема з мережею. Спробуйте пізніше.';
    }
  });
}
