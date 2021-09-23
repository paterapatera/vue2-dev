<template>
  <div id="app">
    <Layout>
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/templates/Layout.vue'
export default {
  name: 'app',
  components: { Layout },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
