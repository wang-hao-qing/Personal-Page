<template>
    <div>
      <Personal></Personal>
      <Tab></Tab>
      <div class="list" @click="goList('/list')">点我跳转到list文章</div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import Personal from '../Home/Personal/Personal.vue'
import Tab from './Tab/Tab.vue'

  var $router = useRouter()
  const goList = (url: string)=>{
    $router.push({
         path: url,
      })
  }
</script>