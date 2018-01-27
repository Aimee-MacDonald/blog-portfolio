const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.render("index"));
app.get("/portfolio", (req, res) => res.render("portfolio"));
app.get("/blog", (req, res) => res.render("blog"));
app.get("/contact", (req, res) => res.render("contact"));

app.post("/sendMsg", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(process.env.PORT || 8080);
