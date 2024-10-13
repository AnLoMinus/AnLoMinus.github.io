let bots = [
  {
    name: "Social Media Manager Bot",
    role: "ניהול מדיה חברתית",
    status: "active",
  },
  { name: "SEO Optimizer Bot", role: "אופטימיזציית SEO", status: "pending" },
  {
    name: "Content Idea Generator Bot",
    role: "יצירת רעיונות תוכן",
    status: "inactive",
  },
];

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => (section.style.display = "none"));
  document.getElementById(sectionId).style.display = "block";
}

function toggleCategory(categoryId) {
  const categoryContent = document.getElementById(categoryId);
  categoryContent.style.display =
    categoryContent.style.display === "block" ? "none" : "block";
}

function addBot() {
  const botName = document.getElementById("bot-name").value;
  const botRole = document.getElementById("bot-role").value;
  const botStatus = document.getElementById("bot-status").value;

  const newBot = { name: botName, role: botRole, status: botStatus };
  bots.push(newBot);

  renderBots();
  showSection("bot-list");
}

function renderBots() {
  const botContainer = document.getElementById("bot-container");
  botContainer.innerHTML = "";

  bots.forEach((bot, index) => {
    const botCard = document.createElement("div");
    botCard.className = "bot-card";

    const botInfo = `
            <h3>${bot.name}</h3>
            <p>תפקיד: ${bot.role}</p>
            <p class="${bot.status}">סטטוס: ${
      bot.status === "active"
        ? "פעיל"
        : bot.status === "pending"
        ? "בהמתנה"
        : "כבוי"
    }</p>
            <button onclick="toggleBotStatus(${index}, 'active')" class="action-btn start-btn">הפעל</button>
            <button onclick="toggleBotStatus(${index}, 'inactive')" class="action-btn stop-btn">כבה</button>
            <button onclick="toggleBotStatus(${index}, 'pending')" class="action-btn pending-btn">המתן</button>
        `;

    botCard.innerHTML = botInfo;
    botContainer.appendChild(botCard);
  });
}

function toggleBotStatus(index, newStatus) {
  bots[index].status = newStatus;
  renderBots();
}

renderBots();
