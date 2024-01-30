export function returnURL() {
  var baseURL = `https://api.staging.brkz.com`;
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
      productId: "649950a3319be626d9fbdd21",
      name: "Reinforcement Steel Rebar",
      attributes: [
        {
          name: "Brand",
          type: "brand",
          value: "SABIC",
        },
        {
          name: "Diameter Size",
          type: "diameter_size",
          value: "8mm",
        },
        {
          name: "Length",
          type: "length",
          value: "6m Grade (40)",
        },
        {
          name: "Unit",
          type: "unit",
          value: "ton",
        },
      ],
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665155/Product%20Catalog/Steel_Rebar_rimrpu.png",
      quantity: 10,
    },
    {
      productId: "649950a3319be626d9fbdd21",
      name: "Reinforcement Steel Rebar",
      attributes: [
        {
          name: "Brand",
          type: "brand",
          value: "SABIC",
        },
        {
          name: "Diameter Size",
          type: "diameter_size",
          value: "10mm",
        },
        {
          name: "Length",
          type: "length",
          value: "12m Grade(60)",
        },
        {
          name: "Unit",
          type: "unit",
          value: "ton",
        },
      ],
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665155/Product%20Catalog/Steel_Rebar_rimrpu.png",
      quantity: 10,
    },
    {
      productId: "64995092319be626d9fbdc91",
      name: "Ordinary Portland Cement (OPC)",
      attributes: [
        {
          name: "Brand",
          type: "brand",
          value: "SAUDI CEMENT",
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
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665156/Product%20Catalog/OPC_Ordinary_Portland_Cem.._fjeqq3.png",
      quantity: 10,
    },
    {
      productId: "6579b4c9a28bdb0fced67bf2",
      name: "Normal (U Shape) Block",
      attributes: [
        {
          name: "Brand",
          type: "brand",
          value: "Local",
        },
        {
          name: "Size",
          type: "size",
          value: "20x20x20",
        },
        {
          name: "Unit",
          type: "unit",
          value: "EA",
        },
      ],
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1702453611/Product%20Catalog/Normal_U_Shaped_Block_ziufef.png",
      quantity: 10,
    },
  ];
  return product;
}

export function returnSubmittedQuotationBody() {
  var product =  [
    {
      product: {
        productId: "649950a3319be626d9fbdd21",
        name: "Reinforcement Steel Rebar",
        arabicName: null,
        attributes: [
          {
            name: "Brand",
            type: "brand",
            value: "SABIC",
          },
          {
            name: "Diameter Size",
            type: "diameter_size",
            value: "8mm",
          },
          {
            name: "Length",
            type: "length",
            value: "6m Grade (40)",
          },
          {
            name: "Unit",
            type: "unit",
            value: "ton",
          },
        ],
        quantity: 10,
        imageUrl:
          "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665155/Product%20Catalog/Steel_Rebar_rimrpu.png",
        skuNumber: "ST-RS-01-08-06",
        marginAmount: 100,
        marginPercentage: 100,
        supplierErr: "",
      },
      id: "afbd5510-dd4a-43ff-bf5f-73706907961e",
      offerAmountBySupplier: {
        amount: 100,
        currency: "SAR",
      },
      offerAmount: {
        amount: 200,
        currency: "SAR",
      },
      sellingPrice: {
        amount: 20,
        currency: "SAR",
      },
      supplier: {
        id: "65b8d7f43049513be83a333d",
        name: "Vendor LNQmU",
        cityId: null,
        regionId: null,
        branchId: null,
      },
    },
    {
      product: {
        productId: "649950a3319be626d9fbdd21",
        name: "Reinforcement Steel Rebar",
        arabicName: null,
        attributes: [
          {
            name: "Brand",
            type: "brand",
            value: "SABIC",
          },
          {
            name: "Diameter Size",
            type: "diameter_size",
            value: "10mm",
          },
          {
            name: "Length",
            type: "length",
            value: "12m Grade(60)",
          },
          {
            name: "Unit",
            type: "unit",
            value: "ton",
          },
        ],
        quantity: 10,
        imageUrl:
          "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665155/Product%20Catalog/Steel_Rebar_rimrpu.png",
        skuNumber: "ST-RS-01-10-12",
        marginAmount: 100,
        marginPercentage: 100,
        supplierErr: "",
      },
      id: "e3bcf6bc-20fa-42ec-993f-be23e1bf02c9",
      offerAmountBySupplier: {
        amount: 100,
        currency: "SAR",
      },
      offerAmount: {
        amount: 200,
        currency: "SAR",
      },
      sellingPrice: {
        amount: 20,
        currency: "SAR",
      },
      supplier: {
        id: "65b8d7f43049513be83a333d",
        name: "Vendor LNQmU",
        cityId: null,
        regionId: null,
        branchId: null,
      },
    },
    {
      product: {
        productId: "64995092319be626d9fbdc91",
        name: "Ordinary Portland Cement (OPC)",
        arabicName: null,
        attributes: [
          {
            name: "Brand",
            type: "brand",
            value: "SAUDI CEMENT",
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
        quantity: 10,
        imageUrl:
          "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1691665156/Product%20Catalog/OPC_Ordinary_Portland_Cem.._fjeqq3.png",
        skuNumber: "CM-CB-04-OPC-50",
        marginAmount: 100,
        marginPercentage: 100,
        supplierErr: "",
      },
      id: "c9a59f66-a230-4139-9fc9-7aca784381c4",
      offerAmountBySupplier: {
        amount: 100,
        currency: "SAR",
      },
      offerAmount: {
        amount: 200,
        currency: "SAR",
      },
      sellingPrice: {
        amount: 20,
        currency: "SAR",
      },
      supplier: {
        id: "65b8d7f43049513be83a333d",
        name: "Vendor LNQmU",
        cityId: null,
        regionId: null,
        branchId: null,
      },
    },
    {
      product: {
        productId: "6579b4c9a28bdb0fced67bf2",
        name: "Normal (U Shape) Block",
        arabicName: null,
        attributes: [
          {
            name: "Brand",
            type: "brand",
            value: "Local",
          },
          {
            name: "Size",
            type: "size",
            value: "20x20x20",
          },
          {
            name: "Unit",
            type: "unit",
            value: "EA",
          },
        ],
        quantity: 10,
        imageUrl:
          "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1702453611/Product%20Catalog/Normal_U_Shaped_Block_ziufef.png",
        skuNumber: "BLK-NOR-USHRP-20",
        marginAmount: 100,
        marginPercentage: 100,
        supplierErr: "",
      },
      id: "f175a642-73c4-4ccc-8e22-9b4c37d5a5ac",
      offerAmountBySupplier: {
        amount: 100,
        currency: "SAR",
      },
      offerAmount: {
        amount: 200,
        currency: "SAR",
      },
      sellingPrice: {
        amount: 20,
        currency: "SAR",
      },
      supplier: {
        id: "65b8d7f43049513be83a333d",
        name: "Vendor LNQmU",
        cityId: null,
        regionId: null,
        branchId: null,
      },
    },
  ];
  return product;
}
//https://staging-api.staging.swvl.io
