<template>
  <!-- keep-alive作为缓存的操作，不至于每一次切换都重新渲染一次页面 -->
  <keep-alive>
    <router-view />
  </keep-alive>
</template>
