import axios from 'axios'

const BASE_URLS = {
  staging: 'https://api.staging.brkz.com',
  dev: 'https://api.dev.brkz.com',
  local: '/api'
}

export const getBaseUrl = (environment) => BASE_URLS[environment]

const axiosInstance = axios.create({
  headers: {
    'brkz-client-id': 'IIBcthJM78AJ7Owz',
    'brkz-client-secret': '9e26f236f40f43b2b99c021396bce98e',
    'city-id': '64913b22e02ccab65544bb2c',
    'Accept-Language': 'en',
    'Content-Type': 'application/json'
  }
})

const axiosInstance_ar = axios.create({
  headers: {
    'brkz-client-id': 'IIBcthJM78AJ7Owz',
    'brkz-client-secret': '9e26f236f40f43b2b99c021396bce98e',
    'city-id': '64913b22e02ccab65544bb2c',
    'Accept-Language': 'ar_sa',
    'Content-Type': 'application/json'
  }
})

export const callEndpoint = async (baseUrl, endpoint, method = 'GET', data = null, lang='en') => {
  const url = `${baseUrl}${endpoint}`
  const options = {
    method,
    url,
    data
  }

  try {
    let response = null
    if( lang === 'en')
      response = await axiosInstance(options)
    else
      response = await axiosInstance_ar(options)
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

export const raiseRFQ = async (baseUrl, requestBody, lang='en') => {
  return await callEndpoint(baseUrl, '/opportunity/raise/manual', 'POST', requestBody, lang)
}

export const submitQuotation = async (baseUrl, opportunityId, requestBody, lang='en') => {
  return await callEndpoint(baseUrl, `/bidding/bid/${opportunityId}`, 'POST', requestBody, lang)
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
