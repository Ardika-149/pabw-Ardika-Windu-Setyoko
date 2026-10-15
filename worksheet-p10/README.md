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
