
import { ambilGame } from "./api.js";
import { isiGame, pulihkan, muat } from "./state.js";
import { tampilkanGalat, aturMemuat } from "./dom.js";
import { pasangPendengar } from "./events.js";

async function mulai() {
  pulihkan(muat());
  pasangPendengar();
  aturMemuat(true);

  try {
    const data = await ambilGame();
    isiGame(data);
  } catch (galat) {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang.");
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

mulai();