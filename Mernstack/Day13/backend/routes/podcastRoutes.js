let express = require("express");
let router = express.Router();
let Podcast = require("../models/Podcast");

// CREATE
router.post("/", async (req, res) => {
  let podcast = new Podcast(req.body);
  let saved = await podcast.save();
  res.json(saved);
});

// READ ALL
router.get("/", async (req, res) => {
  let data = await Podcast.find().sort({ createdAt: -1 });
  res.json(data);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Podcast.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;