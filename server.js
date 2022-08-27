const express = require("express");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const app = express();
// sacfudsu
app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    data = data
      .replace(/__TITLE__/g, "Home Page")
      .replace(/__DESCRIPTION__/g, "Description")
      .replace(/__META_DESCRIPTION__/g, "post.description")
      .replace(/__META_OG_IMAGE__/g, "post.thumbnail")
    res.send(data);
  });
});
app.use(express.static(path.join(__dirname,"./build")))
app.listen(PORT,()=>console.log(`Server listening on ${PORT}`))