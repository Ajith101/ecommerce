const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const productRoute = require("./routes/productsRouts");

const app = express();
const PORT = process.env.PORT || 4050;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/products", productRoute);

app.listen(PORT, () => {
  console.log(`connected with ${PORT}`);
});
