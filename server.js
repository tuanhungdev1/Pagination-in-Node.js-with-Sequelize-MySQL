const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home Page");
});

const db = require("./models/index");

db.sequelize
  .sync()
  .then(() => {
    console.log("Connect Database Sussuces...");
  })
  .catch((err) => {
    console.log("Connecting Reject :(");
  });

require("./routes/tutorial.routes")(app);
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server start in PORT ${PORT}`);
});
