// X-Carousel
$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// X-Tabs
function showTab(tabId) {
  var tabs = document.querySelectorAll(".tab");
  var contents = document.querySelectorAll(".content");

  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });

  contents.forEach(function (content) {
    content.classList.remove("active");
  });

  document
    .querySelector(".tab[onclick=\"showTab('" + tabId + "')\"]")
    .classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

// Show the first tab by default
document.querySelector(".tab").click();

// X-Add Items
let data = {
  projects: [],
  businesses: [],
  goals: [],
  tasks: [],
};

function showTab(tabId) {
  var tabs = document.querySelectorAll(".tab");
  var contents = document.querySelectorAll(".content");
  tabs.forEach((tab) => tab.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));
  document
    .querySelector(".tab[onclick=\"showTab('" + tabId + "')\"]")
    .classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

function addItem(category) {
  const inputId = `new${capitalizeFirstLetter(category.slice(0, -1))}`;
  const value = document.getElementById(inputId).value;
  if (value) {
    data[category].push(value);
    updateList(category);
    document.getElementById(inputId).value = "";
  }
}

function updateList(category) {
  const list = document.getElementById(`${category.slice(0, -1)}List`);
  list.innerHTML = "";
  data[category].forEach((item, index) => {
    list.innerHTML += `<li>${item} <button onclick="editItem('${category}', ${index})">ערוך</button> <button onclick="deleteItem('${category}', ${index})">מחק</button></li>`;
  });
}

function editItem(category, index) {
  const newValue = prompt("ערוך פריט:", data[category][index]);
  if (newValue) {
    data[category][index] = newValue;
    updateList(category);
  }
}

function deleteItem(category, index) {
  data[category].splice(index, 1);
  updateList(category);
}

function saveToFile() {
  const jsonData = JSON.stringify(data);
  const blob = new Blob([jsonData], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "data.json";
  link.click();
}

function loadFromFile() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json";
  input.onchange = function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      data = JSON.parse(event.target.result);
      ["projects", "businesses", "goals", "tasks"].forEach(updateList);
    };
    reader.readAsText(file);
  };
  input.click();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Show the first tab by default
document.querySelector(".tab").click();
