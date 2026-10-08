const nama = "Ardika Windu Setyoko"; // teks
const jumlahProyek = 4; // angka, bukan "3"
let pilihanAktif = "semua"; // akan berubah saat disaring

console.log(typeof nama); // "string"
console.log(typeof jumlahProyek); // "number"
console.log(typeof belumDibuat); // undefined

const profil = {
  nama: "Ardika Windu Setyoko",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarProyek = [
  { judul: "Usaha Bersama", tahun: 2026, selesai: true },
  { judul: "Mie Instan", tahun: 2026, selesai: false },
  { judul: "tepung Serbaguna", tahun: 2026, selesai: false },
  { judul: "Gula Kristal", tahun: 2026, selesai: false },
  { judul: "Minyak Goreng", tahun: 2026, selesai: false },
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find(
  (proyek) => proyek.judul === "Katalog Produk",
);
console.log(katalog);
