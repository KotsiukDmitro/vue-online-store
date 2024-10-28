<script setup>
import { computed } from 'vue'
import CartItem from './CartItem.vue'
import { useCartStore } from '@/stores/cart';


const cartStore = useCartStore()
const productsInCart = computed(() => cartStore.list.filter(item => cartStore.isAdded(item.id)))

</script>

<template>
  <div class="flex flex-col gap-5" v-auto-animate>
    <CartItem
      v-for="item in productsInCart"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :price="item.price"
      :image-url="item.imageUrl"

    />
  </div>
</template>

