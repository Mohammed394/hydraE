<style scoped>
@import "../assets/styles/mainMenu.css";
@import "../assets/styles/style.css";
@import "../assets/styles/cardStyle.css";
@import "../assets/styles/extraBody.css";
</style>
<template>
  <body>
    <canvas style="display: contents;width: -webkit-fill-available;height: -webkit-fill-available;" ></canvas>
  </body>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
    integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
    crossorigin="anonymous"
  />
  <div class="wrapper">
    <aside class="left-sidebar sidebar-dark" id="left-sidebar">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#"><li>Contractor</li></a>
            <a href="#"><li>Supplier</li></a>
            <a href="#"><li>Admin</li></a>
            <a href="#"><li>Settings</li></a>
            <a href="" target="_blank"><li>FAQs</li></a>
          </ul>
        </div>
      </nav>
    </aside>

    <div class="page-wrapper">
      <!-- Header -->
      <header class="main-header" id="header">
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
          <!-- Sidebar toggle button -->

          <span class="page-title">dashboard</span>
        </nav>
      </header>

      <!-- ====================================
——— CONTENT WRAPPER
===================================== -->

      <div class="content-wrapper">
        <div class="content">
          <div
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div class="front">
                <!-- front content -->
                <img
                  class="flip-image"
                  src="../assets/images/contractor.png"
                  alt="Image alt text"
                />
                <div class="block-content">
                  <h3>Create Contractor</h3>
                </div>
              </div>
              <div class="back">
                <!-- back content -->
                <h3>Summary</h3>
                <p>
                  You can create a verfied contractor without needing for
                  activation his account
                </p>
                <button class="button" @click="toggleModal">Create</button>
              </div>
            </div>
          </div>
          <CreateContractorModal @close="toggleModal" :showModal="showModal">
          </CreateContractorModal>
        </div>
        <div class="content">
          <div
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div class="front">
                <!-- front content -->
                <img
                  class="flip-image"
                  src="../assets/images/contractor.png"
                  alt="Image alt text"
                />
                <div class="block-content">
                  <h3>Create Contractor</h3>
                </div>
              </div>
              <div class="back">
                <!-- back content -->
                <h3>Summary</h3>
                <p>
                  You can create a verfied contractor without needing for
                  activation his account
                </p>
                <button class="button" @click="toggleModal">Create</button>
              </div>
            </div>
          </div>
          <CreateContractorModal @close="toggleModal" :showModal="showModal">
          </CreateContractorModal>
        </div>
        <div class="content">
          <div
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div class="front">
                <!-- front content -->
                <img
                  class="flip-image"
                  src="../assets/images/supplier.png"
                  alt="Image alt text"
                />
                <div class="block-content">
                  <h3>Create Supplier</h3>
                </div>
              </div>
              <div class="back">
                <!-- back content -->
                <h3>Summary</h3>
                <p>
                  You can create a verfied supplier without needing for
                  activation his account
                </p>
                <button class="button" @click="toggleModal1">Create</button>
              </div>
            </div>
          </div>
          <CreateSupplierModal @close="toggleModal1" :showModal1="showModal1">
          </CreateSupplierModal>
        </div>
        <!-- <div class="content" v-if="!showModal">
          <div
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div class="front">
                <img
                  class="flip-image"
                  src="../assets/images/supplier.png"
                  alt="Image alt text"
                />
                <div class="block-content">
                  <h3>Create Supplier</h3>
                </div>
              </div>
              <div class="back">
                <h3>Summary</h3>
                <p>
                  You can book a ride with one step without carring about
                  creating ride or customer
                </p>
                <button class="button" @click="callSupplierModal">Create</button>
              </div>
            </div>
            <CreateSupplierModal @close="closeSupplier" v-if="isSupplierModalShown">
            </CreateSupplierModal>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import CreateContractorModal from "../components/modal/CreateContractor.vue";
import CreateSupplierModal from "../components/modal/CreateSupplier.vue";
import "../script";

export default {
  name: "MainMenu",
  components: {
    CreateContractorModal,
    CreateSupplierModal
  },
  data(){
    return{
      isSupplierModalShown: false
    }
  },
  methods: {
    closeSupplier(){
      this.isSupplierModalShown = false
    },
    callSupplierModal(){
      this.isSupplierModalShown = true
    }
  },
  setup() {
    const showModal = ref(false);
    const toggleModal = () => {
      showModal.value = !showModal.value;
    };
    const showModal1 = ref(false);
    const toggleModal1 = () => {
      showModal1.value = !showModal1.value;
    };
    return { showModal, toggleModal ,showModal1 ,toggleModal1};
  },
};
</script>
