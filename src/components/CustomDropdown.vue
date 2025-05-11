<template>
  <div class="custom-dropdown">
    <div class="dropdown-header" @click="toggleDropdown">
      {{ selectedOption ? selectedOption.label : 'Select Environment' }}
      <span class="arrow" :class="{ open: dropdownOpen }">&#9662;</span>
    </div>
    <div v-if="dropdownOpen" class="dropdown-list">
      <div
        v-for="option in options"
        :key="option.value"
        class="dropdown-item"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: 'staging', // Ensure default value is 'staging'
    },
  },
  data() {
    return {
      dropdownOpen: false,
      selectedOption: null,
    };
  },
  watch: {
    value(newValue) {
      this.selectedOption = this.options.find((option) => option.value === newValue);
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectOption(option) {
      this.$emit('input', option.value); // Emit the new value
      this.selectedOption = option;
      this.dropdownOpen = false;
      localStorage.setItem('selectedEnvironment', option.value); // Update localStorage
      console.log('Environment changed'); // Print the environment value
      this.$emit('environmentChanged'); // Emit event for environment change
    },
  },
  mounted() {
    this.selectedOption = this.options.find((option) => option.value === this.value);
  },
};
</script>

<style scoped>
.custom-dropdown {
  position: relative;
  display: inline-block;
  font-family: Cursive;
  color: white;
}

.dropdown-header {
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.148);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
}

.arrow {
  margin-left: 10px;
  transition: transform 0.3s;
}

.arrow.open {
  transform: rotate(180deg);
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #001f3f;
  border-radius: 5px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-top: 5px;
  width: 100%;
  z-index: 1;
}

.dropdown-item {
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.4rem;
}

.dropdown-item:hover {
  background-color: #ff851b;
}

</style>
