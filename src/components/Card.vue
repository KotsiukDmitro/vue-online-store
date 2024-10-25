<script setup>
import { useProducts } from '@/stores/products'
import { computed, inject } from 'vue'


const props = defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isAdded: Boolean,
})
const { cart } = inject('cart')
const store = useProducts()
const toggleFavorite = () => store.toggleFavorite(props.id)

const favorite = computed(()=> store.isFavorite(props.id))

const addDelCart = id => {
  store.list = store.list.map(item => {
    if (item.id === id) {
      if (!item.isAdded) {
        cart.value.push(item)
        return {
          ...item,
          isAdded: true,
        }
      } else {
        cart.value.splice(cart.value.indexOf(item), 1)
        return {
          ...item,
          isAdded: false,
        }
      }
    }
    return item
  })
}

</script>

<template>
  <div
    class="relative flex flex-col w-full border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-1"
  >
    <div class="absolute top-8 left-8">
      <img
        @click="toggleFavorite"
        :src="favorite ? '/like-2.svg' : '/like-1.svg'"
        alt="Favorite"
      />
    </div>
    <img :src="imageUrl" alt="Sneaker" class="w-40" />
    <p>{{ title }}</p>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col gap-2">
        <span class="text-slate-300">Цена:</span>
        <span class="font-bold">{{ price }}$</span>
      </div>
      <img
        @click="addDelCart(id)"
        :src="!isAdded ? '/plus.svg' : '/checked.svg'"
        alt="Plus"
      />
    </div>
  </div>
</template>