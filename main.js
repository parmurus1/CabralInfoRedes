document.documentElement.classList.add('js');

(() => {
  const fig = document.getElementById('fig1');
  if (fig) {
    const triggers = document.querySelectorAll('.callouts a[data-part], .legend a[data-part]');
    const rows = document.querySelectorAll('.part[data-part]');

    const setActive = (part) => {
      fig.dataset.active = part || '';
      triggers.forEach((t) => t.classList.toggle('is-active', !!part && t.dataset.part === part));
    };

    triggers.forEach((t) => {
      t.addEventListener('mouseenter', () => setActive(t.dataset.part));
      t.addEventListener('focus', () => setActive(t.dataset.part));
      t.addEventListener('mouseleave', () => setActive(''));
      t.addEventListener('blur', () => setActive(''));
    });

    // Hovering a row in the service list lights up its part in Fig. 1.
    rows.forEach((row) => {
      row.addEventListener('mouseenter', () => setActive(row.dataset.part));
      row.addEventListener('mouseleave', () => setActive(''));
    });

    const toggle = fig.querySelector('.fig-toggle');
    const label = toggle.querySelector('.fig-toggle-label');
    toggle.addEventListener('click', () => {
      const assembled = fig.classList.toggle('is-assembled');
      toggle.setAttribute('aria-pressed', String(assembled));
      label.textContent = assembled ? 'Desmontar' : 'Montar';
      setActive('');
    });
  }

  // Floating WhatsApp bar on phones, once the hero button has scrolled away.
  const bar = document.getElementById('wa-bar');
  const heroCta = document.getElementById('hero-cta');
  const close = document.getElementById('contato');
  if (bar && heroCta && 'IntersectionObserver' in window) {
    let pastHero = false;
    let atClose = false;
    const update = () => {
      const show = pastHero && !atClose;
      bar.classList.toggle('is-visible', show);
      bar.setAttribute('aria-hidden', String(!show));
      bar.tabIndex = show ? 0 : -1;
    };
    new IntersectionObserver(([e]) => {
      pastHero = !e.isIntersecting && e.boundingClientRect.top < 0;
      update();
    }).observe(heroCta);
    if (close) {
      new IntersectionObserver(([e]) => { atClose = e.isIntersecting; update(); }).observe(close);
    }
  }

  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
