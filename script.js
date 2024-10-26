document.addEventListener("DOMContentLoaded", function () {
  console.log("דף קורות החיים נטען בהצלחה!");

  const modal = document.getElementById("contact-modal");
  const btn = document.getElementById("contact-btn");
  const span = document.getElementsByClassName("close")[0];
  const form = document.getElementById("contact-form");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const themeToggle = document.getElementById("theme-toggle");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  form.onsubmit = function (e) {
    e.preventDefault();
    alert("הטופס נשלח בהצלחה!");
    modal.style.display = "none";
    form.reset();
  };

  menuToggle.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    navMenu.classList.toggle("active");
  });

  // שינוי ערכת צבעים
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    const icon = this.querySelector("i");
    if (document.body.classList.contains("dark-theme")) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });

  // טעינה מושהית של תמונות
  const lazyImages = document.querySelectorAll("img.lazy-load");
  const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy-load");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => lazyLoadObserver.observe(img));

  // אנימציות גלילה
  const animatedElements = document.querySelectorAll(".project-card, h2, .job");
  const animateObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((el) => animateObserver.observe(el));

  // אנימציה לכותרות הסעיפים
  const sectionHeaders = document.querySelectorAll("h2");
  sectionHeaders.forEach((header) => {
    header.style.opacity = "0";
    header.style.transform = "translateY(20px)";
    header.style.transition = "opacity 0.5s, transform 0.5s";
  });

  function checkScroll() {
    sectionHeaders.forEach((header) => {
      const headerTop = header.getBoundingClientRect().top;
      if (headerTop < window.innerHeight) {
        header.style.opacity = "1";
        header.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // בדיקה ראשונית בטעינת הדף

  // חלקה של הגלילה לקישורי הניווט
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
      if (window.innerWidth <= 768) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  });

  // אנימציה לרשימת הכישורים
  const skillsList = document.querySelector(".skills-list");
  const skillItems = skillsList.querySelectorAll("li");

  skillItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-20px)";
    item.style.transition = `opacity 0.5s, transform 0.5s`;
    item.style.transitionDelay = `${index * 0.1}s`;
  });

  function checkSkillsScroll() {
    const skillsListTop = skillsList.getBoundingClientRect().top;
    if (skillsListTop < window.innerHeight) {
      skillItems.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
      });
    }
  }

  window.addEventListener("scroll", checkSkillsScroll);
  checkSkillsScroll(); // בדיקה ראשונית בטעינת הדף
});
