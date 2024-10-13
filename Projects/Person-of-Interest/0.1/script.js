document.addEventListener("DOMContentLoaded", () => {
  const systemStatus = document.getElementById("system-status");
  const activateBtn = document.getElementById("activate-btn");
  const alertsContainer = document.getElementById("alerts-container");

  let isActivated = false;

  activateBtn.addEventListener("click", () => {
    isActivated = !isActivated;
    systemStatus.textContent = isActivated ? "Online" : "Offline";
    activateBtn.textContent = isActivated
      ? "Deactivate Machine"
      : "Activate Machine";

    if (isActivated) {
      generateAlert("System activated. Monitoring started.");
    } else {
      generateAlert("System deactivated.");
    }
  });

  function generateAlert(message) {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert");
    alertDiv.textContent = message;
    alertsContainer.prepend(alertDiv);
  }

  // Simulated alerts (replace with real alerts in the future)
  setInterval(() => {
    if (isActivated) {
      generateAlert("Suspicious activity detected at [Location].");
    }
  }, 10000);
});
