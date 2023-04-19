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
                  src="../assets/images/Order.png"
                  alt="Image alt text"
                />
                <div class="block-content">
                  <h3>Create Order</h3>
                </div>
              </div>
              <div class="back">
                <!-- back content -->
                <h3>Summary</h3>
                <p>
                  You Can create Order easily using this tool
                </p>
                <button class="button" @click="toggleModal1">Create</button>
              </div>
            </div>
          </div>
          <CreateOrderModal @close="toggleModal1" :showModal1="showModal1">
          </CreateOrderModal>
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
                  src="../assets/images/RFQ.png"
                  alt="Image alt text"
                />
                <div class="block-content">
                  <h3>Buyer Journey</h3>
                </div>
              </div>
              <div class="back">
                <!-- back content -->
                <h3>Summary</h3>
                <p>
                 You can simulate the journey of our app using this tool
                </p>
                <button class="button" @click="toggleRFQModal">Start</button>
              </div>
            </div>
          </div>
          <CreateRFQ @close="toggleRFQModal" :showRFQModal="showRFQModal">
          </CreateRFQ>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import CreateContractorModal from "../components/modal/CreateContractor.vue";
import CreateOrderModal from "../components/modal/CreateOrder.vue";
import CreateRFQ from "../components/modal/CreateRFQ.vue";
import "../script";

export default {
  name: "MainMenu",
  components: {
    CreateContractorModal,
    CreateOrderModal,
    CreateRFQ
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
    const showRFQModal = ref(false);
    const toggleRFQModal = () => {
      showRFQModal.value = !showRFQModal.value;
    };
    return { showModal, toggleModal ,showModal1 ,toggleModal1, showRFQModal, toggleRFQModal};
  },
};
</script>
