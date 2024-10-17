<script setup>
import TheHeader from './components/TheHeader.vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue';
</script>

<template>
    
  <div
    class="w-4/5 m-auto bg-white min-h-screen rounded-xl shadow-xl mt-10 mb-10"
  >
  <Drawer />
    <TheHeader />
    <div class="p-10">
      <h2 class="text-3xl font-bold mb-5">Все кроссовки</h2>
      <CardList />
    </div>
  </div>
</template>

<style scoped>
</style>
