<script setup>
import Card from './Card.vue'

const onAdd = ()=> {
    alert('Добавлено в корзину?')
}

</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      title="Мужские кроссовки Nike"
      imageUrl="/sneakers/sneakers-1.jpg"
      :price="100"
      :onAdd="onAdd"
    />

  </div>
</template>



<style lang="scss" scoped>
</style>