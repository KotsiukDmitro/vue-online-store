<script setup>
import { useCartStore } from '@/stores/cart';

const props = defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
})

const cartStore = useCartStore()
const removeFromCart = ()=> {
  cartStore.removeFromCart(props.id)}

</script>

<template>
  <div class="mb-3">
    <div
      class="flex items-center gap-5 border border-slate-200 p-4 pt-7 rounded-xl relative"
    >
      <img :src="imageUrl" :alt="title" class="w-20" />
      <div class="flex flex-col">
        <p>{{ title }}</p>
        <b>{{ price }} $</b>
      </div>
      <div
        @click="removeFromCart"
        class="absolute top-2 right-2 cursor-pointer hover:red-500 transition hover:scale-125 w-6"     
      >
        <img src="/close.svg" />
      </div>
    </div>
  </div>
</template>

