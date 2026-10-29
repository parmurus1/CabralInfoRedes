document.documentElement.classList.add('js');

(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canObserve = 'IntersectionObserver' in window;
  const motion = !reduce && canObserve;
  if (motion) document.documentElement.classList.add('motion');

  // SVG fans are SMIL: hold them still for reduced motion, and while off screen.
  const svgs = (el) => (el.tagName === 'svg' ? [el] : [...el.querySelectorAll('svg')]);
  if (reduce) document.querySelectorAll('svg').forEach((s) => s.pauseAnimations && s.pauseAnimations());

  const fig = document.getElementById('fig1');
  if (fig) {
    const triggers = document.querySelectorAll('.callouts a[data-part], .legend a[data-part]');

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

    const toggle = fig.querySelector('.fig-toggle');
    const label = toggle.querySelector('.fig-toggle-label');
    toggle.addEventListener('click', () => {
      const assembled = fig.classList.toggle('is-assembled');
      toggle.setAttribute('aria-pressed', String(assembled));
      label.textContent = assembled ? 'Desmontar' : 'Montar';
      setActive('');
    });
  }

  if (motion) {
    // Sections drift in as they enter; detail sheets arrive broken and get fixed.
    const fix = (el, delay) => setTimeout(() => el.classList.add('is-fixed'), delay);
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        if (e.target.classList.contains('detail')) fix(e.target, 1100 + (Number(e.target.style.getPropertyValue('--i')) || 0) * 160);
        reveal.unobserve(e.target);
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal]').forEach((el) => reveal.observe(el));

    // Hovering a repaired sheet breaks it again for a moment, then repairs it.
    document.querySelectorAll('.detail').forEach((d) => {
      let t;
      d.addEventListener('mouseenter', () => {
        if (!d.classList.contains('is-fixed')) return;
        d.classList.remove('is-fixed');
        clearTimeout(t);
        t = setTimeout(() => d.classList.add('is-fixed'), 900);
      });
    });

    // Loops only run while their section is on screen.
    const loops = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        e.target.classList.toggle('is-visible', e.isIntersecting);
        svgs(e.target).forEach((s) => s.pauseAnimations && (e.isIntersecting ? s.unpauseAnimations() : s.pauseAnimations()));
      });
    });
    document.querySelectorAll('[data-loop]').forEach((el) => loops.observe(el));
  } else {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    document.querySelectorAll('.detail').forEach((el) => el.classList.add('is-fixed'));
  }

  // Floating WhatsApp bar on phones, once the hero button has scrolled away.
  const bar = document.getElementById('wa-bar');
  const heroCta = document.getElementById('hero-cta');
  const close = document.getElementById('contato');
  if (bar && heroCta && canObserve) {
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
