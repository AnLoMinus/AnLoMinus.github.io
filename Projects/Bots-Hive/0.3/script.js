let bots = [
    { name: "Content Planner Bot", role: "תכנון תוכן", status: "active" },
    { name: "Task Prioritizer Bot", role: "תיעדוף משימות", status: "pending" },
    { name: "Project Status Tracker Bot", role: "מעקב פרויקטים", status: "inactive" }
];

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function addBot() {
    const botName = document.getElementById('bot-name').value;
    const botRole = document.getElementById('bot-role').value;
    const botStatus = document.getElementById('bot-status').value;

    const newBot = { name: botName, role: botRole, status: botStatus };
    bots.push(newBot);

    renderBots();
    showSection('bot-list');
}

function renderBots() {
    const botTable = document.getElementById('bot-table');
    botTable.innerHTML = '';

    bots.forEach((bot, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${bot.name}</td>
            <td>${bot.role}</td>
            <td class="${bot.status}">${bot.status}</td>
            <td>
                <button onclick="toggleBotStatus(${index}, 'active')">הפעל</button>
                <button onclick="toggleBotStatus(${index}, 'inactive')">כבה</button>
                <button onclick="toggleBotStatus(${index}, 'pending')">המתן</button>
            </td>
        `;
        botTable.appendChild(row);
    });

    updateStatusCounts();
}

function toggleBotStatus(index, newStatus) {
    bots[index].status = newStatus;
    renderBots();
    updateChart();
}

function updateStatusCounts() {
    const activeCount = bots.filter(bot => bot.status === 'active').length;
    const pendingCount = bots.filter(bot => bot.status === 'pending').length;
    const inactiveCount = bots.filter(bot => bot.status === 'inactive').length;

    document.getElementById('active-count').innerText = activeCount;
    document.getElementById('pending-count').innerText = pendingCount;
    document.getElementById('inactive-count').innerText = inactiveCount;
}

// Function to update chart
function updateChart() {
    const ctx = document.getElementById('statusChart').getContext('2d');
    const activeCount = bots.filter(bot => bot.status === 'active').length;
    const pendingCount = bots.filter(bot => bot.status === 'pending').length;
    const inactiveCount = bots.filter(bot => bot.status === 'inactive').length;

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['פעיל', 'בהמתנה', 'כבוי'],
            datasets: [{
                label: 'סטטוס הבוטים',
                data: [activeCount, pendingCount, inactiveCount],
                backgroundColor: ['#28a745', '#ffc107', '#dc3545']
            }]
        },
        options: {
            responsive: true
        }
    });
}

// Initial render
renderBots();
updateChart();
