import axios from "axios";
import { headers, returnURL } from "../APIs/BaseAPI";
import { getCurrentDateTime, getBid } from "../utilities/commonMethods";

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
        "/orders/number/" +
        localStorage.getItem("rfqId").replace(/['"]+/g, ""),
      { headers: headers }
    );
    if (result.status == 200) {
      localStorage.setItem("orderId", JSON.stringify(result.data.orderId));
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export async function addDeliveresSchedules() {
  try {
    var formData = {
      orderId: localStorage.getItem("orderId").replace(/['"]+/g, ""),
      deliveries: [{
        products: [
          {
            product: {
              lineItemId: "afbd5510-dd4a-43ff-bf5f-73706907961e",
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
              deliveredQuantity: 0,
              remainingQuantity: 10,
            },
            quantity: 10,
            lineItemId: "afbd5510-dd4a-43ff-bf5f-73706907961e",
          },
          {
            product: {
              lineItemId: "e3bcf6bc-20fa-42ec-993f-be23e1bf02c9",
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
              deliveredQuantity: 0,
              remainingQuantity: 10,
            },
            quantity: 10,
            lineItemId: "e3bcf6bc-20fa-42ec-993f-be23e1bf02c9",
          },
          {
            product: {
              lineItemId: "c9a59f66-a230-4139-9fc9-7aca784381c4",
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
              deliveredQuantity: 0,
              remainingQuantity: 10,
            },
            quantity: 10,
            lineItemId: "c9a59f66-a230-4139-9fc9-7aca784381c4",
          },
          {
            product: {
              lineItemId: "f175a642-73c4-4ccc-8e22-9b4c37d5a5ac",
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
              deliveredQuantity: 0,
              remainingQuantity: 10,
            },
            quantity: 10,
            lineItemId: "f175a642-73c4-4ccc-8e22-9b4c37d5a5ac",
          },
        ],
        status: "SCHEDULED",
        deliveryDate: "2024-01-30T20:12:18.781Z",
        vehicleType: "",
        deliveryType: "BRKZ",
        charges: {
          amount: 0,
          currency: "SAR",
        },
      }],
    };
    let result = await axios.post(
      returnURL() + "/orders/schedule/delivery",
      formData,
      { headers: headers }
    );
    if (result.status == 201) {
      localStorage.setItem(
        "opportunityId",
        JSON.stringify(result.data.opportunityId)
      );
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export async function getDeliverablesData() {
  try {
    let result = await axios.get(
      returnURL() +
        "/orders/" +
        localStorage.getItem("orderId").replace(/['"]+/g, "") +
        "/deliveries",
      { headers: headers }
    );
    if (result.status == 200) {
      localStorage.setItem("DeliverableID", JSON.stringify(result.data[0].id));
      localStorage.setItem("ZohoData", JSON.stringify(result.data[0].zoho));
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export async function updateDelivery(status) {
  console.log("Before API Call:");

  try {
    var formData = {
      deliveries: [
        {
          id: localStorage.getItem("DeliverableID").replace(/['"]+/g, ""),
          zoho: localStorage.getItem("ZohoData"),
          products: [
            {
              lineItemId: "afbd5510-dd4a-43ff-bf5f-73706907961e",
              product: {
                lineItemId: "afbd5510-dd4a-43ff-bf5f-73706907961e",
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
              },
              quantity: 10,
              returnedQuantity: 0,
              productMarginPercentage: 100,
            },
            {
              lineItemId: "e3bcf6bc-20fa-42ec-993f-be23e1bf02c9",
              product: {
                lineItemId: "e3bcf6bc-20fa-42ec-993f-be23e1bf02c9",
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
              },
              quantity: 10,
              returnedQuantity: 0,
              productMarginPercentage: 100,
            },
            {
              lineItemId: "c9a59f66-a230-4139-9fc9-7aca784381c4",
              product: {
                lineItemId: "c9a59f66-a230-4139-9fc9-7aca784381c4",
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
              },
              quantity: 10,
              returnedQuantity: 0,
              productMarginPercentage: 100,
            },
            {
              lineItemId: "f175a642-73c4-4ccc-8e22-9b4c37d5a5ac",
              product: {
                lineItemId: "f175a642-73c4-4ccc-8e22-9b4c37d5a5ac",
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
              },
              quantity: 10,
              returnedQuantity: 0,
              productMarginPercentage: 100,
            },
          ],
          status: status,
          vehicleId: null,
          vehicleName: null,
          deliveryType: "BRKZ",
          charges: { amount: 0, currency: "SAR" },
          totalTaxablePrice: { amount: 800, currency: "SAR" },
          totalInvoiceAmount: { amount: 920, currency: "SAR" },
          totalProductMargin: { amount: 400, currency: "SAR" },
          paymentDueDate: null,
          deliveryId: localStorage
            .getItem("DeliverableID")
            .replace(/['"]+/g, ""),
        },
      ],
      orderId: localStorage.getItem("orderId").replace(/['"]+/g, ""),
    };
    console.log("FormData:", formData);
    let result = await axios.put(returnURL() + "/orders/deliveries", formData, {
      headers: headers,
    });
    console.log(formData);
    console.log(result);
    if (result.status == 200) {
      localStorage.setItem(
        "opportunityId",
        JSON.stringify(result.data.opportunityId)
      );
      return true;
    } else {
      console.log(result);
      return false;
    }
  } catch {
    return false;
  }
}

export async function getTransactionId() {
  try {
    let result = await axios.get(
      returnURL() +
        "/payment/transactions?orderId=" +
        localStorage.getItem("orderId").replace(/['"]+/g, ""),
      { headers: headers }
    );
    if (result.status == 200) {
      localStorage.setItem(
        "transactionId",
        JSON.stringify(result.data.content[0].id)
      );
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export async function updateTransaction() {
  try {
    const currentDate = new Date();

    // Calculate the first day of the next month
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    nextMonth.setDate(1);

    // Format the date to be in "YYYY-MM-DD" format
    const formattedDate = `${nextMonth.getFullYear()}-${(
      nextMonth.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${nextMonth.getDate().toString().padStart(2, "0")}`;

    var formData = {
      date: formattedDate,
    };
    let result = await axios.post(
      returnURL() + "/payment/trigger-job-for-demo",
      formData,
      { headers: headers }
    );
    console.log(result);
    if (result.status == 200) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
