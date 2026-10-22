<script setup>
const props = defineProps({
  profil: { type: Object, required: true }
})
</script>

<template>
  <header>
    <input type="checkbox" id="tema" class="pengalih-tema" />
    <label for="tema" class="tombol-tema">Tema Terang / Gelap</label>
    <div class="header-baris">
      <h1>Game Terbaik Berdasarkan Pengalaman Pribadi</h1>
      <nav class="navbar">
        <ul class="nav-links">
          <li><a href="#bagian-1">Daftar Game</a></li>
          <li><a href="#bagian-2">Tambah Game</a></li>
          <li><a href="#bagian-3">Tentang Saya</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>