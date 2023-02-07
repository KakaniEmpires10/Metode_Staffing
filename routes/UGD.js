const express = require("express");
const router = express.Router();
const year = new Date().getFullYear();

let hasilUgd = [];

router.route("/").get((req, res) => {
  res.render("UGD", { year: year, title: "UGD Formula", hasilUgd : hasilUgd });
}).post ((req, res) => {
  // variable
  let a1 = 87;
  let a2 = 71;
  let a3 = 34;
  let pGadar = req.body.gawatDarurat;
  let pMendesak = req.body.mendesak;
  let pTMendesak = req.body.tidakMendesak;
  let waktuShift = 45;
  let jamKerja = 8;

  // formula
  let d = (a1 * pGadar) + (a2 * pMendesak) + (a3 * pTMendesak) + waktuShift;
  console.log(d);
  let pembilang = d * 365;
  let pembagi = 255 * jamKerja;
  let hasilAwal = Math.round((pembilang / 60) / pembagi);
  let hasilTengah = hasilAwal + (Math.round((hasilAwal * 25) / 100)); // ditambah 25 %
  let hasilAkhir = hasilTengah + (Math.round(hasilTengah / 3)); // ditambah yang dibutuhkan per-shift

  hasilUgd = [];
  hasilUgd.push(hasilAkhir);
  res.redirect("/ugd");
});

module.exports = router;
