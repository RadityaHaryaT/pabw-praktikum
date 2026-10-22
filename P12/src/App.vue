<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

 <div class="page">
    <header>
        <input type="checkbox" id="tema" class="pengalih-tema">
        <label for="tema" class="tombol-tema">Tema Terang / Gelap </label>
    <div class ="header-baris">
    <h1>Game Terbaik Berdasarkan Pengalaman Pribadi </h1>
        <nav aria-label="Utama"></nav>
        <nav class ="navbar">
        <ul class ="nav-links">
            <li><a href="#bagian-1">Daftar Game</a></li>
            <li><a href="#bagian-2">Tambah Game</a></li>
            <li><a href="#bagian-3">Tentang Saya</a></li>
        </ul>
        </nav>
    </div>
    </header>
 
    <div class="isi">
        <section id="bagian-1" class="sisi">
          <h2>Daftar Game</h2>
          
          <div id="filter" class="baris-filter">
              <button type="button" data-kategori="semua" class="aktif">Semua</button>
              <button type="button" data-kategori="Mobile">Mobile</button>
              <button type="button" data-kategori="PC/Console">PC/Console</button>
              <button type="button" id="atur-ulang">Atur Ulang</button>
          </div>
            <p id="muat" hidden>memuat data...</p>
          <div class="kartu">
            <table class="tabel-game">
              <thead> 
                <tr>
                  <th scope="col">Nama Game</th>
                  <th scope="col">Tahun</th>
                  <th scope="col">Rating (/10)</th>
                  <th scope="col">Favorit</th>
                </tr>
              </thead>
                <tbody id="daftar-game"></tbody>
            </table>
          </div>
          <div class="galeri">
            <figure class="kartu">
              <img src="/public/Gambar_Clair_Obscure.webp" 
                alt = "poster game Clair Obscur: Expedition 33 yang memperlihatkan sekelompok karakter berhadapan dengan struktur raksasa" width="320" height="120" loading="lazy">
              <div class="kartu__kaki">
                <figcaption>(Gambar 1) Clair Obscure : Expedition 33</figcaption>
              </div>
            </figure>
            
            <figure class="kartu">
              <img src="/public/Gambar_mobile_legends.jpg" 
              alt = "poster game Mobile Legend : Bang Bang yang memperlihatkan karakter pada game sedang memanah." width="320" height="120" loading="lazy">
              <div class="kartu__kaki">
                <figcaption>(Gambar 2) Mobile Legend : Bang Bang</figcaption>
              </div>
            </figure>
            </div>
              <p id ="pesan-Kosong" hidden>Tidak ada data game yang sesuai dengan filter ini</p>
            
        </section>
       <section id="bagian-2" class="utama">
          <h2>Tambah Game</h2>
          <form action="/Simpan" method="post" novalidate id="form-game" class="kartu">
            <div class="form-kolom">
              <label for="nama-game">Nama Game</label>
              <input type="text" id="nama-game" name="Nama Game" required>
              <span class="pesan-galat">Nama game wajib diisi.</span>
            </div>
            
            <div class="form-kolom">
              <label for="tahun-rilis">Tahun Rilis</label>
              <input type="number" id="tahun-rilis" name="Tahun Rilis" required>
              <span class="pesan-galat">Tahun RIlis Game wajib diisi.</span>
            </div>
            
            <div class="form-kolom">
              <label for="rating">Rating</label>
              <input type="number" id="rating" name="rating" min="1" max="10" required>
              <span class="pesan-galat">Rating wajib diisi angka 1 - 10.</span>
            </div>
            
            <button type="submit">Simpan</button>
          </form>
        </section>
      </div>

   
 
<footer>
    <section id="bagian-3">
    Raditya Harya Triatmaja
    25523170 
    2026/2027
    </section>
</footer>
</div>
  
</template>
