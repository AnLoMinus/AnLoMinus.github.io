const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// הגדר את התיקייה שבה שמורים קובצי ה-JSON
const jsonDirectory = path.join(__dirname, "songs");

// שרת סטטי לטעינת קבצים מהתיקייה הראשית
app.use(express.static(__dirname));

// קריאת כל קובצי ה-JSON מהתיקייה
app.get("/songs", (req, res) => {
  fs.readdir(jsonDirectory, (err, files) => {
    if (err) {
      return res.status(500).send("שגיאה בקריאת הקבצים");
    }
    const jsonFiles = files.filter((file) => path.extname(file) === ".json");
    res.json(jsonFiles);
  });
});

// טעינת תוכן של קובץ JSON בודד
app.get("/songs/:filename", (req, res) => {
  const filePath = path.join(jsonDirectory, req.params.filename);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("שגיאה בקריאת הקובץ");
    }
    res.json(JSON.parse(data));
  });
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`שרת פועל על http://localhost:${PORT}`);
});
