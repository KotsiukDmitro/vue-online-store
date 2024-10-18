<script setup>
import CardItemList from './CardItemList.vue'
</script>

<template>
  <div>
    <div
      class="fixed h-full w-full top-0 left-0 bg-black opacity-50 z-10"
    ></div>
    <div class="fixed top-0 h-full w-1/4 right-0 z-20 bg-white px-5">
      <div
        class="flex justify-between p-5 items-center gap-5 border-b border-slate-500"
      >
        <h2 class="text-xl font-bold">Корзина</h2>
        <div
          class="text-3xl font-bold text-red-700 cursor-pointer hover:scale-125 transition"
        >
          &times;
        </div>
      </div>
      <div class="py-10 gap-3">
        <CardItemList />
        <CardItemList />
        <CardItemList />
      </div>
  

      <footer class="flex flex-col gap-5 mb-5 mt-auto">
        <div class="flex gap-2">
          <span>Общая сумма:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>1000 $</b>
        </div>
        <div class="flex gap-2">
          <span>Налог 5%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>50 $</b>
        </div>
        <button
          disabled=""
          class="bg-lime-500 w-full rounded-xl py-3 text-white font-bold text-2xl tracking-wider hover:bg-lime-600 transition disabled:bg-slate-300"
        >
          Оформить заказ
        </button>
      </footer>
    </div>
  </div>
</template>


