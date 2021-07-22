<template>
  <div class="about">
    <section class="contsiner-fluid bg-hero-invest">
      <div class="content text-center">
        <h1>About us</h1>
      </div>
    </section>

    <section class="story">
      <div class="container">
        <div class="content">
          <h2>Overview</h2>
          <p>Carmel’s Group incorporated in 2003, is a leading Nigerian conglomerate
            focused in the oil and gas, power generation, marine, manufacturing and mining sectors as solutions and related services
            provider.
          </p>
          <p>Over the course of our long history, we have emerged as one of the leaders in almost every aspect of our businesses.
          </p>
          <p>Our drive towards innovation and experience combined with our collaborative
            approach towards ensuring reliable and efficient results has proven us as a
            choice partner in all our business areas.
          </p>
        </div>
      </div>
    </section>

    <section class="our-mission">
      <div class="container">
        <h2>Our Vision & Mission</h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div
            v-for="vision in state.visions"
            :key="vision.title"
            class="col"
          >
            <div
              class="card"
            >
            <div
              class="vision-thumbnail"
              :style="{backgroundImage:'url(' + `/img/${vision.img}` + ')'}"
            />
            <div class="content">
              <h5>{{ vision.title }}</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="our-core-values">
      <div class="container">
        <h2>Our Core Values</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="value in state.values"
            :key="value.title"
            class="col"
          >
            <div
              class="card"
            >
            <div class="content">
              <div class="inner-content">
                <h3>{{ value.title }}</h3>
                <p>{{ value.content }}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import { reactive } from 'vue'
import Footer from '../components/common/Footer.vue'
// document.title = ''
export default {
  components: { Footer },
  title: 'About us | Carmel\'s Group',
  name: 'About',
  setup () {
    const state = reactive({
      visions: [
        {
          img: 'carmels-group-vision.jpg',
          title: 'Vision.'
        },
        {
          img: 'carmels-group-mission.jpg',
          title: 'Mission.'
        }
      ],
      values: [
        {
          title: 'Leadership',
          content: 'We have the willingness and determination to lead in all our business areas with respect to people and the environment.'
        },
        {
          title: 'Integrity',
          content: 'We are reliable on every front because we deliver on our word and do what we say without compromise.'
        },
        {
          title: 'Excellence',
          content: 'We trademark all our activities with excellence making sure we see things through to completion in a timely way'
        },
        {
          title: 'Teamwork',
          content: 'We consistently work together with our people in achieving our goals through sharing of relevant information, knowledge and ideas.'
        },
        {
          title: 'Innovation',
          content: 'We are creative and innovative in providing solutions that optimizes great values.'
        },
        {
          title: 'Quality',
          content: 'We are committed to maintaining a strong quality culture in satisfying our clients which has distinguished us.'
        }
      ]
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-hero-invest {
  background: linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url('/img/carmels-group-about-us-header-img.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
