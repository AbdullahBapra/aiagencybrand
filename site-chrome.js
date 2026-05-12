/* Auto-injects shared nav + footer on any page that includes this script.
 * Usage: place <div id="site-nav"></div> at top and <div id="site-footer"></div> at bottom.
 * Set <body data-page="solutions"> (or any id) to mark active nav link.
 */
(function(){
  const AGENCY = (window.__TWEAKS__ && window.__TWEAKS__.agencyName) || 'agenticbuilders';
  const TAG = (window.__TWEAKS__ && window.__TWEAKS__.tagline) || 'AI operational systems for modern businesses';
  const page = document.body.dataset.page || '';

  const LINKS = [
    { id: 'solutions', label: 'Solutions', href: 'Solutions.html' },
    { id: 'services',  label: 'Services',  href: 'Services.html' },
    { id: 'work',      label: 'Results',   href: 'Work.html' },
    { id: 'pricing',   label: 'Pricing',   href: 'Pricing.html' },
    { id: 'insights',  label: 'Insights',  href: 'Insights.html' },
    { id: 'about',     label: 'About',     href: 'About.html' },
  ];

  const navMount = document.getElementById('site-nav');
  if (navMount) {
    navMount.outerHTML = `
      <nav class="topbar">
        <div class="inner">
          <a class="logo" href="Agency.html">
            <span class="logo-mark"></span>
            <span>${AGENCY}</span>
            <span style="color:var(--fg-3); font-weight: 400">/ studio</span>
          </a>
          <div class="nav-links">
            ${LINKS.map(l => `<a class="${page === l.id ? 'is-active' : ''}" href="${l.href}">${l.label}</a>`).join('')}
          </div>
          <div style="display:flex; align-items:center; gap: 14px">
            <span class="status"><span class="dot"></span> taking 2 clients · Q3</span>
            <a class="nav-cta" href="FreeAudit.html">Free audit</a>
          </div>
        </div>
      </nav>`;
  }

  const footMount = document.getElementById('site-footer');
  if (footMount) {
    footMount.outerHTML = `
      <footer class="footer">
        <div class="wrap">
          <div class="foot-top">
            <div class="foot-brand">
              <span class="logo-mark big"></span>
              <div>
                <div class="foot-name serif">${AGENCY}</div>
                <div class="foot-tag mono">// ${TAG}</div>
              </div>
            </div>
            <div class="foot-cols">
              <div>
                <div class="foot-h mono">// services</div>
                <a href="Services.html#voice">AI Voice Agents</a>
                <a href="Services.html#automation">Automation Systems</a>
                <a href="Services.html#agents">Custom AI Agents</a>
                <a href="Services.html#rag">RAG Systems</a>
                <a href="Services.html#growth">AI Growth Systems</a>
                <a href="Services.html#bi">BI &amp; Reporting</a>
              </div>
              <div>
                <div class="foot-h mono">// solutions</div>
                <a href="Solutions.html#operations">Operations Automation</a>
                <a href="Solutions.html#sales">Sales Automation</a>
                <a href="Solutions.html#support">Support Automation</a>
                <a href="Solutions.html#onboarding">Onboarding</a>
                <a href="Solutions.html#ecommerce">E-commerce</a>
                <a href="Solutions.html#content">Content Automation</a>
              </div>
              <div>
                <div class="foot-h mono">// studio</div>
                <a href="About.html">About</a>
                <a href="Work.html">Results</a>
                <a href="Pricing.html">Pricing</a>
                <a href="Insights.html">Insights</a>
                <a href="Contact.html">Contact</a>
                <a href="FreeAudit.html">Free audit</a>
              </div>
            </div>
          </div>
          <div class="foot-bigword serif">${AGENCY}</div>
          <div class="foot-bottom mono">
            <span>© 2026 ${AGENCY} studio</span>
            <span>incorporated in delaware · operating remote-first</span>
            <span>v3.2 · last shipped 4h ago</span>
          </div>
        </div>
      </footer>`;
  }

  // Page-enter on load
  document.body.classList.add('page-enter');

  // Reveal-on-scroll for .reveal and .reveal-stagger
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    const watch = () => {
      document.querySelectorAll('.reveal:not([data-rev]), .reveal-stagger:not([data-rev])').forEach(el => {
        el.setAttribute('data-rev', '1');
        io.observe(el);
      });
    };
    watch();
    // catch any nodes injected after load
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });
  } else {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => el.classList.add('in'));
  }

  // Smooth anchor scroll
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
