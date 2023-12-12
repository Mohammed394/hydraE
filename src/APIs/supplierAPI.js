import axios from "axios";
import { returnURL, returnSubmittedQuotationBody, headers } from "../APIs/BaseAPI";
import { getRandomName, getBid } from "../utilities/commonMethods";

export async function createSupplier() {
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
    let result = await axios.post(returnURL() + "/supplier/register", formData);
    if (result.status == 200) {
      localStorage.setItem("supplierId", JSON.stringify(result.data.id));
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
        "/supplier/" +
        localStorage.getItem("supplierId").replace(/['"]+/g, ""),
      formData
    );
    if (result.status == 200) {
      localStorage.setItem(
        "SupplierFullName",
        JSON.stringify(result.data.fullName)
      );
      localStorage.setItem("SupplierEmail", JSON.stringify(result.data.email));
      localStorage.setItem("SupplierPassword", "12345678");
      localStorage.setItem(
        "SupplierPhoneNumber",
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
export async function submitQuotation() {
  try {
    var formData = {
      supplierId: "63c4f8a715b61712067115c6",
      expiryDate: "2024-01-22T10:56:48",
      status: "SUBMITTED",
      notes: {
        content:
          "This is a test measure the typing size - Address 34 King Fahad - location 2000- Year 2023" +
          "\r\n" +
          " هذا مجرد اختبار يقيس مدى تحمل البرنامج حجم الكتابة - العنوان ٣٤  شارع الملك فهد - الموقع ٢٠٠٠ - عام ٢٠٢٣",
        visibility: true,
      },
      paymentTermsId: "643007862071f75449d9634b",
      creditMarginPercentage: 1.5,
      lineItems: returnSubmittedQuotationBody(),
      termsAndConditions:
        "Payment: 100% Advance.\nDelivery: Within 5 days.\nValidity: 2 days from the date of this quotation.\nPrice includes the delivery to the job site within Riyadh.\nPrice is valid for requested quantity and is subject to changed if the quantity is changed",
    };
    let result = await axios.post(
      returnURL() +
        "/bidding/bid/" +
        localStorage.getItem("opportunityId").replace(/['"]+/g, ""),
      formData, {headers:headers}
    );
    console.log(result.status);

    if (result.status == 200) {
      localStorage.setItem("bidNumber", JSON.stringify(result.data.bidNumber));
      localStorage.setItem("bidId", JSON.stringify(result.data.id));
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
