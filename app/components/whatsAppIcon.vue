<script setup lang="ts">
import { Icon } from '@iconify/vue' 

const whatsappLink = 'https://wa.me/+56931766391' 
</script>

<template>
  <a :href="whatsappLink" target="_blank" class="whatsapp-icon">
    <Icon icon="mdi:whatsapp" class="whatsapp-iconify" />
  </a>
</template>

<style scoped>
.whatsapp-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: transparent; 
  padding: 10px;
  transition: transform 0.3s;
}

.whatsapp-icon:hover {
  transform: scale(1.1);
}

.whatsapp-icon .whatsapp-iconify {
  display: block;
  width: 50px; /* Ajusta el tamaño del ícono */
  height: 50px; /* Ajusta el tamaño del ícono */
  color: #25d366; /* Color del ícono */
}
</style>