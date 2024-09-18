// הוספת קוד JavaScript בעת הצורך
// לדוגמה, הוספת פונקציה להתרעה על לחיצה על כפתור
document.addEventListener("DOMContentLoaded", function () {
  // ניתן להוסיף כאן קוד עבור אינטראקציות נוספות בעת הצורך
});

document.addEventListener("DOMContentLoaded", function () {
  // פונקציה להוספת מטרות
  function addGoal(type, content) {
    const goalsList = document.getElementById(`${type}-list`);
    const listItem = document.createElement("li");
    listItem.textContent = content;
    goalsList.appendChild(listItem);
  }

  // פונקציה לעדכון תצוגת ימי השבוע
  function updateDailyPlan(day, tasks) {
    const plan = document.getElementById("daily-plan");
    let tasksHtml = `<h3>${day}</h3><ul>`;
    tasks.forEach((task) => {
      tasksHtml += `<li>${task}</li>`;
    });
    tasksHtml += "</ul>";
    plan.innerHTML += tasksHtml;
  }

  // פונקציה להוספת משימות חדשות
  function addTask(taskType, taskContent) {
    const taskList = document.getElementById(`${taskType}-tasks`);
    const listItem = document.createElement("li");
    listItem.textContent = taskContent;
    taskList.appendChild(listItem);
  }

  // דוגמה להוספת מטרות
  addGoal("personal", "לקרוא ספר חדש");
  addGoal("professional", "לסיים פרויקט עבודה");
  addGoal("health", "להתחיל להתאמן שלוש פעמים בשבוע");

  // דוגמה לתכנון פעולות יומיומיות
  updateDailyPlan("יום ראשון", [
    "קבע את המשימות החשובות",
    "תעדף משימות שדורשות התחלה",
  ]);
  updateDailyPlan("יום שני", ["עבוד על המשימות לפי סדר עדיפות"]);

  // דוגמה להוספת משימות
  addTask("daily", "לסיים לקרוא 20 עמודים בספר");
});

document.addEventListener("DOMContentLoaded", function () {
  // פונקציה להוספת מטרות
  function addGoal(type, content) {
    const goalsList = document.getElementById(`${type}-list`);
    const listItem = document.createElement("li");
    listItem.textContent = content;
    goalsList.appendChild(listItem);
  }

  // פונקציה לטיפול בהגשת הטופס
  document
    .getElementById("goal-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const goalType = document.getElementById("goal-type").value;
      const goalContent = document.getElementById("goal-content").value;

      if (goalContent.trim() !== "") {
        addGoal(goalType, goalContent);
        document.getElementById("goal-content").value = ""; // ניקוי שדה הקלט
      }
    });

  // דוגמה להוספת מטרות
  addGoal("personal", "לקרוא ספר חדש");
  addGoal("professional", "לסיים פרויקט עבודה");
  addGoal("health", "להתחיל להתאמן שלוש פעמים בשבוע");

  // דוגמה לתכנון פעולות יומיומיות
  updateDailyPlan("יום ראשון", [
    "קבע את המשימות החשובות",
    "תעדף משימות שדורשות התחלה",
  ]);
  updateDailyPlan("יום שני", ["עבוד על המשימות לפי סדר עדיפות"]);
});
