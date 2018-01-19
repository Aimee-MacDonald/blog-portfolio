const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => res.render("index"));

app.get("/portfolio", (req, res) => res.render("portfolio"));
app.get("/blog", (req, res) => res.render("blog"));
app.listen(process.env.PORT || 8080);
