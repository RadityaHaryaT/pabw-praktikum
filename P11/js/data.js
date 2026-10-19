export const profil = {
  nama: "Raditya Harya Triatmaja",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"]
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} - ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  if (!daftar) return [];
  return daftar.filter(
    (game) => kategori === "semua" || game.kategori === kategori
  );
}