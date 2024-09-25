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
    address: 'PWH5+8J Al Ghuzayaz Saudi Arabia',
    coordinates: {
      lat: 24.7283065,
      lng: 45.9091079
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
        branchId: '664c3a343cf29916811c06dd',
        countryId: '64feead127385273ca3cc38c',
        address: ''
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
        branchId: '664c3a343cf29916811c06dd',
        countryId: '64feead127385273ca3cc38c',
        address: ''
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
    branchId: '664c3a343cf29916811c06dd',
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
        branchId: '664c3a343cf29916811c06dd',
        countryId: '64feead127385273ca3cc38c',
        countryName: 'Saudi Arabia',
        address: '',
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
        branchId: '664c3a343cf29916811c06dd',
        countryId: '64feead127385273ca3cc38c',
        countryName: 'Saudi Arabia',
        address: '',
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
  cost: {
    amount: 0,
    currency: 'SAR'
  },
  paymentTerms: 'NET_30',
  vehicleId: '65f2bf7301ad10752554eeff',
  transporterId: null,
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
        branchId: '664c3a343cf29916811c06dd'
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
        branchId: '664c3a343cf29916811c06dd'
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
