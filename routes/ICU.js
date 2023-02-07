const express = require("express");
const router = express.Router();
const year = new Date().getFullYear();

var hasilICU = [];

router
  .route("/")
  .get((req, res) => {
    res.render("ICU", {
      year: year,
      title: "ICU Formula",
      hasilICU: hasilICU
    });
  })
  .post((req, res) => {
    // Variabel
    let a = 11;
    let bor = req.body.bor;
    let tt = req.body.tempatTidur;
    let jk = 8;
    let hk = 255;
    let b = (bor / 100) * tt;

    // Formula
    let hasil = Math.round((a * b * 365) / (hk * jk));
    
    hasilICU = [];
    hasilICU.push(hasil);
    console.log(hasilICU);
    
    res.redirect("/icu");
  });

module.exports = router;
