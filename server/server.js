const dotenv = require('dotenv');
const express = require("express");
// const connectDb = require('./config/db');
const path = require('path');
dotenv.config();

const app = express();
// connectDb();
app.use(express.json());

// --------------------Deployment--------------------------------
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running");
  });
}
// -------------------------------------------------------


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
})
