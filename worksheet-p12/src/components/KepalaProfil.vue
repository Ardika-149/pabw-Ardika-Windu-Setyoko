<template>
  <header class="navbar">
    <h1>{{ props.profil.nama }}</h1>
    <nav>
      <a href="#daftar-barang">Daftar Barang</a>
      <a href="#tambah-barang">Tambah Barang</a>
      <a href="#stok">Stok Ketersediaan Barang</a>
    </nav>
  </header>
</template>

<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
});
</script>
