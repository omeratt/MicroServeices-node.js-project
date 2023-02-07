// const express = require("express");
// const cors = require("cors");
import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  const color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  res.status(200).send({ color });
});

export default app;
