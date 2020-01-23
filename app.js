const sslRedirect = require("heroku-ssl-redirect");
const express = require("express");
const serverless = require("serverless-http");
const app = express();

const router = express.Router();

//Let Express know we want to use files from "public" directory
app.use(express.static("public"));
//Let Express know we want to use .ejs files
app.set("view engine", "ejs");

//enable ssl redirect
app.use(sslRedirect());

//Netlify router setup - the router needs to know it lives on route "app.js"
app.use("/.netlift/functions/app", router);

//Routes
router.get("/", function(req, res) {
  res.render("home");
});

// app.listen(process.env.PORT, process.env.IP, function() {
//   console.log("Plumworks is ON");
// });

module.exports = app;
module.exports.handler = serverless(app);
