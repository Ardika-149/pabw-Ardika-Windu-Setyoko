README — Daftar Barang Usaha Bersama

## worksheet-p3 ##
Halaman web sederhana untuk menampilkan daftar dan stok barang usaha bersama. Dibuat untuk latihan Pertemuan 3 PABW 2026/2027.
Isi: tabel daftar barang, gambar stok, form tambah barang, navigasi antar section.
Cara pakai: simpan profil.html dan Stok Barang.webP dalam satu folder, buka di browser, F5 untuk reload.
Catatan: masih HTML dasar, beberapa atribut dan struktur tabel bisa dirapikan lagi.

Pengakuan Penggunaan AI 
Saya menggunakan AI untuk menjelaskan tentang penggunaan serta fungsi HTML 



## worksheet-p4 ##
Halaman web sederhana untuk menampilkan daftar dan stok barang usaha bersama. Dibuat untuk latihan Pertemuan 3 & 4 PABW 2026/2027.
Isi: tabel daftar barang, gambar stok, katalog produk (kartu), form tambah barang, navigasi antar section, tema gelap.
Cara pakai: simpan profil.html, semua file .css, dan gambar dalam satu folder worksheet-p4/, buka di browser, Ctrl+Shift+R untuk hard reload.

Pengakuan Penggunaan AI 

Saya menggunakan AI untuk membantu mengecek code apakah ada yang typo atau memperjelas fungsi dari codecode yang ada
pada template di worksheet.





## worksheet-p5 ##
Repositori ini berisi hasil pengerjaan Worksheet Pertemuan 5, lanjutan dari Pertemuan 4. Halaman profil.html 
disusun ulang tata letaknya memakai Flexbox dan Grid. Isi, warna, dan design token dari
P4 tetap dipakai — yang berubah hanya CSS pengatur posisi,
plus satu wadah pembungkus .page di HTML.
worksheet-p5/
├── profil.html
├── tokens.css
├── base.css
├── layout.css
├── komponen.css
├── tema.css
└── README.md

Catatan Penggunaan AI
Saya menggunakan AI sebagai alat bantu belajar, seperti:

- Menjelaskan konsep flexbox dan grid ketika saya bingung
- Membantu mencari penyebab tampilan meluber di lebar 360 px dan 1280 px, lalu saya praktikkan sendiri di DevTools
- Menjelaskan fungsi properti seperti float, margin, fr, minmax(), dan auto-fit



## worksheet-p6 ##
Repositori ini berisi hasil pengerjaan Worksheet Pertemuan 3 sampai 6. Halaman profil.html terus dipakai dan
disempurnakan tiap pertemuan — bukan halaman baru. 
Dari HTML semantik, design token, layout flexbox/grid, sampai responsif mobile-first.
worksheet-p6/
├── Profil.html
├── tokens.css
├── base.css
├── layout.css
├── komponen.css
├── tema.css
├── responsif.css
├── 360px.png
├── 768px.png
├── 1280px.png
└── README.md
Catatan Penggunaan AI
AI saya pakai buat nanya kalau stuck, bukan buat nyalin. Contohnya:
- Kenapa halaman gak ke-load CSS-nya waktu dibuka lewat file:// (ternyata harus pakai Live Server)
- Bagian mana di layout.css yang bikin scroll ke samping di 360 px
- Kenapa kartu produk jadi satu huruf per baris di desktop (ternyata 12rem di responsif.css, saya ganti jadi 5rem)


## worksheet-p8 ##
Repositori ini berisi hasil pengerjaan Worksheet Pertemuan 3 sampai 7. Halaman profil.html terus dipakai dan disempurnakan
tiap pertemuan — bukan halaman baru. 
Dari HTML semantik, design token, layout flexbox/grid, responsif mobile-first, sampai JavaScript dasar.
worksheet-p7/
├── profil.html
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── komponen.css
│   ├── tema.css
│   └── responsif.css
├── js/
│   └── app.js
├── 360px.png
├── 768px.png
├── 1280px.png
├── Galat.png
├── Setelah diperbaiki.png
├── data tabel.png
└── README.md

Pengungkapan Penggunaan AI
Saya sempat bingung kenapa typeof belumDibuat hasilnya "undefined", padahal variabelnya belum pernah saya tulis di kode. Setelah tanya AI, saya baru paham:
- undefined itu tipe data bawaan JavaScript untuk variabel yang sudah dideklarasikan tapi belum diberi nilai,
  atau properti yang tidak ada di sebuah object.
- Kalau variabelnya benar-benar belum pernah ditulis sama sekali (bukan let belumDibuat;),
   maka yang muncul bukan undefined melainkan ReferenceError.
- Karena di kode saya tulis console.log(typeof belumDibuat) tanpa deklarasi, JavaScript tidak error — typeof
  aman dipakai pada nama yang belum ada, dan hasilnya "undefined".


## worksheet-p9 ##
Repositori ini berisi hasil pengerjaan Worksheet Pertemuan 9 mengenai manipulasi DOM, penanganan event (*event delegation*),
dan pembuatan validasi form kustom. Halaman profil.html terus dipakai dan disempurnakan tiap pertemuan — bukan halaman baru.
worksheet-p9/
├── profil.html
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── komponen.css
│   ├── tema.css
│   └── responsif.css
├── js/
│   ├── app.js
│   └── dom.js
├── galat.png
├── setelah di perbaiki.png
├── data tabel.png
└── README.md

Pengungkapan Penggunaan AI
Saya sempat bingung kenapa waktu tombol filter diklik, daftar kartu proyeknya malah bertambah banyak dan berlipat ganda.
Setelah tanya AI, saya baru paham:
- Kalau fungsi render tidak mengosongkan wadah (seperti memakai `textContent = ''` atau `replaceChildren()`)
  di baris pertamanya, data yang lama tidak akan terhapus, melainkan menumpuk terus dengan hasil saringan yang baru.
- Selain itu, saya juga jadi paham kenapa `querySelector` bisa menghasilkan `null` — ternyata selain karena salah ketik huruf pada id atau kelas,
  urutan penempatan tag `<script>` di bagian bawah HTML sangat menentukan apakah elemen sudah siap dibaca oleh JavaScript.
- Untuk validasi form, penggunaan atribut `novalidate` di HTML yang dipadukan dengan `event.preventDefault()` di JavaScript sangat penting
  agar peramban tidak melakukan *refresh* halaman secara otomatis sebelum data input tervalidasi dengan benar.

## worksheet-p10

Repositori ini berisi hasil pengerjaan Worksheet Pertemuan 10 mengenai pemrograman asinkron (asynchronous JavaScript), modularisasi kode, pengambilan data menggunakan fetch API, serta penanganan galat (error handling). Halaman profil.html terus dipakai dan disempurnakan dari pertemuan sebelumnya.
├── profil.html
├── css/
│ ├── tokens.css
│ ├── base.css
│ ├── layout.css
│ ├── komponen.css
│ ├── tema.css
│ └── responsif.css
├── js/
│ ├── app.js
│ └── dom.js
├── data
│ └── proyek.json
├── galat.png
├── Kosong.png
├── Loading.png
├── Succes State.png
├── Error State & Console.png
├── setelah di perbaiki.png
├── data tabel.png
└── README.md

Pengungkapan Penggunaan AI
Saya sempat bingung kenapa waktu alamat file JSON-nya sengaja disalahkan, konsol malah mengeluarkan status 404 tapi aplikasinya
tidak masuk ke blok `catch`. Setelah tanya AI, saya baru paham:

- Kalau fungsi `fetch()` itu secara bawaan tidak akan menganggap status 404 atau 500 sebagai galat jaringan.
  Makanya kita wajib menulis pengecekan manual seperti `if (!respons.ok) throw new Error(...)` supaya error-nya bisa tertangkap oleh blok `try/catch`.
- Untuk penanganan keadaan kosong (*empty state*), pengecekan panjang larik seperti `if (daftar.length === 0)` sangat penting di modul
 `dom.js` agar halaman web      tetap informatif bagi pengguna meskipun data dari server bernilai kosong (`[]`)


## worksheet-p11
Repositori ini berisi hasil pengerjaan Worksheet Pertemuan 11 mengenai modularisasi kode (memecah berkas JavaScript menjadi lima modul yang jelas tugasnya), pemisahan keadaan aplikasi (state) dari tampilan DOM, serta penyimpanan data di sisi klien menggunakan localStorage. Halaman profil.html terus dipakai dan disempurnakan dari pertemuan sebelumnya.
├── profil.html 
├── css/ 
│ ├── tokens.css 
│ ├── base.css 
│ ├── layout.css 
│ ├── komponen.css 
│ ├── tema.css 
│ └── responsif.css 
├── js/ 
│ ├── api.js 
│ ├── data.js 
│ ├── state.js 
│ ├── dom.js 
│ ├── events.js 
│ ├── app.js 
│ ├── app-P10.js (arsip P10)
│ └── dom-P10.js (arsip P10)
├── data 
│ └── proyek.json 
├── E-simpanan-rusak.png 
├── E-halaman-pulih.png 
└── README.md

Pengungkapan Penggunaan AI
Pada pertemuan 11 ini saya lumayan terbantu oleh AI saat debugging karena ada banyak kendala error pada project saya dan saya sangat bingung,
Tetapi AI disini murni saya pakai sebagai teman berdiskusi bukan diperuntuk an copas kode dari noll
- Error bikin tabel hilang: Waktu nambahin fitur tombol bintang, tiba-tiba tabelnya kosong dan di Console muncul error merah Cannot read properties of undefined     (reading 'includes'). Saya bingung banget. Setelah tanya AI, ternyata masalahnya sepele: saya lupa nambahin properti favorit: [] di dalam objek state.js.          Makanya pas kode dom.js nyari data favorit, hasilnya undefined.
