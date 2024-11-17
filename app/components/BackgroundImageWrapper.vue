<script setup lang="ts">
  const props = defineProps({
    imageUrl: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'hero',
    },
    cover: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: [Boolean, String],
      default: false,
    },
  })

  const bgStyles = {
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: props.cover ? 'cover' : 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
</script>

<template>
  <div class="bg-center bg-cover bg-no-repeat blur-none z-0" :style="bgStyles">
    <slot />
  </div>
</template>

<style scoped></style>