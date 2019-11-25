var express = require("express");
var app = express();

//Let Express know we want to use files from "public" directory
app.use(express.static("public"));
//Let Express know we want to use .ejs files
app.set("view engine", "ejs");

//Routes
app.get("/", function(req, res) {
  res.render("home");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("The YelpCamp Server Has Started!");
});
