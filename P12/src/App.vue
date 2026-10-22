<script setup>
import { onMounted, watch } from 'vue'
import { state, simpan, muat, pulihkan, isiGame } from './state.js'
import { ambilGame } from './api.js'
import { profil } from './data.js'

import KepalaProfil from './components/KepalaProfil.vue'
import DaftarGame from './components/DaftarGame.vue'
import FormGame from './components/FormGame.vue'

onMounted(async () => {
  pulihkan(muat())
  try {
    const data = await ambilGame()
    isiGame(data)
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
    console.error(galat.message)
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />
    <div class="isi">
      <DaftarGame />
      <FormGame />
    </div>
    <footer>
      <section id="bagian-3">
        Raditya Harya Triatmaja · 25523170 · 2026/2027
      </section>
    </footer>
  </div>
</template>