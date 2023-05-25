const express = require("express");
const router = express.Router();
const products = require("../productList.json");

// all product list
router.get("/", (req, res) => {
  res.json(products);
});

// single product List
router.get("/:id", (req, res) => {
  const { id } = req.params;
  try {
    const itemExist = products.some((item) => item.id == id);
    if (itemExist) {
      const singleItem = products.find((item) => item.id == id);
      return res.status(200).json(singleItem);
    }
  } catch (error) {
    console.log(error);
  }
  return res.status(404).json({ message: `item with ${id} does not exist` });
});

module.exports = router;
