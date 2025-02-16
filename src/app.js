import express from "express";
import { config } from "./config/config.js";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import { bookRouter } from "./routes/books.route.js";

const app = express();

mongoose.connect(config.dbUrl).then(() => {
  console.log("mongodb server started");
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/books", bookRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express App!" });
});

app.all("*", (req, res, next) => {
  return res.status(404).json({
    status: 404,
    message: "this resource is not available",
  });
});

app.listen(config.port, () => {
  console.log("app is running");
});
