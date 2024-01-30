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

export function returnSubmittedQuotationBody() {
  var product = [
    {
      product: {
        productId: "657ae140ad00b45090b1de5a",
        name: "Finishing Cement",
        arabicName: null,
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
        skuNumber: "CM-CB-01-FIN-50",
        isSelected: false,
        marginAmount: 11,
        marginPercentage: 10,
        supplierErr: "",
      },
      id: "c4614da6-6795-4828-97a0-a2dbbb264732",
      offerAmountBySupplier: {
        amount: 110,
        currency: "SAR",
      },
      offerAmount: {
        amount: 0,
        currency: "SAR",
      },
      sellingPrice: {
        amount: 11,
        currency: "SAR",
      },
      supplier: {
        id: "659fcbf63b5f506d2e6cc708",
        name: "Vendor PkFI4",
      },
    },
    {
      product: {
        productId: "64f89d6a7e46d145c53f5464",
        name: "Cement Tiles",
        arabicName: null,
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
        skuNumber: "ITK-01-CT-BLK-04",
        isSelected: false,
        marginAmount: 165,
        marginPercentage: 300,
        supplierErr: "",
      },
      id: "3facf347-6961-4ca2-bd21-e3c89932c62b",
      offerAmountBySupplier: {
        amount: 55,
        currency: "SAR",
      },
      offerAmount: {
        amount: 0,
        currency: "SAR",
      },
      sellingPrice: {
        amount: 20,
        currency: "SAR",
      },
      supplier: {
        id: "659fcbf63b5f506d2e6cc708",
        name: "Vendor PkFI4",
      },
    },
    {
      product: {
        productId: "649950a3319be626d9fbdd1d",
        name: "Gypsum Board",
        arabicName: null,
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
        skuNumber: "GM-GB-FIR-03-12-24",
        isSelected: false,
        marginAmount: 220,
        marginPercentage: 200,
        supplierErr: "",
      },
      id: "3dc34f77-e785-4b5a-af2b-8b2fe97113bc",
      offerAmountBySupplier: {
        amount: 110,
        currency: "SAR",
      },
      offerAmount: {
        amount: 0,
        currency: "SAR",
      },
      sellingPrice: {
        amount: 30,
        currency: "SAR",
      },
      supplier: {
        id: "659fcbf63b5f506d2e6cc708",
        name: "Vendor PkFI4",
      },
    },
    {
      product: {
        productId: "64995099319be626d9fbdcb3",
        name: "Vetonit Pool Fix",
        arabicName: null,
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
        skuNumber: "CHEMA-FM-01-VPO-25",
        isSelected: false,
        marginAmount: 220,
        marginPercentage: 200,
        supplierErr: "",
      },
      id: "7f0e78ce-c201-49f2-9982-80c8a1b4850b",
      offerAmountBySupplier: {
        amount: 110,
        currency: "SAR",
      },
      offerAmount: {
        amount: 0,
        currency: "SAR",
      },
      sellingPrice: {
        amount: 30,
        currency: "SAR",
      },
      supplier: {
        id: "659fcbf63b5f506d2e6cc708",
        name: "Vendor PkFI4",
      },
    },
    {
      product: {
        productId: "64f89dc97e46d145c53f5505",
        name: "Styrofoam Block",
        arabicName: null,
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
        skuNumber: "INS-STFM-01-20020-8",
        isSelected: false,
        marginAmount: 55,
        marginPercentage: 100,
        supplierErr: "",
      },
      id: "ec7389ef-892a-4f6c-a5a1-41c4ada74a8d",
      offerAmountBySupplier: {
        amount: 55,
        currency: "SAR",
      },
      offerAmount: {
        amount: 0,
        currency: "SAR",
      },
      sellingPrice: {
        amount: 10,
        currency: "SAR",
      },
      supplier: {
        id: "659fcbf63b5f506d2e6cc708",
        name: "Vendor PkFI4",
      },
    },
  ];
  return product;
}
//https://staging-api.staging.swvl.io
