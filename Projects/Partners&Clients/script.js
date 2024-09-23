function openTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  const tabLinks = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");
  const activeTab = Array.from(tabLinks).find(
    (tabLink) => tabLink.textContent === tabId
  );
  if (activeTab) {
    activeTab.classList.add("active");
  }
}

// The rest of your existing JavaScript functions (openModal, closeModal, submitForm) remain unchanged
function openModal(serviceId) {
  var modal = document.getElementById("myModal");
  var modalBody = document.getElementById("modalBody");

  // מידע על השירותים
  const servicesInfo = {
    customCoupons:
      "שירות המאפשר ליצור שוברים דיגיטליים מותאמים אישית לכל לקוח, הניתנים למימוש בחנות.",
    promotionPackages:
      "חבילות קידום כוללות שירותים מותאמים אישית והנחות משמעותיות.",
    discountCards:
      "שוברי הנחה המיועדים למועדון לקוחות, עם אפשרות למעקב אחרי המימושים.",
    successModel:
      "מודל המבוסס על אחוזי הצלחה, שבו התשלום מתבצע לפי הצלחות המכירה.",
    referrals: "שירות המאפשר הפניות עם תגמול על מכירות דרך הפניות.",
    giftCards: "מערכת לניהול כרטיסי מתנה דיגיטליים, עם ממשק ניהול ידידותי.",
    affiliateProgram:
      "תוכנית שותפים המאפשרת ללקוחות להרוויח אחוזים על מכירות המבוצעות דרך קישורים.",
    basePackages: "חבילות בסיס שמציעות הנחות לתוספות ושירותים נוספים.",
  };

  modalBody.innerHTML = servicesInfo[serviceId] || "אין מידע נוסף זמין.";
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function submitForm() {
  var businessName = document.getElementById("businessName").value;
  var ownerName = document.getElementById("ownerName").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var additionalComments = document.getElementById("additionalComments").value;
  var selectedServices = [];

  if (document.getElementById("customCoupons").checked) {
    selectedServices.push("שוברים/כרטיסי הנחה מותאמים אישית");
  }
  if (document.getElementById("promotionPackages").checked) {
    selectedServices.push("חבילות קידום + אתר");
  }
  if (document.getElementById("discountCards").checked) {
    selectedServices.push("שוברי הנחה דיגיטליים למועדון לקוחות");
  }
  if (document.getElementById("successModel").checked) {
    selectedServices.push("מודל אחוזי הצלחה");
  }
  if (document.getElementById("referrals").checked) {
    selectedServices.push("שותפות על בסיס הפניות");
  }
  if (document.getElementById("giftCards").checked) {
    selectedServices.push("מערכת כרטיסי מתנה דיגיטליים");
  }
  if (document.getElementById("affiliateProgram").checked) {
    selectedServices.push("תוכנית שותפים באתר העסק");
  }
  if (document.getElementById("basePackages").checked) {
    selectedServices.push("חבילות בסיס ותוספות בהנחה");
  }

  var servicesMessage =
    selectedServices.length > 0
      ? selectedServices.join(", ")
      : "לא נבחרו שירותים";

  var message =
    `לקוח חדש מעוניין בשירותים:%0A` +
    `שם העסק: ${businessName}%0A` +
    `שם בעל העסק: ${ownerName}%0A` +
    `טלפון: ${phone}%0A` +
    `אימייל: ${email}%0A` +
    `שירותים נבחרים: ${servicesMessage}%0A` +
    `הערות נוספות: ${additionalComments}`;

  var whatsappUrl = `https://wa.me/972543285967?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
}
