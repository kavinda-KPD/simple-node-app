require("dotenv").config(); // Add this line at the top

const express = require("express");
const app = express();
const port = process.env.PORT || 4000; // Fallback to 4000 if PORT is not set

app.get("/", (req, res) => {
  res.send("Hello World 2.0!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
