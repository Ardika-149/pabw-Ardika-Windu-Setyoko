## worksheet-p9

Repositori ini berisi hasil pengerjaan Worksheet Pertemuan 9 mengenai manipulasi DOM, penanganan event (_event delegation_),
dan pembuatan validasi form kustom. Halaman profil.html terus dipakai dan disempurnakan tiap pertemuan — bukan halaman baru.
worksheet-p9/
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
  agar peramban tidak melakukan _refresh_ halaman secara otomatis sebelum data input tervalidasi dengan benar.
