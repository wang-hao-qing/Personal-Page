<template>
    <div class="tab">
     <p>
      <h4>Articles</h4>
      <span> or </span>
      <h4>Others</h4>
     </p>
     <div class="list" @click="goList('/list')">点我跳转到list文章</div>
    </div>
   
</template>
<script setup lang="ts">
import { useRouter  } from 'vue-router'
var $router = useRouter()
  const goList = (url: string)=>{
    $router.push({
         path: url,
      })
  }
</script>
<style scoped>
.tab {
  width: 350px;
  height: 50px;
 
}
h4{
  display: inline;
}
.list{
  height: 1000px;
}
@media  screen and (max-width: 811px){
  .tab{
    background-color: aquamarine;
    width:100vw;
    margin: auto;
    /* margin: 0;
    width: 100%; */
  }
}
</style>