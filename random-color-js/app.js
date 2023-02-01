const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  const color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  res.send({ color });
});

app.listen(9000, () => {
  console.log("Server is running on http://localhost:9000");
});
