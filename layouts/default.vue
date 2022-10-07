<template>
  <div class="h-screen">
    <Navbar />
    <slot />
  </div>
</template>

<script setup>
import Navbar from "~/components/layout/navbar.vue";
</script>

<style lang="scss" scoped></style>
