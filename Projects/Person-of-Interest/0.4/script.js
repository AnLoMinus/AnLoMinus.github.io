document.addEventListener("DOMContentLoaded", () => {
  const systemStatus = document.getElementById("system-status");
  const activateBtn = document.getElementById("activate-btn");
  const advancedMonitorBtn = document.getElementById("advanced-monitor-btn");
  const alertsContainer = document.getElementById("alerts-container");
  const threatsContainer = document.getElementById("threats-container");
  const logsContainer = document.getElementById("logs-container");
  const usersContainer = document.getElementById("users-container");
  const timelineContainer = document.getElementById("timeline-container");
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
    statusIndicator.classList.toggle("online", isActivated);
    statusIndicator.classList.toggle("offline", !isActivated);

    if (isActivated) {
      generateAlert("System activated. Monitoring started.");
      logAction("System activated.");
      startThreatSimulation();
    } else {
      generateAlert("System deactivated.");
      logAction("System deactivated.");
      clearThreats();
    }
  });

  advancedMonitorBtn.addEventListener("click", () => {
    isAdvancedMonitoring = !isAdvancedMonitoring;
    advancedMonitorBtn.textContent = isAdvancedMonitoring
      ? "Stop Advanced Monitoring"
      : "Start Advanced Monitoring";

    if (isAdvancedMonitoring) {
      generateAlert("Advanced monitoring activated.");
      logAction("Advanced monitoring activated.");
    } else {
      generateAlert("Advanced monitoring deactivated.");
      logAction("Advanced monitoring deactivated.");
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

  // More functionality for logging and monitoring threats added...
});
