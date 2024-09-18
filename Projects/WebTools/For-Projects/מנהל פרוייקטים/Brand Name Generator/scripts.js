const adjectives = [
  "Bold",
  "Dynamic",
  "Innovative",
  "Creative",
  "Energetic",
  "Vibrant",
  "Agile",
  "Charming",
  "Fresh",
  "Genuine",
];

const nouns = [
  "Ideas",
  "Solutions",
  "Tech",
  "Brands",
  "Vision",
  "Spark",
  "Insights",
  "Hub",
  "Labs",
  "Quest",
];

function generateBrandName() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + " " + noun;
}

const generateButton = document.getElementById("generateButton");
const brandNameElement = document.getElementById("brandName");

generateButton.addEventListener("click", () => {
  const brandName = generateBrandName();
  brandNameElement.textContent = brandName;
});
