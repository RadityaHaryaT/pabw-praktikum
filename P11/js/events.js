
import { pilihKategori, tambahFavorit, aturUlang } from "./state.js";

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol || !tombol.dataset.kategori) return;
      pilihKategori(tombol.dataset.kategori);
    });
  }

  const wadah = document.querySelector("#daftar-game");
  if (wadah) {
    wadah.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      tambahFavorit(Number(tombol.dataset.id));
    });
  }

  const tombolAturUlang = document.querySelector("#atur-ulang");
  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }
}