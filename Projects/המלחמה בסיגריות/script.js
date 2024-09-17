// ציטוטים מתחלפים
const quotes = [
  "כל סיגריה שאתה לא מדליק מאריכה את חייך בעוד רגעים חשובים.",
  "הבחירה שלך להפסיק לעשן היא הבחירה שלך להמשיך לחיות.",
  "הפסקת עישון זה לא רק להציל את הבריאות שלך, זה להציל את חייך.",
  "החיים שלך שווים יותר ממה שיכול להציע סיגריה.",
  "לכל סיגריה יש תג מחיר - הבריאות שלך.",
  "החיים הם לא משחק, אל תתן לעשן להיות המנצח.",
  "סיגריות לא משפרות לך את החיים, הן רק גונבות אותם לאט לאט.",
  "כל סיגריה שנשרפת גונבת ממך זמן יקר של החיים.",
  "העשן שאתה שואף לא עושה לך טובה, הוא רק מחבל בבריאות שלך.",
  "הדרך היחידה להפסיק לעשן היא לא להתחיל מלכתחילה.",
];

let currentQuoteIndex = 0;
const quoteBar = document.getElementById("quoteBar");

setInterval(() => {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  quoteBar.textContent = quotes[currentQuoteIndex];
}, 4000); // כל 4 שניות ישתנה המשפט

// טיימר גמילה
let quitStartDate = null; // ניתן להחליף בתאריך שמירת הגמילה בפועל
function startQuitTimer() {
  const now = new Date();
  const diff = now - quitStartDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById(
    "quitTimer"
  ).textContent = `עברו ${days} ימים מאז שהפסקת לעשן!`;
}

function playMeditation() {
  alert("נפתח סרטון מדיטציה.");
}

function startBreathingExercise() {
  alert("נפתח מדריך תרגילי נשימה.");
}

function calculateHealthSavings() {
  alert("מחשבון הבריאות יאפשר לך להבין כמה זמן חיים תחסוך אם תפסיק לעשן.");
}

function calculateFinancialSavings() {
  alert("מחשבון החיסכון הכלכלי יציג כמה כסף תחסוך בעזרת הפסקת עישון.");
}

function joinCommunity() {
  alert("הצטרף לפורום ותתחיל לשתף את החוויות שלך.");
}

function donate() {
  alert("תרומתך תעזור במאבק נגד עישון.");
}

function joinVolunteers() {
  alert("הצטרפות כמתנדב לארגון.");
}

function submitFeedback() {
  alert("שלח את המשוב שלך.");
}
