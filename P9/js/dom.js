const wadah = document.querySelector("#daftar");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;      // teks, bukan HTML
  return li;
}

wadah.textContent ="";
daftarProyek.forEach((proyek) => wadah.append(buatKartu(proyek)));
