// import express from "express";
// import cors from "cors";
const express = require("express");
const request = require("supertest");
const cors = require("cors");
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

// import request from "supertest";

describe("integration test : get lists service", () => {
  test("should return all tasks in DB", async () => {
    const res = await request(app).get("/");
    console.log(res.body);
    expect(res.body).not.toBeNull();
    expect(res.status).toBe(200);
  });
});
