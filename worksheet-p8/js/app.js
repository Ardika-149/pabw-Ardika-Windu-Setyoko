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
