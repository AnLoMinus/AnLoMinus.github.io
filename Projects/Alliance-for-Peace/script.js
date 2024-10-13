// כאן תכניס את הגדרות הקונפיגורציה של Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// הוספת תגובה
document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault(); // למנוע רענון הדף

  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;

  // הוספת התגובה למסד הנתונים
  const commentRef = database.ref("comments");
  commentRef.push({
    username: username,
    message: message,
    timestamp: Date.now(),
  });

  // ניקוי הטופס
  document.getElementById("commentForm").reset();
});

// הצגת התגובות
const commentsList = document.getElementById("commentsList");
database.ref("comments").on("value", function (snapshot) {
  commentsList.innerHTML = ""; // ניקוי התגובות הקודמות
  snapshot.forEach(function (childSnapshot) {
    const comment = childSnapshot.val();
    const commentElement = document.createElement("div");
    commentElement.innerHTML = `<strong>${comment.username}</strong>: ${comment.message}`;
    commentsList.appendChild(commentElement);
  });
});
