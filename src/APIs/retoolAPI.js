import axios from "axios";
import { headers, returnURL } from "../APIs/BaseAPI";
import { getRandomName, getBid } from "../utilities/commonMethods";

export async function updateMargin() {
  try {
    var formData = {
      opportunityId: localStorage
        .getItem("opportunityId")
        .replace(/['"]+/g, ""),
      supplierId: "63c4f8a715b61712067115c6",
      productInformationList: [
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
          },
          sellingPrice: {
            currency: "SAR",
            amount: 100,
          },
        },
        {
          product: {
            productId: "63e310a6ce5f9823c9002930",
            name: "Multi Purpose Joint Compound",
            arabicName: null,
            attributes: [
              {
                name: "Brand",
                type: "brand",
                value: "ASG",
              },
              {
                name: "Unit",
                type: "unit",
                value: "28kg barell",
              },
            ],
            quantity: 1000,
            imageUrl:
              "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1677139435/mobile-assets/multi_purpose_joint_compo_nehyc9.png",
          },
          sellingPrice: {
            currency: "SAR",
            amount: 50,
          },
        },
        {
          product: {
            productId: "63c10eb2048f5908d50df38a",
            name: "SRC Sulphate Resistant Cement",
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
            quantity: 111111,
            imageUrl:
              "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1677139438/mobile-assets/src_sulphate_resistant_cement_pebirn.png",
          },
          sellingPrice: {
            currency: "SAR",
            amount: 200,
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
          },
          sellingPrice: {
            currency: "SAR",
            amount: 100,
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
          },
          sellingPrice: {
            currency: "SAR",
            amount: 0,
          },
        },
        {
          product: {
            productId: "63c10eb2048f5908d50df389",
            name: "Rebar",
            arabicName: null,
            attributes: [
              {
                name: "Brand",
                type: "brand",
                value: "Sabic",
              },
              {
                name: "Unit",
                type: "unit",
                value: "ton",
              },
              {
                name: "Diameter Size",
                type: "diameter_size",
                value: "6mm",
              },
              {
                name: "Length",
                type: "length",
                value: "12m",
              },
            ],
            quantity: 2000,
            imageUrl:
              "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1677139439/mobile-assets/steel_rebar_v1oddb.png",
          },
          sellingPrice: {
            currency: "SAR",
            amount: 20,
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
          },
          sellingPrice: {
            currency: "SAR",
            amount: 10,
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
          },
          sellingPrice: {
            currency: "SAR",
            amount: 10,
          },
        },
        {
          product: {
            productId: "643666d28435f561bc33eda6",
            name: "Steel Wire Mesh",
            arabicName: null,
            attributes: [
              {
                name: "Brand",
                type: "brand",
                value: "SABIC",
              },
              {
                name: "Unit",
                type: "unit",
                value: "EA",
              },
              {
                name: "Size",
                type: "size",
                value: "20x20cm - 2x5m (6mm)",
              },
            ],
            quantity: 10000,
            imageUrl:
              "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1681672675/mobile-assets/Steel_wire_Mesh_eulqzx.png",
          },
          sellingPrice: {
            currency: "SAR",
            amount: 10,
          },
        },
        {
          product: {
            productId: "63c10eb2048f5908d50df38d",
            name: "Multi Holes Concrete Blocks",
            arabicName: null,
            attributes: [
              {
                name: "Unit",
                type: "unit",
                value: "pcs",
              },
              {
                name: "Size",
                type: "size",
                value: "400x200x150",
              },
            ],
            quantity: 10000,
            imageUrl:
              "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1677139435/mobile-assets/hollow_blocks_multi_holes_so17yt.png",
          },
          sellingPrice: {
            currency: "SAR",
            amount: 10,
          },
        },
      ],
    };
    let result = await axios.patch(
      returnURL() +
        "/bidding/bid/" +
        localStorage.getItem("bidId").replace(/['"]+/g, "") +
        "/service/charges",
      formData
    );
    console.log(result.status);

    if (result.status == 200) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export async function updateNote() {
  try {
    var formData = {
      bidId: localStorage.getItem("bidId").replace(/['"]+/g, ""),
      isVisible: true,
    };
    let result = await axios.put(
      returnURL() + "/bidding/bid/update/notes",
      formData
    );
    if (result.status == 200) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export async function selectWinning() {
  try {
    var formData = {
      opportunityId: localStorage
        .getItem("opportunityId")
        .replace(/['"]+/g, ""),
      supplierId: "63c4f8a715b61712067115c6",
      bidStatus: "SELECTED",
      termsAndConditions:
        "100% advance يبيشسبشسيشس." +
        "\r\n" +
        "Delivery: Within 5 days، ٣٤٣٤." +
        "\r\n" +
        "Validity: 2 days from the date of this quotation." +
        "\r\n" +
        "Price Includes the delivery to the job site within Riyadh." +
        "\r\n" +
        "Price is valid for the requested quantity and is subject to change if the quantity is reduced.",
      rejectedReasons: [],
    };
    let result = await axios.patch(
      returnURL() +
        "/bidding/bid/" +
        localStorage.getItem("bidId").replace(/['"]+/g, "") +
        "/status",
      formData
    );
    if (result.status == 200) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export async function getOrderId() {
  try {
    let result = await axios.get(
      returnURL() +
        "/orders/paginated/filtered?page=0&size=1&orderNumber=" +
        localStorage.getItem("rfqId").replace(/['"]+/g, ""), {headers:headers}
    );
    if (result.status == 200) {
      localStorage.setItem(
        "orderId",
        JSON.stringify(result.data.content[0].orderId)
      );
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
