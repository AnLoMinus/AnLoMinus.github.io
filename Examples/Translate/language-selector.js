(function () {
  // יצירת חלון לבחירת שפה
  var languageOverlay = document.createElement("div");
  languageOverlay.setAttribute("id", "languageOverlay");
  languageOverlay.style.position = "fixed";
  languageOverlay.style.top = "0";
  languageOverlay.style.left = "0";
  languageOverlay.style.width = "100%";
  languageOverlay.style.height = "100%";
  languageOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  languageOverlay.style.zIndex = "1000";
  languageOverlay.style.display = "flex";
  languageOverlay.style.alignItems = "center";
  languageOverlay.style.justifyContent = "center";
  languageOverlay.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 10px; text-align: center; font-family: Arial, sans-serif;">
            <h1>Welcome! Choose Your Language:</h1>
            <select id="language-select" style="width: 300px; padding: 10px; border-radius: 5px; font-size: 16px;">
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="ar">العربية</option>
                <option value="ru">Русский</option>
                <option value="zh-CN">中文 (简体)</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
                <option value="pt">Português</option>
                <option value="hi">हिन्दी</option>
                <option value="tr">Türkçe</option>
                <option value="nl">Nederlands</option>
                <option value="sv">Svenska</option>
            </select>
            <br><br>
            <button id="confirm-language" style="background-color: #4CAF50; color: white; padding: 15px 25px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Confirm Language</button>
        </div>
    `;
  document.body.appendChild(languageOverlay);

  // טעינת Google Translate Widget
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src =
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.getElementsByTagName("head")[0].appendChild(script);

  // פונקציית טעינה עבור Google Translate
  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement(
      {
        pageLanguage: "en", // שפת ברירת המחדל של האתר (אפשר לשנות)
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  // פונקציה לשינוי השפה בתפריט Google Translate
  function setLanguage(lang) {
    var selectField = document.querySelector("select.goog-te-combo");
    if (selectField) {
      selectField.value = lang;
      selectField.dispatchEvent(new Event("change"));
    }
  }

  // בחירת שפה ואישור הבחירה
  document.getElementById("confirm-language").onclick = function () {
    var selectedLang = document.getElementById("language-select").value;

    // שליחת השפה ל-Google Translate
    setTimeout(function () {
      setLanguage(selectedLang);
    }, 500); // המתנה לטעינת ה-Widget

    // הצגת חלון אישור
    setTimeout(function () {
      var userConfirm = confirm(
        "You selected " + selectedLang + ". Is this language correct?"
      );
      if (userConfirm) {
        // הסתרת חלון השפה והמשך לאתר המתורגם
        languageOverlay.style.display = "none";
      } else {
        // חזרה לחלון בחירת השפה אם המשתמש לא אישר
        setLanguage("en"); // חזרה לאנגלית או שפת ברירת המחדל
      }
    }, 1500); // המתנה קצרה כדי לאפשר את שינוי השפה לפני אישור
  };
})();
