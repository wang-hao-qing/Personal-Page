<template>
    <div class="home">
      <Personal></Personal>
      <Tab></Tab>
      
    </div>
</template>
<script setup lang="ts">

import Personal from '../Home/Personal/Personal.vue'
import Tab from './Tab/Tab.vue'

  
</script>
<style scoped>
.home{
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
}

</style>