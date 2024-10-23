<script setup>
import { useDrawer } from '@/stores/drawer';

defineProps({
  totalPrice: Number
})


const store = useDrawer()
const openDrawer = ()=> {
    store.open()}

</script>

<template>
        <header class="flex justify-between border-b border-slate-300 px-10 py-5">
        <div class="flex items-center gap-4">
            <img src="/logo.png" alt="logo" class="w-10"/>
            <div>
                <h2 class="text-xl font-bold uppercase">Vue sneakers</h2>
                <p class="text-sl.
                ">Магазин кроссовок</p>
            </div>
        </div>
        <ul class="flex items-center gap-7">
            <li @click.prevent="openDrawer" class="flex items-center gap-2 text-gray-500 hover:text-black font-bold cursor-pointer">
                <img src="/cart.svg" alt="cart" />
                <span>{{ totalPrice }} $</span>
            </li>
            <li class="flex items-center gap-2 text-gray-500 hover:text-black font-bold cursor-pointer">
                <img src="/heart.svg" alt="heart" />
                <router-link to="favorites"><span>Избраное</span></router-link>
            </li>
            <li class="flex items-center gap-2 text-gray-500 hover:text-black font-bold cursor-pointer">
                <img src="/profile.svg" alt="profile" />
                <router-link to="profile"><span>Профиль</span></router-link>
            </li>
        </ul>
    </header>
</template>

<style lang="postcss">
.nav-link--active {
  @apply text-blue-500
}
</style>

