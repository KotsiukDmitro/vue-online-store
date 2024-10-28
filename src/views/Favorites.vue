<script setup>
import { computed} from 'vue';
import CardList from '@/components/CardList.vue';
import { useProducts } from '@/stores/products';


const store = useProducts()
const listFavorites = computed(() => store.list.filter(item => store.isFavorite(item.id)))

</script>

<template>
    <div>
        <div class="relative">
            <router-link to="/" class="absolute text-blue-500 hover:scale-110">&lArr; на главную</router-link>
        </div>
       
    </div>
    <h2 class="mt-10 text-3xl text-center text-green-500 font-bold mb-10">Избраные товары</h2>
    <p v-if="!listFavorites.length" class="text-center text-2xl">Здесь будут отображаться избрыные товары</p>
    <CardList
        :listItems="listFavorites"
      />
    
</template>