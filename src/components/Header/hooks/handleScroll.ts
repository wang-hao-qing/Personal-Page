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
   })

   return { control };
   //useHandleScroll()作为自定义hooks，在这里创建变量，写逻辑，哪个组件用就引入这个函数并且使用。
   //组件需要用到的变量就在这里return出去，这样组件可以通过调用该函数获取变量

}