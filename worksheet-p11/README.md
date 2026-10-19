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

- Error bikin tabel hilang: Waktu nambahin fitur tombol bintang, tiba-tiba tabelnya kosong dan di Console muncul error merah Cannot read properties of undefined (reading 'includes'). Saya bingung banget. Setelah tanya AI, ternyata masalahnya sepele: saya lupa nambahin properti favorit: [] di dalam objek state.js. Makanya pas kode dom.js nyari data favorit, hasilnya undefined
