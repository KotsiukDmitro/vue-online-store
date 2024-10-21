<script setup>
import Card from './Card.vue'

defineProps({
  listItems: Array,
})

const emit = defineEmits(['addToFavorites'])

const onAdd = () => {
  alert('Добавлено в корзину?')
}
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      v-for="item in listItems"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :onAdd="onAdd"
      :onFavorite="()=> emit('addToFavorites', item)"
      :isFavorite="item.isFavorite"
    />
  </div>
</template>
