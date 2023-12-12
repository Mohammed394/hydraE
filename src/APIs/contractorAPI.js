import axios from "axios";
import { returnURL, returnBasicProduct, headers } from "../APIs/BaseAPI";
import { getRandomName } from "../utilities/commonMethods";

export async function createContractor() {
  try {
    var firstName = getRandomName();
    var secondName = getRandomName();
    var national_number = Math.floor(Math.random() * 1000000000);
    var formData = {
      fullName: firstName + " " + secondName,
      password: "12345678",
      email: firstName + secondName + "@brkz.co",
      phoneNumber: "+966" + national_number.toString(),
      lang: "EN",
      notificationPreference: {
        whatsappNotification: "true",
        emailMarketing: "true",
      },
    };
    let result = await axios.post(
      returnURL() + "/contractor/register",
      formData,
      { headers }
    );
    if (result.status == 200) {
      localStorage.setItem("contractorId", JSON.stringify(result.data.id));
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export async function activateAccount() {
  try {
    var formData = {
      status: "Activated",
      vatRegistrationNumber: "1234",
    };
    let result = await axios.put(
      returnURL() +
        "/contractor/" +
        localStorage.getItem("contractorId").replace(/['"]+/g, ""),
      formData,
      { headers }
    );
    if (result.status == 200) {
      localStorage.setItem(
        "ContractorFullName",
        JSON.stringify(result.data.fullName)
      );
      localStorage.setItem(
        "ContractorEmail",
        JSON.stringify(result.data.email)
      );
      localStorage.setItem("ContractorPassword", "12345678");
      localStorage.setItem(
        "ContractorPhoneNumber",
        JSON.stringify(result.data.phoneNumber)
      );
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export async function getBuyerInfo(phoneNumber) {
  try {
    let result = await axios.get(
      returnURL() + "/contractor/phoneNumber/" + phoneNumber,
      { headers: headers }
    );
    if (result.status == 200) {
      localStorage.setItem("contractorId", JSON.stringify(result.data.id));
      localStorage.setItem(
        "ContractorPhoneNumber",
        JSON.stringify(result.data.phoneNumber).replace(/['"]+/g, "")
      );
      localStorage.setItem(
        "ContractorFullName",
        JSON.stringify(result.data.fullName).replace(/['"]+/g, "")
      );
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
export async function loginContractor(phoneNumber, password) {
  try {
    var firstName = getRandomName();
    var secondName = getRandomName();
    var national_number = Math.floor(Math.random() * 1000000000);
    var formData = {
      phoneNumber: phoneNumber,
      password: password,
    };
    let result = await axios.post(returnURL() + "/contractor/login", formData);
    if (result.status == 200) {
      localStorage.setItem(
        "ContractorFullName",
        JSON.stringify(result.data.profile.fullName).replace(/['"]+/g, "")
      );
      localStorage.setItem(
        "ContractorPhoneNumber",
        JSON.stringify(result.data.profile.phoneNumber).replace(/['"]+/g, "")
      );
      localStorage.setItem(
        "contractorId",
        JSON.stringify(result.data.profile.id)
      );
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
export async function raiseManualRFQ() {
  try {
    var formData = {
      contractorId: localStorage.getItem("contractorId").replace(/['"]+/g, ""),
      fullName: localStorage
        .getItem("ContractorFullName")
        .replace(/['"]+/g, ""),
      phoneNumber: localStorage
        .getItem("ContractorPhoneNumber")
        .replace(/['"]+/g, ""),
      products: returnBasicProduct(),
      source: "WEB",
      deliveryLocation: {
        id: "3cc1b5cfc2dd438f9f67958e9d83383b",
        address:
          "RBDB4529، 4529 أبي الحسن الهروي، 7935، حي شبرا، Riyadh 12797, Saudi Arabia",
        coordinates: {
          lat: 24.5871739,
          lng: 46.6831538,
        },
        cityId: "64913b22e02ccab65544bb2c",
      },
    };
    let result = await axios.post(
      returnURL() + "/opportunity/raise/manual",
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
export async function getOpportunity() {
  try {
    let result = await axios.get(
      returnURL() +
        "/opportunity/" +
        localStorage.getItem("opportunityId").replace(/['"]+/g, ""),
      { headers: headers }
    );
    if (result.status == 200) {
      localStorage.setItem("opportunityId", JSON.stringify(result.data.id));
      localStorage.setItem("rfqId", JSON.stringify(result.data.rfqId));
      const productNames = result.data.products
        .map((product) => product.name)
        .join("\n");
      localStorage.setItem("products", JSON.stringify(productNames));
      localStorage.setItem(
        "deliveryTime",
        JSON.stringify(result.data.deliveryTime)
      );
      localStorage.setItem(
        "lastDateForQuotation",
        JSON.stringify(result.data.lastDateForQuotation)
      );
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
export async function getOffer() {
  try {
    let result = await axios.get(
      returnURL() +
        "/offer/opportunity/" +
        localStorage.getItem("opportunityId").replace(/['"]+/g, ""),
      { headers: headers }
    );
    if (result.status == 200) {
      localStorage.setItem("offerId", JSON.stringify(result.data.id));
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
export async function acceptQuotation() {
  try {
    var formData = {
      bidStatus: "ACCEPTED",
    };
    let result = await axios.patch(
      returnURL() +
        "/bidding/bid/" +
        localStorage.getItem("bidId").replace(/['"]+/g, "") +
        "/status",
      formData,
      { headers: headers }
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
export async function rejectQuotation() {
  try {
    var formData = {
      bidStatus: "REJECTED",
      rejectedReasons: ["Price over the budget"],
    };
    let result = await axios.patch(
      returnURL() +
        "/bidding/bid/" +
        localStorage.getItem("bidId").replace(/['"]+/g, "") +
        "/status",
      formData,
      { headers: headers }
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
