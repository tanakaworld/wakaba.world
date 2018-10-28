<template>
  <transition
    id="Main"
    name="fade"
    tag="div">
    <nuxt/>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s;
}

.fade-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
