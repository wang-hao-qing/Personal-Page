<template>
   <div>
      <Transition>
         <div class="head" v-show="control" key="box1">

            <img class="c1" src="./images/home1.png" @click="goHome('/home')" title="Home">
            <img class="c2" src="./images/about1.png" @click="goAbout('/about')" title="About">
            <img class="c3" src="./images/color1.png" title="Toggle Mode">
            <img class="c4" src="./images/language1.png" title="Change Language">
         </div>
      </Transition>

   </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, } from "vue";
import { useRouter } from 'vue-router'

//数据control，代表header的显示与隐藏
var control = ref(true)
function handleScroll(): void {
   // 页面滑动的距离
   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
   // console.log(scrollTop.value);
   // 当页面滑动的距离大于300px时元素显示，否则不显示
   if (scrollTop >= 30) {
      control.value = true
   } else {
      control.value = false
   }
}
//挂载
onMounted(() => {
   window.addEventListener('scroll', handleScroll)//这里不能写()
   /* 由于如果绑定在window上，那么路由切换之后，事件依然会被触发，所以在div元素上绑定
  (如果绑定在window上，那么在导航守卫里，路由离开的时候解绑就行了，一样可以实现功能）*/
})
// 组件销毁前
onBeforeUnmount(() => {
   window.removeEventListener('scroll', handleScroll)
})
var $router = useRouter()
const goHome = (url: string) => {
   $router.push({
      path: url
   })//, window.scrollTo(0,0)
}
const goAbout = (url: string) => {
   $router.push({
      path: url,
   }).catch(err => console.log(err));
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
   justify-content: space-around;
   flex-direction: row;
   width: 100%;
   height: 40px;
   background-color: rgb(245, 245, 245);
}

.img1 {
   box-sizing: border-box;
   width: 40px;
   height: 20px;
   background-size: 40px 40px;
   background-image: url(./images/home1.png);
   background-repeat: no-repeat;

}

.c1,
.c2,
.c3,
.c4 {
   cursor: pointer
}

.c1:hover {
   content: url(./images/home.png);
}

.c2:hover {
   content: url(./images/about.png);
}

.c3:hover {
   content: url(./images/color.png);
}

.c4:hover {
   content: url(./images/language.png);
}

.v-enter-active,
.v-leave-active {
   transition: all 0.6s ease;
}

.v-enter-from,
.v-leave-to {
   opacity: 0;
}</style>