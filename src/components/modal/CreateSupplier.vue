<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div @click="closeSupplier">
  <transition name="slide" appear>
    <div class="modal" v-if="showModal1">
      <h1 class="title">Create Supplier</h1>
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
</div>
</template>

<script>
import { createSupplier, activateAccount } from "../../APIs/supplierAPI";
export default {
  props: {
    showModal1: Boolean,
  },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },

  methods: {
    async login1() {
      let result = await createSupplier();
      console.log(localStorage.getItem("id"));  
      result = await activateAccount();
      if (result == true) {
        document.getElementById("textAreaField").value =
          `Supplier Name: ${localStorage.getItem("SupplierFullName")}` +
          "\r\n" +
          `Supplier Email: ${localStorage.getItem("SupplierEmail")}` +
          "\r\n" +
          `Supplier Phone Number: ${localStorage.getItem(
            "SupplierPhoneNumber"
          )}` +
          "\r\n" +
          `Supplier Password: ${localStorage.getItem("SupplierPassword")}` +
          "\r\n" +
          `Supplier ID: ${localStorage.getItem("supplierId")}`;
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
