import axios from 'axios'

const BASE_URLS = {
  staging: 'https://api.staging.brkz.com',
  dev: 'https://api.dev.brkz.com'
}

export const getBaseUrl = (environment) => BASE_URLS[environment]

const axiosInstance = axios.create({
  headers: {
    'brkz-client-id': 'IIBcthJM78AJ7Owz',
    'brkz-client-secret': '9e26f236f40f43b2b99c021396bce98e',
    'Accept-Language': 'en',
    'Content-Type': 'application/json'
  }
})

export const callEndpoint = async (baseUrl, endpoint, method = 'GET', data = null) => {
  const url = `${baseUrl}${endpoint}`
  const options = {
    method,
    url,
    data
  }

  try {
    const response = await axiosInstance(options)
    return response.data
  } catch (error) {
    console.error('API call error:', error)
    throw error
  }
}
export const getCurrentDateTime = () => {
  const now = new Date()
  const isoString = now.toISOString()
  return isoString.slice(0, 19) + '.' + isoString.slice(20, 23)
}

export const getContractorByPhone = async (baseUrl, phoneNumber) => {
  return await callEndpoint(baseUrl, `/contractor/phoneNumber/${phoneNumber}`, 'GET')
}

export const raiseRFQ = async (baseUrl, requestBody) => {
  return await callEndpoint(baseUrl, '/opportunity/raise/manual', 'POST', requestBody)
}

export const submitQuotation = async (baseUrl, opportunityId, requestBody) => {
  return await callEndpoint(baseUrl, `/bidding/bid/${opportunityId}`, 'POST', requestBody)
}

export const updateBidStatus = async (baseUrl, bidId, requestBody) => {
  return await callEndpoint(baseUrl, `/bidding/bid/${bidId}/status`, 'PATCH', requestBody)
}

export const getDeliveries = async (baseUrl, opportunityId) => {
  return await callEndpoint(baseUrl, `/deliveries?opportunityId=${opportunityId}&page=0&size=10000`)
}

export const bulkUpdates = async (baseUrl, requestBody) => {
  return await callEndpoint(baseUrl, '/deliveries/bulk-update', 'POST', requestBody)
}
export const purchaseOrder = async (baseUrl, deliveryId) => {
  return await callEndpoint(baseUrl, `/deliveries/${deliveryId}/purchase-order`, 'POST', {})
}
export const updateDelivery = async (baseUrl, deliveryId, requestBody) => {
  return await callEndpoint(baseUrl, `/deliveries/${deliveryId}`, 'PUT', requestBody)
}
export const assignDelivery = async(baseUrl, deliveryId, requestBody) => {
  return await callEndpoint(baseUrl, `/deliveries/${deliveryId}/assignment`, 'POST', requestBody)
}
export const createDeliveryNote = async(baseUrl, deliveryId, requestBody) => {
  return await callEndpoint(baseUrl, `/deliveries/${deliveryId}/delivery-note`, 'POST', requestBody)
}
export const addDeliveryNoteUrl = async(baseUrl, deliveryId, deliveryNoteUrl) => {
  return await callEndpoint(baseUrl, `/deliveries/${deliveryId}/delivery-note-url?deliveryNoteUrl=${deliveryNoteUrl}`, 'PATCH')
}