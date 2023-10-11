export function returnURL() {
  var baseURL = "https://api.staging.brkz.co";
  return baseURL;
}
export function returnBasicProduct() {
  var product = [
    {
      productId: "63c10eb2048f5908d50df38c",
      name: "Finishing Cement",
      imageUrls: [
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1671533621/FinishingCement_zxqhfp.webp",
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1677139434/mobile-assets/finishing_cement_fq2n6u.png",
      ],
      attributes: [
        {
          name: "Brand",
          type: "brand",
          values: ["Riyadh Cement", "City Cement", "Yamama Cement"],
          value: "Riyadh Cement",
        },
        {
          name: "Unit",
          type: "unit",
          values: ["bags"],
          value: "bags",
        },
      ],
      quantity: 2000,
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1677139434/mobile-assets/finishing_cement_fq2n6u.png",
    },
    {
      productId: "63d1c838c367d330e447df02",
      name: "Vetonit Pool Fix",
      imageUrls: [
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1674484270/products/Vetonit_Pool_Fix_iz5kcw.png",
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1677139441/mobile-assets/ventonit_pool_fix_kff3rh.png",
      ],
      attributes: [
        {
          name: "Brand",
          type: "brand",
          values: ["Saveto"],
          value: "Saveto",
        },
        {
          name: "Unit",
          type: "unit",
          values: ["20kg bags"],
          value: "20kg bags",
        },
      ],
      quantity: 3000,
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1677139441/mobile-assets/ventonit_pool_fix_kff3rh.png",
    },
    {
      productId: "63e35c6bce5f9823c9002933",
      name: "Spray Paint",
      imageUrls: [
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1675844633/products/Spray_Paint_saq24t.png",
      ],
      attributes: [
        {
          name: "Brand",
          type: "brand",
          values: ["ANCHOR"],
          value: "ANCHOR",
        },
        {
          name: "Unit",
          type: "unit",
          values: ["12 pcs/carton"],
          value: "12 pcs/carton",
        },
        {
          name: "Colour",
          type: "colour",
          values: ["White", "Black", "Red", "Yellow", "Blue", "Green"],
          value: "White",
        },
      ],
      quantity: 5000,
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1675844633/products/Spray_Paint_saq24t.png",
    },
    {
      productId: "643663308435f561bc33eda5",
      name: "Concrete Nail",
      imageUrls: [
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1681672675/mobile-assets/Concrete_nail_d1y2pf.png",
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1681672675/mobile-assets/Concrete_nail_d1y2pf.png",
      ],
      attributes: [
        {
          name: "Brand",
          type: "brand",
          values: ["Japan"],
          value: "Japan",
        },
        {
          name: "Unit",
          type: "unit",
          values: ["12 kilo/carton", "25 kilo/carton"],
          value: "12 kilo/carton",
        },
        {
          name: "Size",
          type: "size",
          values: ["5cm"],
          value: "5cm",
        },
      ],
      quantity: 1000000,
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1681672675/mobile-assets/Concrete_nail_d1y2pf.png",
    },
    {
      productId: "64366a008435f561bc33eda7",
      name: "Wood Nail",
      imageUrls: [
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1681672675/mobile-assets/Wood_nail_ddvpa0.png",
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1681672675/mobile-assets/Wood_nail_ddvpa0.png",
      ],
      attributes: [
        {
          name: "Unit",
          type: "unit",
          values: ["2 kilo/carton)", "2.25 kilo/carton)"],
          value: "2 kilo/carton)",
        },
        {
          name: "Size",
          type: "size",
          values: ["5cm", "6cm"],
          value: "5cm",
        },
      ],
      quantity: 10000,
      imageUrl:
        "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1681672675/mobile-assets/Wood_nail_ddvpa0.png",
    },
  ];
  return product;
}

export function returnSubmittedQuotationBody() {
  var product = [
    {
      product: {
        productId: "63c10eb2048f5908d50df38c",
        name: "Finishing Cement",
        arabicName: null,
        attributes: [
          {
            name: "Brand",
            type: "brand",
            value: "Riyadh Cement",
          },
          {
            name: "Unit",
            type: "unit",
            value: "bags",
          },
        ],
        quantity: 2000,
        imageUrl:
          "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1677139434/mobile-assets/finishing_cement_fq2n6u.png",
        marginAmount: 330,
        marginPercentage: 1.5,
      },
      offerAmountBySupplier: {
        amount: 22000,
        currency: "SAR",
      },
      offerAmount: {
        amount: 22330,
        currency: "SAR",
      },
      sellingPrice: {
        amount: "11",
        currency: "SAR",
      },
      supplier: {
        id: "65265e5f4a6ca772edaba018",
        name: "Test",
        cityId: "64913b22e02ccab65544bb2c",
        regionId: "65265e7c4a6ca772edaba019",
        branchId: "65265eb64a6ca772edaba01b",
      },
    },
    {
      product: {
        productId: "63d1c838c367d330e447df02",
        name: "Vetonit Pool Fix",
        arabicName: null,
        attributes: [
          {
            name: "Brand",
            type: "brand",
            value: "Saveto",
          },
          {
            name: "Unit",
            type: "unit",
            value: "20kg bags",
          },
        ],
        quantity: 3000,
        imageUrl:
          "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1677139441/mobile-assets/ventonit_pool_fix_kff3rh.png",
        marginAmount: 4500,
        marginPercentage: 1.5,
      },
      offerAmountBySupplier: {
        amount: 300000,
        currency: "SAR",
      },
      offerAmount: {
        amount: 304500,
        currency: "SAR",
      },
      sellingPrice: {
        amount: "100",
        currency: "SAR",
      },
      supplier: {
        id: "65265e5f4a6ca772edaba018",
        name: "Test",
        cityId: "64913b22e02ccab65544bb2c",
        regionId: "65265e7c4a6ca772edaba019",
        branchId: "65265eb64a6ca772edaba01b",
      },
    },
    {
      product: {
        productId: "63e35c6bce5f9823c9002933",
        name: "Spray Paint",
        arabicName: null,
        attributes: [
          {
            name: "Brand",
            type: "brand",
            value: "ANCHOR",
          },
          {
            name: "Unit",
            type: "unit",
            value: "12 pcs/carton",
          },
          {
            name: "Colour",
            type: "colour",
            value: "White",
          },
        ],
        quantity: 5000,
        imageUrl:
          "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1675844633/products/Spray_Paint_saq24t.png",
        marginAmount: 32875,
        marginPercentage: 6.58,
      },
      offerAmountBySupplier: {
        amount: 500000,
        currency: "SAR",
      },
      offerAmount: {
        amount: 532875,
        currency: "SAR",
      },
      sellingPrice: {
        amount: "105",
        currency: "SAR",
      },
      supplier: {
        id: "65265e5f4a6ca772edaba018",
        name: "Test",
        cityId: "64913b22e02ccab65544bb2c",
        regionId: "65265e7c4a6ca772edaba019",
        branchId: "65265eb64a6ca772edaba01b",
      },
    },
    {
      product: {
        productId: "643663308435f561bc33eda5",
        name: "Concrete Nail",
        arabicName: null,
        attributes: [
          {
            name: "Brand",
            type: "brand",
            value: "Japan",
          },
          {
            name: "Unit",
            type: "unit",
            value: "12 kilo/carton",
          },
          {
            name: "Size",
            type: "size",
            value: "5cm",
          },
        ],
        quantity: 1000000,
        imageUrl:
          "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1681672675/mobile-assets/Concrete_nail_d1y2pf.png",
        marginAmount: 103000000,
        marginPercentage: 103,
      },
      offerAmountBySupplier: {
        amount: 100000000,
        currency: "SAR",
      },
      offerAmount: {
        amount: 203000000,
        currency: "SAR",
      },
      sellingPrice: {
        amount: "200",
        currency: "SAR",
      },
      supplier: {
        id: "65265e5f4a6ca772edaba018",
        name: "Test",
        cityId: "64913b22e02ccab65544bb2c",
        regionId: "65265e7c4a6ca772edaba019",
        branchId: "65265eb64a6ca772edaba01b",
      },
    },
    {
      product: {
        productId: "64366a008435f561bc33eda7",
        name: "Wood Nail",
        arabicName: null,
        attributes: [
          {
            name: "Unit",
            type: "unit",
            value: "2 kilo/carton)",
          },
          {
            name: "Size",
            type: "size",
            value: "5cm",
          },
        ],
        quantity: 10000,
        imageUrl:
          "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1681672675/mobile-assets/Wood_nail_ddvpa0.png",
        marginAmount: 1650,
        marginPercentage: 1.5,
      },
      offerAmountBySupplier: {
        amount: 110000,
        currency: "SAR",
      },
      offerAmount: {
        amount: 111649.99999999999,
        currency: "SAR",
      },
      sellingPrice: {
        amount: "11",
        currency: "SAR",
      },
      supplier: {
        id: "65265e5f4a6ca772edaba018",
        name: "Test",
        cityId: "64913b22e02ccab65544bb2c",
        regionId: "65265e7c4a6ca772edaba019",
        branchId: "65265eb64a6ca772edaba01b",
      },
    },
  ];
  return product;
}
//https://staging-api.staging.swvl.io
