const prompts = {
  technology: [
    "In the future, technology will enable us to...",
    "Imagine a world where AI-powered robots...",
    "The next breakthrough in technology will be...",
    "The impact of 5G on society...",
    "How quantum computing will revolutionize...",
  ],
  space: [
    "Humans will colonize Mars by...",
    "Exploring deep space will lead us to discover...",
    "In the future, space travel will become...",
    "The search for extraterrestrial life...",
    "The challenges of interstellar travel...",
  ],
  future: [
    "In the future, humans will have the ability to...",
    "A society where everyone has access to...",
    "The future will be shaped by advancements in...",
    "The ethical implications of AI...",
    "The role of renewable energy in the future...",
  ],
};

function generatePrompt() {
  const category = document.getElementById("category").value;
  const promptElement = document.getElementById("prompt");
  const promptsTable = document.getElementById("promptsTable");
  const promptsTableBody = document.getElementById("promptsTableBody");

  const categoryPrompts = prompts[category];
  const randomPrompt = categoryPrompts[Math.floor(Math.random() * categoryPrompts.length)];

  promptElement.textContent = randomPrompt;
  generateOptionalPromptsTable(categoryPrompts);
  promptsTable.classList.remove("hidden");
}

function generateOptionalPromptsTable(categoryPrompts) {
  const promptsTableBody = document.getElementById("promptsTableBody");
  promptsTableBody.innerHTML = "";

  categoryPrompts.forEach((prompt) => {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.textContent = prompt;
    row.appendChild(cell);
    promptsTableBody.appendChild(row);
  });
}

function toggleDarkMode() {
  const body = document.body;
  const container = document.querySelector(".container");
  const form = document.querySelector(".form");
  const buttons = document.querySelectorAll("button");
  const promptsTable = document.getElementById("promptsTable");

  body.classList.toggle("dark-mode");
  container.classList.toggle("dark-mode");
  form.classList.toggle("dark-mode");
  buttons.forEach((button) => button.classList.toggle("dark-mode"));
  promptsTable.classList.toggle("dark-mode");
}

// ... (existing code) ...

function generatePrompt() {
  const category = document.getElementById("category").value;
  const promptElement = document.getElementById("prompt");
  const copyButton = document.getElementById("copyButton");
  const promptsTable = document.getElementById("promptsTable");
  const promptsTableBody = document.getElementById("promptsTableBody");

  const categoryPrompts = prompts[category];
  const randomPrompt = categoryPrompts[Math.floor(Math.random() * categoryPrompts.length)];

  promptElement.textContent = randomPrompt;
  promptElement.classList.remove("prompt-placeholder");
  copyButton.classList.remove("hidden");
  generateOptionalPromptsTable(categoryPrompts);
  promptsTable.classList.remove("hidden");
}

function generateOptionalPromptsTable(categoryPrompts) {
  // ... (existing code) ...
}

function copyPrompt() {
  const promptElement = document.getElementById("prompt");
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = promptElement.textContent;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  const copyButton = document.getElementById("copyButton");
  copyButton.textContent = "Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Prompt";
  }, 2000);
}

// ... (existing code) ...