const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const parser = require("body-parser");
app.use(parser.json({ limit: "50mb" }));
app.use(
  parser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
require("dotenv").config();
const webrouter = require("./routes/routes");
mongoose
  .connect(process.env.SERVER)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(process.env.PORT, () => {
  console.log("Server lsitening");
});

app.use("/api", webrouter);
