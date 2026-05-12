/* Scroll reveal — apply to elements with .reveal class */
(function setupReveal(){
  if (window.__revealSetup) return;
  window.__revealSetup = true;

  const css = `
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1); transition-delay: var(--rd, 0ms); }
  .reveal.in { opacity: 1; transform: none; }
  .reveal-stagger > * { opacity: 0; transform: translateY(18px); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); }
  .reveal-stagger.in > * { opacity: 1; transform: none; }
  .reveal-stagger.in > *:nth-child(1) { transition-delay: 0ms; }
  .reveal-stagger.in > *:nth-child(2) { transition-delay: 80ms; }
  .reveal-stagger.in > *:nth-child(3) { transition-delay: 160ms; }
  .reveal-stagger.in > *:nth-child(4) { transition-delay: 240ms; }
  .reveal-stagger.in > *:nth-child(5) { transition-delay: 320ms; }
  .reveal-stagger.in > *:nth-child(6) { transition-delay: 400ms; }
  .reveal-stagger.in > *:nth-child(7) { transition-delay: 480ms; }
  .reveal-stagger.in > *:nth-child(8) { transition-delay: 560ms; }

  /* page enter */
  .page-enter { animation: pageEnter .9s cubic-bezier(.2,.7,.2,1) both; }
  @keyframes pageEnter { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

  /* link underline */
  .underline-anim { position: relative; }
  .underline-anim::after {
    content: ""; position: absolute; left: 0; bottom: -3px; height: 1px; width: 100%;
    background: currentColor; transform: scaleX(0); transform-origin: right;
    transition: transform .5s cubic-bezier(.2,.7,.2,1);
  }
  .underline-anim:hover::after { transform: scaleX(1); transform-origin: left; }

  /* scroll-driven word lift used in section titles */
  .lift-word { display: inline-block; transform: translateY(120%); transition: transform .9s cubic-bezier(.2,.7,.2,1); transition-delay: var(--rd, 0ms); }
  .reveal.in .lift-word, .in .lift-word { transform: none; }
  .lift-mask { display: inline-block; overflow: hidden; vertical-align: bottom; }
  `;
  const s = document.createElement('style'); s.id='reveal-css'; s.textContent=css;
  document.head.appendChild(s);

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  // mutation observer to catch react-rendered nodes
  const watch = () => {
    document.querySelectorAll('.reveal:not([data-rev]), .reveal-stagger:not([data-rev])').forEach(el => {
      el.setAttribute('data-rev', '1');
      io.observe(el);
    });
  };
  watch();
  const mo = new MutationObserver(watch);
  mo.observe(document.body, { childList: true, subtree: true });

  // smooth anchor scroll
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const t = document.getElementById(id);
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
