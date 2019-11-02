const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());

let uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(res => console.log("connected to db"))
  .catch(err => console.log(err));

const partyRouter = require("./routes/party");

app.use("/party", partyRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
