import { render } from "./dom.js";

export const state = {
  kategoriAktif: "semua",
  daftarProyek: [],
  favorit: [],
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  render(state);
}
