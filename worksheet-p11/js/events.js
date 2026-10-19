import { pilihKategori } from "./state.js";

export function pasangPendengar() {
  const containerfilter = document.querySelector("#filter");
  if (containerfilter) {
    containerfilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;

      const kategori = tombol.getAttribute("data-kategori")?.toLowerCase();
      console.log("Kategori dipilih:", kategori);
      pilihKategori(kategori);
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
}
