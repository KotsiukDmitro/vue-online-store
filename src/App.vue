<script setup>
import { computed } from 'vue'
import TheHeader from './components/TheHeader.vue'
import Drawer from './components/Drawer.vue'
import { useDrawer } from './stores/drawer'

const store = useDrawer()
const isOpen = computed(() => store.isOpen)
</script>

<template>
  <div class="bg-green-100 py-10">
    <div class="w-4/5 m-auto bg-white min-h-screen rounded-xl shadow-xl">
      <Drawer v-if="isOpen" />
      <TheHeader />
      <div class="p-10">
        <RouterView />
      </div>
    </div>
  </div>
</template>

