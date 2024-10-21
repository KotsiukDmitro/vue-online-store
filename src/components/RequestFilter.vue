<template>
  <div class="flex gap-5">
    <button v-if="isActive" @click="reset" class="border px-2 rounded-xl">
      Сброс фильтров
    </button>
    <select v-model="sortBy" class="py-2 px-3 border rounded-md outline-none">
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

<script setup>
import { ref, computed, watch } from 'vue'

const emits = defineEmits(['update:modelValue'])
defineProps(['modelValue'])

const name = ref()
const sortBy = ref()

watch([name, sortBy], values => {
  emits('update:modelValue', {
    name: values[0],
    sortBy: values[1],
  })
})

const isActive = computed(() => name.value || sortBy.value)

const reset = () => {
  name.value = ''
  sortBy.value = ''
}
</script>

