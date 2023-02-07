const express = require("express");
const router = express.Router();
const year = new Date().getFullYear();

let hasilPPNI = [];

router.route("/").get((req, res) => {
  res.render("PPNI", { year: year, title: "PPNI Formula", hasilPPNI : hasilPPNI });
}).post((req, res) => {
  // variable
  let tt = parseInt(req.body.tempatTidur);
  let bor = parseInt(req.body.bor);
  let a = 6;
  let minggu = 52;
  let hari = 7;
  let perkalian = (tt * bor) / 100;
  console.log(perkalian);

  // Formula
  let pembilang = (a * minggu * hari) * perkalian;
  console.log(pembilang);
  let pembagi = 41 * 40;
  console.log(pembagi);
  let rumus = Math.round(pembilang / pembagi);
  console.log(rumus);

  let persen = (rumus * 25) / 100;
  let hasil = Math.round(rumus + persen);
  console.log(hasil);

  hasilPPNI = [];
  hasilPPNI.push(hasil);
  console.log(hasilPPNI);

  res.redirect("/ppni");
});

module.exports = router;
