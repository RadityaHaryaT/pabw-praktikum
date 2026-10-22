<script setup>
import { ref } from 'vue'

const namaGame = ref('')
const tahunRilis = ref('')
const rating = ref('')

function simpanGame() {
  if (!namaGame.value.trim()) return
  console.log('Form berhasil dikirim:', {
    nama: namaGame.value,
    tahun: tahunRilis.value,
    rating: rating.value
  })
}
</script>

<template>
  <section id="bagian-2" class="utama">
    <h2>Tambah Game</h2>
    <form @submit.prevent="simpanGame" novalidate id="form-game" class="kartu">
      <div class="form-kolom">
        <label for="nama-game">Nama Game</label>
        <input type="text" id="nama-game" v-model="namaGame" required />
      </div>
      
      <div class="form-kolom">
        <label for="tahun-rilis">Tahun Rilis</label>
        <input type="number" id="tahun-rilis" v-model="tahunRilis" required />
      </div>
      
      <div class="form-kolom">
        <label for="rating">Rating</label>
        <input type="number" id="rating" v-model="rating" min="1" max="10" required />
      </div>
      
      <button type="submit">Simpan</button>
    </form>
  </section>
</template>