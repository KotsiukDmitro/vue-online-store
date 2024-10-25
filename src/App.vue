<script setup>
import { computed, provide, ref, watch } from 'vue'
import TheHeader from './components/TheHeader.vue'
import Drawer from './components/Drawer.vue'
import { useDrawer } from './stores/drawer'

const store = useDrawer()
const isOpen = computed(() => store.isOpen)
// const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])

// const removeFromCart = item => {
//   cart.value.splice(cart.value.indexOf(item), 1)
//   alert('Удален из корзины')
//   item.isAdded = false
// }

// const totalPrice = computed(() =>
//   cart.value.reduce((acc, item) => acc + item.price, 0)
// )

// const createOrder = () => {
//   alert('Заказ успешно отправлен ...')
//   cart.value.map(item => (item.isAdded = false))
//   cart.value = []
// }

// watch(
//   cart,
//   () => {
//     localStorage.setItem('cart', JSON.stringify(cart.value))
//   },
//   { deep: true }
// )

// provide('cart', { cart, removeFromCart })
</script>

<template>
  <div
    class="w-4/5 m-auto bg-white min-h-screen rounded-xl shadow-xl mt-10 mb-10"
  >
    <!-- <Drawer v-if="isOpen" :totalPrice="totalPrice" @createOrder="createOrder" />
    <TheHeader :totalPrice="totalPrice" /> -->
    <Drawer v-if="isOpen" />
    <TheHeader/>
    <div class="p-10">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
