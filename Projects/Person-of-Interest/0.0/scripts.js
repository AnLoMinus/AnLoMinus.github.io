document.addEventListener("DOMContentLoaded", () => {
  const activateButton = document.getElementById("activate-btn");
  const systemStatus = document.getElementById("system-status");

  // שינוי מצב המערכת
  activateButton.addEventListener("click", () => {
    if (systemStatus.classList.contains("status-offline")) {
      systemStatus.textContent = "Online";
      systemStatus.classList.remove("status-offline");
      systemStatus.classList.add("status-online");
      systemStatus.style.color = "green";
      activateButton.textContent = "Deactivate Machine";
    } else {
      systemStatus.textContent = "Offline";
      systemStatus.classList.remove("status-online");
      systemStatus.classList.add("status-offline");
      systemStatus.style.color = "red";
      activateButton.textContent = "Activate Machine";
    }
  });
});
