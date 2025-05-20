// src/apis/requestData.js

export const rfqRequestBody = {
  contractorId: '64c0c655eb20ed71c46ac84e',
  fullName: 'Test  Account',
  phoneNumber: '+208313131313',
  products: [
    {
      productId: '649950a3319be626d9fbdd21',
      name: 'Reinforcement Steel Rebar',
      imageUrls: [
        'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png'
      ],
      attributes: [
        {
          name: 'BRAND',
          type: 'brand',
          value: 'SABIC'
        },
        {
          name: 'Diameter Size',
          type: 'diameter_size',
          value: '16mm'
        },
        {
          name: 'Length',
          type: 'length',
          value: '12m'
        },
        {
          name: 'Unit',
          type: 'unit',
          value: 'rod'
        }
      ],
      quantity: 10,
      isHighCashback: true,
      skuId: 'ST-RS-01-16-12',
      selectedUnit: 'rod',
      imageUrl:
        'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png'
    },
    {
      productId: '649950a3319be626d9fbdd21',
      name: 'Reinforcement Steel Rebar',
      imageUrls: [
        'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png'
      ],
      attributes: [
        {
          name: 'BRAND',
          type: 'brand',
          value: 'SABIC'
        },
        {
          name: 'Diameter Size',
          type: 'diameter_size',
          value: '16mm'
        },
        {
          name: 'Length',
          type: 'length',
          value: '12m'
        },
        {
          name: 'Unit',
          type: 'unit',
          value: 'ton'
        }
      ],
      quantity: 10,
      isHighCashback: true,
      skuId: 'ST-RS-01-16-12',
      selectedUnit: 'ton',
      imageUrl:
        'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png'
    }
  ],
  deliveryLocation: {
    id: '273e0995a3c44e6b862d323ed1e8108a',
    address: 'Al Ghuzayaz Saudi Arabia',
    coordinates: {
      lat: 24.523455,
      lng: 46.427105
    },
    cityId: '653a4a391448a41100db6f9c'
  },
  notes: '',
  source: 'WEB'
}
export const quotationRequestBody = {
  status: 'SUBMITTED',
  supplierId: '63c1457b15b61712067115bf',
  expiryDate: '2024-09-25T19:17:05',
  notes: {
    visibility: false,
    content: ''
  },
  termsAndConditions:
    "Payment:\n100% advance payment is required.\n50% advance payment is required, with the remaining balance due within 30 days from delivery.\nFully payment due within 30 days from delivery.\nDelivery:\na) Materials will be delivered to Riyadh within 2 days, from date of receiving payment (cash orders)\nb) Materials will be delivered to Riyadh within 2 days, from date of PO issuance (credit orders)\nValidity:\nPrice is valid for 1 day from the quotation date.\nPrice Inclusions:\nPrice includes delivery to the job site in Riyadh.\nLiability for Damages:\nBRKZ co. will take necessary precautions to ensure proper packaging and handling of the materials for transportation, in case any damages incurred during transit BRKZ co. will cooperate with the contractor and the transportation provider to facilitate the resolution of the claim and ensure a satisfactory outcome.\nInspection upon Delivery:\nIf the material is delivered by BRKZ co., the contractor must inspect the delivered materials upon receipt and notify BRKZ co. immediately of any damages observed. If damages are discovered upon inspection, the contractor should document and photograph the damages as evidence for any potential claims.\nLimitations of Liability:\nIn no event shall BRKZ co. be liable for any indirect, consequential, or incidental damages arising from material damages or delays before, after, or during the delivery of agreed material.\nQuantity Changes:\nQuoted price is subject to adjustment based on any quantity or specification variations.\nAvailability:\nMaterials are subject to stock availability.\nQuality and Warranty:\nPlease refer to the manufacturer's warranty for details on specific products.\nForce Majeure:\nDelivery times may be affected by unforeseen events beyond our control. In the event of force majeure, BRKZ co. will make reasonable efforts to minimize delays.\nGoverning Law:\nAny disputes arising from this quotation will be subject to Saudi Arabian laws.\nEntire Agreement:\nBy accepting this quotation, you confirm your acceptance of these terms and conditions.",
  paymentTermsId: '643007862071f75449d9634b',
  creditMarginPercentage: 0,
  lineItems: [
    {
      product: {
        productId: '649950a3319be626d9fbdd21',
        name: 'Reinforcement Steel Rebar',
        arabicName: null,
        attributes: [
          {
            name: 'BRAND',
            type: 'brand',
            value: 'SABIC'
          },
          {
            name: 'Diameter Size',
            type: 'diameter_size',
            value: '16mm'
          },
          {
            name: 'Length',
            type: 'length',
            value: '12m'
          },
          {
            name: 'Unit',
            type: 'unit',
            value: 'rod'
          }
        ],
        quantity: 10,
        imageUrl:
          'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png',
        skuNumber: 'ST-RS-01-16-12',
        lineItemPrice: null,
        isSelected: false,
        marginAmount: 100,
        marginPercentage: 100,
        supplierErr: '',
        sellingPriceWithCMErr: ''
      },
      id: '',
      offerAmountBySupplier: {
        amount: 100,
        currency: 'SAR'
      },
      offerAmount: {
        amount: 0,
        currency: 'SAR'
      },
      sellingPrice: {
        amount: 20,
        currency: 'SAR'
      },
      supplier: {
        id: '66430af937b4a76a39c10438',
        name: 'الشركة المنتجة الجديدة',
        cityId: '64913b22e02ccab65544bb2c',
        region: 'CENTRAL',
        branchId: '67c44c7b99a5ab3e28b9c941',
        countryId: '64feead127385273ca3cc38c',
        address: 'Tuwaiq, Riyadh 13785, Saudi Arabia'
      }
    },
    {
      product: {
        productId: '649950a3319be626d9fbdd21',
        name: 'Reinforcement Steel Rebar',
        arabicName: null,
        attributes: [
          {
            name: 'BRAND',
            type: 'brand',
            value: 'SABIC'
          },
          {
            name: 'Diameter Size',
            type: 'diameter_size',
            value: '16mm'
          },
          {
            name: 'Length',
            type: 'length',
            value: '12m'
          },
          {
            name: 'Unit',
            type: 'unit',
            value: 'ton'
          }
        ],
        quantity: 10,
        imageUrl:
          'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png',
        skuNumber: 'ST-RS-01-16-12',
        lineItemPrice: null,
        isSelected: false,
        marginAmount: 100,
        marginPercentage: 100,
        supplierErr: '',
        sellingPriceWithCMErr: ''
      },
      id: '',
      offerAmountBySupplier: {
        amount: 100,
        currency: 'SAR'
      },
      offerAmount: {
        amount: 0,
        currency: 'SAR'
      },
      sellingPrice: {
        amount: 20,
        currency: 'SAR'
      },
      supplier: {
        id: '66430af937b4a76a39c10438',
        name: 'الشركة المنتجة الجديدة',
        cityId: '64913b22e02ccab65544bb2c',
        region: 'CENTRAL',
        branchId: '67c44c7b99a5ab3e28b9c941',
        countryId: '64feead127385273ca3cc38c',
        address: 'Tuwaiq, Riyadh 13785, Saudi Arabia'
      }
    }
  ]
}

export const bulkUpdateRequestBody = [
  {
    id: '',
    orderId: '',
    opportunityId: '',
    deliveryNumber: 'D01',
    zoho: null,
    products: [
      {
        lineItemId: '',
        product: {
          lineItemId: null,
          productId: '649950a3319be626d9fbdd21',
          name: 'Reinforcement Steel Rebar',
          arabicName: null,
          attributes: [
            {
              name: 'BRAND',
              type: 'brand',
              value: 'SABIC'
            },
            {
              name: 'Diameter Size',
              type: 'diameter_size',
              value: '16mm'
            },
            {
              name: 'Length',
              type: 'length',
              value: '12m'
            },
            {
              name: 'Unit',
              type: 'unit',
              value: 'rod'
            }
          ],
          quantity: 10,
          imageUrl:
            'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png',
          skuNumber: 'ST-RS-01-16-12'
        },
        quantity: 10,
        supplier: null,
        supplierUnitPrice: {
          amount: '10',
          currency: 'SAR'
        },
        returnedQuantity: 0,
        productMarginPercentage: 100,
        productMarginAmount: 100,
        buyingPriceErr: ''
      },
      {
        lineItemId: '',
        product: {
          lineItemId: null,
          productId: '649950a3319be626d9fbdd21',
          name: 'Reinforcement Steel Rebar',
          arabicName: null,
          attributes: [
            {
              name: 'BRAND',
              type: 'brand',
              value: 'SABIC'
            },
            {
              name: 'Diameter Size',
              type: 'diameter_size',
              value: '16mm'
            },
            {
              name: 'Length',
              type: 'length',
              value: '12m'
            },
            {
              name: 'Unit',
              type: 'unit',
              value: 'ton'
            }
          ],
          quantity: 10,
          imageUrl:
            'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png',
          skuNumber: 'ST-RS-01-16-12'
        },
        quantity: 10,
        supplier: null,
        supplierUnitPrice: {
          amount: '10',
          currency: 'SAR'
        },
        returnedQuantity: 0,
        productMarginPercentage: 100,
        productMarginAmount: 100,
        buyingPriceErr: ''
      }
    ],
    status: 'DRAFT',
    isASAP: true,
    deliveryDate: null,
    expectedDeliveryDate: null,
    vehicleId: null,
    type: 'BRKZ',
    cost: {
      amount: 0,
      currency: 'SAR'
    },
    preTaxTotal: {
      amount: 0,
      currency: 'SAR'
    },
    postTaxTotal: {
      amount: 0,
      currency: 'SAR'
    },
    paymentTerms: null,
    supplier: null,
    transporter: null,
    helperId: null,
    purchaseOrder: null,
    createdAt: '2024-09-21T20:58:38.558',
    updatedAt: '2024-09-21T20:58:38.558'
  }
]

export const updatedeliveryBody = {
  status: 'READY_FOR_DELIVERY',
  isASAP: false,
  deliveryDate: '',
  deliveryPaymentTerms: 'NET_30',
  cost: {
    currency: 'SAR',
    amount: 0
  },
  supplier: {
    id: '66430af937b4a76a39c10438',
    name: 'الشركة المنتجة الجديدة',
    cityId: '64913b22e02ccab65544bb2c',
    cityName: 'Riyadh',
    region: 'CENTRAL',
    branchId: '67c44c7b99a5ab3e28b9c941',
    countryId: '64feead127385273ca3cc38c',
    countryName: 'Saudi Arabia',
    address: '',
    mobileNumber: '+201003420770',
    company: null
  },
  products: [
    {
      lineItemId: '',
      product: {
        lineItemId: null,
        productId: '649950a3319be626d9fbdd21',
        name: 'Reinforcement Steel Rebar',
        arabicName: null,
        attributes: [
          {
            name: 'BRAND',
            type: 'brand',
            value: 'SABIC'
          },
          {
            name: 'Diameter Size',
            type: 'diameter_size',
            value: '16mm'
          },
          {
            name: 'Length',
            type: 'length',
            value: '12m'
          },
          {
            name: 'Unit',
            type: 'unit',
            value: 'rod'
          }
        ],
        quantity: 10,
        imageUrl:
          'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png',
        skuNumber: 'ST-RS-01-16-12'
      },
      quantity: 10,
      supplier: {
        id: '66430af937b4a76a39c10438',
        name: 'الشركة المنتجة الجديدة',
        cityId: '64913b22e02ccab65544bb2c',
        cityName: 'Riyadh',
        region: 'CENTRAL',
        branchId: '67c44c7b99a5ab3e28b9c941',
        countryId: '64feead127385273ca3cc38c',
        countryName: 'Saudi Arabia',
        address: 'Tuwaiq, Riyadh 13785, Saudi Arabia',
        mobileNumber: '+201003420770',
        company: null
      },
      supplierUnitPrice: {
        amount: 10,
        currency: 'SAR'
      },
      returnedQuantity: 0,
      productMarginPercentage: 100,
      productMarginAmount: 100
    },
    {
      lineItemId: '',
      product: {
        lineItemId: null,
        productId: '649950a3319be626d9fbdd21',
        name: 'Reinforcement Steel Rebar',
        arabicName: null,
        attributes: [
          {
            name: 'BRAND',
            type: 'brand',
            value: 'SABIC'
          },
          {
            name: 'Diameter Size',
            type: 'diameter_size',
            value: '16mm'
          },
          {
            name: 'Length',
            type: 'length',
            value: '12m'
          },
          {
            name: 'Unit',
            type: 'unit',
            value: 'ton'
          }
        ],
        quantity: 10,
        imageUrl:
          'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png',
        skuNumber: 'ST-RS-01-16-12'
      },
      quantity: 10,
      supplier: {
        id: '66430af937b4a76a39c10438',
        name: 'الشركة المنتجة الجديدة',
        cityId: '64913b22e02ccab65544bb2c',
        cityName: 'Riyadh',
        region: 'CENTRAL',
        branchId: '67c44c7b99a5ab3e28b9c941',
        countryId: '64feead127385273ca3cc38c',
        countryName: 'Saudi Arabia',
        address: 'Tuwaiq, Riyadh 13785, Saudi Arabia',
        mobileNumber: '+201003420770',
        company: null
      },
      supplierUnitPrice: {
        amount: 10,
        currency: 'SAR'
      },
      returnedQuantity: 0,
      productMarginPercentage: 100,
      productMarginAmount: 100
    }
  ]
}

export const assignDeliveryBody = {
  date: '',
  type: 'BRKZ',
  trackingEnabled : true,
  cost: {
    amount: 0,
    currency: 'SAR'
  },
  paymentTerms: 'NET_30',
  vehicleId: '65f2bf7301ad10752554eeff',
  transporterId: '66546563ec40a80af3dc9a65',
  products: [
    {
      lineItemId: '',
      product: {
        lineItemId: null,
        productId: '649950a3319be626d9fbdd21',
        name: 'Reinforcement Steel Rebar',
        arabicName: '',
        attributes: [
          {
            name: 'BRAND',
            type: 'brand',
            value: 'SABIC'
          },
          {
            name: 'Diameter Size',
            type: 'diameter_size',
            value: '16mm'
          },
          {
            name: 'Length',
            type: 'length',
            value: '12m'
          },
          {
            name: 'Unit',
            type: 'unit',
            value: 'rod'
          }
        ],
        quantity: 10,
        imageUrl:
          'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png',
        skuNumber: 'ST-RS-01-16-12',
        lineItemPrice: null
      },
      quantity: 10,
      supplier: {
        id: '66430af937b4a76a39c10438',
        name: 'الشركة المنتجة الجديدة',
        cityId: '64913b22e02ccab65544bb2c',
        region: 'CENTRAL',
        address: 'Tuwaiq, Riyadh 13785, Saudi Arabia',
        branchId: '67c44c7b99a5ab3e28b9c941'
      },
      supplierUnitPrice: {
        amount: 10,
        currency: 'SAR'
      },
      returnedQuantity: 0,
      productMarginPercentage: 100
    },
    {
      lineItemId: '',
      product: {
        lineItemId: null,
        productId: '649950a3319be626d9fbdd21',
        name: 'Reinforcement Steel Rebar',
        arabicName: '',
        attributes: [
          {
            name: 'BRAND',
            type: 'brand',
            value: 'SABIC'
          },
          {
            name: 'Diameter Size',
            type: 'diameter_size',
            value: '16mm'
          },
          {
            name: 'Length',
            type: 'length',
            value: '12m'
          },
          {
            name: 'Unit',
            type: 'unit',
            value: 'ton'
          }
        ],
        quantity: 10,
        imageUrl:
          'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png',
        skuNumber: 'ST-RS-01-16-12',
        lineItemPrice: null
      },
      quantity: 10,
      supplier: {
        id: '66430af937b4a76a39c10438',
        name: 'الشركة المنتجة الجديدة',
        cityId: '64913b22e02ccab65544bb2c',
        region: 'CENTRAL',
        address: 'Tuwaiq, Riyadh 13785, Saudi Arabia',
        branchId: '67c44c7b99a5ab3e28b9c941'
      },
      supplierUnitPrice: {
        amount: 10,
        currency: 'SAR'
      },
      returnedQuantity: 0,
      productMarginPercentage: 100
    }
  ]
}

export const deliveryNoteBody = {
  products: [
    {
      lineItemId: '',
      quantity: 10,
      product: {
        lineItemId: '',
        productId: '649950a3319be626d9fbdd21',
        name: 'Reinforcement Steel Rebar',
        arabicName: '',
        attributes: [
          {
            name: 'BRAND',
            type: 'brand',
            value: 'SABIC'
          },
          {
            name: 'Diameter Size',
            type: 'diameter_size',
            value: '16mm'
          },
          {
            name: 'Length',
            type: 'length',
            value: '12m'
          },
          {
            name: 'Unit',
            type: 'unit',
            value: 'rod'
          }
        ],
        quantity: 10,
        imageUrl:
          'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png',
        skuNumber: 'ST-RS-01-16-12',
        lineItemPrice: null
      }
    },
    {
      lineItemId: '',
      quantity: 10,
      product: {
        lineItemId: '',
        productId: '649950a3319be626d9fbdd21',
        name: 'Reinforcement Steel Rebar',
        arabicName: '',
        attributes: [
          {
            name: 'BRAND',
            type: 'brand',
            value: 'SABIC'
          },
          {
            name: 'Diameter Size',
            type: 'diameter_size',
            value: '16mm'
          },
          {
            name: 'Length',
            type: 'length',
            value: '12m'
          },
          {
            name: 'Unit',
            type: 'unit',
            value: 'ton'
          }
        ],
        quantity: 10,
        imageUrl:
          'https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png',
        skuNumber: 'ST-RS-01-16-12',
        lineItemPrice: null
      }
    }
  ],
  description: ''
}

const test_ps_deliveryLocation = {
  "id": "4117ad4c334e4686839d45e562fe41cc",
  "address": "4616, 7853, Al Hada, Riyadh 12911, Saudi Arabia",
  "coordinates": {
      "lat": 24.660987318248544,
      "lng": 46.64209849240815
  }
}

export const rfqRefactoredBody_en_single_item= {
  "contractorId": "669e15ed057e66338eb9d1eb",
  "products": [
      {
          "productId": "649950a3319be626d9fbdd21",
          "skuNumber": "ST-RS-01-12-12",
          "unit": { 
              "id": "66583d11a265da3c821d48ca",
              "name": "rod"
          },
          "quantity": 100
      }
  ],
  "deliveryLocation": test_ps_deliveryLocation,
  "notes": "from hydra",
  "source": "WEB"
}

export const rfqRefactoredBody_ar_single_item= {
  "contractorId": "669e15ed057e66338eb9d1eb",
  "products": [
      {
          "productId": "649950a3319be626d9fbdd21",
          "skuNumber": "ST-RS-01-12-12",
          "unit": { 
              "id": "66583d11a265da3c821d48ca",
              "name": "سيخ"
          },
          "quantity": 100
      }
  ],
  "deliveryLocation": test_ps_deliveryLocation,
  "notes": "from hydra",
  "source": "WEB"
}

export const rfqRefactoredBody_en_2items_2units = {
  "contractorId": "669e15ed057e66338eb9d1eb",
  "products": [
      {
          "productId": "649950a3319be626d9fbdd21",
          "skuNumber": "ST-RS-01-12-12",
          "unit": { 
              "id": "66583d11a265da3c821d48ca",
              "name": "rod"
          },
          "quantity": 100
      },
      {
          "productId": "649950a3319be626d9fbdd21",
          "skuNumber": "ST-RS-01-12-12",
          "unit": { 
              "id": "66583d11a265da3c821d48cb",
              "name": "Ton"
          },
          "quantity": 100
      }
  ],
  "deliveryLocation": test_ps_deliveryLocation,
  "notes": "",
  "source": "WEB"
}

export const rfqRefactoredBody_ar_2items_2units = {
  "contractorId": "669e15ed057e66338eb9d1eb",
  "products": [
      {
          "productId": "649950a3319be626d9fbdd21",
          "skuNumber": "ST-RS-01-12-12",
          "unit": { 
              "id": "66583d11a265da3c821d48ca",
              "name": "سيخ"
          },
          "quantity": 100
      },
      {
        "productId": "649950a3319be626d9fbdd21",
        "skuNumber": "ST-RS-01-12-12",
        "unit": { 
            "id": "66583d11a265da3c821d48cb",
            "name": "طن"
        },
        "quantity": 100
    }
  ],
  "deliveryLocation": test_ps_deliveryLocation,
  "notes": "from hydra",
  "source": "WEB"
}

export const rfqRefactoredBody_en_2items_2skus = {
  "contractorId": "669e15ed057e66338eb9d1eb",
  "products": [
      {
          "productId": "649950a3319be626d9fbdd21",
          "skuNumber": "ST-RS-01-12-12",
          "unit": { 
              "id": "66583d11a265da3c821d48ca",
              "name": "rod"
          },
          "quantity": 100
      },
      {
          "productId": "649950a3319be626d9fbdd21",
          "skuNumber": "ST-RS-01-32-12",
          "unit": { 
              "id": "66583d11a265da3c821d48ca",
              "name": "rod"
          },
          "quantity": 400
      }
  ],
  "deliveryLocation": test_ps_deliveryLocation,
  "notes": "from hydra",
  "source": "WEB"
}

export const rfqRefactoredBody_ar_2items_2skus = {
  "contractorId": "669e15ed057e66338eb9d1eb",
  "products": [
      {
          "productId": "649950a3319be626d9fbdd21",
          "skuNumber": "ST-RS-01-12-12",
          "unit": { 
              "id": "66583d11a265da3c821d48ca",
              "name": "سيخ"
          },
          "quantity": 100
      },
      {
          "productId": "649950a3319be626d9fbdd21",
          "skuNumber": "ST-RS-01-32-12",
          "unit": { 
              "id": "66583d11a265da3c821d48ca",
              "name": "سيخ"
          },
          "quantity": 400
      }
  ],
  "deliveryLocation": test_ps_deliveryLocation,
  "notes": "from hydra",
  "source": "WEB"
}

export const rfqRefactoredBody_en_2items_different= {
  "contractorId": "669e15ed057e66338eb9d1eb",
  "products": [
      {
          "productId": "649950a3319be626d9fbdd21",
          "skuNumber": "ST-RS-01-12-12",
          "unit": { 
              "id": "66583d11a265da3c821d48ca",
              "name": "rod"
          },
          "quantity": 10000
      },
      {
          "productId": "649950a3319be626d9fbdd1d",
          "skuNumber": "GM-GP-MR-01-12-24",
          "unit": {
              "id": "66583d11a265da3c821d48c5",
              "name": "Pcs"
          },
          "quantity": 100
      }
  ],
  "deliveryLocation": test_ps_deliveryLocation,
  "notes": "from refactored raise API",
  "source": "WEB"
}

export const rfqRefactoredBody_ar_2items_different= {
  "contractorId": "669e15ed057e66338eb9d1eb",
  "products": [
      {
          "productId": "649950a3319be626d9fbdd21",
          "skuNumber": "ST-RS-01-12-12",
          "unit": { 
              "id": "66583d11a265da3c821d48ca",
              "name": "سيخ"
          },
          "quantity": 10000
      },
      {
          "productId": "649950a3319be626d9fbdd1d",
          "skuNumber": "GM-GP-MR-01-12-24",
          "unit": {
              "id": "66583d11a265da3c821d48c5",
              "name": "حبة"
          },
          "quantity": 10
      }
  ],
  "deliveryLocation": test_ps_deliveryLocation,
  "notes": "from refactored raise API",
  "source": "WEB"
}

const expiryDate = new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().slice(0, 19)

const product_single_en_attrs =  [
  {
      "name": "Diameter Size",
      "type": "diameter_size",
      "value": "12mm"
  },
  {
      "name": "Length",
      "type": "length",
      "value": "12m"
  },
  {
      "name": "BRAND",
      "type": "brand",
      "value": "SABIC"
  },
  {
      "name": "Unit",
      "type": "unit",
      "value": "rod"
  }
]

export const CREDIT_SUPP_PAYMENT = "NET_10"
export const DEFAULT_SUPP_PAYMENT = "DEFAULT"

export const quotationRequestBody_en_single_item = {
    "status": "SUBMITTED",
    "supplierId": "6707d298b08cd0670f101374",
    "expiryDate": expiryDate,
    "notes": {
        "visibility": false,
        "content": ""
    },
    "termsAndConditions": "Payment:\n100% advance payment is required.\n\nDelivery:\na) Materials will be delivered to Riyadh within 2 days, from date of receiving payment (cash orders)\nb) Materials will be delivered to Riyadh within 2 days, from date of PO issuance (credit orders)\n\nValidity:\nPrice is valid for 1 day from the quotation date.\n\nPrice Inclusions:\nPrice includes delivery to the job site in Riyadh.\n\nLiability for Damages:\nBRKZ co. will take necessary precautions to ensure proper packaging and handling of the materials for transportation, in case any damages incurred during transit BRKZ co. will cooperate with the contractor and the transportation provider to facilitate the resolution of the claim and ensure a satisfactory outcome.\n\nInspection upon Delivery:\nIf the material is delivered by BRKZ co., the contractor must inspect the delivered materials upon receipt and notify BRKZ co. immediately of any damages observed. If damages are discovered upon inspection, the contractor should document and photograph the damages as evidence for any potential claims.\n\nLimitations of Liability:\nIn no event shall BRKZ co. be liable for any indirect, consequential, or incidental damages arising from material damages or delays before, after, or during the delivery of agreed material.\n\nQuantity Changes:\nQuoted price is subject to adjustment based on any quantity or specification variations.\n\nAvailability:\nMaterials are subject to stock availability.\n\nQuality and Warranty:\nPlease refer to the manufacturer's warranty for details on specific products.\n\nForce Majeure:\nDelivery times may be affected by unforeseen events beyond our control. In the event of force majeure, BRKZ co. will make reasonable efforts to minimize delays.\n\nGoverning Law:\nAny disputes arising from this quotation will be subject to Saudi Arabian laws.\n\nEntire Agreement:\nBy accepting this quotation, you confirm your acceptance of these terms and conditions.",
    "paymentTermsId": "643007862071f75449d9634b",
    "creditMarginPercentage": 0,
    "lineItems": [
        {
            "product": {
                "productId": "649950a3319be626d9fbdd21",
                "name": "Reinforcement Steel Rebar",
                "arabicName": null,
                "attributes": product_single_en_attrs,
                "quantity": 100,
                "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
                "skuNumber": "ST-RS-01-12-12",
                "lineItemPrice": {
                    "price": {
                        "amount": 110,
                        "currency": "SAR"
                    },
                    "unitId": "66583d11a265da3c821d48ca",
                    "unitNameI18n": {
                        "en": "rod",
                        "ar_sa": "سيخ"
                    },
                    "unitName": "rod",
                    "margin": {
                        "amount": 4.4,
                        "currency": "SAR"
                    },
                    "marginPercentage": 4.1,
                    "supplierId": "67626ea390e3d06c5b7ebc9c"
                },
                "isSelected": false,
                "marginAmount": 2000,
                "marginPercentage": 20,
                "supplierErr": "",
                "sellingPriceWithCMErr": ""
            },
            "id": "2a815365-b2be-43c0-b800-e3624ab02aff",
            "offerAmountBySupplier": {
                "amount": 10000,
                "currency": "SAR"
            },
            "offerAmount": {
                "amount": 0,
                "currency": "SAR"
            },
            "sellingPrice": {
                "amount": 120,
                "currency": "SAR"
            },
            "supplier": {
                "id": "67fe530d6cf1a5222a72a9b8",
                "name": "Banking Tests",
                "cityId": "64913b22e02ccab65544bb2c",
                "region": "CENTRAL",
                "branchId": "67fe53376cf1a5222a72a9b9",
                "countryId": "64feead127385273ca3cc38c",
                "address": ""
            }
        }
    ]
}


export const quotationRequestBody_ar_single_item = {
  "status": "SUBMITTED",
  "supplierId": "6707d298b08cd0670f101374",
  "expiryDate": expiryDate,
  "notes": {
      "visibility": false,
      "content": ""
  },
  "termsAndConditions": "Payment:\n100% advance payment is required.\n50% advance payment is required, with the remaining balance due within 30 days from delivery.\nFully payment due within 30 days from delivery.\nDelivery:\na) Materials will be delivered to Riyadh within 2 days, from date of receiving payment (cash orders)\nb) Materials will be delivered to Riyadh within 2 days, from date of PO issuance (credit orders)\nValidity:\nPrice is valid for 1 day from the quotation date.\nPrice Inclusions:\nPrice includes delivery to the job site in Riyadh.\nLiability for Damages:\nBRKZ co. will take necessary precautions to ensure proper packaging and handling of the materials for transportation, in case any damages incurred during transit BRKZ co. will cooperate with the contractor and the transportation provider to facilitate the resolution of the claim and ensure a satisfactory outcome.\nInspection upon Delivery:\nIf the material is delivered by BRKZ co., the contractor must inspect the delivered materials upon receipt and notify BRKZ co. immediately of any damages observed. If damages are discovered upon inspection, the contractor should document and photograph the damages as evidence for any potential claims.\nLimitations of Liability:\nIn no event shall BRKZ co. be liable for any indirect, consequential, or incidental damages arising from material damages or delays before, after, or during the delivery of agreed material.\nQuantity Changes:\nQuoted price is subject to adjustment based on any quantity or specification variations.\nAvailability:\nMaterials are subject to stock availability.\nQuality and Warranty:\nPlease refer to the manufacturer's warranty for details on specific products.\nForce Majeure:\nDelivery times may be affected by unforeseen events beyond our control. In the event of force majeure, BRKZ co. will make reasonable efforts to minimize delays.\nGoverning Law:\nAny disputes arising from this quotation will be subject to Saudi Arabian laws.\nEntire Agreement:\nBy accepting this quotation, you confirm your acceptance of these terms and conditions.",
  "paymentTermsId": "643007862071f75449d9634c",
  "creditMarginPercentage": 0,
  "lineItems": [
      {
          "product": {
              "productId": "649950a3319be626d9fbdd21",
              "name": "حديد تسليح",
              "arabicName": null,
              "attributes": [
                  {
                      "name": "حجم القطر",
                      "type": "diameter_size",
                      "value": "12 مم"
                  },
                  {
                      "name": "الطول",
                      "type": "length",
                      "value": "12 متر"
                  },
                  {
                      "name": "العلامة التجارية",
                      "type": "brand",
                      "value": "سابك"
                  },
                  {
                      "name": "وحدة",
                      "type": "unit",
                      "value": "سيخ"
                  }
              ],
              "quantity": 100,
                "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
                "skuNumber": "ST-RS-01-12-12",
                "lineItemPrice": {
                    "price": {
                        "amount": 110,
                        "currency": "SAR"
                    },
                    "unitId": "66583d11a265da3c821d48ca",
                    "unitNameI18n": {
                        "en": "rod",
                        "ar_sa": "سيخ"
                    },
                    "unitName": "rod",
                    "margin": {
                        "amount": 4.4,
                        "currency": "SAR"
                    },
                    "marginPercentage": 4.1,
                    "supplierId": "67626ea390e3d06c5b7ebc9c"
                },
                "isSelected": false,
                "marginAmount": 2000,
                "marginPercentage": 20,
                "supplierErr": "",
                "sellingPriceWithCMErr": ""
            },
            "id": "2a815365-b2be-43c0-b800-e3624ab02aff",
            "offerAmountBySupplier": {
                "amount": 10000,
                "currency": "SAR"
            },
            "offerAmount": {
                "amount": 0,
                "currency": "SAR"
            },
            "sellingPrice": {
                "amount": 120,
                "currency": "SAR"
            },
            "supplier": {
                "id": "67fe530d6cf1a5222a72a9b8",
                "name": "Banking Tests",
                "cityId": "64913b22e02ccab65544bb2c",
                "region": "CENTRAL",
                "branchId": "67fe53376cf1a5222a72a9b9",
                "countryId": "64feead127385273ca3cc38c",
                "address": ""
            }
        }
  ]
}

export const quotationRequestBody_en_2items_2units = {
  "status": "SUBMITTED",
  "supplierId": "6707d298b08cd0670f101374",
  "expiryDate": expiryDate,
  "notes": {
      "visibility": false,
      "content": ""
  },
  "termsAndConditions": "Payment:\n100% advance payment is required.\n50% advance payment is required, with the remaining balance due within 30 days from delivery.\nFully payment due within 30 days from delivery.\nDelivery:\na) Materials will be delivered to Riyadh within 2 days, from date of receiving payment (cash orders)\nb) Materials will be delivered to Riyadh within 2 days, from date of PO issuance (credit orders)\nValidity:\nPrice is valid for 1 day from the quotation date.\nPrice Inclusions:\nPrice includes delivery to the job site in Riyadh.\nLiability for Damages:\nBRKZ co. will take necessary precautions to ensure proper packaging and handling of the materials for transportation, in case any damages incurred during transit BRKZ co. will cooperate with the contractor and the transportation provider to facilitate the resolution of the claim and ensure a satisfactory outcome.\nInspection upon Delivery:\nIf the material is delivered by BRKZ co., the contractor must inspect the delivered materials upon receipt and notify BRKZ co. immediately of any damages observed. If damages are discovered upon inspection, the contractor should document and photograph the damages as evidence for any potential claims.\nLimitations of Liability:\nIn no event shall BRKZ co. be liable for any indirect, consequential, or incidental damages arising from material damages or delays before, after, or during the delivery of agreed material.\nQuantity Changes:\nQuoted price is subject to adjustment based on any quantity or specification variations.\nAvailability:\nMaterials are subject to stock availability.\nQuality and Warranty:\nPlease refer to the manufacturer's warranty for details on specific products.\nForce Majeure:\nDelivery times may be affected by unforeseen events beyond our control. In the event of force majeure, BRKZ co. will make reasonable efforts to minimize delays.\nGoverning Law:\nAny disputes arising from this quotation will be subject to Saudi Arabian laws.\nEntire Agreement:\nBy accepting this quotation, you confirm your acceptance of these terms and conditions.",
  "paymentTermsId": "643007862071f75449d9634b",
  "creditMarginPercentage": 0,
  "lineItems": [
      {
          "product": {
              "productId": "649950a3319be626d9fbdd21",
              "name": "Reinforcement Steel Rebar",
              "arabicName": null,
              "attributes": product_single_en_attrs,
              "quantity": 100,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
              "skuNumber": "ST-RS-01-12-12",
              "lineItemPrice": null,
              "isSelected": false,
              "marginAmount": 3300,
              "marginPercentage": 2.54,
              "supplierErr": "",
              "sellingPriceWithCMErr": ""
          },
          "offerAmountBySupplier": {
              "amount": 130000,
              "currency": "SAR"
          },
          "offerAmount": {
              "amount": 0,
              "currency": "SAR"
          },
          "sellingPrice": {
              "amount": 1333,
              "currency": "SAR"
          },
          "supplier": {
              "id": "679f8b056d062a1456fe4798",
              "name": "Hydra Supplier",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "679f8c9c6d062a1456fe4799",
              "countryId": "64feead127385273ca3cc38c",
              "address": ""
          }
      },
      {
          "product": {
              "productId": "649950a3319be626d9fbdd21",
              "name": "Reinforcement Steel Rebar",
              "arabicName": null,
              "attributes": [
                  {
                      "name": "Diameter Size",
                      "type": "diameter_size",
                      "value": "12mm"
                  },
                  {
                      "name": "Length",
                      "type": "length",
                      "value": "12m"
                  },
                  {
                      "name": "BRAND",
                      "type": "brand",
                      "value": "SABIC"
                  },
                  {
                      "name": "Unit",
                      "type": "unit",
                      "value": "Ton"
                  }
              ],
              "quantity": 100,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
              "skuNumber": "ST-RS-01-12-12",
              "lineItemPrice": null,
              "isSelected": false,
              "marginAmount": 5600,
              "marginPercentage": 0.86,
              "supplierErr": "",
              "sellingPriceWithCMErr": ""
          },
          "offerAmountBySupplier": {
              "amount": 652400,
              "currency": "SAR"
          },
          "offerAmount": {
              "amount": 0,
              "currency": "SAR"
          },
          "sellingPrice": {
              "amount": 6580,
              "currency": "SAR"
          },
          "supplier": {
              "id": "679f8b056d062a1456fe4798",
              "name": "Hydra Supplier",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "679f8c9c6d062a1456fe4799",
              "countryId": "64feead127385273ca3cc38c",
              "address": ""
          }
      }
  ]
}
export const quotationRequestBody_ar_2items_2units = {
  "status": "SUBMITTED",
  "supplierId": "6707d298b08cd0670f101374",
  "expiryDate": expiryDate,
  "notes": {
      "visibility": false,
      "content": ""
  },
  "termsAndConditions": "Payment:\n100% advance payment is required.\n50% advance payment is required, with the remaining balance due within 30 days from delivery.\nFully payment due within 30 days from delivery.\nDelivery:\na) Materials will be delivered to Riyadh within 2 days, from date of receiving payment (cash orders)\nb) Materials will be delivered to Riyadh within 2 days, from date of PO issuance (credit orders)\nValidity:\nPrice is valid for 1 day from the quotation date.\nPrice Inclusions:\nPrice includes delivery to the job site in Riyadh.\nLiability for Damages:\nBRKZ co. will take necessary precautions to ensure proper packaging and handling of the materials for transportation, in case any damages incurred during transit BRKZ co. will cooperate with the contractor and the transportation provider to facilitate the resolution of the claim and ensure a satisfactory outcome.\nInspection upon Delivery:\nIf the material is delivered by BRKZ co., the contractor must inspect the delivered materials upon receipt and notify BRKZ co. immediately of any damages observed. If damages are discovered upon inspection, the contractor should document and photograph the damages as evidence for any potential claims.\nLimitations of Liability:\nIn no event shall BRKZ co. be liable for any indirect, consequential, or incidental damages arising from material damages or delays before, after, or during the delivery of agreed material.\nQuantity Changes:\nQuoted price is subject to adjustment based on any quantity or specification variations.\nAvailability:\nMaterials are subject to stock availability.\nQuality and Warranty:\nPlease refer to the manufacturer's warranty for details on specific products.\nForce Majeure:\nDelivery times may be affected by unforeseen events beyond our control. In the event of force majeure, BRKZ co. will make reasonable efforts to minimize delays.\nGoverning Law:\nAny disputes arising from this quotation will be subject to Saudi Arabian laws.\nEntire Agreement:\nBy accepting this quotation, you confirm your acceptance of these terms and conditions.",
  "paymentTermsId": "643007862071f75449d9634b",
  "creditMarginPercentage": 0,
  "lineItems": [
      {
          "product": {
              "productId": "649950a3319be626d9fbdd21",
              "name": "حديد تسليح",
              "arabicName": null,
              "attributes": [
                  {
                      "name": "حجم القطر",
                      "type": "diameter_size",
                      "value": "12 مم"
                  },
                  {
                      "name": "الطول",
                      "type": "length",
                      "value": "12 متر"
                  },
                  {
                      "name": "العلامة التجارية",
                      "type": "brand",
                      "value": "سابك"
                  },
                  {
                      "name": "وحدة",
                      "type": "unit",
                      "value": "سيخ"
                  }
              ],
              "quantity": 100,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
              "skuNumber": "ST-RS-01-12-12",
              "lineItemPrice": null,
              "isSelected": false,
              "marginAmount": 3300,
              "marginPercentage": 2.54,
              "supplierErr": "",
              "sellingPriceWithCMErr": ""
          },
          "offerAmountBySupplier": {
              "amount": 130000,
              "currency": "SAR"
          },
          "offerAmount": {
              "amount": 0,
              "currency": "SAR"
          },
          "sellingPrice": {
              "amount": 1333,
              "currency": "SAR"
          },
          "supplier": {
              "id": "679f8b056d062a1456fe4798",
              "name": "Hydra Supplier",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "679f8c9c6d062a1456fe4799",
              "countryId": "64feead127385273ca3cc38c",
              "address": ""
          }
      },
      {
          "product": {
              "productId": "649950a3319be626d9fbdd21",
              "name": "حديد تسليح",
              "arabicName": null,
              "attributes": [
                  {
                      "name": "حجم القطر",
                      "type": "diameter_size",
                      "value": "12 مم"
                  },
                  {
                      "name": "الطول",
                      "type": "length",
                      "value": "12 متر"
                  },
                  {
                      "name": "العلامة التجارية",
                      "type": "brand",
                      "value": "سابك"
                  },
                  {
                      "name": "وحدة",
                      "type": "unit",
                      "value": "طن"
                  }
              ],
              "quantity": 100,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
              "skuNumber": "ST-RS-01-12-12",
              "lineItemPrice": null,
              "isSelected": false,
              "marginAmount": 5600,
              "marginPercentage": 0.86,
              "supplierErr": "",
              "sellingPriceWithCMErr": ""
          },
          "offerAmountBySupplier": {
              "amount": 652400,
              "currency": "SAR"
          },
          "offerAmount": {
              "amount": 0,
              "currency": "SAR"
          },
          "sellingPrice": {
              "amount": 6580,
              "currency": "SAR"
          },
          "supplier": {
              "id": "679f8b056d062a1456fe4798",
              "name": "Hydra Supplier",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "679f8c9c6d062a1456fe4799",
              "countryId": "64feead127385273ca3cc38c",
              "address": ""
          }
      }
  ]
}

export const quotationRequestBody_en_2items_2skus = {
  "status": "SUBMITTED",
  "supplierId": "6707d298b08cd0670f101374",
  "expiryDate": expiryDate,
  "notes": {
      "visibility": false,
      "content": ""
  },
  "termsAndConditions": "Payment:\n100% advance payment is required.\n50% advance payment is required, with the remaining balance due within 30 days from delivery.\nFully payment due within 30 days from delivery.\nDelivery:\na) Materials will be delivered to Riyadh within 2 days, from date of receiving payment (cash orders)\nb) Materials will be delivered to Riyadh within 2 days, from date of PO issuance (credit orders)\nValidity:\nPrice is valid for 1 day from the quotation date.\nPrice Inclusions:\nPrice includes delivery to the job site in Riyadh.\nLiability for Damages:\nBRKZ co. will take necessary precautions to ensure proper packaging and handling of the materials for transportation, in case any damages incurred during transit BRKZ co. will cooperate with the contractor and the transportation provider to facilitate the resolution of the claim and ensure a satisfactory outcome.\nInspection upon Delivery:\nIf the material is delivered by BRKZ co., the contractor must inspect the delivered materials upon receipt and notify BRKZ co. immediately of any damages observed. If damages are discovered upon inspection, the contractor should document and photograph the damages as evidence for any potential claims.\nLimitations of Liability:\nIn no event shall BRKZ co. be liable for any indirect, consequential, or incidental damages arising from material damages or delays before, after, or during the delivery of agreed material.\nQuantity Changes:\nQuoted price is subject to adjustment based on any quantity or specification variations.\nAvailability:\nMaterials are subject to stock availability.\nQuality and Warranty:\nPlease refer to the manufacturer's warranty for details on specific products.\nForce Majeure:\nDelivery times may be affected by unforeseen events beyond our control. In the event of force majeure, BRKZ co. will make reasonable efforts to minimize delays.\nGoverning Law:\nAny disputes arising from this quotation will be subject to Saudi Arabian laws.\nEntire Agreement:\nBy accepting this quotation, you confirm your acceptance of these terms and conditions.",
  "paymentTermsId": "643007862071f75449d9634b",
  "creditMarginPercentage": 0,
  "lineItems": [
      {
          "product": {
              "productId": "649950a3319be626d9fbdd21",
              "name": "Reinforcement Steel Rebar",
              "arabicName": null,
              "attributes": product_single_en_attrs,
              "quantity": 100,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
              "skuNumber": "ST-RS-01-12-12",
              "lineItemPrice": null,
              "isSelected": false,
              "marginAmount": 3340,
              "marginPercentage": 2.57,
              "supplierErr": "",
              "sellingPriceWithCMErr": ""
          },
          "offerAmountBySupplier": {
              "amount": 130000,
              "currency": "SAR"
          },
          "offerAmount": {
              "amount": 0,
              "currency": "SAR"
          },
          "sellingPrice": {
              "amount": 1333.4,
              "currency": "SAR"
          },
          "supplier": {
              "id": "679f8b056d062a1456fe4798",
              "name": "Hydra Supplier",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "679f8c9c6d062a1456fe4799",
              "countryId": "64feead127385273ca3cc38c",
              "address": ""
          }
      },
      {
          "product": {
              "productId": "649950a3319be626d9fbdd21",
              "name": "Reinforcement Steel Rebar",
              "arabicName": null,
              "attributes": [
                  {
                      "name": "Diameter Size",
                      "type": "diameter_size",
                      "value": "32mm"
                  },
                  {
                      "name": "Length",
                      "type": "length",
                      "value": "12m"
                  },
                  {
                      "name": "BRAND",
                      "type": "brand",
                      "value": "SABIC"
                  },
                  {
                      "name": "Unit",
                      "type": "unit",
                      "value": "rod"
                  }
              ],
              "quantity": 400,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
              "skuNumber": "ST-RS-01-32-12",
              "lineItemPrice": null,
              "isSelected": false,
              "marginAmount": 14000,
              "marginPercentage": 2.57,
              "supplierErr": "",
              "sellingPriceWithCMErr": ""
          },
          "offerAmountBySupplier": {
              "amount": 544000,
              "currency": "SAR"
          },
          "offerAmount": {
              "amount": 0,
              "currency": "SAR"
          },
          "sellingPrice": {
              "amount": 1395,
              "currency": "SAR"
          },
          "supplier": {
              "id": "679f8b056d062a1456fe4798",
              "name": "Hydra Supplier",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "679f8c9c6d062a1456fe4799",
              "countryId": "64feead127385273ca3cc38c",
              "address": ""
          }
      }
  ]
}

export const quotationRequestBody_ar_2items_2skus = {
  "status": "SUBMITTED",
  "supplierId": "6707d298b08cd0670f101374",
  "expiryDate": expiryDate,
  "notes": {
      "visibility": false,
      "content": ""
  },
  "termsAndConditions": "Payment:\n100% advance payment is required.\n50% advance payment is required, with the remaining balance due within 30 days from delivery.\nFully payment due within 30 days from delivery.\nDelivery:\na) Materials will be delivered to Riyadh within 2 days, from date of receiving payment (cash orders)\nb) Materials will be delivered to Riyadh within 2 days, from date of PO issuance (credit orders)\nValidity:\nPrice is valid for 1 day from the quotation date.\nPrice Inclusions:\nPrice includes delivery to the job site in Riyadh.\nLiability for Damages:\nBRKZ co. will take necessary precautions to ensure proper packaging and handling of the materials for transportation, in case any damages incurred during transit BRKZ co. will cooperate with the contractor and the transportation provider to facilitate the resolution of the claim and ensure a satisfactory outcome.\nInspection upon Delivery:\nIf the material is delivered by BRKZ co., the contractor must inspect the delivered materials upon receipt and notify BRKZ co. immediately of any damages observed. If damages are discovered upon inspection, the contractor should document and photograph the damages as evidence for any potential claims.\nLimitations of Liability:\nIn no event shall BRKZ co. be liable for any indirect, consequential, or incidental damages arising from material damages or delays before, after, or during the delivery of agreed material.\nQuantity Changes:\nQuoted price is subject to adjustment based on any quantity or specification variations.\nAvailability:\nMaterials are subject to stock availability.\nQuality and Warranty:\nPlease refer to the manufacturer's warranty for details on specific products.\nForce Majeure:\nDelivery times may be affected by unforeseen events beyond our control. In the event of force majeure, BRKZ co. will make reasonable efforts to minimize delays.\nGoverning Law:\nAny disputes arising from this quotation will be subject to Saudi Arabian laws.\nEntire Agreement:\nBy accepting this quotation, you confirm your acceptance of these terms and conditions.",
  "paymentTermsId": "643007862071f75449d9634b",
  "creditMarginPercentage": 0,
  "lineItems": [
      {
          "product": {
              "productId": "649950a3319be626d9fbdd21",
              "name": "حديد تسليح",
              "arabicName": null,
              "attributes": [
                  {
                      "name": "حجم القطر",
                      "type": "diameter_size",
                      "value": "12 مم"
                  },
                  {
                      "name": "الطول",
                      "type": "length",
                      "value": "12 متر"
                  },
                  {
                      "name": "العلامة التجارية",
                      "type": "brand",
                      "value": "سابك"
                  },
                  {
                      "name": "وحدة",
                      "type": "unit",
                      "value": "سيخ"
                  }
              ],
              "quantity": 100,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
              "skuNumber": "ST-RS-01-12-12",
              "lineItemPrice": null,
              "isSelected": false,
              "marginAmount": 3340,
              "marginPercentage": 2.57,
              "supplierErr": "",
              "sellingPriceWithCMErr": ""
          },
          "offerAmountBySupplier": {
              "amount": 130000,
              "currency": "SAR"
          },
          "offerAmount": {
              "amount": 0,
              "currency": "SAR"
          },
          "sellingPrice": {
              "amount": 1333.4,
              "currency": "SAR"
          },
          "supplier": {
              "id": "679f8b056d062a1456fe4798",
              "name": "Hydra Supplier",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "679f8c9c6d062a1456fe4799",
              "countryId": "64feead127385273ca3cc38c",
              "address": ""
          }
      },
      {
          "product": {
              "productId": "649950a3319be626d9fbdd21",
              "name": "حديد تسليح",
              "arabicName": null,
              "attributes": [
                  {
                      "name": "حجم القطر",
                      "type": "diameter_size",
                      "value": "32 ملم"
                  },
                  {
                      "name": "الطول",
                      "type": "length",
                      "value": "12 متر"
                  },
                  {
                      "name": "العلامة التجارية",
                      "type": "brand",
                      "value": "سابك"
                  },
                  {
                      "name": "وحدة",
                      "type": "unit",
                      "value": "سيخ"
                  }
              ],
              "quantity": 400,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
              "skuNumber": "ST-RS-01-32-12",
              "lineItemPrice": null,
              "isSelected": false,
              "marginAmount": 14000,
              "marginPercentage": 2.57,
              "supplierErr": "",
              "sellingPriceWithCMErr": ""
          },
          "offerAmountBySupplier": {
              "amount": 544000,
              "currency": "SAR"
          },
          "offerAmount": {
              "amount": 0,
              "currency": "SAR"
          },
          "sellingPrice": {
              "amount": 1395,
              "currency": "SAR"
          },
          "supplier": {
              "id": "679f8b056d062a1456fe4798",
              "name": "Hydra Supplier",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "679f8c9c6d062a1456fe4799",
              "countryId": "64feead127385273ca3cc38c",
              "address": ""
          }
      }
  ]
}

export const quotationRequestBody_en_2items_different = {
  "status": "SUBMITTED",
  "supplierId": "6707d298b08cd0670f101374",
  "expiryDate": expiryDate,
  "notes": {
      "visibility": false,
      "content": ""
  },
  "termsAndConditions": "Payment:\n100% advance payment is required.\n50% advance payment is required, with the remaining balance due within 30 days from delivery.\nFully payment due within 30 days from delivery.\nDelivery:\na) Materials will be delivered to Riyadh within 2 days, from date of receiving payment (cash orders)\nb) Materials will be delivered to Riyadh within 2 days, from date of PO issuance (credit orders)\nValidity:\nPrice is valid for 1 day from the quotation date.\nPrice Inclusions:\nPrice includes delivery to the job site in Riyadh.\nLiability for Damages:\nBRKZ co. will take necessary precautions to ensure proper packaging and handling of the materials for transportation, in case any damages incurred during transit BRKZ co. will cooperate with the contractor and the transportation provider to facilitate the resolution of the claim and ensure a satisfactory outcome.\nInspection upon Delivery:\nIf the material is delivered by BRKZ co., the contractor must inspect the delivered materials upon receipt and notify BRKZ co. immediately of any damages observed. If damages are discovered upon inspection, the contractor should document and photograph the damages as evidence for any potential claims.\nLimitations of Liability:\nIn no event shall BRKZ co. be liable for any indirect, consequential, or incidental damages arising from material damages or delays before, after, or during the delivery of agreed material.\nQuantity Changes:\nQuoted price is subject to adjustment based on any quantity or specification variations.\nAvailability:\nMaterials are subject to stock availability.\nQuality and Warranty:\nPlease refer to the manufacturer's warranty for details on specific products.\nForce Majeure:\nDelivery times may be affected by unforeseen events beyond our control. In the event of force majeure, BRKZ co. will make reasonable efforts to minimize delays.\nGoverning Law:\nAny disputes arising from this quotation will be subject to Saudi Arabian laws.\nEntire Agreement:\nBy accepting this quotation, you confirm your acceptance of these terms and conditions.",
  "paymentTermsId": "643007862071f75449d9634b",
  "creditMarginPercentage": 0,
  "lineItems": [
      {
          "product": {
              "productId": "649950a3319be626d9fbdd21",
              "name": "Reinforcement Steel Rebar",
              "arabicName": null,
              "attributes": product_single_en_attrs,
              "quantity": 10000,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
              "skuNumber": "ST-RS-01-12-12",
              "lineItemPrice": null,
              "isSelected": false,
              "marginAmount": 320000,
              "marginPercentage": 2.56,
              "supplierErr": "",
              "sellingPriceWithCMErr": ""
          },
          "offerAmountBySupplier": {
              "amount": 12520000,
              "currency": "SAR"
          },
          "offerAmount": {
              "amount": 0,
              "currency": "SAR"
          },
          "sellingPrice": {
              "amount": 1284,
              "currency": "SAR"
          },
          "supplier": {
              "id": "679f8b056d062a1456fe4798",
              "name": "Hydra Supplier",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "679f8c9c6d062a1456fe4799",
              "countryId": "64feead127385273ca3cc38c",
              "address": ""
          }
      },
      {
          "product": {
              "productId": "649950a3319be626d9fbdd1d",
              "name": "Gypsum Board",
              "arabicName": null,
              "attributes": [
                  {
                      "name": "Size",
                      "type": "size",
                      "value": "12.5mm - 1.2mtr x 2.4mtr"
                  },
                  {
                      "name": "Type",
                      "type": "type",
                      "value": "Moisture Resistant"
                  },
                  {
                      "name": "BRAND",
                      "type": "brand",
                      "value": "UNITED"
                  },
                  {
                      "name": "Unit",
                      "type": "unit",
                      "value": "Pcs"
                  }
              ],
              "quantity": 100,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665149/Product%20Catalog/Gypsum_Board_tcq7jc.png",
              "skuNumber": "GM-GP-MR-01-12-24",
              "lineItemPrice": {
                  "price": {
                      "amount": 10,
                      "currency": "SAR"
                  },
                  "unitId": "66583d11a265da3c821d48c5",
                  "unitNameI18n": {
                      "en": "Pcs",
                      "ar_sa": "حبة"
                  },
                  "unitName": "Pcs",
                  "margin": {
                      "amount": 0.3,
                      "currency": "SAR"
                  },
                  "marginPercentage": 3,
                  "supplierId": "665451cd99b3214eeba1688f"
              },
              "isSelected": false,
              "marginAmount": 200,
              "marginPercentage": 13.33,
              "supplierErr": "",
              "sellingPriceWithCMErr": ""
          },
          "offerAmountBySupplier": {
              "amount": 1500,
              "currency": "SAR"
          },
          "offerAmount": {
              "amount": 0,
              "currency": "SAR"
          },
          "sellingPrice": {
              "amount": 17,
              "currency": "SAR"
          },
          "supplier": {
              "id": "665451cd99b3214eeba1688f",
              "name": "FFF Construction",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "6654525e99b3214eeba16890",
              "countryId": "64feead127385273ca3cc38c",
              "address": "Riyadh"
          }
      }
  ]
}

export const quotationRequestBody_ar_2items_different = {
  "status": "SUBMITTED",
  "supplierId": "6707d298b08cd0670f101374",
  "expiryDate": expiryDate,
  "notes": {
      "visibility": false,
      "content": ""
  },
  "termsAndConditions": "Payment:\n100% advance payment is required.\n50% advance payment is required, with the remaining balance due within 30 days from delivery.\nFully payment due within 30 days from delivery.\nDelivery:\na) Materials will be delivered to Riyadh within 2 days, from date of receiving payment (cash orders)\nb) Materials will be delivered to Riyadh within 2 days, from date of PO issuance (credit orders)\nValidity:\nPrice is valid for 1 day from the quotation date.\nPrice Inclusions:\nPrice includes delivery to the job site in Riyadh.\nLiability for Damages:\nBRKZ co. will take necessary precautions to ensure proper packaging and handling of the materials for transportation, in case any damages incurred during transit BRKZ co. will cooperate with the contractor and the transportation provider to facilitate the resolution of the claim and ensure a satisfactory outcome.\nInspection upon Delivery:\nIf the material is delivered by BRKZ co., the contractor must inspect the delivered materials upon receipt and notify BRKZ co. immediately of any damages observed. If damages are discovered upon inspection, the contractor should document and photograph the damages as evidence for any potential claims.\nLimitations of Liability:\nIn no event shall BRKZ co. be liable for any indirect, consequential, or incidental damages arising from material damages or delays before, after, or during the delivery of agreed material.\nQuantity Changes:\nQuoted price is subject to adjustment based on any quantity or specification variations.\nAvailability:\nMaterials are subject to stock availability.\nQuality and Warranty:\nPlease refer to the manufacturer's warranty for details on specific products.\nForce Majeure:\nDelivery times may be affected by unforeseen events beyond our control. In the event of force majeure, BRKZ co. will make reasonable efforts to minimize delays.\nGoverning Law:\nAny disputes arising from this quotation will be subject to Saudi Arabian laws.\nEntire Agreement:\nBy accepting this quotation, you confirm your acceptance of these terms and conditions.",
  "paymentTermsId": "643007862071f75449d9634b",
  "creditMarginPercentage": 0,
  "lineItems": [
      {
          "product": {
              "productId": "649950a3319be626d9fbdd21",
              "name": "حديد تسليح",
              "arabicName": null,
              "attributes": [
                  {
                      "name": "حجم القطر",
                      "type": "diameter_size",
                      "value": "12 مم"
                  },
                  {
                      "name": "الطول",
                      "type": "length",
                      "value": "12 متر"
                  },
                  {
                      "name": "العلامة التجارية",
                      "type": "brand",
                      "value": "سابك"
                  },
                  {
                      "name": "وحدة",
                      "type": "unit",
                      "value": "سيخ"
                  }
              ],
              "quantity": 10000,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
              "skuNumber": "ST-RS-01-12-12",
              "lineItemPrice": null,
              "isSelected": false,
              "marginAmount": 320000,
              "marginPercentage": 2.56,
              "supplierErr": "",
              "sellingPriceWithCMErr": ""
          },
          "offerAmountBySupplier": {
              "amount": 12520000,
              "currency": "SAR"
          },
          "offerAmount": {
              "amount": 0,
              "currency": "SAR"
          },
          "sellingPrice": {
              "amount": 1284,
              "currency": "SAR"
          },
          "supplier": {
              "id": "679f8b056d062a1456fe4798",
              "name": "Hydra Supplier",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "679f8c9c6d062a1456fe4799",
              "countryId": "64feead127385273ca3cc38c",
              "address": ""
          }
      },
      {
          "product": {
              "productId": "649950a3319be626d9fbdd1d",
              "name": "ألواح جبس",
              "arabicName": null,
              "attributes": [
                  {
                      "name": "مقاس",
                      "type": "size",
                      "value": "12.5 ملم - 1.2 متر * 2.4 متر"
                  },
                  {
                      "name": "نوع",
                      "type": "type",
                      "value": "مقاوم للرطوبة"
                  },
                  {
                      "name": "العلامة التجارية",
                      "type": "brand",
                      "value": "المتحدة"
                  },
                  {
                      "name": "وحدة",
                      "type": "unit",
                      "value": "حبة"
                  }
              ],
              "quantity": 10,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665149/Product%20Catalog/Gypsum_Board_tcq7jc.png",
              "skuNumber": "GM-GP-MR-01-12-24",
              "lineItemPrice": {
                  "price": {
                      "amount": 10,
                      "currency": "SAR"
                  },
                  "unitId": "66583d11a265da3c821d48c5",
                  "unitNameI18n": {
                      "en": "Pcs",
                      "ar_sa": "حبة"
                  },
                  "unitName": "حبة",
                  "margin": {
                      "amount": 0.3,
                      "currency": "SAR"
                  },
                  "marginPercentage": 3,
                  "supplierId": "665451cd99b3214eeba1688f"
              },
              "isSelected": false,
              "marginAmount": 20,
              "marginPercentage": 13.33,
              "supplierErr": "",
              "sellingPriceWithCMErr": ""
          },
          "offerAmountBySupplier": {
              "amount": 150,
              "currency": "SAR"
          },
          "offerAmount": {
              "amount": 0,
              "currency": "SAR"
          },
          "sellingPrice": {
              "amount": 17,
              "currency": "SAR"
          },
          "supplier": {
              "id": "679f8b056d062a1456fe4798",
              "name": "Hydra Supplier",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "679f8c9c6d062a1456fe4799",
              "countryId": "64feead127385273ca3cc38c",
              "address": ""
          }
      }
  ]
}

export const updateDraftDelivery_en_item_Request = {
  "id": "",
  "orderId": "",
  "opportunityId": "",
  "deliveryNumber": "D01",
  "orderNumber": "",
  "contractorId": "",
  "zoho": null,
  "products": [
      {
          "lineItemId": "",
          "product": {
              "lineItemId": null,
              "productId": "649950a3319be626d9fbdd21",
              "name": "Reinforcement Steel Rebar",
              "arabicName": null,
              "attributes": product_single_en_attrs,
              "quantity": 100,
              "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1707657013/Product%20Catalog/Rebar_cyizrr.png",
              "skuNumber": "ST-RS-01-12-12"
          },
          "quantity": 100,
          "supplier": {
              "id": "67fe530d6cf1a5222a72a9b8",
              "name": "Banking Tests",
              "mobileNumber": "+989858",
              "cityId": "64913b22e02ccab65544bb2c",
              "region": "CENTRAL",
              "branchId": "67fe53376cf1a5222a72a9b9",
              "countryId": "64feead127385273ca3cc38c",
              "address": "",
              "cityName": "Riyadh",
              "countryName": "Saudi Arabia",
              "isCredit": false
          },
          "supplierUnitPrice": {
              "amount": "100",
              "currency": "SAR"
          },
          "returnedQuantity": 0,
          "productMarginPercentage": 20,
          "productMarginAmount": 2000,
          "discount": {
              "amount": 0,
              "currency": "SAR"
          }
      }
  ],
  "status": "DRAFT",
  "isASAP": false,
  "deliveryDate": "",
  "expectedDeliveryDate": null,
  "type": "BRKZ",
  "cost": {
      "amount": 0,
      "currency": "SAR"
  },
  "trips": 1,
  "preTaxTotal": {
      "amount": 0,
      "currency": "SAR"
  },
  "postTaxTotal": {
      "amount": 0,
      "currency": "SAR"
  },
  "paymentTerms": "Cash",
  "supplier": {
      "id": "67fe530d6cf1a5222a72a9b8",
      "name": "Banking Tests",
      "mobileNumber": "+989858",
      "cityId": "64913b22e02ccab65544bb2c",
      "region": "CENTRAL",
      "branchId": "67fe53376cf1a5222a72a9b9",
      "countryId": "64feead127385273ca3cc38c",
      "address": "",
      "cityName": "Riyadh",
      "countryName": "Saudi Arabia",
      "isCredit": false
  },
  "supplierDeliveryNotes": null,
  "purchaseOrder": null,
  "createdAt": "",
  "updatedAt": "",
  "referenceNumber": "",
  "discount": {
      "amount": 0,
      "currency": "SAR"
  },
  "buyerPaymentTerms": "Cash",
  "trackingEnabled": false,
  "deliveryDateErr": "",
  "supplierErr": "",
  "selectedBranchIdx": 0,
  "termsErr": "",
  "deliveryPaymentTerms": ""
}

const snbBankStagingId = "64636ac1dc706b1cb953caf9" 
const bankTransfer = "BANK_TRANSFER"
const bankingSupplierBank = {
  "accountName": "Riyadh Benef",
  "accountNumber": "125487",
  "bankName": "Riyadh Bank",
  "iban": "SARA548545456565"
}
const fullPayment = {
  "amount": 11500,
  "currency": "SAR"
}

const halfPayment = {
  "amount": 5750,
  "currency": "SAR"
}

export const createPaymentBodyRequest = (paymentType, paymentRequestId) => {
  const paymentAmount = paymentType === "single" ? fullPayment : halfPayment;

  return {
    "amount": paymentAmount,
    "fromBankAccountId": snbBankStagingId,
    "method": bankTransfer,
    "paymentRequestsContributions": [
      {
        "amount": fullPayment, // the paymentRequest 
        "id": paymentRequestId,
      },
    ],
    "toBankAccount": bankingSupplierBank,
  }
}

export const paymentProofRequest = {
  "proofUrl": "https://api.staging.brkz.com/files/171e3a39-23c6-4382-89ce-5157ec723f6b.jpeg"
}

export const startTrackingBody = {
  "lat": 12.2342,
  "lng": 34.354345
}

export const geofenceUpdateBody = {
  "geofenceId": "SUPPLIER", // SUPPLIER, BUYER_INNER, BUYER_OUTER,
  "eventType": "ENTRY", // ENTRY, EXIT
  "currentCoordinate": {
  "lat": 24.524959383928604,
  "lng": 46.4367500692606
  }
}