const dotenv = require('dotenv');
const express = require("express");
const nodes = require('./data/node');
const userRoutes = require('./routes/userRoutes');
const connectDb = require('./config/db');
dotenv.config();

const app = express();
connectDb();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running")
})

app.get("/api/nodes", (req, res) => {
  res.json(nodes)
})

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
})
