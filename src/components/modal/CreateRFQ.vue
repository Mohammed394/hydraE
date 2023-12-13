<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div @click="closeSupplier">
    <transition name="slide" appear>
      <div class="modal" v-if="showRFQModal">
        <h1 class="title">Buyer Journey</h1>
       
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
        <div class="areaField"><textarea
          id="textAreaField"
          name="w3review"
          rows="4"
          cols="50"
          readonly
        ></textarea>
      </div>
        <div class="button-container">
        <button class="createButton" v-on:click="login1">Raise RFQ</button>
        <button class="createButton" v-on:click="submitQuot">Submit Quotation</button>
        </div>
        <div class="actions-container">
        <button class="acceptButtons" v-on:click="acceptQuotation">Accept Quotation</button>
        <button class="rejectButtons" v-on:click="rejectQuotation">Reject Quotation</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getBuyerInfo,getOpportunity, raiseManualRFQ, acceptQuotation,rejectQuotation, getOffer} from "../../APIs/contractorAPI";
import { submitQuotation} from "../../APIs/supplierAPI";
import { updateMargin, selectWinning, updateNote, getOrderId} from "../../APIs/retoolAPI";
export default {
  props: {
    showRFQModal: Boolean,
  },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
  mounted(){
    if(localStorage.getItem('text')){
      this.formData.phone = localStorage.getItem('text')
    }
  },
  data() {
    return {
      formData: {
        phone: ""
            },
    };
  },
  methods: {
    saveText(){
      localStorage.setItem('text', this.formData.phone)
    },
    async login1() {
      let result = await getBuyerInfo(this.formData.phone)
      result = await raiseManualRFQ()
      result = await getOpportunity()

      if (result == true) {
        document.getElementById("textAreaField").value =
          `Buyer ID: ${localStorage.getItem("contractorId")}` +
          "\r\n" +
          `Buyer FullName: ${localStorage.getItem("ContractorFullName")}` +
          "\r\n" +
          `Opportunity ID: ${localStorage.getItem(
            "opportunityId"
          )}`
          +
          "\r\n" +
          `RFQ ID: ${localStorage.getItem(
            "rfqId"
          )}`
          +
          "\r\n" +
          `Products: \r\n${JSON.parse(localStorage.getItem(
            "products"
          )).split('\r\n')}`
         
      } else {
        document.getElementById("textAreaField").value = "Failed to create RFQ";
      }
      // await submitQuotation()
    },
    async submitQuot(){
      let result = await submitQuotation()
      if (result == true) {
        var temp = document.getElementById("textAreaField").value
        document.getElementById("textAreaField").value = temp + "\r\n" + `-------------------------------------------`+ "\r\n" + 
          `Quotation is submitted` + "\r\n" +
          `Bid No.: ${localStorage.getItem("bidNumber")}`
         
      } else {
        document.getElementById("textAreaField").value = "Failed to submit Quotation";
      }
    },
    async selectAsWinning(){
      let result = await updateMargin()
      result = await updateNote()
      result = await selectWinning()
      result = await getOffer()
      if (result == true) {
        var temp = document.getElementById("textAreaField").value
        document.getElementById("textAreaField").value = temp + "\r\n" + `-------------------------------------------`+ "\r\n" + 
          `Quotation is selected as a Winning`
         
      } else {
        document.getElementById("textAreaField").value = "Failed to submit Quotation";
      }
    },
    async acceptQuotation(){
      let result = await acceptQuotation()
      if (result == true) {
        var temp = document.getElementById("textAreaField").value
        document.getElementById("textAreaField").value = temp + "\r\n" + `-------------------------------------------`+ "\r\n" + 
          `Quotation is accepted`
        document.getElementById("textAreaField").value =
          temp +
          "\r\n" +
          `Quotation is accepted and Order is created ... ` +
          "\r\n" +
          `Order No. ${localStorage.getItem("bidNumber")}`;
         
      } else {
        document.getElementById("textAreaField").value = "Failed to accept Quotation";
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
    async rejectQuotation(){
      let result = await rejectQuotation()
      if (result == true) {
        var temp = document.getElementById("textAreaField").value
        document.getElementById("textAreaField").value = temp + "\r\n" + `-------------------------------------------`+ "\r\n" + 
          `Quotation is rejected`
         
      } else {
        document.getElementById("textAreaField").value = "Failed to reject Quotation";
      }
    }
  },
};
</script>
<style>
@import "../../assets/styles/extraBody.css";
</style>
