<script setup>
import { ref, computed, watch } from 'vue'

const emits = defineEmits(['update:modelValue'])
const props = defineProps(['modelValue'])

const name = ref(props.modelValue.name)
const sortByPrice = ref(props.modelValue.sortByPrice)

watch([name, sortByPrice], values => {
  emits('update:modelValue', {
    name: values[0],
    sortByPrice: values[1],
  })
})

const isActive = computed(() => name.value || sortByPrice.value)

const reset = () => {
  name.value = ''
  sortByPrice.value = ''
}
</script>

<template>
  <div class="flex gap-5">
    <button v-if="isActive" @click="reset" class="border px-2 rounded-xl">
      Сброс фильтров
    </button>
    <select v-model="sortByPrice" class="py-2 px-3 border rounded-md outline-none">
      <option disabled selected>сортировать по цене</option>
      <option value="priceMin">Цена по возростанию</option>
      <option value="priceMax">Цена по убыванию</option>
    </select>
    <div class="relative">
      <img src="/search.svg" class="absolute top-3.5 left-3" />
      <input
        v-model="name"
        type="text"
        placeholder="Поиск"
        class="border rounded-md py-2 pl-10 pr-2 outline-none focus:border-gray-400"
      />
    </div>
  </div>
</template>

