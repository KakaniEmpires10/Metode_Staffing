const express = require("express");
const router = express.Router();
const year = new Date().getFullYear();

let hasilNINA = [];

router
  .route("/")
  .get((req, res) => {
    res.render("NINA", {
      year: year,
      title: "NINA Formula",
      hasilNINA: hasilNINA,
    });
  })
  .post((req, res) => {
    // variabel
    let tt = req.body.tempatTidur;
    let bor = req.body.bor;
    let a = 6;
    let b = a * tt;
    let c = b * 365;
    let d = Math.round((c * bor) / 100);

    // Formula
    let hasil = Math.round(d / 1878);
    hasilNINA = [];
    hasilNINA.push(hasil);
    console.log(hasilNINA);
    res.redirect("/nina");
  });

module.exports = router;
