<template>
  <div id="nav">
    <DesktopNav
      class="desktop"
    />
    <MobileNav
      class="mobile"
    />
  </div>
  <router-view/>
</template>

<script>
import DesktopNav from './components/navigations/DesktopNav.vue'
import MobileNav from './components/navigations/MobileNav.vue'
export default {
  name: 'App',
  components: { DesktopNav, MobileNav }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

.desktop {
  display: none;
}
@media (min-width: 950px) {
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
}
</style>
