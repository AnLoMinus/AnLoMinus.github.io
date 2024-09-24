document.addEventListener("DOMContentLoaded", function () {
  const categories = [
    "בריאות",
    "מוטיבציה אישית",
    "כלכלי",
    "יחסים חברתיים",
    "התמדה ומחויבות",
    "רוגע ושלווה",
    "מראה חיצוני והעצמה אישית",
    "חוויות חדשות ואורח חיים",
    "דוגמה אישית והשפעה על אחרים",
  ];

  let currentQuoteIndex = {};
  let intervalTime = 3000; // כל כמה שניות להחליף ציטוט

  // טוענים את כל הקטגוריות והציטוטים מקובץ JSON
  fetch("quotes.json")
    .then((response) => response.json())
    .then((data) => {
      categories.forEach((category, index) => {
        currentQuoteIndex[category] = 0;
        const categoryQuotes = data[category];

        // עדכון הכרטיסייה עם הציטוט הראשון בכל קטגוריה
        document.getElementById(`quote-${index}`).textContent = addEmojis(
          categoryQuotes[0]
        );

        // הגדרת אינטרוול להחלפת ציטוטים אוטומטית
        setInterval(() => {
          currentQuoteIndex[category] =
            (currentQuoteIndex[category] + 1) % categoryQuotes.length;
          document.getElementById(`quote-${index}`).textContent = addEmojis(
            categoryQuotes[currentQuoteIndex[category]]
          );
        }, intervalTime);
      });
    })
    .catch((error) => console.error("Error loading quotes:", error));

  // פונקציה להוספת אמוג'ים לציטוטים
  function addEmojis(quote) {
    const emojis = ["💪", "🚭", "🌟", "❤️", "🌱", "🧘‍♂️", "😃", "🔥"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    return `${quote} ${randomEmoji}`;
  }
});
