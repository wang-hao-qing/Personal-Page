<template>
    <div class="person">
        <img src="../images/25UM8PA839QM])H7R[9FMLH.png" class="img1" 
            @click="goAbout('/about')">
        <h3>你好，我是芜湖</h3>
      
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
    width: auto;
}
.person {
    position: absolute;
    left: 30%;
    top: 12%

}
</style>