<template>
  <div class="container mx-auto px-4 py-12 relative">
    <div class="-mx-4 flex flex-wrap items-center">
      <div class="p-4 w-full lg:w-6/12">
        <NuxtImg
          src="/aniversario.png" 
          class="rounded-3xl w-full"
          alt="Nuestra Misión"
        />
      </div>
      <div class="mx-auto p-4 w-full lg:w-5/12">
        <h6 class="mb-2 text-primary-600 dark:text-primary-200 uppercase">
          Nuestra Misión
        </h6>
        <h3 class="capitalize mb-2">
          Transformando vidas con tu ayuda
        </h3>
        <p class="mb-6">
          En Vega Solidaria, nos dedicamos a recolectar fondos para ayudar a personas en situación de calle. Tu contribución puede marcar una gran diferencia en la vida de alguien.
        </p>
        <BaseButton size="xl" to="https://www.flow.cl/btn.php?token=u811c413954341e980f050e92e592655480ab096"> Dona Ahora </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
