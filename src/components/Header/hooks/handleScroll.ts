import { useScroll } from '@vueuse/core'
import { ref, onMounted } from 'vue'
/* 
  const el = ref<HTMLElement | null>(null)
  const { x, y, isScrolling, arrivedState, directions } = useScroll(el) 
*/
export const useHandleScroll = () => {
   //数据control，代表header的显示与隐藏
   const control = ref(true)

   window.addEventListener("scroll", () => {
      // 页面滑动的距离
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop.value);
      // 当页面滑动的距离大于300px时元素显示，否则不显示
      if (scrollTop >= 30) {
         control.value = true
      } else {
         control.value = false
      }
   })/* 由于如果绑定在window上，那么路由切换之后，事件依然会被触发，所以在div元素上绑定
   //   (如果绑定在window上，那么在导航守卫里，路由离开的时候解绑就行了，一样可以实现功能）*/

   return { control };
   //useHandleScroll()作为自定义hooks，在这里创建变量，写逻辑，哪个组件用就引入这个函数并且使用。
   //组件需要用到的变量就在这里return出去，这样组件可以通过调用该函数获取变量

}


//把一个功能实现相关的逻辑的放在一个hook文件里面，让组件代码更简洁。
 