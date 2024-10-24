import { defineStore } from "pinia";
import listItems from '@/assets/sneakers.json'

export const useProducts = defineStore('products', {
    state: () => {
        return {
            list: listItems.map(obj => ({
                ...obj,
                isFavorite: false,
                isAdded: false,
              }))
        }
    },
    actions: {
        addToFavorites(id) {
            this.list = this.list.map(item => {
                if (id === item.id) {                  
                  alert(!item.isFavorite ? 'Добавить в избраное ?' : 'Удалить из избраного ?')               
                  return {
                    ...item,
                    isFavorite: !item.isFavorite,
                  }
                }
                return item
              })
        }
      
    }
})