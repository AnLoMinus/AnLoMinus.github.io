document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // הסרת "active" מכל הכפתורים והכרטיסיות
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // הוספת "active" לכפתור ולכרטיסייה הנבחרת
      button.classList.add("active");
      const selectedTab = button.dataset.tab;
      document.getElementById(selectedTab).classList.add("active");
    });
  });
});
