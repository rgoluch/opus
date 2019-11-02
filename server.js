const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

//Mongo URI
mongodb+srv://opus:<password>@cluster0-hhj2f.gcp.mongodb.net/test?retryWrites=true&w=majority

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
