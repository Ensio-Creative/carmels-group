<template>
  <div>
    <section class="contsiner-fluid bg-hero-invest">
      <div class="content text-center">
        <h1>Our Investments</h1>
      </div>
    </section>

    <section class="investments-section">
      <div class="container">
        <div class="row invest-rows px-2">
          <div class="col-12 col-lg-6 carmels-tekno order-2 order-sm-6">
            <div class="content">
              <h6>Carmel’s Tekno</h6>
              <h2>A pioneer in ICSS and Construction</h2>
              <p>
                The ICSS and Construction activities of Carmel's are carried out by Carmel's Tekno. Carmel's Tekno is committed to excellent-based services in ICSS and construction having delivered exceptionally to both local and multinational companies.
              </p>

              <a href="https://carmel-s.com" target="_blank" rel="noopener noreferrer" class="base-link">Visit website</a>
            </div>
          </div>
          <div class="col-12 col-lg-6 carmels-tekno order-6 order-sm-2" />
        </div>
        <div class="row invest-rows px-2">
          <div class="col-12 col-lg-6 carmtek" />
          <div class="col-12 col-lg-6 carmtek">
            <div class="content">
              <h6>CARMTEK</h6>
              <h2>Industrial Automation Solution Provider</h2>
              <p>We are well-postioned in addressing the complexity of
                IoT/automation solution integration into industrial
                operations by providing advanced communication
                systems for the control and management of physical and
                remote assets.
              </p>
              <a href="https://carmteksolutions.com" target="_blank" rel="noopener noreferrer" class="base-link">Visit website</a>
            </div>
          </div>
        </div>
        <div class="row invest-rows px-2">
          <div class="col-12 col-lg-6 techical order-2 order-sm-6">
            <div class="content">
              <h6>Carmel’s Technical</h6>
              <h2>Asset Inspection and Integrity Solution</h2>
              <p>
                  Carmel's Technical is addressing the challenges of asset
                  inspection and integrity solutions beyond the manual and
                  paper-based processes in order to eliminate errors and
                  cumbersome activities. Asset well managed is a business
                  well-done.
                </p>
            </div>
          </div>
          <div class="col-12 col-lg-6 techical order-6 order-sm-2" />
        </div>
        <div class="row invest-rows px-2">
          <div class="col-12 col-lg-6 precision" />
          <div class="col-12 col-lg-6 precision">
            <div class="content">
              <h6>Carmel’s Precision</h6>
              <h2>A major player in one of the most technologically advanced sector</h2>
              <p>
                  Carmel's Precision is one of the most innovative subsidiary of Carmel's Group. Through advances in technology, Carmel's Precision has been able to play a major role in meeting the needs in multi axis CNC machining.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/common/Footer.vue'
// document.title = 'Our Investments | Carmel\'s Group'
export default {
  title: 'Our Investments | Carmel\'s Group',
  components: { Footer },
  name: 'Investment',
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
