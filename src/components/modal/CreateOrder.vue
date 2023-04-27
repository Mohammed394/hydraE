<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div @click="closeSupplier">
    <transition name="slide" appear>
      <div class="modal" v-if="showModal1">
        <h1 class="title">Create Order</h1>
        <div class="button-container">
        <button class="createButton" v-on:click="login1">Create</button>
      </div>
        <i class="far fa-times-circle" @click="close"></i>
        <div class="input-components">
          <div class="input-field">
            <label class="standard-label" data-content="username"
              >Phone Number</label
            >
            <input
              type="text"
              required
              @input="saveText"
              style="margin-left: 40px; width: 15rem"
              v-model="formData.phone"
            />
          </div>
        </div>
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
import { getBuyerInfo,getOpportunity, raiseManualRFQ, acceptQuotation, getOffer} from "../../APIs/contractorAPI";
import { submitQuotation} from "../../APIs/supplierAPI";
import { updateMargin, selectWinning, updateNote, getOrderId} from "../../APIs/retoolAPI";
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
  data() {
    return {
      formData: {
        phone: ""
            },
    };
  },
  methods: {
    async login1() {
      let result = await getBuyerInfo(this.formData.phone);
      result = await raiseManualRFQ();
      result = await getOpportunity();

      if (result == true) {
        document.getElementById("textAreaField").value =
          `Buyer ID: ${localStorage.getItem("contractorId")}` +
          "\r\n" +
          `Buyer FullName: ${localStorage.getItem("ContractorFullName")}` +
          "\r\n" +
          `Opportunity ID: ${localStorage.getItem("opportunityId")}` +
          "\r\n" +
          `RFQ ID: ${localStorage.getItem("rfqId")}` +
          "\r\n" +
          `Products: \r\n${JSON.parse(localStorage.getItem(
            "products"
          )).split('\r\n')}`
      } else {
        document.getElementById("textAreaField").value = "Failed to create RFQ";
      }
      result = await submitQuotation();
      if (result == true) {
        var temp = document.getElementById("textAreaField").value;
        document.getElementById("textAreaField").value =
          temp +
          "\r\n" +
          `-------------------------------------------` +
          "\r\n" +
          `Quotation is submitted` +
          "\r\n" +
          `Bid No.: ${localStorage.getItem("bidNumber")}`;
      } else {
        document.getElementById("textAreaField").value =
          "Failed to submit Quotation";
      }

      result = await updateMargin();
      result = await updateNote()
      result = await selectWinning();
      result = await getOffer();
      if (result == true) {
        var temp = document.getElementById("textAreaField").value;
        document.getElementById("textAreaField").value =
          temp +
          "\r\n" +
          `-------------------------------------------` +
          "\r\n" +
          `Quotation is selected as a Winning`;
      } else {
        document.getElementById("textAreaField").value =
          "Failed to submit Quotation";
      }
      result = await acceptQuotation();
      if (result == true) {
        var temp = document.getElementById("textAreaField").value;
        document.getElementById("textAreaField").value =
          temp +
          "\r\n" +
          `-------------------------------------------` +
          "\r\n" +
          `Quotation is accepted`;
      } else {
        document.getElementById("textAreaField").value =
          "Failed to accept Quotation";
      }
      result = await getOrderId()
      if (result == true) {
        var temp = document.getElementById("textAreaField").value;
        document.getElementById("textAreaField").value =
          temp +
          "\r\n" +
          `-------------------------------------------` +
          "\r\n" +
          `Order Id: ${localStorage.getItem("orderId")}`;
      } else {
        document.getElementById("textAreaField").value =
          "Failed to accept Quotation";
      }
    },
  },
};
</script>
<style>
@import "../../assets/styles/extraBody.css";
</style>
