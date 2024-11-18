<script setup lang="ts">
  import { Icon } from '@iconify/vue'
</script>

<template>
  <footer class="pt-12 pb-24">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap justify-center space-x-8">
        <NuxtLink
          href="https://www.facebook.com/vegasolidaria"
          aria-label="facebook"
          external
          target="_blank"
          class="social-icon"
        >
          <Icon icon="logos:facebook" class="text-2xl" width="28px" />
        </NuxtLink>
        <NuxtLink
          href="https://www.instagram.com/vegasolidaria"
          aria-label="instagram"
          external
          target="_blank"
          class="social-icon"
        >
          <Icon icon="logos:instagram-icon" class="text-2xl" width="28px" />
        </NuxtLink>
        <NuxtLink
          href="https://www.youtube.com/@vegasolidaria"
          aria-label="youtube"
          external
          target="_blank"
          class="social-icon"
        >
          <Icon icon="logos:youtube-icon" class="text-2xl" width="28px" />
        </NuxtLink>
      </div>
      <div class="flex flex-wrap relative mt-8">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3"
        >
          <NuxtLink class="-ml-6" to="/">
            <div to="/" class="font-serif inline-flex items-center text-3xl">
              <img src="/vega_solidaria_logo.jpg" alt="Vega Solidaria Logo" class="mr-2" width="40" height="40">
              <h6 class="font-serif inline-flex items-center text-3xl">
                Vega Solidaria
              </h6>
            </div>
          </NuxtLink>
          <p class="mt-2 text-center w-full lg:text-left">
            En Vega Solidaria, nos dedicamos a recolectar fondos para ayudar a personas en situación de calle. Tu contribución puede marcar una gran diferencia en la vida de alguien.
          </p>
        </div>
        <div class="flex flex-col items-center p-4 w-full md:w-1/3">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Galería
          </h2>
          <div class="-mx-2 flex flex-wrap items-center lg:mt-2">
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="/aniversario.png"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="/vega_solidaria.png"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="/ayuda.png"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="/comida.png"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="/beneficiado.png"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="/vega_solidaria_hero.png"
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:w-full md:items-end">
        <hr class="mb-4 opacity-25">
        <p class="py-1 text-sm sm:text-center">
          &copy; 2024. Todos los derechos reservados - Vega Solidaria
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: black;
  transition: background-color 0.3s, color 0.3s;
}

.social-icon:hover {
  background-color: #f0f0f0;
  color: #000;
}
</style>