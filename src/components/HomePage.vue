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
      <Popup v-if="selectedItem && selectedItem.id == 1" :item="selectedItem" @close="closePopup()" />
      <OrderGeneratorPopup v-if="selectedItem && selectedItem.id == 2" :item="selectedItem"
              @close="closePopup()"/>
      <GPSPopup v-if="selectedItem && selectedItem.id == 3" :item="selectedItem"
        @close="closePopup()" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import Intro from './Intro.vue';
import Popup from './Popup.vue';
import CanvasDots from './CanvasDots.vue';
import CustomDropdown from './CustomDropdown.vue';

import '../styles/CardStyles.css'; // Import the card styles
import OrderGeneratorPopup from './OrderGeneratorPopup.vue';
import GPSPopup from './GPSPopup.vue';

class MenuItem {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.id = MenuItem.nextId++;
  }
}
MenuItem.nextId = 1;

export default {
  components: { Intro, Popup, OrderGeneratorPopup, CanvasDots, CustomDropdown, GPSPopup },
  setup() {
    const menuItems = computed(() => {
      const items = [
        new MenuItem('Buyer Journey', 'You can simulate the Buyer journey', '/RFQ.png'),
        new MenuItem('Order Generator', 'Create customized order for your task', '/new-order.png'),
        new MenuItem('GPS Tracking', 'Simulate Truck Journey', '/map.png'),
      ];
      return items;
    });

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

    const closePopup = () => {
        selectedItem.value = null;
    };

    return {
      menuItems,
      selectedItem,
      selectedEnvironment,
      showIntro,
      showEnvironmentAlert,
      openPopup,
      closePopup,
      environments,
      showAlert
    };
  }
};
</script>
