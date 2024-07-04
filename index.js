const express = require("express");
const fs = require("fs");
const path = require("path");

const port = 3001;
const app = express();

const filesFolder = path.join(__dirname, "files");

app.get("/", (req, res) => {
  fs.readdir(filesFolder, (err, files) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "unable to read folder " + filesFolder });
    }
    res.status(200).json({ files });
  });
});

app.get("/files/:name", (req, res) => {
  const name = req.params.name;
  fs.readFile(name, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "unable to read file " + name });
    }
    res.json({
      data,
    });
  });
});

app.listen(port, () => {
  console.log("server is listening on port " + port);
});
