export function returnURL() {
  var baseURL = "https://api.staging.brkz.co";
  return baseURL;
}
export const headers = {
  "brkz-client-id": "IIBcthJM78AJ7Owz",
  "brkz-client-secret": "9e26f236f40f43b2b99c021396bce98e",
  "Accept-Language": "en",
};
export function returnBasicProduct() {
  var product = [
    {
      productId: "64995093319be626d9fbdc99",
      name: "Finishing Cement",
      imageUrls: [
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665156/Product%20Catalog/Finishing_Cement_pyhoyx.png",
      ],
      attributes: [
        {
          name: "Brand",
          type: "brand",
          value: "Riyadh",
        },
        {
          name: "Weight",
          type: "weight",
          value: "50 kg",
        },
        {
          name: "Unit",
          type: "unit",
          value: "bags",
        },
      ],
      quantity: 11,
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665156/Product%20Catalog/Finishing_Cement_pyhoyx.png",
    },
    {
      productId: "64f89d6a7e46d145c53f5464",
      name: "Cement Tiles",
      imageUrls: [
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1694084011/Product%20Catalog/cement-tiles_c11zwy.png",
      ],
      attributes: [
        {
          name: "Size",
          type: "size",
          value: "40x40x4cm",
        },
        {
          name: "Colour",
          type: "colour",
          value: "Black",
        },
        {
          name: "Unit",
          type: "unit",
          value: "ea",
        },
      ],
      quantity: 11,
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1694084011/Product%20Catalog/cement-tiles_c11zwy.png",
    },
    {
      productId: "649950a3319be626d9fbdd1d",
      name: "Gypsum Board",
      imageUrls: [
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665149/Product%20Catalog/Gypsum_Board_tcq7jc.png",
      ],
      attributes: [
        {
          name: "Brand",
          type: "brand",
          value: "MADA",
        },
        {
          name: "Size",
          type: "size",
          value: "12.5mm - 1.2mtr x 2.4mtr",
        },
        {
          name: "Type",
          type: "type",
          value: "Fire Rated",
        },
        {
          name: "Unit",
          type: "unit",
          value: "pcs",
        },
      ],
      quantity: 11,
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665149/Product%20Catalog/Gypsum_Board_tcq7jc.png",
    },
    {
      productId: "64995099319be626d9fbdcb3",
      name: "Vetonit Pool Fix",
      imageUrls: [
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665151/Product%20Catalog/Vetonit_Pool_Fix_zfgua4.png",
      ],
      attributes: [
        {
          name: "Brand",
          type: "brand",
          value: "SAVETO",
        },
        {
          name: "Weight",
          type: "weight",
          value: "25 kg",
        },
        {
          name: "Unit",
          type: "unit",
          value: "bags",
        },
      ],
      quantity: 11,
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665151/Product%20Catalog/Vetonit_Pool_Fix_zfgua4.png",
    },
    {
      productId: "64f89dc97e46d145c53f5505",
      name: "Styrofoam Block",
      imageUrls: [
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1694084010/Product%20Catalog/styrofoam-block_hmptau.png",
      ],
      attributes: [
        {
          name: "Brand",
          type: "brand",
          value: "SAUDI POLYSTYRENE",
        },
        {
          name: "Size",
          type: "size",
          value: "200x400x20",
        },
        {
          name: "Type",
          type: "type",
          value: "P - 8",
        },
        {
          name: "Unit",
          type: "unit",
          value: "ea",
        },
      ],
      quantity: 11,
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1694084010/Product%20Catalog/styrofoam-block_hmptau.png",
    },
  ];
  return product;
}

export function returnSubmittedQuotationBody() {
  var product = [
    {
      "product": {
        "productId": "64995093319be626d9fbdc99",
        "name": "Finishing Cement",
        "arabicName": null,
        "attributes": [
          {
            "name": "Brand",
            "type": "brand",
            "value": "Riyadh"
          },
          {
            "name": "Weight",
            "type": "weight",
            "value": "50 kg"
          },
          {
            "name": "Unit",
            "type": "unit",
            "value": "bags"
          }
        ],
        "quantity": 11,
        "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665156/Product%20Catalog/Finishing_Cement_pyhoyx.png",
        "skuNumber": "CM-CB-01-FIN-50",
        "marginAmount": 1100,
        "marginPercentage": 100,
        "supplierErr": ""
      },
      "offerAmountBySupplier": {
        "amount": 1100,
        "currency": "SAR"
      },
      "offerAmount": {
        "amount": 0,
        "currency": "SAR"
      },
      "sellingPrice": {
        "amount": 200,
        "currency": "SAR"
      },
      "supplier": {
        "id": "6569bda0ea55f870d7639e3b",
        "name": "Shipping",
        "cityId": "649155886f4db06c577f7a94",
        "regionId": "6569bdcdea55f870d7639e3c"
      }
    },
    {
      "product": {
        "productId": "64f89d6a7e46d145c53f5464",
        "name": "Cement Tiles",
        "arabicName": null,
        "attributes": [
          {
            "name": "Size",
            "type": "size",
            "value": "40x40x4cm"
          },
          {
            "name": "Colour",
            "type": "colour",
            "value": "Black"
          },
          {
            "name": "Unit",
            "type": "unit",
            "value": "ea"
          }
        ],
        "quantity": 11,
        "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1694084011/Product%20Catalog/cement-tiles_c11zwy.png",
        "skuNumber": "ITK-01-CT-BLK-04",
        "marginAmount": 1100,
        "marginPercentage": 50,
        "supplierErr": ""
      },
      "offerAmountBySupplier": {
        "amount": 2200,
        "currency": "SAR"
      },
      "offerAmount": {
        "amount": 0,
        "currency": "SAR"
      },
      "sellingPrice": {
        "amount": 300,
        "currency": "SAR"
      },
      "supplier": {
        "id": "6569bda0ea55f870d7639e3b",
        "name": "Shipping",
        "cityId": "649155886f4db06c577f7a94",
        "regionId": "6569bdcdea55f870d7639e3c"
      }
    },
    {
      "product": {
        "productId": "649950a3319be626d9fbdd1d",
        "name": "Gypsum Board",
        "arabicName": null,
        "attributes": [
          {
            "name": "Brand",
            "type": "brand",
            "value": "MADA"
          },
          {
            "name": "Size",
            "type": "size",
            "value": "12.5mm - 1.2mtr x 2.4mtr"
          },
          {
            "name": "Type",
            "type": "type",
            "value": "Fire Rated"
          },
          {
            "name": "Unit",
            "type": "unit",
            "value": "pcs"
          }
        ],
        "quantity": 11,
        "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665149/Product%20Catalog/Gypsum_Board_tcq7jc.png",
        "skuNumber": "GM-GB-FIR-03-12-24",
        "marginAmount": 550,
        "marginPercentage": 100,
        "supplierErr": ""
      },
      "offerAmountBySupplier": {
        "amount": 550,
        "currency": "SAR"
      },
      "offerAmount": {
        "amount": 0,
        "currency": "SAR"
      },
      "sellingPrice": {
        "amount": 100,
        "currency": "SAR"
      },
      "supplier": {
        "id": "6569bda0ea55f870d7639e3b",
        "name": "Shipping",
        "cityId": "649155886f4db06c577f7a94",
        "regionId": "6569bdcdea55f870d7639e3c"
      }
    },
    {
      "product": {
        "productId": "64995099319be626d9fbdcb3",
        "name": "Vetonit Pool Fix",
        "arabicName": null,
        "attributes": [
          {
            "name": "Brand",
            "type": "brand",
            "value": "SAVETO"
          },
          {
            "name": "Weight",
            "type": "weight",
            "value": "25 kg"
          },
          {
            "name": "Unit",
            "type": "unit",
            "value": "bags"
          }
        ],
        "quantity": 11,
        "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665151/Product%20Catalog/Vetonit_Pool_Fix_zfgua4.png",
        "skuNumber": "CHEMA-FM-01-VPO-25",
        "marginAmount": 440,
        "marginPercentage": 400,
        "supplierErr": ""
      },
      "offerAmountBySupplier": {
        "amount": 110,
        "currency": "SAR"
      },
      "offerAmount": {
        "amount": 0,
        "currency": "SAR"
      },
      "sellingPrice": {
        "amount": 50,
        "currency": "SAR"
      },
      "supplier": {
        "id": "6569bda0ea55f870d7639e3b",
        "name": "Shipping",
        "cityId": "649155886f4db06c577f7a94",
        "regionId": "6569bdcdea55f870d7639e3c"
      }
    },
    {
      "product": {
        "productId": "64f89dc97e46d145c53f5505",
        "name": "Styrofoam Block",
        "arabicName": null,
        "attributes": [
          {
            "name": "Brand",
            "type": "brand",
            "value": "SAUDI POLYSTYRENE"
          },
          {
            "name": "Size",
            "type": "size",
            "value": "200x400x20"
          },
          {
            "name": "Type",
            "type": "type",
            "value": "P - 8"
          },
          {
            "name": "Unit",
            "type": "unit",
            "value": "ea"
          }
        ],
        "quantity": 11,
        "imageUrl": "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1694084010/Product%20Catalog/styrofoam-block_hmptau.png",
        "skuNumber": "INS-STFM-01-20020-8",
        "marginAmount": 440,
        "marginPercentage": 66.67,
        "supplierErr": ""
      },
      "offerAmountBySupplier": {
        "amount": 660,
        "currency": "SAR"
      },
      "offerAmount": {
        "amount": 0,
        "currency": "SAR"
      },
      "sellingPrice": {
        "amount": 100,
        "currency": "SAR"
      },
      "supplier": {
        "id": "6569bda0ea55f870d7639e3b",
        "name": "Shipping",
        "cityId": "649155886f4db06c577f7a94",
        "regionId": "6569bdcdea55f870d7639e3c"
      }
    }
  ];
  return product;
}
//https://staging-api.staging.swvl.io
