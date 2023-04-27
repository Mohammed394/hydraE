import axios from "axios";
import { returnURL,returnBasicProduct } from "../APIs/BaseAPI";
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

export async function getBuyerInfo(phoneNumber){
  try {
    let result = await axios.get(
      returnURL() +
        "/contractor/phoneNumber/" +
        phoneNumber)
    if (result.status == 200) {
      localStorage.setItem("contractorId", JSON.stringify(result.data.id));
      localStorage.setItem("ContractorPhoneNumber", JSON.stringify(result.data.phoneNumber).replace(/['"]+/g, ""));
      localStorage.setItem("ContractorFullName", JSON.stringify(result.data.fullName).replace(/['"]+/g, ""));
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
export async function loginContractor(phoneNumber,password){
  try {
    var firstName = getRandomName();
    var secondName = getRandomName();
    var national_number = Math.floor(Math.random() * 1000000000);
    var formData = {
      phoneNumber: phoneNumber,
      password: password,
    };
    let result = await axios.post(
      returnURL() + "/contractor/login",
      formData
    );
    if (result.status == 200) {
      localStorage.setItem("ContractorFullName", JSON.stringify(result.data.profile.fullName).replace(/['"]+/g, ""));
      localStorage.setItem("ContractorPhoneNumber", JSON.stringify(result.data.profile.phoneNumber).replace(/['"]+/g, ""));
      localStorage.setItem("contractorId", JSON.stringify(result.data.profile.id));
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
      fullName: localStorage.getItem("ContractorFullName").replace(/['"]+/g, ""),
      phoneNumber: localStorage.getItem("ContractorPhoneNumber").replace(/['"]+/g, ""),
      projectName: "Test Project",
      location: "Test Address",
      products: [
        returnBasicProduct()
      ],
      source: "WEB",
    };
    let result = await axios.post(
      returnURL() + "/opportunity/raise/manual",
      formData
    );
    if (result.status == 201) {
      localStorage.setItem("opportunityId", JSON.stringify(result.data.opportunityId));
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
      localStorage.setItem("products", JSON.stringify(result.data.products[0].name));
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
export async function getOffer(){
  try {
    let result = await axios.get(
      returnURL() +
        "/offer/opportunity/" +
        localStorage.getItem("opportunityId").replace(/['"]+/g, ""))
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
export async function acceptQuotation(){
  try {
    var formData = {
        rejectedReasons:[]
    };
    let result = await axios.put(
      returnURL() +
        "/offer/" +
        localStorage.getItem("offerId").replace(/['"]+/g, "")+"/status/ACCEPTED",
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
export async function rejectQuotation(){
  try {
    var formData = {
        rejectedReasons:["Any"]
    };
    let result = await axios.put(
      returnURL() +
        "/offer/" +
        localStorage.getItem("offerId").replace(/['"]+/g, "")+"/status/REJECTED",
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