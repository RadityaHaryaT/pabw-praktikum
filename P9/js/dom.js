const wadah = document.querySelector("#daftar-game");

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


function render(daftar) {
  if (!wadah) return;
  
  wadah.textContent = ""; 

  if (daftar.length === 0) {
    if (pesanKosong) pesanKosong.hidden = false;
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;
  

  daftar.forEach((game) => wadah.append(buatBarisGame(game)));
}


const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;                

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarGame.filter(
    (game) => kategori === "semua" || game.kategori === kategori
  );

  render(terpilih);
  tandaiTombolAktif(tombol);
});

function tandaiTombolAktif(tombolAktif){
  document.querySelectorAll("#filter button").forEach((Tombol) => {
    Tombol.classList.toggle("aktif",Tombol === tombolAktif);
  });
}

const pesanKosong = document.querySelector("#pesan-Kosong");

render(daftarGame);


const formGame = document.querySelector("#form-game");


if (formGame) {
  formGame.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const inputNama = document.querySelector("#nama-game");
    if (!inputNama) return;

    const nilaiNama = inputNama.value.trim();

    if (nilaiNama === "") {
      inputNama.setAttribute("aria-invalid", "true");
      return;
    }

    inputNama.setAttribute("aria-invalid", "false");
    console.log("Form berhasil dikirim!");
  });
}