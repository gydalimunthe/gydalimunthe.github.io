(function () {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.toggle("show-menu"));
  }

  // Close menu on link click (mobile)
  document.querySelectorAll(".nav__link").forEach((a) => {
    a.addEventListener("click", () => menu && menu.classList.remove("show-menu"));
  });

  // Active link on scroll
  const sections = [...document.querySelectorAll("section[id]")];
  const links = [...document.querySelectorAll(".nav__link")];
  function onScroll() {
    const y = window.scrollY + 120;
    let current = sections[0]?.id;
    for (const s of sections) {
      const top = s.offsetTop;
      const height = s.offsetHeight;
      if (y >= top && y < top + height) current = s.id;
    }
    links.forEach((l) => {
      const href = l.getAttribute("href")?.replace("#", "");
      l.classList.toggle("active-link", href === current);
    });

    const st = document.getElementById("scroll-top");
    if (st) st.classList.toggle("show-scroll", window.scrollY > 300);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
