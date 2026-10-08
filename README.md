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
└── README.md

Pengungkapan Penggunaan AI
Saya sempat bingung kenapa typeof belumDibuat hasilnya "undefined", padahal variabelnya belum pernah saya tulis di kode. Setelah tanya AI, saya baru paham:
- undefined itu tipe data bawaan JavaScript untuk variabel yang sudah dideklarasikan tapi belum diberi nilai,
  atau properti yang tidak ada di sebuah object.
- Kalau variabelnya benar-benar belum pernah ditulis sama sekali (bukan let belumDibuat;),
   maka yang muncul bukan undefined melainkan ReferenceError.
- Karena di kode saya tulis console.log(typeof belumDibuat) tanpa deklarasi, JavaScript tidak error — typeof
  aman dipakai pada nama yang belum ada, dan hasilnya "undefined".

