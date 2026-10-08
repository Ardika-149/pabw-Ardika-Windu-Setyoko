const nama = "Ardika Windu Setyoko"; // teks
const jumlahProyek = 4; // angka, bukan "3"
let pilihanAktif = "semua"; // akan berubah saat disaring

console.log(typeof nama); // "string"
console.log(typeof jumlahProyek); // "number"
console.log(typeof belumDibuat); // undefined

// Lembar B
const profil = {
  nama: "Ardika Windu Setyoko",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

// bagian C
// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// Lembar D
const daftarBarang = [
  {
    kode: "BRG-01",
    nama: "Mie Instan",
    satuan: "pcs",
    jumlah: 25,
    selesai: true,
  },
  {
    kode: "BRG-02",
    nama: "Tepung Serbaguna",
    satuan: "pcs",
    jumlah: 10,
    selesai: true,
  },
  {
    kode: "BRG-03",
    nama: "Gula Kristal",
    satuan: "pcs",
    jumlah: 5,
    selesai: false,
  },
  {
    kode: "BRG-04",
    nama: "Minyak Goreng",
    satuan: "pcs",
    jumlah: 10,
    selesai: true,
  },
];

console.table(profil.keahlian);
console.table(daftarBarang);

const selesai = daftarBarang.filter((barang) => barang.selesai);
console.table(selesai);

const katalog = daftarBarang.find((barang) => barang.nama === "Katalog Produk");
console.log(katalog);

// bagian E
console.log("Kota:", profil.alamat?.kota);

const tombolTidakAda = document.querySelector("#tombol-tidak-ada");
console.log("Tombol:", tombolTidakAda?.textContent);

const inputJumlah = document.querySelector("#jumlah");
if (inputJumlah) {
  console.log("Input + 1 =", Number(inputJumlah.value) + 1);
}

// periksa dan simpan
