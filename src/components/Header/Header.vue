<template>
 
   <div >    
<Transition >
   <div class="head" v-show="contorl" key="box1">
            <div  class="img1" @click="goHome('/home') "> </div>
            <!-- <img  class="img2"  src="./images/about.png" @click="goAbout('/about')"> 
            <img  class="img3"  src="./images/color.png" alt=""> 
            <img  class="img4"  src="./images/language.png" alt="">  -->
   </div>      
</Transition>
     
   </div>
   
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, } from "vue";
import { useRouter  } from 'vue-router'
     
     //数据control，代表header的显示与隐藏
      var contorl= ref(true)
      function handleScroll():void {
  	 // 页面滑动的距离
      let scrollTop=  ref(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop)
      // console.log(scrollTop.value);
      // 当页面滑动的距离大于300px时元素显示，否则不显示
      if (scrollTop.value >= 30) {
         contorl.value = true
      } else {
         contorl.value = false 
      }
    }
    //挂载
    onMounted(()=>{
      window.addEventListener('scroll', handleScroll)//这里不能写()
  /* 由于如果绑定在window上，那么路由切换之后，事件依然会被触发，所以在div元素上绑定
 (如果绑定在window上，那么在导航守卫里，路由离开的时候解绑就行了，一样可以实现功能）*/
  }) 
  // 组件销毁前
      onBeforeUnmount(()=>{
    window.removeEventListener('scroll', handleScroll)
  }) 
    var $router = useRouter()
   const goHome = (url: string) =>{
      $router.push({
         path: url
       })//, window.scrollTo(0,0)
   }
   const goAbout= (url: string) =>{
      $router.push({
         path: url,
      }).catch(err=>console.log(err));
   }
  
</script>

<style>
.app {
    position: relative;
}
.head {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    height: 40px;
    background-color: rgb(245,245,245);
}
.img1{
   width: 40px;
   height: 30px;
   background: url(./images/home1.png) no-repeat;
   
}
.img1:hover{
   background: url(./images/home.png) no-repeat;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
img.im1:hover{
  /* background-image: url('./images/home.png'); */
  background-color: aquamarine;
}
a.im:hover{
  background-image: url('./images/home.png');
}
</style>