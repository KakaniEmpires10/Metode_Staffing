const express = require("express");
const router = express.Router();
const year = new Date().getFullYear();

let hasilGillie = [];

// tidak langsung
var tidakLangsung = 1;
var penyuluhan = 0.25;

router
  .route("/")
  .get((req, res) => {
    res.render("Gillies", {
      year: year,
      title: "Gillies Formula",
      hasilGillie: hasilGillie,
    });
  })
  .post((req, res) => {
    let submitValue = req.body.submit;

    // variabel
    let pTotal = parseInt(req.body.pasienTotal);
    let pParsial = parseInt(req.body.pasienParsial);
    let pMinimal = parseInt(req.body.pasienMinimal);
    let totalPasien = pTotal + pParsial + pMinimal;

    if (submitValue === "rendah") {
      // langsung
      let total = 5;
      let parsial = 3;
      let minimal = 1;

      // cari Jam Keperwatan Per hari
      let jamKepLangsung =
        pTotal * total + pParsial * parsial + pMinimal * minimal;
      let jamKepTidakLangsung = totalPasien * tidakLangsung;
      let jamPenyuluhan = totalPasien * penyuluhan;

      let jamKepHari = Math.round(
        (jamKepLangsung + jamKepTidakLangsung + jamPenyuluhan) / totalPasien
      );

      // formula
      let kepDibutuhkanPerTahun = jamKepHari * totalPasien * 365;
      let kepDiberikanPerTahun = 289 * 8;

      let hasil = kepDibutuhkanPerTahun / kepDiberikanPerTahun;
      let jumlahPerawatDibutuhkan = Math.round(hasil);

      let duaPuluhPersenDariHasil = Math.round(
        (jumlahPerawatDibutuhkan * 20) / 100
      );

      let jumlahSeluruh = duaPuluhPersenDariHasil + jumlahPerawatDibutuhkan;

      hasilGillie = [];
      hasilGillie.push(jumlahSeluruh);

      res.redirect("/gillies");
      
    } else if (submitValue === "tinggi") {
      let total = 7;
      let parsial = 5;
      let minimal = 2;

      // cari Jam Keperwatan Per hari
      let jamKepLangsung =
        pTotal * total + pParsial * parsial + pMinimal * minimal;
      let jamKepTidakLangsung = totalPasien * tidakLangsung;
      let jamPenyuluhan = totalPasien * penyuluhan;

      let jamKepHari = Math.round(
        (jamKepLangsung + jamKepTidakLangsung + jamPenyuluhan) / totalPasien
      );

      // formula
      let kepDibutuhkanPerTahun = jamKepHari * totalPasien * 365;
      let kepDiberikanPerTahun = 289 * 8;

      let hasil = kepDibutuhkanPerTahun / kepDiberikanPerTahun;
      let jumlahPerawatDibutuhkan = Math.round(hasil);

      let duaPuluhPersenDariHasil = Math.round(
        (jumlahPerawatDibutuhkan * 20) / 100
      );

      let jumlahSeluruh = duaPuluhPersenDariHasil + jumlahPerawatDibutuhkan;

      hasilGillie = [];
      hasilGillie.push(jumlahSeluruh);

      res.redirect("/gillies");
    }
  });

module.exports = router;
