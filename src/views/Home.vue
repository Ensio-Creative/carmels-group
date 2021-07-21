<template>
  <div class="home">
    <section class="bg-hero">
      <div class="container">
          <h1>
            A leading diversified
            conglomerate with
            operations businesses
            across Oil & Gas, Power
            and Construction.
          </h1>
          <button
            class="base-outline mt-4"
            @click="$router.push('/investments')"
          >
            Learn More
          </button>
      </div>
    </section>

    <section class="our-investments">
      <div class="container">
        <h2>Our Investments</h2>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div
            v-for="investment in state.invest"
            :key="investment.title"
            class="col"
          >
            <div
              class="card"
            >
            <div
              class="invest-thumbnail"
              :style="{backgroundImage:'url(' + `/img/${investment.img}` + ')'}"
            >
              <div class="content">
                <h5>{{ investment.title }}</h5>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-us">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-6 about-items">
            <div class="content">
              <h6>ABOUT US</h6>
              <h2>We are a frontier in all our
                  businesses for long term
                  and socio-economic impact.
              </h2>
              <p>
                Carmels Group is an industrial leader in all
                sectors of our businesses with commitment to
                improving lives and transforming Africa.
              </p>
              <button
                class="base-outline mt-4"
                @click="$router.push('/about-us')"
              >
                Learn More
              </button>
            </div>
          </div>
          <div class="col-12 col-lg-6 about-items" />
        </div>
      </div>
    </section>

    <section class="sustainablity-home">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 sustainablity-items" />
          <div class="col-12 col-lg-6 sustainablity-items">
            <div class="content">
              <h6>SUSTAINABILITY</h6>
              <h2>
                Social impact that puts
                humanity first
              </h2>
              <p>
                At Carmel’s Group, giving back to positively impact
                lives and our host communities for socio-economic
                growth has been one the reasons why we started in
                the first place.
              </p>
              <button
                class="btn-red-base mt-4"
                @click="$router.push('/sustainability')"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="our-commitment">
      <div class="content text-center">
        <h2>Our Commitment</h2>
        <h3>
          We are committed to meeting the Africa’s energy,power, automation and construction needs responsibly.
        </h3>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive } from 'vue'
import invest from '@/data/ourInvest.js'
import Footer from '../components/common/Footer.vue'
export default {
  components: { Footer },
  name: 'Home',
  setup () {
    const state = reactive({
      invest
    })

    return {
      state,
      invest
    }
  }
  // data () {
  //   return {
  //     invest
  //   }
  // }
}
</script>
