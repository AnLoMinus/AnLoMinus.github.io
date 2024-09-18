document.addEventListener("DOMContentLoaded", () => {
  // Event listener for saving prayer times
  const prayerForm = document.getElementById("prayer-form");
  prayerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.getElementById("user-name").value;
    const prayerTime = document.getElementById("prayer-time").value;
    const prayerList = document.getElementById("prayer-list");

    const listItem = document.createElement("li");
    listItem.textContent = `${userName} - ${prayerTime}`;
    prayerList.appendChild(listItem);

    prayerForm.reset();
  });

  // Event listener for generating learning content
  const generateContentButton = document.getElementById("generate-content");
  generateContentButton.addEventListener("click", () => {
    const contentList = document.getElementById("content-list");
    contentList.innerHTML = ""; // Clear previous content

    // Example content generation
    const topics = ["נושאים בתורה", "שיעורים יומיים", "מאמרים חדשים"];
    topics.forEach((topic) => {
      const listItem = document.createElement("li");
      listItem.textContent = topic;
      contentList.appendChild(listItem);
    });
  });

  // Event listener for generating command report
  const generateReportButton = document.getElementById("generate-report");
  generateReportButton.addEventListener("click", () => {
    const reportContent = document.getElementById("report-content");
    reportContent.textContent = "דוח קיום מצוות מתעדכן..."; // Example report content
  });
});
