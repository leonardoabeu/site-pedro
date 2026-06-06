/* ============================= */
/* ANIMAÇÃO AO ROLAR */
/* ============================= */
function revealOnScroll() {
    document.querySelectorAll(".reveal").forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  function isMobileLayout() {
    return window.matchMedia("(max-width: 1024px)").matches;
  }

  function setupMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (!toggle || !menu) return;

    const setMenuOpen = (isOpen) => {
      menu.classList.toggle("is-open", isOpen);
      toggle.classList.toggle("is-active", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    };

    toggle.addEventListener("click", () => {
      setMenuOpen(!menu.classList.contains("is-open"));
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    window.addEventListener("resize", () => {
      if (!isMobileLayout()) setMenuOpen(false);
    });
  }
  
  /* ============================= */
  /* LOGO GRANDE ACOMPANHA O SCROLL */
  /* ============================= */
  function logoParallax() {
    const logo = document.querySelector(".parallax-logo");
  
    if (!logo) return;

    if (isMobileLayout()) {
      logo.style.transform = "none";
      return;
    }
  
    const scroll = window.scrollY;
  
    /* 🔥 aumenta ou diminui o 0.45 */
    logo.style.transform = `translate3d(0, -${scroll * 0.45}px, 0)`;
  }
  
  /* ============================= */
  /* FUNDO TAMBÉM MEXE */
  /* ============================= */
  function heroParallax() {
    const hero = document.querySelector(".hero");
  
    if (!hero) return;

    if (isMobileLayout()) {
      hero.style.backgroundPosition = "center top";
      return;
    }
  
    const scroll = window.scrollY;
  
    /* 🔥 aumenta ou diminui o 0.15 */
    hero.style.backgroundPosition = `center ${scroll * 0.15}px`;
  }
  
  /* ============================= */
  /* EVENTOS */
  /* ============================= */
  window.addEventListener("scroll", () => {
    revealOnScroll();
    logoParallax();
    heroParallax();
  });
  
  window.addEventListener("load", () => {
    revealOnScroll();
    logoParallax();
    heroParallax();
    setupMobileMenu();
    lucide.createIcons();
  });

  window.addEventListener("resize", () => {
    logoParallax();
    heroParallax();
  });
