require('dotenv').config();
const express = require("express");
const app = express();
const port = 5000;
const router = require("./Routes/auth-router.js");
const connectDb = require("./utils/db.js");

app.use(express.json());

app.use("/api/auth", router);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
