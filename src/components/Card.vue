<script setup>

const props = defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onAdd: Function,
  onFavorite: Function,
})
</script>

<template>
  <div
    class="relative flex flex-col w-full border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-1"
  >
    <div class="absolute top-8 left-8">
      <img
        @click="onFavorite"
        :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
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
        @click="onAdd"
        :src="!isAdded ? '/plus.svg' : '/checked.svg'"
        alt="Plus"
      />
    </div>
  </div>
</template>