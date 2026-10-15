const wadah = document.querySelector("#daftar-game");
const pesanKosong = document.querySelector("#pesan-Kosong");
const muatEl = document.querySelector("#muat");
const barisFilter = document.querySelector("#filter");

function buatBarisGame(game) {
  const tr = document.createElement("tr");

  const tdNama = document.createElement("td");
  tdNama.textContent = game.judul;

  const tdTahun = document.createElement("td");
  tdTahun.textContent = game.tahun || "-";

  const tdRating = document.createElement("td");
  tdRating.textContent = game.rating || "-";

  tr.append(tdNama, tdTahun, tdRating);
  return tr;
}

export function render(daftar) {
  if (!wadah) return;
  wadah.textContent = ""; 

  if (!daftar || daftar.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent = "Tidak ada data game yang sesuai.";
      pesanKosong.hidden = false;
    }
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;
  daftar.forEach((game) => wadah.append(buatBarisGame(game)));
}

export function aturMemuat(aktif) {
  if (muatEl) muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = "";
  if (pesanKosong) {
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
  }
}

export function pasangFilter(daftar) {
  if (!barisFilter) return;
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;                

    const kategori = tombol.dataset.kategori;
    const terpilih = daftar.filter(
      (game) => kategori === "semua" || game.kategori === kategori
    );

    render(terpilih);
    tandaiTombolAktif(tombol);
  });
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}