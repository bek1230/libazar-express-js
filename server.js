const express = require("express");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const app = express();
const url = require("./src/url.json");
const axios = require("axios");
// sacfudsu

app.get("/openCard", (req, res) => {
  const postId = req.query.id;
  console.log("postId=", postId);
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    axios
      .get(url.url + `product/get/${postId}`)
      .then((response) => {
        console.log(response);
        data = data
          .replace(/__TITLE__/g, response.data.data.name)
          .replace(/__DESCRIPTION__/g, response.data.data.description)
          .replace(/__META_DESCRIPTION__/g, response.data.data.description)
          .replace(/__META_OG_IMAGE__/g, response.data.data.imageUrls[0]);
        res.send(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
});
app.use(express.static(path.join(__dirname, "./build")));
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
