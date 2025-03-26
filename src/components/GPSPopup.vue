<template>
  <div class="popup-overlay">
    <div class="popup-content">
      <h2>GPS Tracking Simulation</h2>
      <div class="popup-body">
        <!-- Map Container -->
      

        <!-- Buttons for simulating GPS events -->
        <div class="popup-buttons">
          <div class="input-group">
            <label for="phoneNumber">
              Phone Number
              <span class="hint">(e.g., +201003420770)</span>
            </label>
            <input id="phoneNumber" type="text" v-model="phoneNumber" />
          </div>

          <!-- Create Delivery -->
          <button @click="createDelivery" :disabled="deliveryCreated">
            {{ deliveryCreated ? 'Delivery Created' : 'Create Delivery' }}
          </button>

          <!-- Start Tracking -->
          <button @click="onStartTracking" :disabled="!deliveryCreated || trackingStarted">
            {{ trackingStarted ? 'Tracking Started' : 'Start Tracking' }}
          </button>

          <hr />

          <!-- Move to Next Waypoint (5 calls in total) -->
          <button @click="moveToNextWaypoint" :disabled="!trackingStarted">
            Move to Next Waypoint
          </button>

          <hr />
        </div>
          <div id="map" ref="mapRef" class="map-container"></div>
      </div>

      <!-- Log Section -->
      <div class="log-section">
        <textarea v-model="log" readonly></textarea>
        <button @click="clearLog">Clear Logs</button>
      </div>
      <button class="close-button" @click="$emit('close')">Close</button>

    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Leaflet's default icon paths
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

// Your API imports
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
  startTracking as startTrackingCall,
  geofenceUpdate as geofenceUpdateCall
} from '../apis/api'

// Your request bodies
import {
  rfqRequestBody,
  quotationRequestBody,
  bulkUpdateRequestBody,
  updatedeliveryBody,
  assignDeliveryBody,
  startTrackingBody,

} from '../TestData/requestData'

export default {
  name: 'GpsTrackingPopup',
  props: {
    deliveryId: {
      type: String,
      required: false,
      default: 'example-delivery-id'
    }
  },
  setup(props) {
    const mapRef = ref(null)
    const map = ref(null)
    const marker = ref(null)
    const routePolyline = ref(null)

    // Flags
    const gpsEnabled = ref(false)
    const deliveryCreated = ref(false)
    const trackingStarted = ref(false)

    // Log and user input
    const log = ref('')
    const phoneNumber = ref('')
    const rfqId = ref('')
    const opportunityId = ref('')



    // ---------------------------
    //    API & Business Logic
    // ---------------------------
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

        await raiseRFQ(contractorDetails.id, contractorDetails.fullName)
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
        log.value += `\nRFQ Raised`
        log.value += `\nRFQ Number: ${result.rfqId}`
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
            const firstLineItemId = products[0].lineItemId
            const secondLineItemId = products[1].lineItemId

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

      try {
        const result = await submitQuotationCall(
          baseUrl,
          localStorage.getItem('opportunityId'),
          quotationRequestBody
        )
        localStorage.setItem('bidId', result.id)

        log.value += `\nQuotation Submitted`
        log.value += '\n---------------------------------------------------------'
      } catch (error) {
        log.value += `\nError: ${error.message}`
      }
    }

    const acceptBid = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)
      const bidId = localStorage.getItem('bidId')
      const requestBody = { bidStatus: 'ACCEPTED' }

      try {
        await updateBidStatus(baseUrl, bidId, requestBody)
        log.value += `\nBid Accepted`
        log.value += '\n---------------------------------------------------------'

        const result2 = await getDeliveriesCall(baseUrl, localStorage.getItem('opportunityId'))
        const deliveryId = result2.content[0].id
        const orderId = result2.content[0].orderId
        localStorage.setItem('deliveryId', deliveryId)
        localStorage.setItem('orderId', orderId)
        addLog(`Delivery ID: ${deliveryId}`)
        addLog(`ORDER ID: ${orderId}`)
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
        products: delivery.products.map((product, index) => ({
          ...product,
          lineItemId: index === 0 ? firstLineItemId : secondLineItemId
        }))
      }))

      await bulkUpdatesCall(baseUrl, updatedRequestBody)
      await updateDelivery()  // once bulk updates are done, also update the delivery
      log.value += `\nBULK Updated`
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
        products: updatedeliveryBody.products.map((product, index) => ({
          ...product,
          lineItemId: index === 0 ? firstLineItemId : secondLineItemId
        }))
      }
      await updateDeliveryCall(baseUrl, localStorage.getItem('deliveryId'), updatedRequestBody)
      log.value += `\nDelivery Updated to Ready For Delivery`
      log.value += '\n---------------------------------------------------------'
    }

    const purchaseOrder = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)
      const result = await purchaseOrderCall(baseUrl, localStorage.getItem('deliveryId'))
      log.value += `\nPURCHASE ORDER: ${JSON.stringify(result, null, 2)}`
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
        products: assignDeliveryBody.products.map((product, index) => ({
          ...product,
          lineItemId: index === 0 ? firstLineItemId : secondLineItemId
        }))
      }

      try {
        await assignDeliveryCall(baseUrl, deliveryId, updatedAssignDeliveryBody)
        log.value += `\nDelivery Assigned`
        log.value += '\n---------------------------------------------------------'
      } catch (error) {
        log.value += `\nError: ${error.message}`
      }
    }

    // Combined createDelivery method
    const createDelivery = async () => {
      try {
        // 1. Fetch contractor details & raise RFQ
        await fetchContractorDetails()

        // 2. Submit quotation
        await submitQuotation()

        // 3. Accept bid
        await acceptBid()

        // 4. Bulk updates & update
        await bulkUpdates()
        await new Promise(resolve => setTimeout(resolve, 1000))

        // 5. Purchase order
        await purchaseOrder()

        // 6. Assign delivery
        await assignDelivery()

        // Once done, mark as created
        deliveryCreated.value = true
        log.value += `\nDelivery creation flow complete.`
      } catch (error) {
        log.value += `\nError in createDelivery: ${error.message}`
      }
    }

    // ---------------------------
    //    Tracking & Geofence
    // ---------------------------
        /**
     * We'll define 5 steps that correspond to:
     * 1) Arrive Supplier (SUPPLIER, ENTRY)
     * 2) Depart Supplier (SUPPLIER, EXIT)
     * 3) Arrive Buyer Outer (BUYER_OUTER, ENTRY)
     * 4) Arrive Buyer Inner (BUYER_INNER, ENTRY)
     * 5) Depart Buyer Inner (BUYER_INNER, EXIT)
     */
     const routeSteps = ref([
      {
        label: 'Arrive Supplier',
        geofenceId: 'SUPPLIER',
        eventType: 'ENTRY',
        coordinate: [24.6609, 46.6421]
      },
      {
        label: 'Depart Supplier',
        geofenceId: 'SUPPLIER',
        eventType: 'EXIT',
        coordinate: [24.6609, 46.6421]
      },
      {
        label: 'Arrive Buyer Outer',
        geofenceId: 'BUYER_OUTER',
        eventType: 'ENTRY',
        coordinate: [24.7000, 46.4800]
      },
      {
        label: 'Arrive Buyer Inner',
        geofenceId: 'BUYER_INNER',
        eventType: 'ENTRY',
        coordinate: [24.7283, 45.9091]
      },
      {
        label: 'Depart Buyer Inner',
        geofenceId: 'BUYER_INNER',
        eventType: 'EXIT',
        coordinate: [24.7283, 45.9091]
      }
    ])

    // Index for these 5 steps
    const currentStep = ref(0)

    // (Optional) For visual reference, a polyline from "supplier" to "buyer"
    const routeCoordinates = ref([
      [24.6609, 46.6421],  // Supplier
      [24.6850, 46.5500],
      [24.7000, 46.4800],  // Could be an intermediate spot
      [24.7283, 45.9091]   // Buyer
    ])

    // Leaflet default icon setup
    const defaultIcon = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl: iconShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    })
    L.Marker.prototype.options.icon = defaultIcon

    onMounted(() => {
      initMap()
      // Force map re-render
      nextTick(() => {
        setTimeout(() => {
          if (map.value) {
            map.value.invalidateSize()
          }
        }, 200)
      })
      // On window resize
      window.addEventListener('resize', () => {
        if (map.value) {
          map.value.invalidateSize()
        }
      })
    })

    function initMap() {
      // Initialize map to the first coordinate
      map.value = L.map(mapRef.value).setView(routeCoordinates.value[0], 8)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map.value)

      // Draw a polyline from supplier to buyer
      routePolyline.value = L.polyline(routeCoordinates.value, { color: 'blue' }).addTo(map.value)

      // Marker starts at the first coordinate
      marker.value = L.marker(routeCoordinates.value[0]).addTo(map.value)
    }
    const onStartTracking = async () => {
      const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
      const baseUrl = getBaseUrl(selectedEnvironment)
      const deliveryId = localStorage.getItem('deliveryId')

      try {
        // Start official tracking
        await startTrackingCall(baseUrl, deliveryId, startTrackingBody)
        addLog(`Tracking Started`)
        trackingStarted.value = true
      } catch (error) {
        addLog(error.message)
      }
    }

    // Move to next step (5 total)
    function moveToNextWaypoint() {
      if (!trackingStarted.value) {
        addLog(`Please start tracking first!`)
        return
      }
      if (currentStep.value >= routeSteps.value.length) {
        addLog(`All 5 geofence calls have been made. No more steps.`)
        return
      }

      const step = routeSteps.value[currentStep.value]
      // Move marker on the map
      marker.value.setLatLng(step.coordinate)
      map.value.panTo(step.coordinate)

      // Log step info
      addLog(
        `Step #${currentStep.value + 1}: ` +
        `${step.label} at [${step.coordinate[0]}, ${step.coordinate[1]}]`
      )

      // Actually call geofenceUpdate for this step
      callLocationEvent(step)

      // Increment step
      currentStep.value++
    }

    // Call your geofenceUpdate endpoint
    async function callLocationEvent(step) {
      try {
        const selectedEnvironment = localStorage.getItem('selectedEnvironment') || 'staging'
        const baseUrl = getBaseUrl(selectedEnvironment)
        const deliveryId = localStorage.getItem('deliveryId')

        // Build the request body dynamically
        const requestBody = {
          geofenceId: step.geofenceId,    // "SUPPLIER", "BUYER_OUTER", etc.
          eventType: step.eventType,      // "ENTRY" or "EXIT"
          currentCoordinate: {
            lat: step.coordinate[0],
            lng: step.coordinate[1]
          }
        }

        // Make the call
        await geofenceUpdateCall(baseUrl, deliveryId, requestBody)

        addLog(
          `Called geofenceUpdate: geofenceId='${step.geofenceId}', ` +
          `eventType='${step.eventType}' at lat=${step.coordinate[0]} lng=${step.coordinate[1]}`
        )
      } catch (error) {
        addLog(`Error in geofenceUpdateCall: ${error.message}`)
      }
    }

    // Logging helpers
    function addLog(message) {
      log.value += `\n${message}`
    }
    function clearLog() {
      log.value = ''
    }

    return {
      mapRef,
      log,
      phoneNumber,
      createDelivery,
      onStartTracking,
      moveToNextWaypoint,
      clearLog,

      // Flags
      gpsEnabled,
      trackingStarted,
      deliveryCreated
    }
  }
}
</script>

<style scoped>

.log-section textarea {
  width: 100%;
  height: 600px;
  margin-left: 0px;
}
.log-section button {
  margin-left: 893px;
  
}
.close-button {
  margin-right: 900px;
  margin-top: -40px;
}
.popup-content {
  height: 1000px;
}
</style>
