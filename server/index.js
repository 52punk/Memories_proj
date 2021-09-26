import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
import postRouter from "./routes/posts.js";
// MIDDLEWARES

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRouter);

const CONNECTION_URL =
  "mongodb+srv://52punk:52punk2017@cluster0.b19hh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running in port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
