<template>
  <section id="tambah-barang">
    <h2>Tambah Barang</h2>
    <form action="#" method="post" novalidate>
      <div class="form-kolom">
        <label for="kode">Kode Barang</label>
        <input type="text" id="kode" name="kode" required />
        <span class="pesan-galat">Kolom ini belum sah.</span>
      </div>
      <div class="form-kolom">
        <label for="nama">Nama</label>
        <input type="text" id="nama" name="nama" required />
        <span class="pesan-galat">Kolom ini belum sah.</span>
      </div>
      <div class="form-kolom">
        <label for="jumlah">Jumlah Stok</label>
        <input type="number" id="jumlah" name="jumlah" min="1" required />
        <span class="pesan-galat">Kolom ini belum sah.</span>
      </div>
      <div>
        <button type="submit">Simpan</button>
      </div>
    </form>
  </section>
</template>
