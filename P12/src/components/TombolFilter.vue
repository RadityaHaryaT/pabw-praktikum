<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div id="filter" class="baris-filter">
    <button 
      type="button" 
      data-kategori="semua" 
      :class="{ aktif: state.kategoriAktif === 'semua' }"
      @click="pilihKategori('semua')"
    >
      Semua
    </button>
    <button 
      type="button" 
      data-kategori="Mobile" 
      :class="{ aktif: state.kategoriAktif === 'Mobile' }"
      @click="pilihKategori('Mobile')"
    >
      Mobile
    </button>
    <button 
      type="button" 
      data-kategori="PC/Console" 
      :class="{ aktif: state.kategoriAktif === 'PC/Console' }"
      @click="pilihKategori('PC/Console')"
    >
      PC/Console
    </button>
    <button type="button" id="atur-ulang" @click="aturUlang">
      Atur Ulang
    </button>
  </div>
</template>