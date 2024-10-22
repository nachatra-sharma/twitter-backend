const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const connectToDB = require("./config/database");
const apiRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log("server is up and running on PORT:", PORT);
  await connectToDB(process.env.MONGODBURL);
});
