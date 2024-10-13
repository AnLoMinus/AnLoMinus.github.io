document.addEventListener("DOMContentLoaded", () => {
  const systemStatus = document.getElementById("system-status");
  const activateBtn = document.getElementById("activate-btn");
  const alertsContainer = document.getElementById("alerts-container");
  const threatsContainer = document.getElementById("threats-container");
  const statusIndicator = document.getElementById("status-indicator");

  let isActivated = false;

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
      startThreatSimulation();
    } else {
      generateAlert("System deactivated.");
      clearThreats();
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
