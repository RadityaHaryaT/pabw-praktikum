const profil = {
  nama: "Raditya Harya Triatmaja",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"]
};
const jumlahGame = 3;

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran}) {
    return `${nama} - ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarGame = [
  { judul: "Clair Obscure : Expedition 33", tahun: 2025, rating: 9, kategori: "PC/Console" },
  { judul: "Mobile Legend : Bang Bang", tahun: 2016, rating: 7, kategori: "Mobile" },
  { judul: "ROBLOX", tahun: 2006, rating: 5, kategori: "PC/Console" }
];

console.table(profil.keahlian);
console.table(daftarGame);

const selesai = daftarGame.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarGame.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);

let filterAktif = "semua";
let proyekTersaring = daftarGame.filter((proyek) => proyek.selesai);

console.log(`Filter aktif: ${filterAktif}`);
console.table(proyekTersaring);

window.daftarGame = daftarGame;