const ALAMAT = 'data/daftarGame.json';

export async function ambilGame(){
   try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) throw new Error('status ' + respons.status);
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}

const teks = `[
  {
    "id": 1,
    "judul": "Clair Obscure : Expedition 33",
    "tahun": 2025,
    "rating": 9,
    "kategori": "PC/Console"
  },
  {
    "id": 2,
    "judul": "Mobile Legend : Bang Bang",
    "tahun": 2016,
    "rating": 7,
    "kategori": "Mobile"
  },
  {
    "id": 3,
    "judul": "ROBLOX",
    "tahun": 2006,
    "rating": 5,
    "kategori": "PC/Console"
  }
]`;

const data = JSON.parse(teks);

console.log(data);
console.log(data[0].judul);
  
const badan = JSON.stringify(data);
console.log(typeof badan); // string