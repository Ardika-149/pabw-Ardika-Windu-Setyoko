<template>
  <div id="filter">
    <button
      @click="pilihKategori('semua')"
      :class="{ aktif: state.kategoriAktif === 'semua' }"
    >
      Semua
    </button>
    <button
      @click="pilihKategori('makanan')"
      :class="{ aktif: state.kategoriAktif === 'makanan' }"
    >
      Makanan
    </button>
    <button
      @click="pilihKategori('bahan-pokok')"
      :class="{ aktif: state.kategoriAktif === 'bahan-pokok' }"
    >
      Bahan Pokok
    </button>
    <button
      @click="pilihKategori('minuman')"
      :class="{ aktif: state.kategoriAktif === 'minuman' }"
    >
      Minuman
    </button>
  </div>
</template>

<script setup>
import { state, pilihKategori } from "../state.js";
</script>
