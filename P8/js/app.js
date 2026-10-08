const profil = {
  nama: "Raditya Harya Triatmaja",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"]
};
const jumlahProyek = 3;

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran}) {
    return `${nama} - ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
  { judul: "Aplikasi Kasir", tahun: 2026, selesai: true }
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);

let filterAktif = "selesai";
let proyekTersaring = daftarProyek.filter((proyek) => proyek.selesai);

console.log(`Filter aktif: ${filterAktif}`);
console.table(proyekTersaring);

console.log(nilai);