// טוען את קובץ ה-JSON ומציג את הלינקים
document.addEventListener("DOMContentLoaded", function () {
  let links = [];
  const linksContainer = document.getElementById("links-container");

  // פונקציה לטעינת ה-JSON המקומי
  function loadLinks() {
    fetch("links.json")
      .then((response) => response.json())
      .then((data) => {
        links = data.links;
        displayLinks();
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }

  // מציג את הלינקים על המסך
  function displayLinks() {
    linksContainer.innerHTML = ""; // מנקה את התוכן הישן
    links.forEach((link) => {
      const card = document.createElement("div");
      card.className = "link-card";
      card.innerHTML = `
                <h2>${link.title}</h2>
                <p>${link.description}</p>
                <a href="${link.url}" target="_blank">לינק</a>
            `;
      linksContainer.appendChild(card);
    });
  }

  // שמירה של השינויים ל-JSON
  document.getElementById("saveBtn").addEventListener("click", function () {
    const json = JSON.stringify({ links: links }, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "links.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  // טוען את הלינקים כשהדף נטען
  loadLinks();
});

document.addEventListener("DOMContentLoaded", function () {
  let links = [];
  let filteredLinks = [];
  const linksContainer = document.getElementById("links-container");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  // פונקציה לטעינת ה-JSON המקומי
  function loadLinks() {
    fetch("links.json")
      .then((response) => response.json())
      .then((data) => {
        links = data.links;
        filteredLinks = links; // מתחילים עם כל הלינקים
        displayLinks();
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }

  // מציג את הלינקים על המסך
  function displayLinks() {
    linksContainer.innerHTML = ""; // מנקה את התוכן הישן
    filteredLinks.forEach((link) => {
      const card = document.createElement("div");
      card.className = "link-card";
      card.innerHTML = `
                <h2>${link.title}</h2>
                <p>${link.description}</p>
                <a href="${link.url}" target="_blank">לינק</a>
            `;
      linksContainer.appendChild(card);
    });
  }

  // פונקציה לסינון וחיפוש
  function filterLinks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    filteredLinks = links.filter((link) => {
      const matchesSearch =
        link.title.toLowerCase().includes(searchTerm) ||
        link.description.toLowerCase().includes(searchTerm);
      const matchesCategory =
        selectedCategory === "all" ||
        (link.category && link.category === selectedCategory);

      return matchesSearch && matchesCategory;
    });

    displayLinks(); // מציג מחדש את הלינקים המסוננים
  }

  // מאזינים לשינויים בחיפוש ובסינון
  searchInput.addEventListener("input", filterLinks);
  categoryFilter.addEventListener("change", filterLinks);

  // שמירה של השינויים ל-JSON
  document.getElementById("saveBtn").addEventListener("click", function () {
    const json = JSON.stringify({ links: links }, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "links.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  // טוען את הלינקים כשהדף נטען
  loadLinks();
});
