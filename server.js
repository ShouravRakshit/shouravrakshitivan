const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
// static files access
app.use(express.static(path.join(__dirname, "./client/dist")));

// routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
