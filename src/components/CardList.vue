<script setup>
import Card from './Card.vue'

defineProps({
  listItems: Array,
})

const emit = defineEmits(['addToFavorites', 'addDelCart'])


</script>

<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <Card
      v-for="item in listItems"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :onFavorite="()=> emit('addToFavorites', item)"
      :isFavorite="item.isFavorite"
      :addDelCart="()=> emit('addDelCart', item)"
      :isAdded="item.isAdded"
    />
  </div>
</template>
