<template>
  <input type="checkbox" id="tema" class="pengalih-tema" />
  <label for="tema" class="tombol-tema">Tema Gelap</label>

  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi">
      <aside class="sisi">
        <FormKontak />
      </aside>

      <DaftarProyek />

      <section class="bawah" id="stok">
        <h2>Produk</h2>
        <div class="galeri">
          <article class="kartu">
            <img src="/foto-mie-instan.webp" alt="Mie Instan" />
            <div class="kartu__isi">
              <h3 class="kartu__judul">Mie Instan</h3>
              <p>Rp.3.000</p>
            </div>
            <div class="kartu__kaki">
              <button>Beli</button>
            </div>
          </article>

          <article class="kartu">
            <img src="/foto-tepung-kemasan.webp" alt="Tepung Serbaguna" />
            <div class="kartu__isi">
              <h3 class="kartu__judul">Tepung Serbaguna</h3>
              <p>Rp.15.000</p>
            </div>
            <div class="kartu__kaki">
              <button>Beli</button>
            </div>
          </article>

          <article class="kartu">
            <img src="/foto-gula-kemasan.webp" alt="Gula Kristal" />
            <div class="kartu__isi">
              <h3 class="kartu__judul">Gula Kristal</h3>
              <p>Rp.10.000</p>
            </div>
            <div class="kartu__kaki">
              <button>Beli</button>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer id="owner">
      <p>Ardika Windu Setyoko</p>
      <p>NIM 25523207</p>
      <p>2026</p>
    </footer>
  </div>
</template>

<script setup>
import { profil } from "./data.js";
import KepalaProfil from "./components/KepalaProfil.vue";
import FormKontak from "./components/FormKontak.vue";
import DaftarProyek from "./components/DaftarProyek.vue";
</script>
