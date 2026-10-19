import { saring } from "./data.js";

const wadah = document.querySelector("#wadah-tabel");
const muatEl = document.querySelector("#muat");
const pesanKosong = document.querySelector("#pesan-kosong");

export function aturMemuat(aktif) {
  if (muatEl) muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = "";
  if (pesanKosong) {
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
  }
}

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

  const tdFavorit = document.createElement("td");
  const tombolFav = document.createElement("button");
  tombolFav.className = "favorit";
  tombolFav.dataset.id = proyek.id;
  tombolFav.textContent = favorit.includes(proyek.id) ? "★" : "☆";
  tdFavorit.appendChild(tombolFav);

  tr.append(tdKode, tdNama, tdSatuan, tdJumlah, tdFavorit);
  return tr;
}

function tandaiTombolAktif(kategoriAktif) {
  const tombolFilter = document.querySelectorAll("#filter button");
  tombolFilter.forEach((tombol) => {
    if (tombol.dataset.kategori === kategoriAktif) {
      tombol.classList.add("aktif");
    } else {
      tombol.classList.remove("aktif");
    }
  });
}
export function render(state) {
  wadah.textContent = "";
  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (tampil.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent =
        "Maaf, data atau kategori barang tidak ditemukan.";
      pesanKosong.hidden = false;
    }
    return;
  }
  if (pesanKosong) pesanKosong.hidden = true;

  tampil.forEach((proyek) => {
    wadah.append(buatKartuBarang(proyek));
  });
}
