import axios from "axios";
import { returnURL } from "../APIs/BaseAPI";
import { getRandomName } from "../utilities/commonMethods";

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
    let result = await axios.post(
      returnURL() + "/supplier/register",
      formData);
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
        vatRegistrationNumber:"1234"
      };
      let result = await axios.put(
        returnURL() + "/supplier/" + localStorage.getItem("supplierId").replace(/['"]+/g, ""),
        formData
      );
      if (result.status == 200) {
        localStorage.setItem(
          "SupplierFullName",
          JSON.stringify(result.data.fullName)
        );
        localStorage.setItem(
          "SupplierEmail",
          JSON.stringify(result.data.email)
        );
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