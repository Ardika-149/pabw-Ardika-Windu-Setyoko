import { reactive } from "vue";

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = reactive({
  kategoriAktif: "semua",
  daftarProyek: [],
  favorit: [],
  memuat: true,
  galat: "",
});

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit,
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (!isi || isi.versi !== VERSI) return null;
    return isi;
  } catch (galat) {
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return;
  state.kategoriAktif = isi.kategoriAktif;
  state.favorit = isi.favorit;
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) return;
  state.favorit = [...state.favorit, id];
  simpan(state);
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
}
