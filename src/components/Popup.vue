<template>
  <div class="popup-overlay">
    <div class="popup-content">
      <h2>{{ item.name }}</h2>
      <div class="popup-body">
        <div class="popup-buttons">
          <div class="input-group">
            <label for="phoneNumber"
              >Phone Number <span class="hint"> (e.g., +201003420770)</span></label
            >
            <input id="phoneNumber" type="text" v-model="phoneNumber" />
          </div>
          <button @click="fetchContractorDetails">Raise RFQ</button>
          <button @click="submitQuotation">Submit Quotation</button>
          <button @click="acceptBid">Accept Bid</button>
          <button @click="bulkUpdates">Update Delivery</button>
          <button @click="purchaseOrder">Purchace Order</button>
          <button @click="assignDelivery">Assign Delivery</button>
          <button @click="outForDelivery">Out For Delivery</button>
          <button @click="createDeliveryNote">Delivered</button>
          <button class="close-button" @click="$emit('close')">Close</button>
        </div>

        <!-- Separate div for log textarea and Clear Log button -->
        <div class="log-section">
          <textarea v-model="log" readonly></textarea>
          <button @click="clearLog">Clear Logs</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  getBaseUrl,
  getContractorByPhone,
  raiseRFQ as raiseRFQCall,
  submitQuotation as submitQuotationCall,
  updateBidStatus,
  getDeliveries as getDeliveriesCall,
  bulkUpdates as bulkUpdatesCall,
  getCurrentDateTime,
  purchaseOrder as purchaseOrderCall,
  updateDelivery as updateDeliveryCall,
  assignDelivery as assignDeliveryCall,
  createDeliveryNote as createDeliveryNoteCall,
  addDeliveryNoteUrl as addDeliveryNoteUrlCall
} from '../apis/api'
import {
  rfqRequestBody,
  quotationRequestBody,
  bulkUpdateRequestBody,
  updatedeliveryBody,
  assignDeliveryBody,
  deliveryNoteBody,
} from '../TestData/requestData'

export default {
  props: {
    item: Object
  },
  setup(props) {
    const log = ref('')
    const phoneNumber = ref('')
    const rfqId = ref('')
    const opportunityId = ref('')

    const fetchContractorDetails = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)

      if (!phoneNumber.value.startsWith('+')) {
        log.value = 'Please enter a valid phone number starting with +'
        return
      }

      try {
        const contractorDetails = await getContractorByPhone(baseUrl, phoneNumber.value)
        if (!contractorDetails.id || !contractorDetails.fullName) {
          log.value = 'Contractor details not found'
          return
        }

        localStorage.setItem('contractorId', contractorDetails.id)
        localStorage.setItem('fullName', contractorDetails.fullName)
        localStorage.setItem('phoneNumber', phoneNumber.value)

        await raiseRFQ(localStorage.getItem('contractorId'), localStorage.getItem('fullName'))
      } catch (error) {
        log.value = `Error: ${error.message}`
      }
    }

    const raiseRFQ = async (contractorId, fullName) => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)

      const updatedRequestBody = {
        ...rfqRequestBody,
        contractorId,
        fullName,
        phoneNumber: phoneNumber.value
      }

      try {
        const result = await raiseRFQCall(baseUrl, updatedRequestBody)
        console.log(result)
        log.value += `\nRFQ Raised`
        log.value += `\nRFQ Number: ${result.rfqId}`
        log.value += '\n---------------------------------------------------------'
        log.value += '\n---------------------------------------------------------'
        rfqId.value = result.rfqId
        opportunityId.value = result.id

        localStorage.setItem('rfqId', result.rfqId)
        localStorage.setItem('opportunityId', result.opportunityId)
      } catch (error) {
        log.value += `\nError: ${error.message}`
      }
    }
    const getDeliveries = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)

      try {
        const result = await getDeliveriesCall(baseUrl, localStorage.getItem('opportunityId'))

        if (result && result.content && result.content.length > 0) {
          const products = result.content[0].products

          if (products && products.length >= 2) {
            // Fetch first and second LineItemId
            const firstLineItemId = products[0].lineItemId
            const secondLineItemId = products[1].lineItemId

            // Store them in localStorage
            localStorage.setItem('firstLineItemId', firstLineItemId)
            localStorage.setItem('secondLineItemId', secondLineItemId)

            log.value += `\nFirst LineItemId: ${firstLineItemId}`
            log.value += `\nSecond LineItemId: ${secondLineItemId}`
          } else {
            log.value += '\nNot enough products to fetch LineItemId.'
          }
        } else {
          log.value += '\nNo deliveries found.'
        }
      } catch (error) {
        log.value += `\nError: ${error.message}`
      }
    }

    const submitQuotation = async () => {
      await getDeliveries()
      log.value += `\nWait till the Quotation got submitted`
      const firstLineItemId = localStorage.getItem('firstLineItemId')
      const secondLineItemId = localStorage.getItem('secondLineItemId')

      if (!firstLineItemId || !secondLineItemId) {
        log.value += '\nError: Unable to fetch lineItemIds from deliveries.'
        return
      }

      quotationRequestBody.lineItems[0].id = firstLineItemId
      quotationRequestBody.lineItems[1].id = secondLineItemId

      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)
      const opportunityId = localStorage.getItem('opportunityId')

      try {
        const result = await submitQuotationCall(baseUrl, opportunityId, quotationRequestBody)
        localStorage.setItem('bidId', result.id)

        log.value += `\nQuotation Submitted`
        log.value += '\n---------------------------------------------------------'
        log.value += '\n---------------------------------------------------------'
      } catch (error) {
        log.value += `\nError: ${error.message}`
      }
    }

    const acceptBid = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)
      const bidId = localStorage.getItem('bidId')
      const requestBody = {
        bidStatus: 'ACCEPTED'
      }
      try {
        const result = await updateBidStatus(baseUrl, bidId, requestBody)
        log.value += `\nBid Accepted`
        log.value += '\n---------------------------------------------------------'
        log.value += '\n---------------------------------------------------------'
        const result2 = await getDeliveriesCall(baseUrl, localStorage.getItem('opportunityId'))
        const deliveryId = result2.content[0].id
        const orderId = result2.content[0].orderId
        localStorage.setItem('deliveryId', deliveryId)
        localStorage.setItem('orderId', orderId)
      } catch (error) {
        log.value += `\nError: ${error.message}`
      }
    }

    const bulkUpdates = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)
      const opportunityId = localStorage.getItem('opportunityId')
      const deliveryId = localStorage.getItem('deliveryId')
      const orderId = localStorage.getItem('orderId')
      const currentDateTime = getCurrentDateTime()
      const firstLineItemId = localStorage.getItem('firstLineItemId')
      const secondLineItemId = localStorage.getItem('secondLineItemId')
      const updatedRequestBody = bulkUpdateRequestBody.map((delivery) => ({
        ...delivery,
        id: deliveryId,
        orderId: orderId,
        opportunityId: opportunityId,
        deliveryDate: currentDateTime,
        expectedDeliveryDate: currentDateTime,
        products: delivery.products.map((product, index) => {
          return {
            ...product,
            lineItemId: index === 0 ? firstLineItemId : secondLineItemId
          }
        })
      }))
      const result = await bulkUpdatesCall(baseUrl, updatedRequestBody)
      updateDelivery()
      log.value += `\nBULK  Updated`
      log.value += '\n---------------------------------------------------------'
      log.value += '\n---------------------------------------------------------'
    }

    const updateDelivery = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)
      const currentDateTime = getCurrentDateTime()
      const firstLineItemId = localStorage.getItem('firstLineItemId')
      const secondLineItemId = localStorage.getItem('secondLineItemId')
      const updatedRequestBody = {
        ...updatedeliveryBody,
        deliveryDate: currentDateTime,
        products: updatedeliveryBody.products.map((product, index) => {
          return {
            ...product,
            lineItemId: index === 0 ? firstLineItemId : secondLineItemId
          }
        })
      }
      const result = await updateDeliveryCall(
        baseUrl,
        localStorage.getItem('deliveryId'),
        updatedRequestBody
      )
      log.value += `\nDelivery  Updated to Ready For Delivery`
      log.value += '\n---------------------------------------------------------'
      log.value += '\n---------------------------------------------------------'
    }

    const purchaseOrder = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)
      const result = await purchaseOrderCall(baseUrl, localStorage.getItem('deliveryId'))
      log.value += `\nPURCHASE ORDER: ${JSON.stringify(result, null, 2)}`
      log.value += '\n---------------------------------------------------------'
      log.value += '\n---------------------------------------------------------'
    }

    const assignDelivery = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)
      const deliveryId = localStorage.getItem('deliveryId')
      const currentDateTime = getCurrentDateTime()
      const firstLineItemId = localStorage.getItem('firstLineItemId')
      const secondLineItemId = localStorage.getItem('secondLineItemId')

      const updatedAssignDeliveryBody = {
        ...assignDeliveryBody,
        date: currentDateTime,
        products: assignDeliveryBody.products.map((product, index) => {
          return {
            ...product,
            lineItemId: index === 0 ? firstLineItemId : secondLineItemId
          }
        })
      }

      try {
        const result = await assignDeliveryCall(baseUrl, deliveryId, updatedAssignDeliveryBody)
        log.value += `\nDelivery Assigned`
        log.value += '\n---------------------------------------------------------'
        log.value += '\n---------------------------------------------------------'
      } catch (error) {
        log.value += `\nError: ${error.message}`
      }
    }

    const outForDelivery = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)
      const result = await updateDeliveryCall(baseUrl, localStorage.getItem('deliveryId'), {
        status: 'OUT_FOR_DELIVERY'
      })
      log.value += `\nDelivery Updated to Out For Delivery`
      log.value += '\n---------------------------------------------------------'
      log.value += '\n---------------------------------------------------------'
    }

    const createDeliveryNote = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)
      const deliveryId = localStorage.getItem('deliveryId')
      const firstLineItemId = localStorage.getItem('firstLineItemId')
      const secondLineItemId = localStorage.getItem('secondLineItemId')

      const updatedDeliveryNoteBody = {
        ...deliveryNoteBody,
        products: deliveryNoteBody.products.map((product, index) => {
          const lineItemId = index === 0 ? firstLineItemId : secondLineItemId
          return {
            ...product,
            lineItemId: lineItemId, 
            product: {
              ...product.product,
              lineItemId: lineItemId
            }
          }
        })
      }

      try {
        const result = await createDeliveryNoteCall(baseUrl, deliveryId, updatedDeliveryNoteBody)
        addDeliveryNoteUrl()
        log.value += `\nDelivery got Delivered`
        log.value += '\n---------------------------------------------------------'
        log.value += '\n---------------------------------------------------------'
      } catch (error) {
        log.value += `\nError: ${error.message}`
      }
    }
    
    const addDeliveryNoteUrl = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)
      const deliveryId = localStorage.getItem('deliveryId')
      const deliveryNoteUrl = encodeURIComponent('https://api.staging.brkz.com/files/3377e716-6cbd-4f61-90de-56c47a2ea1bf.jpg');

      try {
        const result = await addDeliveryNoteUrlCall(baseUrl, deliveryId, deliveryNoteUrl)
        log.value += `\nDelivery Note File Submitted`
        log.value += '\n---------------------------------------------------------'
        log.value += '\n---------------------------------------------------------'
      } catch (error) {
        log.value += `\nError: ${error.message}`
      }
    }
  
    const clearLog = () => {
      log.value = '' // Clears the log
    }
    return {
      log,
      phoneNumber,
      fetchContractorDetails,
      submitQuotation,
      acceptBid,
      bulkUpdates,
      purchaseOrder,
      updateDelivery,
      assignDelivery,
      outForDelivery,
      createDeliveryNote,
      addDeliveryNoteUrl,
      clearLog,
      getCurrentDateTime
    }
  }
}
</script>

<style src="../styles/main.css"></style>
