const root = document.documentElement;
const THEME_KEY = "anlominus-theme";
const toggle = document.querySelector("[data-theme-toggle]");

const userSetting = localStorage.getItem(THEME_KEY);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initial = userSetting || (prefersDark ? "dark" : "light");

root.setAttribute("data-theme", initial);
if (initial === "dark") {
    root.style.colorScheme = "dark";
}

const setTheme = (next) => {
    root.setAttribute("data-theme", next);
    root.style.colorScheme = next;
    localStorage.setItem(THEME_KEY, next);
};

if (toggle) {
    toggle.setAttribute("aria-pressed", initial === "dark");
    toggle.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        toggle.setAttribute("aria-pressed", next === "dark");
        setTheme(next);
    });
}

const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

const scrollSections = document.querySelectorAll("[data-scroll]");
scrollSections.forEach((section) => observer.observe(section));

document.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (!nav) return;
    nav.classList.toggle("nav--scrolled", window.scrollY > 32);
});

const accordions = document.querySelectorAll("[data-accordion]");
accordions.forEach((accordion) => {
    const buttons = accordion.querySelectorAll("[data-accordion-toggle]");
    buttons.forEach((button) => {
        const panel = button.nextElementSibling;
        if (!panel) return;
        button.setAttribute("aria-expanded", "false");
        panel.hidden = true;

        button.addEventListener("click", () => {
            const isExpanded = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", String(!isExpanded));
            panel.hidden = isExpanded;
        });
    });
});
