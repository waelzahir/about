import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = 3001;

app.get("/", (req:any, res) => {
  res.send("m2awad");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});