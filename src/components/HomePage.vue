<template>
  <div>
    <Intro v-if="showIntro" @introEnded="showIntro = false" />
    <div v-else class="home">
      <CanvasDots />
      <div class="navbar">
        <img src="/logo.png" alt="Logo" class="logo-img" />
        <div class="logo">Dashboard</div>
        <div>
          <CustomDropdown :options="environments" v-model="selectedEnvironment" @environmentChanged="showAlert" />
        </div>
      </div>
      <div v-if="showEnvironmentAlert" class="alert">
        Environment changed
      </div>
      <div class="card-container">
        <div v-for="item in menuItems" :key="item.id" class="card" @click="openPopup(item)">
          <div class="card-inner">
            <div class="card-front">
              <img :src="item.image" alt="Card Image" class="card-image">
              <div class="card-text">{{ item.name }}</div>
            </div>
            <div class="card-back">
              <div class="card-description">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
      <Popup v-if="selectedItem && selectedItem.id == 1" :item="selectedItem" @close="selectedItem = null" />
      <OrderGeneratorPopup v-if="selectedItem && selectedItem.id == 2" :item="selectedItem"
        @close="selectedItem = null" />
      <GPSPopup v-if="selectedItem && selectedItem.id == 3" :item="selectedItem"
        @close="selectedItem = null" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Intro from './Intro.vue';
import Popup from './Popup.vue';
import CanvasDots from './CanvasDots.vue';
import CustomDropdown from './CustomDropdown.vue';

import '../styles/CardStyles.css'; // Import the card styles
import OrderGeneratorPopup from './OrderGeneratorPopup.vue';
import GPSPopup from './GPSPopup.vue';

export default {
  components: { Intro, Popup, OrderGeneratorPopup, CanvasDots, CustomDropdown, GPSPopup },
  setup() {
    const menuItems = ref([
      { id: 1, name: 'Buyer Journey', description: 'You can simulate the Buyer journey', image: '/RFQ.png' },
      { id: 2, name: 'Order Generator', description: 'Create customized order for your task', image: '/new-order.png' },
      { id: 3, name: 'GPS Tracking', description: 'Simulate Truck Journey', image: '/map.png' },
      // Add more items as needed
    ]);

    const selectedItem = ref(null);
    const savedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging';
    const selectedEnvironment = ref(savedEnvironment);
    const showIntro = ref(true);
    const showEnvironmentAlert = ref(false);

    const environments = ref([
      { label: 'Staging', value: 'staging' },
      { label: 'Dev', value: 'dev' },
      { label: 'Local', value: 'local' },
    ]);

    const openPopup = (item) => {
      selectedItem.value = item;
    };

    const showAlert = () => {
      showEnvironmentAlert.value = true;
      setTimeout(() => {
        showEnvironmentAlert.value = false;
      }, 3000); // Show the alert for 3 seconds
    };

    onMounted(() => {
      const savedEnvironment = localStorage.getItem('selectedEnvironment');
      if (savedEnvironment) {
        selectedEnvironment.value = savedEnvironment;
      }
      setTimeout(() => {
        showIntro.value = false;
      }, 3000); // Show intro for 3 seconds
    });

    return {
      menuItems,
      selectedItem,
      selectedEnvironment,
      showIntro,
      showEnvironmentAlert,
      openPopup,
      environments,
      showAlert
    };
  }
};
</script>
