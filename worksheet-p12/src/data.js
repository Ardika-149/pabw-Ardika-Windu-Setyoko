  nama: "Ardika Windu Setyoko",
  peran: "Pemilik Usaha Bersama",
};

export function saring(daftar, kategori) {
  if (kategori === "semua" || !kategori) {
    return daftar;
  }
  return daftar.filter(
    (barang) => barang.kategori?.toLowerCase() === kategori.toLowerCase(),
  );
}
