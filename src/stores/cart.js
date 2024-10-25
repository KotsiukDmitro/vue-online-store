import { defineStore } from "pinia";
import { ref, watch, computed } from "vue";
import listItems from '@/assets/sneakers.json'


export const useCartStore = defineStore('cart', ()=> {

    const list = ref(listItems)
       const cart = ref(JSON.parse(localStorage.getItem('productsInCart')) || [])
       const isAdded = (productId) => cart.value.includes(productId)

       const addToCart = (productId) => {
       if(!cart.value.includes(productId)) {
        cart.value.push(productId)
          }
        }

        const removeFromCart = (productId) => {
            cart.value = cart.value.filter((id) => id !== productId);
        }

        const toggle = (productId) => {
          if (isAdded(productId)) {
            removeFromCart(productId)
          } else {
            addToCart(productId)
          }
        }
        const productsInCart = ref(list.value.filter(item => isAdded(item.id)))
        const totalPrice = ()=> productsInCart.value.reduce((acc, item) => acc + item.price, 0)
        

          const createOrder = (productId) => {
            // alert('Заказ успешно отправлен ...')
            // if (isAdded(productId)) {
            //     removeFromCart(productId)
            //   }
            // cart.value = []
          }
      
        watch(cart, (newProduct) => {
          localStorage.setItem('productsInCart', JSON.stringify(newProduct))
        }, { deep: true })

        return {
          list,
          cart,
          isAdded,
          toggle,
          totalPrice,
          createOrder,
          removeFromCart
        }
})