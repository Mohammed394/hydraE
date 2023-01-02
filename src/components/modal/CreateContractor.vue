<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <transition name="fade" appear>
    <div class="modal-overlay" v-if="showModal" @click="close"></div>
  </transition>
  <transition name="slide" appear>
    <div class="modal" v-if="showModal">
      <h1 class="title">Create Contractor</h1>
      <button class="createButton" v-on:click="login1">Create</button>
      <i class="far fa-times-circle" @click="close"></i>
      <textarea
        id="textAreaField"
        name="w3review"
        rows="4"
        cols="50"
        readonly
      ></textarea>
    </div>
  </transition>
</template>

<script>
import { createContractor, activateAccount } from "../../APIs/contractorAPI";
export default {
  props: {
    showModal: Boolean,
  },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
  methods: {
    async login1() {
      let result = await createContractor();
      console.log(localStorage.getItem("id"));
      result = await activateAccount();
      if (result == true) {
        document.getElementById("textAreaField").value =
          `Contractor Name: ${localStorage.getItem("ContractorFullName")}` +
          "\r\n" +
          `Contractor Email: ${localStorage.getItem("ContractorEmail")}` +
          "\r\n" +
          `Contractor Phone Number: ${localStorage.getItem(
            "ContractorPhoneNumber"
          )}` +
          "\r\n" +
          `Contractor Password: ${localStorage.getItem("ContractorPassword")}` +
          "\r\n" +
          `Contractor ID: ${localStorage.getItem("contractorId")}`;
      } else {
        document.getElementById("textAreaField").value = "Failed";
      }
    },
  },
};
</script>
<style>
@import "../../assets/styles/extraBody.css";
</style>
