function openModal(title, text) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalText").innerText = text;
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function showContent(contentId) {
  // הוספת פונקציה כדי להציג תוכן אחר אם יש צורך
}
