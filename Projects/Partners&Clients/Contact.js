document.addEventListener("DOMContentLoaded", function () {
  loadServices();
});

function loadServices() {
  fetch("services.json")
    .then((response) => response.json())
    .then((data) => {
      const servicesTable = document.getElementById("servicesTable");
      servicesTable.innerHTML = `
                <thead>
                    <tr>
                        <th>שירות</th>
                        <th>תיאור</th>
                        <th>בחר</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.services
                      .map(
                        (service) => `
                        <tr>
                            <td><a href="#" onclick="openModal('${service.id}')">${service.name}</a></td>
                            <td>${service.description}</td>
                            <td>
                                <div class="checkbox-container">
                                    <input type="checkbox" id="${service.id}" value="${service.name}">
                                </div>
                            </td>
                        </tr>
                    `
                      )
                      .join("")}
                </tbody>
            `;
    })
    .catch((error) => console.error("Error loading services:", error));
}

function openModal(serviceId) {
  const modal = document.getElementById("myModal");
  const modalBody = document.getElementById("modalBody");
  const servicesInfo = {
    customCoupons:
      "שירות המאפשר ליצור שוברים דיגיטליים מותאמים אישית לכל לקוח.",
    promotionPackages:
      "חבילות קידום כוללות שירותים מותאמים אישית והנחות משמעותיות.",
    // הוסף מידע נוסף על השירותים כאן...
  };

  modalBody.innerHTML = `<p>${
    servicesInfo[serviceId] || "מידע נוסף על השירות לא זמין."
  }</p>`;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function submitForm() {
  // פונקציה לשליחת הטופס
  alert("הטופס נשלח בהצלחה!");
}
