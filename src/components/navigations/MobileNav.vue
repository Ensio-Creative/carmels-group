<template>
  <div class="window">
    <div
      class="header"
      :class="state.toggleMobile"
    >
    <div class="container">
      <div
        class="burger-container"
        @click="chanageMobileState"
      >
        <div id="burger">
          <div class="bar topBar"></div>
          <div class="bar btmBar"></div>
        </div>
      </div>
      <div class="icon icon-apple">
        <router-link to="/">
            <img src="/img/carmels-group-logo.svg" alt="">
          </router-link>
      </div>
      <ul
        class="menu"
        @click="chanageMobileState"
      >
        <li
          v-for="links in routes"
          :key="links.url"
          class="menu-item"
        >
          <router-link
            class="mt-3"
            :to="links.url"
          >
            {{ links.title }}
          </router-link>
        </li>
      </ul>
    </div>
    </div>
</div>
</template>

<script>
import { reactive } from 'vue'
import routes from '@/data/urls.js'
export default {
  name: 'MobileNav',
  setup () {
    const state = reactive({
      toggleMobile: ''
    })
    const chanageMobileState = () => {
      if (state.toggleMobile === 'menu-opened') {
        state.toggleMobile = ''
      } else {
        state.toggleMobile = 'menu-opened'
      }
    }
    return {
      state,
      routes,
      chanageMobileState
    }
  }
}
</script>

<style lang="scss" scoped>
/* .drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;
}

@media (min-width: 994px) {
  .drawer-toggle {
    display: none;
  }
}

.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: #0C0573;
  padding: 0px;
  margin-top: 6px;
} */

</style>
