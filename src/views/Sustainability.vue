<template>
  <div>
    <section class="contsiner-fluid bg-hero-invest">
      <div class="content text-center">
        <h1>Sustainability</h1>
      </div>
    </section>

    <section class="humanity">
      <div class="container">
        <div class="row px-2">
          <div class="col-12 col-lg-6 humanity-item">
            <div class="content">
              <h2>Humanity first</h2>
              <p>
                We are fully committed to creating real value and impacting lives as part of our socio-economic and environmental responsibility
              </p>
              <p class="my-3">
                We want to consistently make impact beyond our businesses by reaching out beyond the guest who walks through our doors by improving lives today for a better tomorrow using our foundation platform in the areas of scholarship, social welfare, skill acquisition, missionary support and business empowerment.
              </p>
              <p class="mb-5">
                The goal of our sustainable development program is to impact and improve lives of people and environment as we engage, empower, and evolve on every front.
              </p>
              <a href="https://carmelsfoundation.org" target="_blank" rel="noopener noreferrer" class="btn-red-base">Visit website</a>
            </div>
          </div>
          <div class="col-12 col-lg-6 humanity-item" />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/common/Footer.vue'
// document.title = 'Sustainability | Carmel\'s Group'
export default {
  components: { Footer },
  title: 'Sustainability | Carmel\'s Group',
  name: 'Sustainability',
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.bg-hero-invest {
  background: linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url('/img/carmels-group-sustainability-header-img.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
