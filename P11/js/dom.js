import { saring } from "./data.js";

const wadah = document.querySelector("#daftar-game");
const pesanKosong = document.querySelector("#pesan-Kosong");
const muatEl = document.querySelector("#muat");

function buatBarisGame(game, favorit) {
  const tr = document.createElement("tr");

  const tdNama = document.createElement("td");
  tdNama.textContent = game.judul;

  const tdTahun = document.createElement("td");
  tdTahun.textContent = game.tahun || "-";

  const tdRating = document.createElement("td");
  tdRating.textContent = game.rating || "-";

  const tdFav = document.createElement("td");
  const tombolFav = document.createElement("button");
  tombolFav.className = "favorit";
  tombolFav.dataset.id = game.id;
  tombolFav.textContent = favorit.includes(game.id) ? "★" : "☆";
  tdFav.append(tombolFav);

  tr.append(tdNama, tdTahun, tdRating, tdFav);
  return tr;
}

export function render(state) {
  if (!wadah) return;
  wadah.textContent = "";

  const tampil = saring(state.daftarGame, state.kategoriAktif);

  if (tampil.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent = "Tidak ada data game yang sesuai dengan filter ini";
      pesanKosong.hidden = false;
    }
    tandaiTombolAktif(state.kategoriAktif);
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;
  tampil.forEach((game) => wadah.append(buatBarisGame(game, state.favorit)));
  tandaiTombolAktif(state.kategoriAktif);
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

function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    if (tombol.dataset.kategori) {
      tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
    }
  });
}