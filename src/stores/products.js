import { defineStore } from "pinia";
import listItems from '@/assets/sneakers.json'
import { ref, watch } from "vue";


export const useProducts = defineStore('products', ()=> {

       const list = ref(listItems)
       const favoriteProductIds =  ref(JSON.parse(localStorage.getItem('favorites')) || [])
       const isFavorite = (productId) => favoriteProductIds.value.includes(productId)

       const addFavorites = (productId) => {
       if(!favoriteProductIds.value.includes(productId)) {
             favoriteProductIds.value.push(productId)
          }
        }

        const removeFavorite = (productId) => {
          favoriteProductIds.value = favoriteProductIds.value.filter((id) => id !== productId);
        }

        const toggleFavorite = (productId) => {
          if (isFavorite(productId)) {
            removeFavorite(productId)
          } else {
            addFavorites(productId)
          }
        };

        
        watch(favoriteProductIds, (newFavorites) => {
          localStorage.setItem('favorites', JSON.stringify(newFavorites))
        }, { deep: true })

        return {
          list,
          favoriteProductIds,
          isFavorite,
          toggleFavorite
        }
})