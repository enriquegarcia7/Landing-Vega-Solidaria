<script setup lang="ts">
  const callToActions = [
    {
      img: '/comida.png', // Ruta de la imagen de Comida
      action: 'Ayúdanos con un plato de comida',
      to: 'https://www.flow.cl/btn.php?token=u811c413954341e980f050e92e592655480ab096',
    },
    {
      img: '/donaciones.png', // Ruta de la imagen de Donaciones
      action: 'Donar Aquí',
      to: 'https://www.flow.cl/btn.php?token=u811c413954341e980f050e92e592655480ab096',
    },
    {
      img: '/ayuda.png', // Ruta de la imagen de Ayuda
      action: 'Donar un desayuno',
      to: 'https://www.flow.cl/btn.php?token=u811c413954341e980f050e92e592655480ab096',
    },
  ]
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <div>
      <h6 class="text-primary-600 dark:text-primary-200 text-center uppercase">
        Involúcrate
      </h6>
      <h3 class="capitalize mt-3 text-center">
        Un pequeño gesto para un gran impacto
      </h3>
      <p class="mt-4 text-center">
        Con tu ayuda, podemos cambiar vidas. Únete a nosotros en nuestra misión.
      </p>
    </div>
    <div class="-mx-4 flex flex-wrap justify-center mt-12">
      <CallToActionCard
        v-for="(callToAction, index) in callToActions"
        :key="index"
        :action="callToAction.action"
        :img="callToAction.img"
        :to="callToAction.to"
      />
    </div>
  </section>
</template>

<style scoped></style>