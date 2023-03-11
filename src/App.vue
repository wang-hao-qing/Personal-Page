<script  setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header/Header.vue'
</script>

<template>
<Header> </Header>
<router-view></router-view>
<!-- <List></List> -->

</template>



<style  scoped>
.dark {
   background: rgb(49, 43, 43);
   color: white;
}

.cafe {
   background: rgb(103, 71, 71);
   color: aliceblue;
}
</style>
