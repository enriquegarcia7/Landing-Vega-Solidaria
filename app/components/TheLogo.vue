<script setup lang="ts">
  import site from '~~/site'

  const { name, logo } = site
</script>

<template>
  <NuxtLink data-pg-name="Logo" class="flex items-center sm:flex-row" to="/">
    <img :src="logo" alt="Vega Solidaria Logo" class="logo-img">
    <h6
      class="text-primary-600 dark:text-primary-200 font-extrabold font-serif ml-2 mt-4 text-2xl"
    >
      {{ name }}
    </h6>
  </NuxtLink>
</template>

<style scoped>
.logo-img {
  height: 60px;
  width: auto;
}
</style>