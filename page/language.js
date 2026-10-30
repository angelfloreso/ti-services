(() => {
  'use strict';

  const copy = {
    es: {
      title: 'Norteva | IA local para Chihuahua',
      description: 'Norteva reúne soluciones de IA y servicios de tecnología para Chihuahua.',
      wordmarkLabel: 'Norteva, volver al inicio',
      jumpLabel: 'Ir a una sección',
      jumpLong: 'Ir a sección',
      jumpShort: 'Secciones',
      jumpLinks: ['El catálogo', 'Qué hace Norteva', 'Soluciones', 'Tu integración'],
      start: 'Comenzar',
      darkMode: 'Activar modo nocturno',
      lightMode: 'Activar modo claro',
      heroTitle: 'Inteligencia local para decisiones reales.',
      heroLead: 'Explora iniciativas y servicios digitales creados para comunidades, empresas y organizaciones de Chihuahua.',
      heroAction: 'Enviar Email',
      heroWhatsapp: 'Enviar WhatsApp',
      terms: 'Soluciones locales para Chihuahua.',
      aboutTitle: 'Quiénes Somos',
      aboutLead: 'Desarrolladores experimentados del norte del país, construyendo tecnología útil, cercana y preparada para el mundo real.',
      aboutDescription: 'Somos un equipo de ingeniería y producto con experiencia en soluciones para clientes, automatización de procesos y transformación digital. Conocemos el contexto del norte de México: sus industrias, sus retos operativos y la velocidad con la que las empresas necesitan avanzar. Por eso convertimos ideas complejas en herramientas claras, medibles y sostenibles.',
      missionTitle: 'Misión',
      mission: 'Crear soluciones digitales que resuelvan problemas reales, mejoren la operación de nuestros clientes y generen oportunidades para nuestra región.',
      visionTitle: 'Visión',
      vision: 'Ser el equipo tecnológico de confianza del norte de México para construir organizaciones más inteligentes, competitivas y humanas.',
      valuesTitle: 'Nuestros valores',
      values: ['Cercanía con el cliente', 'Ingeniería con propósito', 'Claridad y honestidad', 'Impacto que permanece'],
      legend: ['Webhook original', 'Evento tipado', 'Reintento pendiente'],
      streamTitle: 'Soluciones de inteligencia artificial',
      streamLead: 'Proyectos de IA para personas, empresas y organizaciones.',
      doesTitle: 'Cuatro capacidades, una plataforma',
      doesLead: 'Lo que Norteva puede hacer por tus sistemas y operaciones.',
      tabs: ['Tipos', 'Reintentos', 'Repetición', 'Fuentes'],
      typed: 'Norteva lee cada payload y asigna un tipo a cada campo.',
      retry: 'Cuando tu endpoint no está disponible, Norteva conserva el evento y vuelve a intentarlo.',
      replay: 'Envía cualquier evento anterior a tu endpoint otra vez, directamente desde el flujo.',
      sources: 'Una dirección por proveedor. Todos los webhooks llegan a un mismo flujo.',
      category03: 'Comercio y servicios',
      category03Badge: 'Soluciones para la vida cotidiana',
      category04: 'Industria, gobierno y turismo',
      category04Badge: 'Infraestructura, servicios y experiencias',
      category01: 'Desarrollo de software a la medida',
      category01Badge: 'Aplicaciones, APIs y automatización',
      category02: 'Infraestructura cloud, DevOps y bases de datos',
      category02Badge: 'Operación, escalabilidad y continuidad',
      category05: 'Integración, ciberseguridad y calidad',
      category05Badge: 'Protección y confiabilidad del software',
      category06: 'Soporte especializado e integraciones B2B',
      category06Badge: 'Continuidad, mantenimiento e integración',
      labels: ['Para', 'Zona', 'Uso', 'Stack']
    },
    en: {
      title: 'Norteva | Local AI for Chihuahua',
      description: 'Norteva brings together AI solutions and technology services for Chihuahua.',
      wordmarkLabel: 'Norteva, back to the top',
      jumpLabel: 'Jump to a section',
      jumpLong: 'Jump to section',
      jumpShort: 'Sections',
      jumpLinks: ['The catalog', 'What Norteva does', 'Solutions', 'Your integration'],
      start: 'Start',
      darkMode: 'Enable dark mode',
      lightMode: 'Enable light mode',
      heroTitle: 'Local intelligence for real decisions.',
      heroLead: 'Explore digital initiatives and services created for Chihuahua communities, businesses, and organizations.',
      heroAction: 'Send Email',
      heroWhatsapp: 'Send WhatsApp',
      terms: 'Local solutions for Chihuahua.',
      aboutTitle: 'About Us',
      aboutLead: 'Experienced developers from northern Mexico, building useful, thoughtful technology for the real world.',
      aboutDescription: 'We are an engineering and product team with experience in customer solutions, process automation, and digital transformation. We understand northern Mexico: its industries, operational challenges, and the pace businesses need to move at. That is why we turn complex ideas into clear, measurable, and sustainable tools.',
      missionTitle: 'Mission',
      mission: 'Create digital solutions that solve real problems, improve our clients’ operations, and generate opportunities for our region.',
      visionTitle: 'Vision',
      vision: 'Become the trusted technology team in northern Mexico for building smarter, more competitive, and more human organizations.',
      valuesTitle: 'Our values',
      values: ['Client closeness', 'Purposeful engineering', 'Clarity and honesty', 'Lasting impact'],
      legend: ['Raw webhook', 'Typed event', 'Retry pending'],
      streamTitle: 'Artificial intelligence solutions',
      streamLead: 'AI projects for people, businesses, and organizations.',
      doesTitle: 'Four capabilities, one platform',
      doesLead: 'What Norteva can do for your systems and operations.',
      tabs: ['Types', 'Retries', 'Replay', 'Sources'],
      typed: 'Norteva reads every payload and assigns a type to every field.',
      retry: 'When your endpoint is unavailable, Norteva holds the event and tries again.',
      replay: 'Send any past event to your endpoint again, directly from the stream.',
      sources: 'One address per provider. Every webhook lands in one stream.',
      category03: 'Commerce and services',
      category03Badge: 'Solutions for everyday life',
      category04: 'Industry, government, and tourism',
      category04Badge: 'Infrastructure, services, and experiences',
      category01: 'Custom software development',
      category01Badge: 'Applications, APIs, and automation',
      category02: 'Cloud infrastructure, DevOps, and databases',
      category02Badge: 'Operations, scalability, and continuity',
      category05: 'Integration, cybersecurity, and quality',
      category05Badge: 'Protection and software reliability',
      category06: 'Specialized support and B2B integrations',
      category06Badge: 'Continuity, maintenance, and integration',
      labels: ['For', 'Location', 'Use', 'Stack']
    }
  };

  const text = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };
  const attr = (selector, name, value) => {
    const node = document.querySelector(selector);
    if (node) node.setAttribute(name, value);
  };

  function renderAboutSection(t) {
    const section = document.getElementById('does');
    if (!section) return;
    section.innerHTML = `<div class="container about">
      <div class="about__intro">
        <p class="project-category__eyebrow">Norteva</p>
        <h2 id="s1">${t.aboutTitle}</h2>
        <p class="about__lead">${t.aboutLead}</p>
        <p class="about__description">${t.aboutDescription}</p>
      </div>
      <div class="about__principles">
        <article class="about__principle"><span class="about__index">01</span><h3>${t.missionTitle}</h3><p>${t.mission}</p></article>
        <article class="about__principle"><span class="about__index">02</span><h3>${t.visionTitle}</h3><p>${t.vision}</p></article>
        <div class="about__values"><h3>${t.valuesTitle}</h3><ul>${t.values.map((value) => `<li>${value}</li>`).join('')}</ul></div>
      </div>
    </div>`;
  }

  function applyLanguage(language) {
    const t = copy[language];
    renderAboutSection(t);
    document.documentElement.lang = language === 'es' ? 'es' : 'en';
    document.title = t.title;
    attr('meta[name="description"]', 'content', t.description);
    attr('.wordmark', 'aria-label', t.wordmarkLabel);
    attr('.jump', 'aria-label', t.jumpLabel);
    text('.jump__long', t.jumpLong);
    text('.jump__short', t.jumpShort);
    text('.key--sm', t.start);
    text('#hero-head', t.heroTitle);
    text('.hero .lead', t.heroLead);
    text('.hero-email', t.heroAction);
    text('.hero-whatsapp', t.heroWhatsapp);
    text('.hero__terms', t.terms);
    document.querySelectorAll('.legend li span').forEach((node, index) => { node.textContent = t.legend[index]; });
    text('#s0', t.streamTitle);
    text('#stream .lead', t.streamLead);
    text('#does > .container > .head .lead', t.doesLead);
    document.querySelectorAll('[role="tab"]:not([aria-controls="p-in"])').forEach((node, index) => { node.lastChild.textContent = t.tabs[index]; });
    text('#p-typed .panel__say', t.typed);
    text('#p-retry .panel__say', t.retry);
    text('#p-replay .panel__say', t.replay);
    text('#p-in .panel__say', t.sources);

    const categories = [
      ['#does .project-category h3', t.category03, t.category03Badge],
      ['#pricing h2', t.category04, t.category04Badge],
      ['#custom-software h2', t.category01, t.category01Badge],
      ['#cloud-devops h2', t.category02, t.category02Badge],
      ['#integration-security h2', t.category05, t.category05Badge],
      ['#b2b-support h2', t.category06, t.category06Badge]
    ];
    categories.forEach(([selector, heading, badge]) => { text(selector, heading); const section = document.querySelector(selector)?.closest('.project-category'); if (section) { const badgeNode = section.querySelector('.project-category__badge'); if (badgeNode) badgeNode.textContent = badge; } });
    document.querySelectorAll('.project-card dl dt').forEach((node, index) => { node.textContent = t.labels[index % 2]; });
    document.querySelectorAll('.language-switcher__button').forEach((button) => { const active = button.dataset.language === language; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
    localStorage.setItem('norteva-language', language);
    updateThemeControl(t);
  }

  function updateThemeControl(t) {
    const button = document.querySelector('[data-theme-toggle]');
    if (!button) return;
    const dark = document.documentElement.classList.contains('dark-mode');
    const label = dark ? t.lightMode : t.darkMode;
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }

  const initial = localStorage.getItem('norteva-language') || 'es';
  document.querySelectorAll('.language-switcher__button').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
  const savedTheme = localStorage.getItem('norteva-theme');
  if (savedTheme === 'dark') document.documentElement.classList.add('dark-mode');
  document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('norteva-theme', dark ? 'dark' : 'light');
    applyLanguage(localStorage.getItem('norteva-language') || initial);
    dispatchEvent(new Event('resize'));
  });
  applyLanguage(initial);
})();
