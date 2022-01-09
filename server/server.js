const dotenv = require('dotenv');
const express = require("express");
const nodes = require('./data/node');
const userRoutes = require('./routes/userRoutes');
const connectDb = require('./config/db');
const path = require('path');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();

const app = express();
connectDb();
app.use(express.json());


app.get("/api/nodes", (req, res) => {
  res.json(nodes)
})

app.use("/api/users", userRoutes);

// --------------------Deployment--------------------------------
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running");
  });
}
// -------------------------------------------------------

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
})
