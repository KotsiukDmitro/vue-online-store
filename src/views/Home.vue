<script setup>
import RequestFilter from '@/components/RequestFilter.vue';
import listItems from '@/assets/sneakers.json'
import CardList from '@/components/CardList.vue';
import { ref, computed, inject, watch} from 'vue';

const filter = ref({})
const listProducts = ref(
  listItems.map(obj => ({
    ...obj,
    isFavorite: false,
    isAdded: false,
  }))
)

// Вариант, если делать запрос с бэка
// import axios from 'axios'
// import { onMounted, ref } from 'vue';
// const listItems = ref([])
// onMounted( async() => {
// try {
//   const {data} = await axios.get('url')
//   listItems.value = data
// } catch (error) {
//   console.log(error);
// }
// })

const { cart } = inject('cart')

const listItemsFilter = computed(() =>
  listProducts.value
    .filter(item => {
      if (filter.value.name) {
        return item.title
          .toLowerCase()
          .includes(filter.value.name.toLowerCase().trim())
      }
      return item
    })
    .sort((a, b) => {
      if (filter.value.sortBy === 'priceMin') {
        return a.price - b.price
      }
      if (filter.value.sortBy === 'priceMax') {
        return b.price - a.price
      }
      return
    })
)

const addToFavorites = favorite => {
  listProducts.value = listProducts.value.map(item => {
    if (favorite.id === item.id) {
      // alert(!item.isFavorite ? 'Добавить в избраное ?' : 'Удалить из избраного ?')
      return {
        ...item,
        isFavorite: !item.isFavorite,
        favoriteId: favorite.id,
      }
      alert('Добавить в избраное ?')
    }
    return item
  })
}

const addDelCart = item => {
  if (!item.isAdded) {
    cart.value.push(item)
    // alert('Добавлен в корзину')
    item.isAdded = true
  } else {
    cart.value.splice(cart.value.indexOf(item), 1)
    // alert('Удален из корзины')
    item.isAdded = false
  }
}

watch(
  cart,
  () => {
    listProducts.value = listProducts.value.map(item => ({
      ...item,
      isAdded: cart.value.some(cartItem => cartItem.id === item.id),
    }))
  },
  { immediate: true, deep: true }
)

</script>

<template>
  <div>
      <div class="flex justify-between items-center mb-5">
        <h2 class="text-3xl font-bold mb-5">Все кроссовки</h2>
        <RequestFilter v-model="filter" v-if="listItems.length" />
      </div>

      <CardList
        :listItems="listItemsFilter"
        @addToFavorites="addToFavorites"
        @addDelCart="addDelCart"
      />
  </div>
</template>


