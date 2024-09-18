// שינוי צבעים לפי סטטוס הפרויקט
document
  .getElementById("project-status")
  .addEventListener("change", function () {
    var status = this.value;
    changeColors(status);
  });

function changeColors(status) {
  let root = document.documentElement;

  switch (status) {
    case "start":
      root.style.setProperty("--bg-color", "#e3f2fd");
      root.style.setProperty("--nav-bg-color", "#2196F3");
      root.style.setProperty("--section-bg-color", "#bbdefb");
      root.style.setProperty("--button-bg-color", "#1976D2");
      root.style.setProperty("--button-hover-color", "#0d47a1");
      break;
    case "in_progress":
      root.style.setProperty("--bg-color", "#fff3e0");
      root.style.setProperty("--nav-bg-color", "#FF9800");
      root.style.setProperty("--section-bg-color", "#FFE0B2");
      root.style.setProperty("--button-bg-color", "#FB8C00");
      root.style.setProperty("--button-hover-color", "#E65100");
      break;
    case "completed":
      root.style.setProperty("--bg-color", "#e8f5e9");
      root.style.setProperty("--nav-bg-color", "#4CAF50");
      root.style.setProperty("--section-bg-color", "#C8E6C9");
      root.style.setProperty("--button-bg-color", "#388E3C");
      root.style.setProperty("--button-hover-color", "#1B5E20");
      break;
    case "delayed":
      root.style.setProperty("--bg-color", "#ffebee");
      root.style.setProperty("--nav-bg-color", "#F44336");
      root.style.setProperty("--section-bg-color", "#FFCDD2");
      root.style.setProperty("--button-bg-color", "#D32F2F");
      root.style.setProperty("--button-hover-color", "#B71C1C");
      break;
    default:
      root.style.setProperty("--bg-color", "#ffffff");
      root.style.setProperty("--nav-bg-color", "#333333");
      root.style.setProperty("--section-bg-color", "#f4f4f4");
      root.style.setProperty("--button-bg-color", "#4CAF50");
      root.style.setProperty("--button-hover-color", "#45a049");
      break;
  }
}

// פונקציה לשמירת נתונים (דוגמה)
function saveData() {
  alert("הנתונים נשמרו בהצלחה!");
}

// אתחול הצבעים לפי הסטטוס הנוכחי בהתחלה
window.onload = function () {
  var currentStatus = document.getElementById("project-status").value;
  changeColors(currentStatus);
};
