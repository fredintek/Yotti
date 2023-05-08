const dotenv = require("dotenv");

// configure Dotenv
dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");

const app = require("./app");

// DATABASE CONNECTION GOES HERE

// SERVER STARTER
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
