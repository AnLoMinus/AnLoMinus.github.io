document.addEventListener("DOMContentLoaded", function () {
  let links = [];
  let categories = {};

  const linksContainer = document.getElementById("links-container");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const subcategoryFilter = document.getElementById("subcategoryFilter");
  const checkboxFilters = document.getElementById("checkboxFilters");

  function loadLinks() {
    fetch("links.json")
      .then((response) => response.json())
      .then((data) => {
        links = data.links;
        populateFilters();
        displayLinks();
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }

  function populateFilters() {
    const categories = new Set();
    const subcategories = new Set();
    const checkboxOptions = new Set();

    links.forEach((link) => {
      categories.add(link.category);
      if (link.subcategory) {
        subcategories.add(link.subcategory);
      }
      checkboxOptions.add(link.category);
    });

    categoryFilter.innerHTML =
      '<option value="all">כל הקטגוריות</option>' +
      Array.from(categories)
        .map((cat) => `<option value="${cat}">${cat}</option>`)
        .join("");

    subcategoryFilter.innerHTML =
      '<option value="all">כל התתי קטגוריות</option>' +
      Array.from(subcategories)
        .map((subcat) => `<option value="${subcat}">${subcat}</option>`)
        .join("");

    checkboxFilters.innerHTML = Array.from(checkboxOptions)
      .map(
        (option) =>
          `<label><input type="checkbox" value="${option}"> ${option}</label>`
      )
      .join("");
  }

  function displayLinks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedSubcategory = subcategoryFilter.value;
    const checkedCategories = Array.from(
      checkboxFilters.querySelectorAll('input[type="checkbox"]:checked')
    ).map((cb) => cb.value);

    const filteredLinks = links.filter((link) => {
      const matchesSearch =
        link.title.toLowerCase().includes(searchTerm) ||
        link.description.toLowerCase().includes(searchTerm);
      const matchesCategory =
        selectedCategory === "all" || link.category === selectedCategory;
      const matchesSubcategory =
        selectedSubcategory === "all" ||
        link.subcategory === selectedSubcategory;
      const matchesCheckedCategories =
        checkedCategories.length === 0 ||
        checkedCategories.includes(link.category);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesSubcategory &&
        matchesCheckedCategories
      );
    });

    const tableBody = document.querySelector("#links-table tbody");
    tableBody.innerHTML = filteredLinks
      .map(
        (link) => `
          <tr>
              <td>${link.title}</td>
              <td>${link.description}</td>
              <td><a href="${link.url}" target="_blank">לינק</a></td>
              <td>${link.category}</td>
          </tr>
      `
      )
      .join("");
  }

  searchInput.addEventListener("input", displayLinks);
  categoryFilter.addEventListener("change", displayLinks);
  subcategoryFilter.addEventListener("change", displayLinks);
  checkboxFilters.addEventListener("change", displayLinks);

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

  loadLinks();
});
