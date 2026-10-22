<template>
  <input type="checkbox" id="tema" class="pengalih-tema" />
  <label for="tema" class="tombol-tema">Tema Gelap</label>

  <div class="page">
    <header class="navbar">
      <h1>Usaha Bersama</h1>
      <nav>
        <a href="#daftar-barang">Daftar Barang</a>
        <a href="#tambah-barang">Tambah Barang</a>
        <a href="#stok">Stok Ketersediaan Barang</a>
      </nav>
    </header>

    <main class="isi">
      <aside class="sisi">
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
      </aside>

      <section class="utama" id="daftar-barang">
        <h2>Daftar Barang</h2>

        <div id="filter">
          <button data-kategori="semua" class="aktif">Semua</button>
          <button data-kategori="makanan">Makanan</button>
          <button data-kategori="bahan-pokok">Bahan Pokok</button>
          <button data-kategori="minuman">Minuman</button>
        </div>

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
          <!-- PERHATIKAN GARIS MIRING (/) DI BAWAH INI -->
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

      <section class="bawah" id="stok">
        <h2>Produk</h2>

        <div class="galeri">
          <article class="kartu">
            <!-- TAMBAH GARIS MIRING (/) -->
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
            <!-- TAMBAH GARIS MIRING (/) -->
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
            <!-- TAMBAH GARIS MIRING (/) -->
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

<script setup></script>
