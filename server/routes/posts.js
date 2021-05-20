import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This Display with url along with /posts");
});

export default router;
