import { pilihKategori, tambahFavorit, aturUlang } from "./state.js";

export function pasangPendengar() {
  const containerfilter = document.querySelector("#filter");
  if (containerfilter) {
    containerfilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;
      const kategori = tombol.getAttribute("data-kategori")?.toLowerCase();
      pilihKategori(kategori);
    });
  }

  const wadahTabel = document.querySelector("#wadah-tabel");
  if (wadahTabel) {
    wadahTabel.addEventListener("click", (event) => {
      const tombolFav = event.target.closest(".favorit");
      if (!tombolFav) return;
      const id = Number(tombolFav.dataset.id);
      tambahFavorit(id);
    });
  }

  const tombolReset = document.querySelector("#atur-ulang");
  if (tombolReset) {
    tombolReset.addEventListener("click", () => {
      aturUlang();
    });
  }
}
