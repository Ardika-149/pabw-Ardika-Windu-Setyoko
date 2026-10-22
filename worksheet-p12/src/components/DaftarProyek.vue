<template>
  <section class="utama" id="daftar-barang">
    <h2>Daftar Barang</h2>

    <!-- Memanggil komponen TombolFilter -->
    <TombolFilter />

    <button
      type="button"
      id="atur-ulang"
      style="margin-bottom: 12px; background: #b00020; color: white"
    >
      Atur Ulang
    </button>
    <p id="pesan-kosong" hidden>
      Maaf, data atau kategori barang tidak ditemukan.
    </p>
    <p id="muat" hidden>Memuat data...</p>

    <div class="tabel-wrapper">
      <table>
        <caption>
          Stok Barang Saat Ini
        </caption>
        <thead>
          <tr>
            <th scope="col">Penambahan Barang</th>
            <th scope="col">Daftar Barang</th>
            <th scope="col">Stok Barang</th>
            <th scope="col">Jumlah</th>
            <th scope="col">Favorit</th>
          </tr>
        </thead>
        <tbody id="wadah-tabel"></tbody>
      </table>
    </div>
    <figure>
      <img
        src="/Stok Barang.webP"
        alt="Tumpukan mie instan, tepung serbaguna, dan gula kristal di rak stok"
        width="500"
        height="360"
        loading="lazy"
      />
      <figcaption>Stok barang usaha bersama di rak penyimpanan.</figcaption>
    </figure>
  </section>
</template>

<script setup>
import TombolFilter from "./TombolFilter.vue";
</script>
