const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();
// Serves static react filse from the build folder
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


