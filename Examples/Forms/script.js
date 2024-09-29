function updateSubService(serviceNumber) {
  const selectedValue = document.getElementById(
    `service${serviceNumber}`
  ).value;
  const subServiceSelect = document.getElementById(
    `subService${serviceNumber}`
  );

  if (selectedValue === "שירות 1 - פיתוח תוכנה בהתאמה אישית") {
    subServiceSelect.innerHTML = `
            <option value="פיתוח אפליקציות">📱 פיתוח אפליקציות (iOS, Android) - ₪5,000</option>
            <option value="פיתוח אתרים">💻 פיתוח אתרים (React, Angular) - ₪4,000</option>
            <option value="פיתוח תוכנה מותאמת אישית">🔍 פיתוח תוכנה מותאמת אישית - ₪6,000</option>
            <option value="שירותי API">🔗 שירותי API - ₪3,000</option>
            <option value="פתרונות בלוקצ'יין">⛓️ פתרונות בלוקצ'יין - ₪7,000</option>
            <option value="פיתוח משחקים">🎮 פיתוח משחקים - ₪8,000</option>
        `;
  } else if (selectedValue === "שירות 2 - אוטומציה של תהליכים") {
    subServiceSelect.innerHTML = `
            <option value="אוטומציה עסקית">🔄 אוטומציה עסקית (CRM, ERP) - ₪4,000</option>
            <option value="אוטומציה שיווקית">📈 אוטומציה שיווקית (כלים לניהול קמפיינים) - ₪3,500</option>
            <option value="אוטומציה של תהליכים ידניים">🤖 אוטומציה של תהליכים ידניים - ₪3,000</option>
            <option value="כלים לאוטומציה">🛠️ כלים לאוטומציה (Zapier, Integromat) - ₪2,000</option>
            <option value="אוטומציה של דוחות">📊 אוטומציה של דוחות ומידע - ₪3,500</option>
        `;
  } else if (selectedValue === "שירות 3 - תחזוקה ושדרוג") {
    subServiceSelect.innerHTML = `
            <option value="שדרוג מערכת">🔧 שדרוג מערכת (מעליות לגרסה חדשה) - ₪2,500</option>
            <option value="תחזוקה שוטפת">🛠️ תחזוקה שוטפת (גיבויים, עדכונים) - ₪1,500</option>
            <option value="שירותי ניטור">📊 שירותי ניטור (בדיקות ביצועים) - ₪3,000</option>
            <option value="ייעוץ טכנולוגי">💡 ייעוץ טכנולוגי - ₪4,000</option>
            <option value="שדרוגי אבטחה">🔒 שדרוגי אבטחה - ₪2,500</option>
        `;
  } else if (selectedValue === "שירות 4 - בניית אתרי מסחר אלקטרוני") {
    subServiceSelect.innerHTML = `
            <option value="פיתוח חנויות מקוונות">🛒 פיתוח חנויות מקוונות (WooCommerce, Shopify) - ₪5,500</option>
            <option value="אופטימיזציה של חוויית משתמש">🔍 אופטימיזציה של חוויית משתמש באתרי מסחר - ₪3,500</option>
            <option value="שירותי תשלום מאובטחים">💳 שירותי תשלום מאובטחים - ₪2,500</option>
        `;
  } else if (selectedValue === "שירות 5 - פיתוח מערכות מידע") {
    subServiceSelect.innerHTML = `
            <option value="פתרונות ניהול מידע">📊 פתרונות ניהול מידע (CRM, ERP) - ₪4,500</option>
            <option value="פיתוח דאטה בייס">🗄️ פיתוח דאטה בייס - ₪3,000</option>
            <option value="ניתוח מידע">🔍 ניתוח מידע ודוחות - ₪2,500</option>
        `;
  } else if (selectedValue === "שירות 6 - אופטימיזציה למנועי חיפוש (SEO)") {
    subServiceSelect.innerHTML = `
            <option value="שיפור דירוג אתרים">🔍 שיפור דירוג אתרים (On-Page, Off-Page) - ₪3,500</option>
            <option value="תוכן SEO">📝 תוכן SEO (כתיבה מותאמת) - ₪2,500</option>
            <option value="מחקר מילות מפתח">🔑 מחקר מילות מפתח - ₪2,000</option>
        `;
  } else if (selectedValue === "שירות 7 - פיתוח אפליקציות אינטרנט") {
    subServiceSelect.innerHTML = `
            <option value="פיתוח אפליקציות מבוססות דפדפן">🌐 פיתוח אפליקציות מבוססות דפדפן (React, Vue) - ₪4,000</option>
            <option value="אפליקציות רספונסיביות">📱 אפליקציות רספונסיביות (Mobile-First) - ₪3,500</option>
            <option value="אפליקציות API">🔗 אפליקציות API - ₪2,500</option>
        `;
  } else if (selectedValue === "שירות 8 - פיתוח משחקים דיגיטליים") {
    subServiceSelect.innerHTML = `
            <option value="פיתוח משחקים למובייל">🎮 פיתוח משחקים למובייל (iOS, Android) - ₪6,000</option>
            <option value="פיתוח משחקים באינטרנט">🌐 פיתוח משחקים באינטרנט (WebGL, Unity) - ₪7,000</option>
            <option value="עיצוב משחקים">🖌️ עיצוב משחקים - ₪3,500</option>
        `;
  } else if (selectedValue === "שירות 9 - פתרונות אבטחת מידע") {
    subServiceSelect.innerHTML = `
            <option value="הגנה על מידע ונתונים">🔒 הגנה על מידע ונתונים - ₪4,000</option>
            <option value="בדיקות חדירות">🛡️ בדיקות חדירות (Penetration Testing) - ₪3,000</option>
            <option value="הדרכות אבטחת מידע">📚 הדרכות אבטחת מידע - ₪2,500</option>
        `;
  } else if (selectedValue === "שירות 10 - ניתוח נתונים ודוחות") {
    subServiceSelect.innerHTML = `
            <option value="ניתוח נתונים עסקיים">📈 ניתוח נתונים עסקיים - ₪3,500</option>
            <option value="כלים לניתוח נתונים">🔍 כלים לניתוח נתונים (Tableau, Power BI) - ₪3,000</option>
            <option value="דוחות מותאמים אישית">📝 דוחות מותאמים אישית - ₪2,500</option>
        `;
  } else if (selectedValue === "שירות 11 - הדרכות וסדנאות טכנולוגיות") {
    subServiceSelect.innerHTML = `
            <option value="סדנאות טכנולוגיות">🧑‍🏫 סדנאות טכנולוגיות (Online, Offline) - ₪2,500</option>
            <option value="הדרכות למערכות מידע">📚 הדרכות למערכות מידע - ₪2,000</option>
            <option value="תמיכה טכנית">🛠️ תמיכה טכנית - ₪1,500</option>
        `;
  } else if (selectedValue === "שירות 12 - שירותי קונסולטינג בעסקי טכנולוגיה") {
    subServiceSelect.innerHTML = `
            <option value="ייעוץ עסקי טכנולוגי">💼 ייעוץ עסקי טכנולוגי - ₪5,000</option>
            <option value="אסטרטגיה דיגיטלית">🌐 אסטרטגיה דיגיטלית - ₪4,000</option>
            <option value="ניטור וייעול תהליכים">🔍 ניטור וייעול תהליכים - ₪3,000</option>
        `;
  } else if (selectedValue === "שירות 13 - עיצוב גרפי") {
    subServiceSelect.innerHTML = `
            <option value="עיצוב לוגואים">🎨 עיצוב לוגואים - ₪2,000</option>
            <option value="עיצוב חומרי פרסום">📰 עיצוב חומרי פרסום - ₪2,500</option>
            <option value="עיצוב גרפי לאינטרנט">💻 עיצוב גרפי לאינטרנט - ₪2,500</option>
        `;
  } else {
    subServiceSelect.innerHTML = "";
  }
}

function sendWhatsApp(formNumber) {
  const name = document.getElementById(`name${formNumber}`).value;
  const email = document.getElementById(`email${formNumber}`).value;
  const message = document.getElementById(`message${formNumber}`).value;
  const service = document.getElementById(`service${formNumber}`).value; // הוסף את השירות
  const subService = document.getElementById(`subService${formNumber}`).value;

  const whatsappMessage = `שם: ${name}\nאימייל: ${email}\nשירות: ${service}\nתת שירות: ${subService}\nהודעה: ${message}`;
  const phoneNumber = "972543285967"; // החלף במספר הטלפון שלך
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappLink, "_blank");
}
