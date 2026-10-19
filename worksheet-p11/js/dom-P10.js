console.log("dom.js berhasil dimuat");
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

const containerfilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");

if (containerfilter) {
  containerfilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.getAttribute("data-kategori")?.toLowerCase();
    console.log("Kategori dipilih:", kategori);

    let dataSaringan = [];

    if (kategori === "semua" || !kategori) {
      dataSaringan = daftarBarang;
    } else {
      dataSaringan = daftarBarang.filter(
        (barang) => barang.kategori?.toLowerCase() === kategori,
      );
    }

    if (pesanKosong) {
      if (dataSaringan.length === 0) {
        pesanKosong.removeAttribute("hidden");
      } else {
        pesanKosong.setAttribute("hidden", "true");
      }
    }

    render(dataSaringan);
  });
}

const form = document.querySelector("form");
const inputKode = document.querySelector("#kode");
const inputNama = document.querySelector("#nama");
const inputJumlah = document.querySelector("#jumlah");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formSah = true;

    if (!inputKode.value.trim()) {
      inputKode.setAttribute("aria-invalid", "true");
      formSah = false;
    } else {
      inputKode.removeAttribute("aria-invalid");
    }

    if (!inputJumlah.value.trim() || Number(inputJumlah.value) < 1) {
      inputJumlah.setAttribute("aria-invalid", "true");
      formSah = false;
    } else {
      inputJumlah.removeAttribute("aria-invalid");
    }

    if (formSah) {
      console.log("Form sah dan siap dikirim!");
      form.reset();
    }
  });
}
