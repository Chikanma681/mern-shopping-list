const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

//@route GET
// desc Get All Items
//@access Public

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

//@route POST
// desc Create a post
//@access Public

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

//@route POST
// desc Create a post
//@access Public

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((res) => res.status(404).json({ success: false }));
});

module.exports = router;
