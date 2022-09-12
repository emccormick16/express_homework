const dummyData = require("./dummyData");
const broken = require("./endpoints/broken");
const postList = require("./endpoints/postList");
const postDetails = require("./endpoints/postDetails");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const static = express.static(path.join(__dirname, "public"));

app.use(static);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const posts = dummyData.list();
  res.send(postList(posts));
});

app.get("/health", (req, res) => {
  res.send("Server is online!");
});

app.get("/:id", (req, res) => {
  const post = dummyData.find(req.params.id);
  if (!post.Id) {
    let err = new Error();
    next(err);
  } else res.send(postDetails(post));
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
