<template>
  <section>
    <div class="container mx-auto px-4 py-12 relative">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:w-2/5">
          <NuxtImg
            src="/beneficiado.png"
            class="mb-6 rounded-3xl w-full"
            alt="Stats"
          />
        </div>
        <div class="lg:w-6/12 mx-auto p-4 w-full">
          <h6
            class="font-bold mb-2 text-primary-600 dark:text-primary-200 uppercase"
          >
            Nuestro Trabajo
          </h6>
          <h3 class="capitalize mb-6">El impacto que logramos</h3>
          <p>
            En Vega Solidaria, nos dedicamos a repartir alimentos, ropa y celebrar fechas importantes con las personas en situación de calle en la Vega Central. Aquí están algunos de nuestros logros:
          </p>
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">5000+</h2>
              <p>Platos de comida repartidos este año</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">2000+</h2>
              <p>Prendas de ropa entregadas</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">12+</h2>
              <p>Años ayudando a la gente de la Vega Central</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">50+</h2>
              <p>Voluntarios activos</p>
            </div>
          </div>
          <BaseButton size="xl" to="https://www.flow.cl/btn.php?token=u811c413954341e980f050e92e592655480ab096"> Dona Ahora </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
