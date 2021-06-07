import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import PostRouter from "./routes/posts.js";

const app = express();

// app.use("/posts", PostRouter);  makes error

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/posts", PostRouter);

// Connection URL
const connectionURL =
  "mongodb+srv://rajatarya:rajatarya@cluster0.qpslx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

// Connectiong to MOngoDB
mongoose
  .connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, console.log("Working")))
  .catch(() => console.log("not Working"));
mongoose.set(`useFindAndModify`, false);
