function setAriaCurrentForHashNav() {
  const nav = document.querySelector("[data-hash-nav]");
  if (!nav) return;

  const links = Array.from(nav.querySelectorAll("a[href^='#']"));
  if (!links.length) return;

  const sectionIds = links
    .map((a) => decodeURIComponent(a.getAttribute("href") || "").replace("#", ""))
    .filter(Boolean);

  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
      if (!visible) return;

      for (const link of links) link.removeAttribute("aria-current");
      const activeLink = nav.querySelector(`a[href="#${visible.target.id}"]`);
      if (activeLink) activeLink.setAttribute("aria-current", "true");
    },
    { rootMargin: "-18% 0px -72% 0px", threshold: [0.01, 0.12, 0.25, 0.6] }
  );

  for (const section of sections) observer.observe(section);
}

function setupLanguageSwitch() {
  const btn = document.querySelector("[data-lang-switch]");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target-href");
    if (!target) return;

    try {
      const preferred = btn.getAttribute("data-preferred-lang");
      if (preferred) localStorage.setItem("preferredLang", preferred);
    } catch {
      // ignore
    }

    const currentHash = window.location.hash || "";
    window.location.href = target + currentHash;
  });

  try {
    const preferred = localStorage.getItem("preferredLang");
    const current = document.documentElement.getAttribute("lang") || "";
    const redirectTo = document.documentElement.getAttribute("data-redirect-when-preferred");
    if (preferred && current && redirectTo && preferred !== current) {
      const currentHash = window.location.hash || "";
      window.location.replace(redirectTo + currentHash);
    }
  } catch {
    // ignore
  }
}

function setupYear() {
  const el = document.querySelector("[data-year]");
  if (!el) return;
  el.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  setAriaCurrentForHashNav();
  setupLanguageSwitch();
  setupYear();
});
