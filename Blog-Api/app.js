const express = require("express");
const app = express();
const Post = require("./api/models/posts");
const postsData = new Post();


app.get("/api/posts", (req, res) => {
    const test = {testing: "testing"};
    postsData.add(test);

    res.status(200).send(postsData.get())
});

app.get("/api/posts/:post_id")

app.listen(3000, () => {
    console.log("Listening to http://localhost:3000")
});

