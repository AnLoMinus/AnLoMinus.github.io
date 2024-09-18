/* x-SentencesLoadJSON*/
document.addEventListener("DOMContentLoaded", function () {
  const ledBar = document.getElementById("led-bar");
  let sentences = [];
  let index = 0;
  let animationInterval;

  // Function to Load JSON Data
  function loadSentences() {
    fetch("./sentences.json")
      .then((response) => response.json())
      .then((data) => {
        sentences = data;
        changeText(); // Initialize text after loading
        setInterval(changeText, 3000); // Change text every 4 seconds
      })
      .catch((error) => console.error("Error loading sentences:", error));
  }

  // Function to Update LED Bar
  function changeText() {
    if (sentences.length === 0) return; // Prevent errors if no sentences loaded

    ledBar.style.animation = "fadeOut 1s forwards"; // Start fade-out animation

    setTimeout(() => {
      ledBar.textContent = sentences[index].text;
      // ledBar.style.background = sentences[index].background;
      ledBar.style.color = sentences[index].textColor;
      ledBar.style.textShadow = `0 0 10px ${sentences[index].shadowColor}`; // Change text shadow
      ledBar.style.boxShadow = `0 0 25px ${sentences[index].shadowColor}`; // Change box shadow
      ledBar.style.animation = "fadeIn 1s"; // Start fade-in animation
      ledBar.style.animation = "spark 1s infinite"; // Start spark effect
      index = (index + 1) % sentences.length;
    }, 1000); // Wait for fade-out to complete before changing text
  }

  ledBar.addEventListener("click", () => {
    clearInterval(animationInterval); // Pause the animation
    alert("האנימציה הושעתה!"); // Display a message
  });

  loadSentences(); // Load sentences when DOM is ready
});
