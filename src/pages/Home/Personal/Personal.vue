<template>
    <div class="person">
        <img  src="../images/25UM8PA839QM])H7R[9FMLH.png" class="img1" 
            @click="goAbout('/about')" title="goAbout">
        <h3>你好,我是whq</h3>
        <h6>我认为烧烤比烤肉好吃</h6>
       </div>
    
</template>
<script setup lang="ts">
import { useRouter  } from 'vue-router'
var $router = useRouter()
const goAbout= (url: string) =>{
      $router.replace({
         path: url,
      }).catch(err=>console.log(err));
   }
</script>
<style>
.img1 {
    height: 80px;
    width: 80px;
    cursor: pointer;
}
.person {
    margin-top: -50px;
    width: 300px;
    height: 200px;
}
@media  screen and (max-width: 811px){
  .person{
    background-color: aquamarine;
    width: 100%;
  }
}
</style>