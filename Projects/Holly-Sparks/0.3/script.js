// גלילה רכה חזרה לראש העמוד
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// הצגת כפתור חזרה לראש העמוד כאשר גוללים למטה
window.onscroll = function () {
  const backToTop = document.getElementById("back-to-top");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

// תצוגת קריאה נוספת
function toggleReadMore(id) {
  const content = document.getElementById(id);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
