import axios from "axios";
import { returnURL, returnBasicProduct } from "../APIs/BaseAPI";
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
      formData
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
      formData
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
      returnURL() + "/contractor/phoneNumber/" + phoneNumber
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
        id: "9f590e7014514328bab35dd48060f51a",
        address: "F8M3+W7Q, Abruq Ar Rughamah, Jeddah 22354, Saudi Arabia",
        coordinates: {
          lat: 21.48464963789118,
          lng: 39.30290564352905,
        },
        cityId: "649155886f4db06c577f7a94",
      },
    };
    let result = await axios.post(
      returnURL() + "/opportunity/raise/manual",
      formData,{
        headers: {
          'Accept-Language': 'en'
        }
      }
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
        localStorage.getItem("opportunityId").replace(/['"]+/g, "")
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
        localStorage.getItem("opportunityId").replace(/['"]+/g, "")
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
