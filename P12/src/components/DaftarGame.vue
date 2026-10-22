<script setup>
import { computed } from 'vue'
import TombolFilter from './TombolFilter.vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const gameTampil = computed(() => saring(state.daftarGame, state.kategoriAktif))
</script>

<template>
  <section id="bagian-1" class="sisi">
    <h2>Daftar Game</h2>
    
    <TombolFilter />

    <p v-if="state.memuat" id="muat">Memuat data...</p>
    <p v-else-if="state.galat">{{ state.galat }}</p>
    <p v-else-if="gameTampil.length === 0" id="pesan-Kosong">
      Tidak ada data game yang sesuai dengan filter ini
    </p>

    <div v-else class="kartu">
      <table class="tabel-game">
        <caption>Daftar Game Pilihan</caption>
        <thead>
          <tr>
            <th scope="col">Nama Game</th>
            <th scope="col">Tahun</th>
            <th scope="col">Rating (/10)</th>
            <th scope="col">Favorit</th>
          </tr>
        </thead>
        <tbody id="daftar-game">
          <tr v-for="game in gameTampil" :key="game.id">
            <td>{{ game.judul }}</td>
            <td>{{ game.tahun || '-' }}</td>
            <td>{{ game.rating || '-' }}</td>
            <td>
              <button class="favorit" @click="tambahFavorit(game.id)">
                {{ state.favorit.includes(game.id) ? '★' : '☆' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="galeri">
      <figure class="kartu">
        <img src="/Gambar_Clair_Obscure.webp" alt="poster game Clair Obscur" width="320" height="120" loading="lazy" />
        <div class="kartu__kaki">
          <figcaption>(Gambar 1) Clair Obscure : Expedition 33</figcaption>
        </div>
      </figure>
      <figure class="kartu">
        <img src="/Gambar_mobile_legends.jpg" alt="poster game Mobile Legend" width="320" height="120" loading="lazy" />
        <div class="kartu__kaki">
          <figcaption>(Gambar 2) Mobile Legend : Bang Bang</figcaption>
        </div>
      </figure>
    </div>
  </section>
</template>