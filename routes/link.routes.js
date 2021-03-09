const { Router } = require("express");
const { model } = require("mongoose");
const Link = require("../models/Link");
const router = Router();

router.post("/generate", async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

router.get("/", async (req, res) => {
  try {
    const links = await Link.find({ owner: null });
    res.json(links);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const links = await Link.findById({ owner: null });
    res.json(links);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
