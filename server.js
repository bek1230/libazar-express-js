const express = require("express");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const app = express();
const url = require("./src/url.json");
const axios = require("axios");

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Libazar")
      .replace(
        /__DESCRIPTION__/g,
        "Tezkor yetkazib berish xizmati  Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi."
      )
      .replace(
        /__META_DESCRIPTION__/g,
        "Tezkor yetkazib berish xizmati  Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi."
      )
      .replace(
        /__META_OG_IMAGE__/g,
        "https://firebasestorage.googleapis.com/v0/b/libazar.appspot.com/o/images%2Fquloq.jpeg?alt=media&token=efcf6f59-1a84-4512-b562-d6bcfe329df7"
      );
    res.send(data);
  });
});

app.get("/openCard", (req, res) => {
  const postId = req.query.id.slice(0, 36);
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
app.get("/login", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Libazar")
      .replace(
        /__DESCRIPTION__/g,
        "Tezkor yetkazib berish xizmati  Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi."
      )
      .replace(
        /__META_DESCRIPTION__/g,
        "Tezkor yetkazib berish xizmati  Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi."
      )
      .replace(
        /__META_OG_IMAGE__/g,
        "https://firebasestorage.googleapis.com/v0/b/libazar.appspot.com/o/images%2Fquloq.jpeg?alt=media&token=efcf6f59-1a84-4512-b562-d6bcfe329df7"
      );
    res.send(data);
  });
});
app.get("/profile", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Libazar")
      .replace(
        /__DESCRIPTION__/g,
        "Tezkor yetkazib berish xizmati  Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi."
      )
      .replace(
        /__META_DESCRIPTION__/g,
        "Tezkor yetkazib berish xizmati  Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi."
      )
      .replace(
        /__META_OG_IMAGE__/g,
        "https://firebasestorage.googleapis.com/v0/b/libazar.appspot.com/o/images%2Fquloq.jpeg?alt=media&token=efcf6f59-1a84-4512-b562-d6bcfe329df7"
      );
    res.send(data);
  });
});
app.get("/about", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Libazar")
      .replace(
        /__DESCRIPTION__/g,
        "Tezkor yetkazib berish xizmati  Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi."
      )
      .replace(
        /__META_DESCRIPTION__/g,
        "Tezkor yetkazib berish xizmati  Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi."
      )
      .replace(
        /__META_OG_IMAGE__/g,
        "https://firebasestorage.googleapis.com/v0/b/libazar.appspot.com/o/images%2Fquloq.jpeg?alt=media&token=efcf6f59-1a84-4512-b562-d6bcfe329df7"
      );
    res.send(data);
  });
});
app.get("/fowarids", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Libazar")
      .replace(
        /__DESCRIPTION__/g,
        "Tezkor yetkazib berish xizmati  Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi."
      )
      .replace(
        /__META_DESCRIPTION__/g,
        "Tezkor yetkazib berish xizmati  Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi."
      )
      .replace(
        /__META_OG_IMAGE__/g,
        "https://firebasestorage.googleapis.com/v0/b/libazar.appspot.com/o/images%2Fquloq.jpeg?alt=media&token=efcf6f59-1a84-4512-b562-d6bcfe329df7"
      );
    res.send(data);
  });
});
app.get("/products", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Libazar")
      .replace(
        /__DESCRIPTION__/g,
        "Tezkor yetkazib berish xizmati  Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi."
      )
      .replace(
        /__META_DESCRIPTION__/g,
        "Tezkor yetkazib berish xizmati  Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi."
      )
      .replace(
        /__META_OG_IMAGE__/g,
        "https://firebasestorage.googleapis.com/v0/b/libazar.appspot.com/o/images%2Fquloq.jpeg?alt=media&token=efcf6f59-1a84-4512-b562-d6bcfe329df7"
      );
    res.send(data);
  });
});
app.use("/assets", express.static("./assets/"));
// app.configure(function() {
//   app.use('/', express.static(__dirname + '/'));
// });
// app.get('*', function(request, response, next) {
//   response.sendfile(__dirname + './build/index.html');
// });
app.use(express.static(path.join(__dirname, "./build")));
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
