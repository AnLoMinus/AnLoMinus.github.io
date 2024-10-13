document.addEventListener("DOMContentLoaded", () => {
  const systemStatus = document.getElementById("system-status");
  const activateBtn = document.getElementById("activate-btn");
  const advancedMonitorBtn = document.getElementById("advanced-monitor-btn");
  const alertsContainer = document.getElementById("alerts-container");
  const threatsContainer = document.getElementById("threats-container");
  const logsContainer = document.getElementById("logs-container");
  const usersContainer = document.getElementById("users-container");
  const timelineContainer = document.getElementById("timeline-container");
  const mapContainer = document.getElementById("map-container");
  const alertFilter = document.getElementById("alert-filter");
  const statusIndicator = document.getElementById("status-indicator");
  const addUserBtn = document.getElementById("add-user-btn");

  let isActivated = false;
  let isAdvancedMonitoring = false;

  activateBtn.addEventListener("click", () => {
    isActivated = !isActivated;
    systemStatus.textContent = isActivated ? "Online" : "Offline";
    activateBtn.textContent = isActivated
      ? "Deactivate Machine"
      : "Activate Machine";

    if (isActivated) {
      generateAlert("System activated. Monitoring started.", "high");
      logAction("System activated.");
    } else {
      generateAlert("System deactivated.", "low");
      logAction("System deactivated.");
    }
  });

  addUserBtn.addEventListener("click", () => {
    const userName = prompt("Enter new user name:");
    if (userName) {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.textContent = `User: ${userName} added.`;
      usersContainer.prepend(userDiv);
      logAction(`User ${userName} added to the system.`);
    }
  });

  function generateAlert(message, priority = "medium") {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert");
    alertDiv.textContent = `${priority.toUpperCase()} Alert: ${message}`;
    alertDiv.dataset.priority = priority;
    alertsContainer.prepend(alertDiv);
  }

  alertFilter.addEventListener("change", () => {
    const filterValue = alertFilter.value;
    const alerts = alertsContainer.querySelectorAll(".alert");
    alerts.forEach((alert) => {
      if (filterValue === "all" || alert.dataset.priority === filterValue) {
        alert.style.display = "block";
      } else {
        alert.style.display = "none";
      }
    });
  });

  function logAction(action) {
    const logDiv = document.createElement("div");
    logDiv.classList.add("log");
    logDiv.textContent = `LOG: ${action}`;
    logsContainer.prepend(logDiv);
  }
});
