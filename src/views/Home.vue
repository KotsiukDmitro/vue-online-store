<script setup>
import RequestFilter from '@/components/RequestFilter.vue';
import listItems from '@/assets/sneakers.json'
import CardList from '@/components/CardList.vue';
import { ref, computed, inject, watch} from 'vue';
import { useProducts } from '@/stores/products';
import { storeToRefs } from 'pinia';

const filter = ref({})

const store = useProducts()
const {list: listProducts} = storeToRefs(store)

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
      <CardList :listItems="listItemsFilter" />
  </div>
</template>


