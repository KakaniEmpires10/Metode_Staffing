const express = require("express");
const bodyParser = require("body-parser");
// const _ = require("loadash");
const icuRoute = require ("./routes/ICU")
const gilliesRoute = require ("./routes/Gillie");
const ninaRoute = require ("./routes/NINA");
const ppniRoute = require ("./routes/PPNI");
const ugdRoute = require ("./routes/UGD");

let port = process.env.PORT;
if (port == null || port == "") {
  port = "3050";
}

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const year = new Date().getFullYear();

app.use("/icu", icuRoute);
app.use("/gillies", gilliesRoute);
app.use("/nina", ninaRoute);
app.use("/ppni", ppniRoute);
app.use("/ugd", ugdRoute);


app.get("/", (req, res) => {
  res.render("index", { year: year, title: "Nursing Staffing Management" });
});

app.get("/about", (req, res) => {
  res.render("About", { year: year, title: "About Page" });
});

app.listen(port, () => {
  console.log(`you are connected to port : ${port}`);
});
