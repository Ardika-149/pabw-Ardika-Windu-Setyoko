export function saring(daftar, kategori) {
  if (kategori === "semua" || !kategori) {
    return daftar;
  }
  return daftar.filter(
    (barang) => barang.kategori?.toLowerCase() === kategori.toLowerCase(),
  );
}
