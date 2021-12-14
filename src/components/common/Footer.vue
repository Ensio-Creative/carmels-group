<template>
  <div class="footer">
    <div class="container mb-5">
      <div class="row">
        <div class="col-12 col-lg-5">
          <div class="footer-img">
            <img src="/img/carmels-group-white-logo.svg" alt="">
          </div>
        </div>
        <div class="col-12 col-lg-7">
          <div class="row">
            <div class="col-12 col-lg-4 footer-nav">
              <router-link
                v-for="links in routes.slice(0, 3)"
                :key="links.title"
                :to="links.url"
                class="footer-nav-item"
              >
                {{ links.title }}
              </router-link>
            </div>
            <div class="col-12 col-lg-4 footer-nav">
              <router-link
                v-for="links in routes.slice(3, 5)"
                :key="links.title"
                :to="links.url"
                class="footer-nav-item"
              >
                {{ links.title }}
              </router-link>
            </div>
            <div class="col-12 col-lg-4 footer-nav">
              <div class="footer-social">
                <a href="#" target="_blank">
                  <i class="fab fa-facebook-f" />
                </a>
                <a href="#" target="_blank">
                  <i class="fab fa-twitter" />
                </a>
                <a href="#" target="_blank">
                  <i class="fab fa-linkedin-in" />
                </a>
                <a href="#" target="_blank">
                  <i class="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="container copyright mt-5">
      <p class="copy-items">&copy; {{ date.getFullYear() }} Carmels Group. All rights reserved.</p>
      <p class="copy-items">Site Credit: <strong> <a href="https://ensiocreative.com" target="_blank" rel="noopener noreferrer">Ensio Creative</a> </strong></p>
    </div>
  </div>
</template>

<script>
// import routes from '@/data/urls.js'
export default {
  name: 'Footer',
  setup () {
    return {
      routes: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'About us',
          url: '/about-us'
        },
        {
          title: 'Investments',
          url: '/investments'
        },
        {
          title: 'Sustainability',
          url: '/sustainability'
        },
        {
          title: 'Contact us',
          url: '/contact-us'
        }
      ],
      date: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
