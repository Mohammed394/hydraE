<template>
  <div class="popup-overlay">
    <div class="popup-content">
      <h2>{{ item.name }}</h2>
      <div class="popup-body">
        <div class="input-group">
          <div class="form-group">
            <label for="buyerPhoneNo">Buyer Phone Number</label>
            <input id="buyerPhoneNo" type="text" placeholder="+208313131313" v-model="buyerPhoneNo" />
            <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
          </div>
          <div class="form-group">
            <label for="lang">Language</label>
            <select id="lang" v-model="lang">
              <option v-for="lang in languageOptions" :key="lang" :value="lang">
                {{ lang }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="itemsCount">Items Count</label>
            <select id="itemsCount" v-model="itemsCount">
              <option v-for="count in itemOptions" :key="count" :value="count">
                {{ count }}
              </option>
            </select>
          </div>
          <div v-if="itemsCount == 2" class="form-group">
            <label for="itemsType">Items Types</label>
            <select id="itemsType" v-model="itemsType">
              <option v-for="type in itemTypeOptions" :key="type" :value="type">
                {{ type.label }}
              </option>
            </select>
            <p v-if="typesErrorMessage" style="color: red;">{{ typesErrorMessage }}</p>
          </div>
          <div class="buttons">
            <button @click="generateOrder">Generate Order</button>
            <div class="po-buttons buttons" v-if="itemsCount == 1 && lang =='en' && isOrderGenerated">
              <div class="credit-option">
                <input type="checkbox" id="credit" v-model="isCreditSupplier">
                <label for="credit">Credit Supplier</label>
              </div>   
              <button @click="generatePurchaseOrder">Generate PO</button>    
              <button @click="procApprovePurchaseOrder">Proc. Approve PO</button>    
              <button @click="finApprovePurchaseOrder">Fin. Approve PO</button>    
              <div class="payments" v-if="isSuppPaymentRequestCreated">
                <label for="paymentType">Supplier Payment Type</label>
                <select id="paymentType" v-model="paymentType">
                  <option v-for="type in supplierPaymentTypes" :key="type" :value="type">
                  {{ type.label }}
                  </option>
                </select>
                <button @click="handlePayment">Make Payment</button>
              </div>
              <div v-if="paymentsIds.length > 0" class="mark-paid">
                  <button @click="markPaymentsAsPaid">Mark as Paid</button>
              </div>
            </div>
            <button class="close-button" @click="$emit('close')">Close</button>
          </div>
        </div>
        <!-- Separate div for log textarea and Clear Log button -->
        <div class="log-section">
          <textarea v-model="logs" rows="12"></textarea>
          <button @click="clearLogs">Clear Logs</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  getBaseUrl,
  raiseRFQ as raiseRFQCall,
  getContractorByPhone,
  submitQuotation as submitQuotationCall,
  getDeliveries as getDeliveriesCall,
  updateBidStatus,
  getCurrentDateTime,
  updateDelivery as updateDeliveryCall,
  purchaseOrder as purchaseOrderCall,
  initApprovePurchaseOrder,
  approvePurchaseOrder,
  getPurchaseOrderDetails,
  getPaymentRequest as getPaymentRequestCall,
  makePayment as makePaymentCall,
  markPaymentAsPaid as markAsPaidCall
} from '../apis/api'

import {
  rfqRefactoredBody_en_single_item,
  rfqRefactoredBody_ar_single_item,
  rfqRefactoredBody_en_2items_2units,
  rfqRefactoredBody_ar_2items_2units,
  rfqRefactoredBody_en_2items_2skus,
  rfqRefactoredBody_ar_2items_2skus,
  rfqRefactoredBody_en_2items_different,
  rfqRefactoredBody_ar_2items_different,
  quotationRequestBody_en_single_item,
  quotationRequestBody_ar_single_item,
  quotationRequestBody_en_2items_2units,
  quotationRequestBody_ar_2items_2units,
  quotationRequestBody_en_2items_2skus,
  quotationRequestBody_ar_2items_2skus,
  quotationRequestBody_en_2items_different,
  quotationRequestBody_ar_2items_different,
  updateDraftDelivery_en_item_Request as updateDeliveryRequest,
  DEFAULT_SUPP_PAYMENT,
  CREDIT_SUPP_PAYMENT,
  createPaymentBodyRequest,
  paymentProofRequest
} from '../TestData/requestData'

const props = defineProps({
  item: Object
});
const languageOptions = ['en', 'ar_sa']
const lang = ref('en')
const buyerPhoneNo = ref('');
let errorMessage = ref('');
let typesErrorMessage = ref('');
const itemsCount = ref(1);
const itemsType = ref('');
const itemOptions = [1, 2];
const itemTypeOptions = [
  {
    value: '0',
    label: 'Same Product SKU, Different Units',
  },
  {
    value: '1',
    label: 'Same Product, Different SKUs',
  },
  {
    value: '2',
    label: 'Different Products',
  },
];

const supplierPaymentTypes = [
  {
    value: 'single',
    label: 'Single Payment',
  },
  {
    value: 'Multiple',
    label: 'Multiple Payments',
  },
];
const isCreditSupplier = ref(false)
const logs = ref('')
const orderNumber = ref('')
const orderId = ref('')
const opportunityId = ref('')
const quotationId = ref('')
const contractorId = ref('')
const isOrderGenerated = ref(false)
const deliveryId = ref('')
const paymentRequestId = ref('')
const paymentType = ref('single')
let paymentsIds = ref([])
let isSuppPaymentRequestCreated = ref(false)
let baseUrl = ""

const generateOrder = async () => {
  if (!buyerPhoneNo.value) {
    errorMessage.value = 'Phone Number is required!';
    return;
  }
  else {
    errorMessage.value = '';
  }
  if(itemsCount.value == 2 && itemsType.value == ''){
    typesErrorMessage.value = 'Items type should be set!';
    return;
  }
  else {
    typesErrorMessage.value = '';
  }
  const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
  baseUrl = getBaseUrl(selectedEnvironment)
  await fetchContractorInfo()
  await getDeliveries()
  await submitQuotation()
  await acceptQuotation()  
}

const fetchContractorInfo = async () => {
  if (!buyerPhoneNo.value.startsWith('+')) {
    addLog('Please enter a valid phone number starting with +')
    return
  }
  addLog(`Fetching ${buyerPhoneNo.value} Contractor details ..`)

  try {
    const contractorDetails = await getContractorByPhone(baseUrl, buyerPhoneNo.value)
    if (!contractorDetails.id || !contractorDetails.fullName) {
      addLog('Contractor details not found')
      return
    }
    contractorId.value = contractorDetails.id
    addLog(`Fetched Successfully!`)
    addLineSeparator()
    localStorage.setItem('phoneNumber', buyerPhoneNo.value)
    await raiseCustomizedRFQ(contractorId.value, lang, itemsCount, itemsType)
  } catch (error) {
    addLog(`Error: ${error.message}`)
  }
}

const raiseCustomizedRFQ = async (contractorId, lang, productCount, productsType) => {
  const customizedRequestBody = selectRfqRequestBodyPerInput(lang.value, productCount.value, productsType.value.value)
  const updatedRequestBody = {
    ...customizedRequestBody,
    contractorId,
  }
  try {
    const result = await raiseRFQCall(baseUrl, updatedRequestBody, lang.value)
    addLog(`RFQ Raised`)
    addLog(`RFQ Number: ${result.rfqId}`)
    addLineSeparator()
    orderNumber.value = result.rfqId
    opportunityId.value = result.opportunityId
  } catch (error) {
    addLog(`\nError: ${error.message}`)
  }
}

const getDeliveries = async () => {
  try {
    const result = await getDeliveriesCall(baseUrl, opportunityId.value)

    if (result && result.content && result.content.length > 0) {
      const products = result.content[0].products

      if (products && products.length == itemsCount.value) {
        // Fetch first and second LineItemId
        for (let i = 0; i < itemsCount.value; i++) {
          let lineItemId = products[i].lineItemId
          localStorage.setItem(`lineItem_${i}_id`, lineItemId)
        }
      } else {
        addLog('Not enough products to fetch LineItemId.')
      }
    } else {
      addLog('No deliveries found.')
    }
  } catch (error) {
    addLog(`Error: ${error.message}`)
  }

}

const submitQuotation = async () => {
  const quotationRequestBody = updateQuotationRequestPerInput(lang.value, itemsCount.value, itemsType.value.value)
  if (!quotationRequestBody) {
    addLog("Error: Quotation request body is missing or invalid.");
    return;
  }
  try {
    const result = await submitQuotationCall(baseUrl, opportunityId.value, quotationRequestBody)
    quotationId.value = result.id
    addLog(`Quotation Submitted`)
    addLineSeparator()
  } catch (error) {
    addLog(`Error: ${error.message}`)
  }
}

const acceptQuotation = async () => {
  const requestBody = {
    bidId: quotationId.value,
    bidStatus: 'ACCEPTED',
    source: 'PROCUREMENT'
  }

  try {
    await updateBidStatus(baseUrl, quotationId.value, requestBody)
    const result2 = await getDeliveriesCall(baseUrl, opportunityId.value)
    orderId.value = result2.content[0].orderId
    deliveryId.value = result2.content[0].id
    addLog(
      `Order Generated Successfully!\n\tOrderNumber: ${orderNumber.value}\n\tOppurtunityId: ${opportunityId.value}\n\tOrderId: ${orderId.value}\n\tOrder Status: IN_PROCESS`
    )
    isOrderGenerated.value = true
    addLineSeparator()
  } catch (error) {
    addLog(`Error: ${error.message}`)
  }
}

const generatePurchaseOrder = async () => {
  await updateDelivery()
  addLog('Generating Purchase Order...');
  try {
    const result = await purchaseOrderCall(baseUrl, deliveryId.value)
    const poNumber = result.poNumber  
    addLog(`Purchase Order Generated Successfully! PO Number: ${poNumber}`);
    addLineSeparator()
  } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      addLog(`Error generating Purchase Order:${errorMessage}`);
  }
}

const showPaymentRequestSummery = async () => {
  try {
    const result = await getPaymentRequestCall(baseUrl, paymentRequestId.value)
    const supplierPaymentRequest = result.supplierPaymentRequest

    const currency = supplierPaymentRequest.amount.currency
    const balanceDue = supplierPaymentRequest.balanceDueAmount.amount
    const status = supplierPaymentRequest.status
    const dueDate = supplierPaymentRequest.dueDate.split('T')[0]

    addLog(
      `Payment Request Info: \n`+
      `\tBalance Due: ${balanceDue} ${currency}\n` +
      `\tStatus: ${status}\n` +
      `\tDue Date: ${dueDate}` 
    )
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    addLog(`Error fetching payment request summary: ${errorMessage}`);
  }
  addLineSeparator()
}

const updateDelivery = async () => {
  addLog('Updating the delivery .. ');
  const lineItem_0_id = localStorage.getItem("lineItem_0_id")
  const currentDateTime = getCurrentDateTime()
  const request = {
      ...updateDeliveryRequest,
      id: deliveryId.value,
      orderId: orderId.value,
      opportunityId: opportunityId.value,
      orderNumber: orderNumber.value,
      contractorId: contractorId.value,
      deliveryDate: currentDateTime,
      referenceNumber: `${updateDeliveryRequest.deliveryNumber}-${orderNumber.value}`,
      expectedDeliveryDate: currentDateTime,
      deliveryPaymentTerms: isCreditSupplier.value ? CREDIT_SUPP_PAYMENT : DEFAULT_SUPP_PAYMENT,
      products: updateDeliveryRequest.products.map((product, index) => {
        return {
          ...product,
          lineItemId: lineItem_0_id
        }
      })
  }

  try {
    await updateDeliveryCall(
    baseUrl,
    deliveryId.value,
    request
    )
    addLog(`Draft Delivery ${request.referenceNumber} Updated Successfully!`)    
    addLineSeparator()
  } catch (error) {
    addLog(`Error: ${error.message}`)
  }
}

const procApprovePurchaseOrder = async () => {
  addLog('Procurement Approving Purchase Order...');
  try {
    await initApprovePurchaseOrder(baseUrl, deliveryId.value)
    addLog('Purchase Order Approved by Procurement!');
    addLineSeparator()
  } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      addLog(`Error during Procurement Approval: ${errorMessage}`);
  }
}

const finApprovePurchaseOrder = async () => {
  addLog('Finance Approving Purchase Order...');
  try {
    const result = await approvePurchaseOrder(baseUrl, deliveryId.value)
    addLog('Purchase Order Approved by Finance!');
    addLineSeparator()
    addLog('Fetching Details ..')
    await new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds delay
    const poDetails = await getPurchaseOrderDetails(baseUrl, result.zoho.purchaseOrderId)
    const paymentRequest = poDetails.supplierPaymentRequest
    addLog(
      `\n\t${result.poNumber} is now ${result.status}\n` + 
      `\tTotal Amount: ${result.total.amount} ${result.total.currency}\n`+
      `\tDelivery Status: ${poDetails.delivery.status}\n` +
      `\tDelivery Date: ${poDetails.delivery.deliveryDate.split('T')[0]}\n` +
      `\tSupplier Payment: ${poDetails.supplier.isCredit ? 'Credit' : 'Cash'}: ${poDetails.supplier.paymentTerm}\n`
    ) 
    if(paymentRequest){ 
      isSuppPaymentRequestCreated.value = true
      paymentRequestId.value = paymentRequest.id
      await showPaymentRequestSummery()
    }
    else
      addLog(`No Payment Request is created against this PO\n`)
  } catch (error) {
      const errorMessage = error.response?.data?.message || error.message
      addLog(`Error during Finance Approval: ${errorMessage}`)
  }
}

const handlePayment = async () => {
  addLog('Making Payment...');
  const paymentBody = createPaymentBodyRequest(paymentType.value.value, paymentRequestId.value)
  try {
    if(paymentType.value.value == 'single'){
      const result = await processPaymentCall(paymentBody)
      paymentsIds.value.push(result.id)
      addLog(`Payment of ${result.amount} made successfully!\n` + 
            `\tPayment ID: ${result.id}\n` + 
            `\tPayment Status: ${result.status}`);
    }
    else { // for now multiple = 2 payments
      for (let i = 0; i < 2; i++){
        const result = await processPaymentCall(paymentBody)
        addLog(`Payment #${i+1} of ${result.amount} made successfully!\n` + 
              `\tPayment ID: ${result.id}\n` + 
              `\tPayment Status: ${result.status}`);
        paymentsIds.value.push(result.id)
      }
    }
    addLineSeparator()   
  } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      addLog(`Error making payment: ${errorMessage}`);
  }
}

const processPaymentCall = async (requestBody) => {
  const response = await makePaymentCall(baseUrl, requestBody);
  return {
    id: response.id,
    status: response.status,
    amount: response.amount.amount,
  }
}

const markPaymentsAsPaid = async () => {
  for (const paymentId of paymentsIds.value) {
    try {
      await markAsPaidCall(baseUrl, paymentId, paymentProofRequest);
      addLog(`Payment ID ${paymentId} marked as PAID successfully`);
    } catch (error) {
      addLog(`Error marking Payment ID ${paymentId} as paid: ${error.message}`);
    }
  }
  addLineSeparator()
  await showPaymentRequestSummery()
  addLog('...  resetting order state ...')
  await resetOrderState()
}

const clearLogs = () => {
  logs.value = '';
}

const addLog = (message) => {
  const timestamp = new Date().toLocaleTimeString()
  logs.value += `[${timestamp}] ${message}\n`
}

const addLineSeparator = () => {
  logs.value += '-----------------------------------------------------------------------\n'
}

const selectRfqRequestBodyPerInput = (lang, productsCount, productsType) => {
  if (productsCount == 1) {
    if (lang == "en")
      return rfqRefactoredBody_en_single_item
    else
      return rfqRefactoredBody_ar_single_item
  }
  else if (productsCount == 2) {
    switch (productsType) {
      case '0': // 'Same Product SKU, Different Units',
        if (lang == "en")
          return rfqRefactoredBody_en_2items_2units
        else
          return rfqRefactoredBody_ar_2items_2units
      case '1': //'Same Product, Different SKUs',
        if (lang == "en")
          return rfqRefactoredBody_en_2items_2skus
        else
          return rfqRefactoredBody_ar_2items_2skus
      case '2': //'Different Products',
        if (lang == "en")
          return rfqRefactoredBody_en_2items_different
        else
          return rfqRefactoredBody_ar_2items_different
      default:
        return
    }
  }
}

const updateQuotationRequestPerInput = (lang, productsCount, productsType) => {
  if (productsCount == 1) {
    const firstLineItemId = localStorage.getItem("lineItem_0_id")
    if (!firstLineItemId) {
      addLog('Error: Unable to fetch lineItemId.')
      return
    }
    if (lang == "en") {
      quotationRequestBody_en_single_item.lineItems[0].id = firstLineItemId
      return quotationRequestBody_en_single_item
    }
    else {
      quotationRequestBody_ar_single_item.lineItems[0].id = firstLineItemId
      return quotationRequestBody_ar_single_item
    }
  }
  else if (productsCount == 2) {
    const firstLineItemId = localStorage.getItem("lineItem_0_id")
    const secondLineItemId = localStorage.getItem("lineItem_1_id")
    if (!firstLineItemId || !secondLineItemId) {
      addLog('Error: Unable to fetch lineItemIds.')
      return
    }
    switch (productsType) {
      case '0': // 'Same Product SKU, Different Units',
        if (lang == "en") {
          quotationRequestBody_en_2items_2units.lineItems[0].id = firstLineItemId
          quotationRequestBody_en_2items_2units.lineItems[1].id = secondLineItemId
          return quotationRequestBody_en_2items_2units
        }
        else {
          quotationRequestBody_ar_2items_2units.lineItems[0].id = firstLineItemId
          quotationRequestBody_ar_2items_2units.lineItems[1].id = secondLineItemId
          return quotationRequestBody_ar_2items_2units
        }
      case '1': //'Same Product, Different SKUs',
        if (lang == "en") {
          quotationRequestBody_en_2items_2skus.lineItems[0].id = firstLineItemId
          quotationRequestBody_en_2items_2skus.lineItems[1].id = secondLineItemId
          return quotationRequestBody_en_2items_2skus
        }
        else {
          quotationRequestBody_ar_2items_2skus.lineItems[0].id = firstLineItemId
          quotationRequestBody_ar_2items_2skus.lineItems[1].id = secondLineItemId
          return quotationRequestBody_ar_2items_2skus
        }
      case '2': //'Different Products',
        if (lang == "en") {
          quotationRequestBody_en_2items_different.lineItems[0].id = firstLineItemId
          quotationRequestBody_en_2items_different.lineItems[1].id = secondLineItemId
          return quotationRequestBody_en_2items_different
        }
        else {
          quotationRequestBody_ar_2items_different.lineItems[0].id = firstLineItemId
          quotationRequestBody_ar_2items_different.lineItems[1].id = secondLineItemId
          return quotationRequestBody_ar_2items_different
        }
      default:
        return
    }
  }
}

const resetOrderState = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000)) // 3 seconds delay

  isSuppPaymentRequestCreated.value = false
  isOrderGenerated.value = false
  isCreditSupplier.value = false
  orderNumber.value = ''
  opportunityId.value = ''
  quotationId.value = ''
  contractorId.value = ''
  deliveryId.value = ''
  orderId.value = ''
  paymentType.value = 'single'
  paymentsIds.value = []
  paymentRequestId.value = ''
  localStorage.removeItem('lineItem_0_id')
  localStorage.removeItem('lineItem_1_id')
  addLog('...  Order state is reset ...')
  addLineSeparator()
}

</script>

<style scoped src="../styles/orderGeneratorStyles.css"></style>
<style src="../styles/main.css"></style>