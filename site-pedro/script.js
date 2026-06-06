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
    return window.matchMedia("(max-width: 768px)").matches;
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
    lucide.createIcons();
  });

  window.addEventListener("resize", () => {
    logoParallax();
    heroParallax();
  });
