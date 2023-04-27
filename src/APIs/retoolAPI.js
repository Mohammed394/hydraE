import axios from "axios";
import { returnURL } from "../APIs/BaseAPI";
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
            productId: "63c10eb2048f5908d50df38c",
            sellingPrice: {
              currency: "SAR",
              amount: 100,
            },
          },
          {
            productId: "63e310a6ce5f9823c9002930",
            sellingPrice: {
              currency: "SAR",
              amount: 25,
            },
          },
          {
            productId: "63c10eb2048f5908d50df38a",
            sellingPrice: {
              currency: "SAR",
              amount: 300,
            },
          },
          {
            productId: "63d1c838c367d330e447df02",
            sellingPrice: {
              currency: "SAR",
              amount: 200,
            },
          },
          {
            productId: "63e35c6bce5f9823c9002933",
            sellingPrice: {
              currency: "SAR",
              amount: 15,
            },
          },
          {
            productId: "63c10eb2048f5908d50df389",
            sellingPrice: {
              currency: "SAR",
              amount: 20,
            },
          },
          {
            productId: "643663308435f561bc33eda5",
            sellingPrice: {
              currency: "SAR",
              amount: 5,
            },
          },
          {
            productId: "64366a008435f561bc33eda7",
            sellingPrice: {
              currency: "SAR",
              amount: 10,
            },
          },
          {
            productId: "643666d28435f561bc33eda6",
            sellingPrice: {
              currency: "SAR",
              amount: 10,
            },
          },
          {
            productId: "63c10eb2048f5908d50df38d",
            sellingPrice: {
              currency: "SAR",
              amount: 55,
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
      returnURL() +
        "/bidding/bid/update/notes",
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
      termsAndConditions:  "100% advance يبيشسبشسيشس."+"\r\n" + 
      "Delivery: Within 5 days، ٣٤٣٤." +"\r\n" +
      "Validity: 2 days from the date of this quotation." +"\r\n" +
      "Price Includes the delivery to the job site within Riyadh." +"\r\n" +
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
