<script setup>
import { useDrawer } from '@/stores/drawer';
import CardItemList from './CardItemList.vue'
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';

// const props = defineProps({
//   totalPrice: Number
// })

// const emit = defineEmits(['createOrder'])

const store = useDrawer()
const closeDrawer = ()=>{
  store.close()
} 

const cartStore = useCartStore()
const totalPrice = computed(()=>cartStore.totalPrice())
const createOrder = cartStore.createOrder()

const vatPrice = computed(()=> Math.round(props.totalPrice*5/100) )

</script>

<template>
  <div>
    <div
      class="fixed h-full w-full top-0 left-0 bg-black opacity-50 z-10"
    ></div>
    <div class="fixed top-0 min-h-full w-1/4 right-0 z-20 bg-white px-5">
      <div
        class="flex justify-between p-5 items-center gap-5 border-b border-slate-500"
      >
        <h2 class="text-xl font-bold">Корзина</h2>
        <div @click.prevent="closeDrawer"
          class="text-3xl font-bold text-red-700 cursor-pointer hover:scale-125 transition"
        >
          &times;
        </div>
      </div>
      <div class="py-10 gap-3">
        <CardItemList />
      </div>
  
      <footer class="flex flex-col gap-5 mb-5 mt-auto" v-if="totalPrice">
        <div class="flex gap-2">
          <span>Общая сумма:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ totalPrice }} $</b>
        </div>
        <div class="flex gap-2">
          <span>Налог 5%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ vatPrice }} $</b>
        </div>
        <button
        @click.prevent="createOrder"         
          class="bg-lime-500 w-full rounded-xl py-3 text-white font-bold text-2xl tracking-wider hover:bg-lime-600 transition disabled:bg-slate-300"
        >
          Оформить заказ
        </button>
      </footer>
      <div v-else class="flex flex-col items-center">
        <h3 class="text-red-500 text-xl">Корзина пуста</h3>
        <img src="/package-icon.png" />
      </div>
    </div>
  </div>
</template>


