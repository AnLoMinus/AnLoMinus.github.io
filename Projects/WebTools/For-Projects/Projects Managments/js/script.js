document.addEventListener("DOMContentLoaded", function () {
  // טען נתונים מ-JSON
  fetch("data/data.json")
    .then((response) => response.json())
    .then((data) => {
      // עיבוד הנתונים והצגת תכנים
      console.log(data);
    })
    .catch((error) => console.error("שגיאה בטעינת הנתונים:", error));
});
