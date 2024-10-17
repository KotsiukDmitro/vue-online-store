<template>
  <div>
    <div class="fixed h-full w-full top-0 left-0 bg-black opacity-50 z-10"></div>
    <div class="fixed top-0 h-full w-1/4 right-0 z-20 bg-white">
      <div class="flex justify-between p-5 items-center gap-5 border-b border-slate-500">
        <h2 class="text-xl font-bold">Корзина</h2>
        <div class="text-3xl font-bold text-red-700 cursor-pointer hover:scale-125 transition">&times;</div>
      </div>
      <div class="px-5 py-10">
        <CartItem />
      </div>
      
    </div>
  </div>
</template>

<script setup>
import CartItem from './CartItem.vue';

</script>

<style scoped>
</style>