<template>
  <section class="utama" id="daftar-barang">
    <h2>Daftar Barang</h2>

    <TombolFilter />

    <button
      type="button"
      id="atur-ulang"
      style="margin-bottom: 12px; background: #b00020; color: white"
      @click="aturUlang"
    >
      Atur Ulang
    </button>

    <p v-if="state.memuat">Memuat data...</p>
    <p v-else-if="state.galat">{{ state.galat }}</p>
    <p v-else-if="tampil.length === 0">
      Maaf, data atau kategori barang tidak ditemukan.
    </p>

    <div class="tabel-wrapper" v-else>
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
        <tbody id="wadah-tabel">
          <tr v-for="proyek in tampil" :key="proyek.id">
            <td>{{ proyek.kode }}</td>
            <td>{{ proyek.nama }}</td>
            <td>{{ proyek.satuan || "pcs" }}</td>
            <td>{{ proyek.jumlah }}</td>
            <td>
              <button class="favorit" @click="tambahFavorit(proyek.id)">
                {{ state.favorit.includes(proyek.id) ? "★" : "☆" }}
              </button>
            </td>
          </tr>
        </tbody>
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
import { computed } from "vue";
import { state, aturUlang, tambahFavorit } from "../state.js";
import { saring } from "../data.js";
import TombolFilter from "./TombolFilter.vue";

const tampil = computed(() => saring(state.daftarProyek, state.kategoriAktif));
</script>
