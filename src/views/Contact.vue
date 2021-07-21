<template>
  <div>
    <section class="contsiner-fluid bg-hero-invest">
      <div class="content text-center">
        <h1>Contact Us</h1>
      </div>
    </section>

    <section class="get-in-touch">
      <div class="container">
        <div class="get-text text-center">
          <h2>Get in touch</h2>
          <p>Contact us for further enquires about our businesses and operations</p>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="state in locations"
            :key="state.title"
            class="col"
          >
            <div
              class="card"
            >
            <div class="content">
              <div class="inner-content">
                <h4>{{ state.city }}</h4>
                <p>{{ state.address }}</p>
                <p>{{ state.phone }} <br> {{ state.email }}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="send-message">
      <div class="container">
        <h2 class="text-center">Send us a Message</h2>
        <form @submit.prevent="onSubmit" class="form">
          <div class="row">
            <div class="col-12 input-control">
              <input v-model.trim="name" type="text" placeholder="Name">
            </div>
            <div class="col-12 input-control">
              <input v-model.number="phone" type="number" placeholder="Phone">
            </div>
            <div class="col-12 input-control">
              <input v-model="email" type="email" placeholder="Email Address">
            </div>
            <div class="col-12 input-control">
              <textarea v-model="message" name="message" cols="30" rows="5" placeholder="Your message"></textarea>
            </div>
            <button type="submit" class="btn-form">SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/common/Footer.vue'
export default {
  name: 'Contact',
  components: { Footer },
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      message: '',
      locations: [
        {
          city: 'Port Harcourt',
          address: 'Plot 385 Prof. Okujagu Street, Off Peter Odili Road, Trans-Amadi Industrial Layout, Port Harcourt, Nigeria',
          phone: 'M: +234(0)909.199.6571',
          email: 'E: info@carmel-s.com'
        },
        {
          city: 'Lagos',
          address: '1B Alh. Hussein Sunmonu St., Lekki Phase 1, Lagos',
          phone: 'M: +234(0)909.199.6571',
          email: 'E: info@carmel-s.com'
        },
        {
          city: 'United Kingdom',
          address: '10 Malvern Road AYLESBURY, BUCKS HP20 1QF,England'
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      console.log('Fired')
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-hero-invest {
  background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(67, 81, 119, 0.48)), url('/img/carmtek-contact-header-img.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
