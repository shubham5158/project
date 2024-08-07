require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const authRoute = require("./Routes/auth-router.js");
const contactRoute = require("./Routes/contact-router.js");
const connectDb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
