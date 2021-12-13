require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const connectDb = require("./config/db");
const defaultData = require("./default");

const newsRouter = require("./routes/news");

connectDb();
defaultData();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/api", newsRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hi this si working");
  });
}

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
