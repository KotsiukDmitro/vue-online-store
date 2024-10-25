<script setup>
import { useDrawer } from '@/stores/drawer'
import { useCartStore } from '@/stores/cart';
import { computed } from 'vue';

// defineProps({
//   totalPrice: Number,
// })

const store = useDrawer()
const openDrawer = () => {
  store.open()
}

const cartStore = useCartStore()
const totalPrice = computed(() => cartStore.totalPrice())

</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-5">
    <div >
      <router-link to="/" class="flex items-center gap-4">
        <img src="/logo.png" alt="logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">Vue sneakers</h2>
          <p class="text-sl.">Магазин кроссовок</p>
        </div>
      </router-link>
    </div>
    <ul class="flex items-center gap-7">
      <li
        @click.prevent="openDrawer"
        class="flex items-center gap-2 text-gray-500 hover:text-black font-bold cursor-pointer"
      >
        <img src="/cart.svg" alt="cart" />
        <span>{{ totalPrice }} $</span>
      </li>
      <li>
        <router-link
          to="favorites"
          class="flex items-center gap-2 text-gray-500 hover:text-black font-bold cursor-pointer"
        >
          <img src="/heart.svg" alt="heart" />
          <span>Избраное</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="profile"
          class="flex items-center gap-2 text-gray-500 hover:text-black font-bold cursor-pointer"
        >
          <img src="/profile.svg" alt="profile" />
          <span>Профиль</span>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<style lang="postcss">
.nav-link--active {
  @apply text-blue-500;
}
</style>

