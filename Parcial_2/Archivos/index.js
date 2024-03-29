const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const express = require("express");
const app = express();

app.post("/upload", upload.single("image"), (req, res, next) => {
  res.send("Subida exitosa");
});

app.use((req, res, next) => {
  res.status(404).send("URL not found");
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(3000, (req, res) => {
  console.log("App listening on port 3000!");
});
