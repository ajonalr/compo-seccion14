<template>
  <h1>Counter View</h1>

  <h2>{{ number }}</h2>

  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>

import useCounter from '@/composables/useCounter'

export default {
  setup() {
   
   // 25 es el valor inicial
   const { number, increase, decrease } = useCounter(25)


   return { 
      number, increase, decrease
   }

  },
};
</script>

