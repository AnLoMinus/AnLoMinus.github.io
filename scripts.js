document.querySelectorAll(".social-icon").forEach((icon) => {
  // קוד קיים...

  // הוספת טולטיפ
  const tooltip = document.querySelector(".tooltip");

  icon.addEventListener("mouseover", function (e) {
    this.style.transform = "translateY(-5px) scale(1.1)";

    // הצגת שם הרשת החברתית בטולטיפ
    const socialName =
      this.className.split(" ")[1].charAt(0).toUpperCase() +
      this.className.split(" ")[1].slice(1);
    tooltip.textContent = socialName;
    tooltip.style.opacity = "1";

    // מיקום הטולטיפ
    const iconRect = this.getBoundingClientRect();
    const widgetRect = document
      .querySelector(".social-widget")
      .getBoundingClientRect();
    tooltip.style.left = `${
      iconRect.left - widgetRect.left + iconRect.width / 2
    }px`;
  });

  icon.addEventListener("mouseout", function () {
    this.style.transform = "translateY(0) scale(1)";
    tooltip.style.opacity = "0";
  });

  // הוספת אפקט לחיצה
  icon.addEventListener("click", function (e) {
    e.preventDefault();
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
      window.open(this.href, "_blank");
    }, 150);
  });
});

// אנימציית כניסה בטעינת העמוד
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".social-icon");
  icons.forEach((icon, index) => {
    icon.style.opacity = "0";
    icon.style.transform = "translateY(20px)";
    setTimeout(() => {
      icon.style.transition = "all 0.3s ease";
      icon.style.opacity = "1";
      icon.style.transform = "translateY(0)";
    }, index * 100);
  });
});

// הוספת מונה שיתופים
let shareCount = 0;
const shareCountElement = document.querySelector(".share-count");

function updateShareCount() {
  shareCountElement.textContent = `${shareCount} shares`;
}

document.querySelectorAll(".social-icon").forEach((icon) => {
  // קוד קיים...

  icon.addEventListener("click", function (e) {
    e.preventDefault();
    shareCount++;
    updateShareCount();

    // אנימציית קונפטי בלחיצה
    createConfetti(e.clientX, e.clientY);

    // המשך הקוד הקיים...
  });
});

// אפקט קונפטי
function createConfetti(x, y) {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.style.cssText = `
            position: fixed;
            width: 5px;
            height: 5px;
            background: ${getRandomColor()};
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
    document.body.appendChild(confetti);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 3 + Math.random() * 5;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity;

    animateConfetti(confetti, dx, dy);
  }
}

function getRandomColor() {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function animateConfetti(element, dx, dy) {
  let x = parseFloat(element.style.left);
  let y = parseFloat(element.style.top);
  let opacity = 1;

  function update() {
    x += dx;
    y += dy + 1; // גרביטציה
    opacity -= 0.02;

    element.style.left = x + "px";
    element.style.top = y + "px";
    element.style.opacity = opacity;

    if (opacity > 0) {
      requestAnimationFrame(update);
    } else {
      element.remove();
    }
  }

  requestAnimationFrame(update);
}

// שמירת מצב בלוקל סטורג'
function saveState() {
  localStorage.setItem("shareCount", shareCount);
}

function loadState() {
  const savedCount = localStorage.getItem("shareCount");
  if (savedCount) {
    shareCount = parseInt(savedCount);
    updateShareCount();
  }
}

loadState();
window.addEventListener("beforeunload", saveState);

// מתג מצב חשוך
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );

  // אנימציית החלפת אייקון
  themeToggle.querySelector("i").classList.toggle("fa-moon");
  themeToggle.querySelector("i").classList.toggle("fa-sun");
});

// טעינת מצב חשוך מהזיכרון
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
}

// כפתורי שינוי גודל
const sizeButtons = document.querySelectorAll(".size-btn");
const icons = document.querySelectorAll(".social-icon");
let currentSize = 40;

sizeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const size = btn.dataset.size;
    if (size === "small" && currentSize > 30) {
      currentSize -= 5;
    } else if (size === "large" && currentSize < 50) {
      currentSize += 5;
    }

    icons.forEach((icon) => {
      icon.style.width = `${currentSize}px`;
      icon.style.height = `${currentSize}px`;
      icon.style.fontSize = `${currentSize * 0.5}px`;
    });

    // שמירת הגודל בזיכרון
    localStorage.setItem("iconSize", currentSize);
  });
});

// טעינת גודל אייקונים מהזיכרון
const savedSize = localStorage.getItem("iconSize");
if (savedSize) {
  currentSize = parseInt(savedSize);
  icons.forEach((icon) => {
    icon.style.width = `${currentSize}px`;
    icon.style.height = `${currentSize}px`;
    icon.style.fontSize = `${currentSize * 0.5}px`;
  });
}

// אפקט גלים בלחיצה
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - diameter / 2}px`;
  circle.style.top = `${event.clientY - button.offsetTop - diameter / 2}px`;
  circle.classList.add("ripple");

  button.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}

icons.forEach((icon) => {
  icon.addEventListener("click", createRipple);
});

// אנימציית הופעה מתקדמת
function animateIcons() {
  icons.forEach((icon, index) => {
    icon.style.opacity = "0";
    icon.style.transform = `translateY(20px) rotate(${Math.random() * 360}deg)`;

    setTimeout(() => {
      icon.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      icon.style.opacity = "1";
      icon.style.transform = "translateY(0) rotate(0deg)";
    }, index * 100);
  });
}

// הפעלת אנימציה בטעינה
document.addEventListener("DOMContentLoaded", animateIcons);

// פונקציה לטעינה מושהית של אנימציות
const lazyLoadAnimations = () => {
  requestAnimationFrame(() => {
    // קוד האנימציות הקיים...
  });
};

// טעינת אנימציות רק אחרי שהעמוד נטען
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(lazyLoadAnimations, 100);
});
