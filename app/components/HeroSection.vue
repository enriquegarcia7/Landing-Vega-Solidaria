<script setup lang="ts">
  const heroCaption = 'Ayuda a los necesitados'
  const heroTitle = 'Un pequeño gesto, un gran impacto'
  const heroDescription = 'Con tu ayuda, podemos cambiar vidas. Dona ahora y haz la diferencia.'
</script>

<template>
  <section class="container mx-auto pb-12 px-4">
    <BackgroundImageWrapper image-url="/vega_solidaria_hero.png" class="rounded-3xl">
      <div class>
        <div class="lg:px-12 md:py-36 pb-6 pt-72 px-6 relative rounded-3xl">
          <div class="-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0">
            <!-- Contenido del Hero Section -->
            <div class="w-full lg:w-1/2 px-4">
              <h1 class="text-4xl font-bold mb-4">{{ heroTitle }}</h1>
              <p class="text-lg mb-6">{{ heroDescription }}</p>
              <BaseButton size="xl" to="https://www.flow.cl/btn.php?token=u811c413954341e980f050e92e592655480ab096"> Dona Ahora </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImageWrapper>
  </section>
</template>

<style scoped></style>