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
  quotationRequestBody_ar_2items_different
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
const logs = ref('')
const rfqId = ref('')
const opportunityId = ref('')
const quotationId = ref('')
const contractorId = ref('')
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
    addLog('---------------------------------------------------------')
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
    addLog('---------------------------------------------------------')
    rfqId.value = result.rfqId
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
  try {
    const result = await submitQuotationCall(baseUrl, opportunityId.value, quotationRequestBody)
    quotationId.value = result.id
    addLog(`Quotation Submitted`)
    addLog('---------------------------------------------------------')
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
    const orderId = result2.content[0].orderId
    addLog(
      `Order Generated Successfully!\n\tOrderNumber: ${rfqId.value}\n\tOppurtunityId: ${opportunityId.value}\n\tOrderId: ${orderId}\n\tOrder Status: IN_PROCESS`
    )
    logs.value += '-----------------------------------------------------------------------\n'
  } catch (error) {
    addLog(`Error: ${error.message}`)
  }
}

const clearLogs = () => {
  logs.value = '';
}

const addLog = (message) => {
  const timestamp = new Date().toLocaleTimeString()
  logs.value += `[${timestamp}] ${message}\n`
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
</script>

<style scoped src="../styles/orderGeneratorStyles.css"></style>
<style src="../styles/main.css"></style>