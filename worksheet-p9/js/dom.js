console.log("dom.js berhasil dimuat");
// js/dom.js atau bagian render di app.js/dom.js
import { daftarBarang } from "./app.js";

const wadah = document.querySelector("#wadah-tabel");

function buatKartuBarang(proyek) {
  const tr = document.createElement("tr");

  const tdKode = document.createElement("td");
  tdKode.textContent = proyek.kode;

  const tdNama = document.createElement("td");
  tdNama.textContent = proyek.nama;

  const tdSatuan = document.createElement("td");
  tdSatuan.textContent = proyek.satuan || "pcs";

  const tdJumlah = document.createElement("td");
  tdJumlah.textContent = proyek.jumlah;

  tr.append(tdKode, tdNama, tdSatuan, tdJumlah);
  return tr;
}

function render(daftar) {
  wadah.textContent = "";

  daftar.forEach((proyek) => {
    wadah.append(buatKartuBarang(proyek));
  });
}

render(daftarBarang);
