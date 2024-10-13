document.addEventListener("DOMContentLoaded", () => {
  const systemStatus = document.getElementById("system-status");
  const activateBtn = document.getElementById("activate-btn");
  const advancedMonitorBtn = document.getElementById("advanced-monitor-btn");
  const alertsContainer = document.getElementById("alerts-container");
  const threatsContainer = document.getElementById("threats-container");
  const logsContainer = document.getElementById("logs-container");
  const statusIndicator = document.getElementById("status-indicator");

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

  function generateAlert(message) {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert");
    alertDiv.textContent = message;
    alertsContainer.prepend(alertDiv);
  }

  function generateThreat(threat) {
    const threatDiv = document.createElement("div");
    threatDiv.classList.add("threat");
    threatDiv.textContent = `Threat Detected: ${threat}`;
    threatsContainer.prepend(threatDiv);
    logAction(`Threat logged: ${threat}`);
  }

  function logAction(action) {
    const logDiv = document.createElement("div");
    logDiv.classList.add("log");
    logDiv.textContent = `LOG: ${action}`;
    logsContainer.prepend(logDiv);
  }

  function clearThreats() {
    threatsContainer.innerHTML = "";
  }

  function startThreatSimulation() {
    setInterval(() => {
      if (isActivated) {
        const randomThreat = `Location: Zone ${Math.floor(
          Math.random() * 100
        )}, Suspicious activity.`;
        generateThreat(randomThreat);
      }
    }, 15000); // New threat every 15 seconds
  }

  // Simulated alerts (replace with real alerts in the future)
  setInterval(() => {
    if (isActivated) {
      generateAlert("Suspicious activity detected at [Location].");
    }
  }, 10000); // New alert every 10 seconds
});
