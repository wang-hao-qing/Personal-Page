<template>
   <div>
      <Transition>
         <div class="head" v-show="control" key="box1">

            <img class="c1" src="./images/home1.png" @click="goHome('/home')" title="Home">
            <img class="c2" src="./images/about1.png" @click="goAbout('/about')" title="About">
            <img class="c3" src="./images/color1.png" title="Toggle Mode" @click="toggleDark()">
            <img class="c4" src="./images/language1.png" title="Change Language" @click="mode = 'cafe'">
         </div>
      </Transition>

   </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, } from "vue";
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { useColorMode } from '@vueuse/core'
import { useHandleScroll } from './hooks/handleScroll'
//useColorMode除了dark和light还可以使用自定义的颜色模式，和useToggle原理一样给html标签加一个class。
const mode = useColorMode({
   modes: {
      cafe: 'cafe',
   }
}) // Ref<'dark' | 'light' |'cafe'>

//useDark和useToggle配合使用，useDark给isDark赋值true，useToggle(isDark)给根html一个class='dark'，再写style样式达到切换的效果
const isDark = useDark()
const toggleDark = useToggle(isDark)



const { control } = useHandleScroll()
console.log(control);

//这里获取control时涉及对象的解构赋值。
//挂载
// onMounted(() => {
//    window.addEventListener('scroll', useHandleScroll)//这里不能写()
//    /* 由于如果绑定在window上，那么路由切换之后，事件依然会被触发，所以在div元素上绑定
//   (如果绑定在window上，那么在导航守卫里，路由离开的时候解绑就行了，一样可以实现功能）*/
// })
// // 组件销毁前
// onBeforeUnmount(() => {
//    window.removeEventListener('scroll', useHandleScroll)
// })



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
.dark {
   background: rgb(69, 69, 69);
   color: white;
}

.cafe {
   background: rgb(103, 71, 71);
   color: aliceblue;
}

.app {
   position: relative;
}

.head {
   position: fixed;
   top: 0;
   left: 0;
   display: flex;
   justify-content: space-between;
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
}
</style>