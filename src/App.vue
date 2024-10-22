<script setup>
import { computed, provide, ref, watch } from 'vue'
import TheHeader from './components/TheHeader.vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'
import listItems from '@/assets/sneakers.json'
import RequestFilter from './components/RequestFilter.vue'
import { useDrawer } from './stores/drawer'

const filter = ref({})
const store = useDrawer()
const isOpen = computed(() => store.isOpen)
const cart = ref([])

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

const listItemsFilter = ref(
  listItems
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

    .map(obj => ({
      ...obj,
      isFavorite: false,
      isAdded: false,
    }))
)

const addToFavorites = favorite => {
  // alert('Добавить в избраное ?')
  listItemsFilter.value = listItemsFilter.value.map(item => {
    if (favorite.id === item.id) {
      return {
        ...item,
        isFavorite: !item.isFavorite,
        favoriteId: favorite.id,
      }
    }
    return item
  })
}

const removeFromCart = (item)=> {
  cart.value.splice(cart.value.indexOf(item), 1)
    alert('Удален из корзины')
    item.isAdded = false
}

const addDelCart = item => {
  if (!item.isAdded) {
    cart.value.push(item)
    alert('Добавлен в корзину')
    item.isAdded = true
  }else{
    cart.value.splice(cart.value.indexOf(item), 1)
    alert('Удален из корзины')
    item.isAdded = false
  }
}

const totalPrice = computed(()=> cart.value.reduce((acc, item)=> acc + item.price, 0)) 

const createOrder = ()=> {  
  alert('Заказ отправлен ...')  
  cart.value.map(item=> item.isAdded = false)
  cart.value = []
}


provide('cart', {cart, addDelCart, removeFromCart})
</script>

<template>
  <div
    class="w-4/5 m-auto bg-white min-h-screen rounded-xl shadow-xl mt-10 mb-10"
  >
    <Drawer v-if="isOpen" :totalPrice="totalPrice" @createOrder="createOrder"/>
    <TheHeader :totalPrice="totalPrice"/>
    <div class="p-10">
      <div class="flex justify-between items-center mb-5">
        <h2 class="text-3xl font-bold mb-5">Все кроссовки</h2>
        <RequestFilter v-model="filter" v-if="listItems.length" />
      </div>

      <CardList :listItems="listItemsFilter" @addToFavorites="addToFavorites" @addDelCart="addDelCart" />
    </div>
  </div>
</template>

<style scoped>
</style>
