import axios from "axios";
import { returnURL } from "../APIs/BaseAPI";
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
      expiryDate: "2023-12-22T10:56:48",
      notes: "Some Test Notes",

      lineItems: [
        {
          product: {
            productId: "63c10eb2048f5908d50df389",
            name: "Rebar",
            imageUrl: "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1677139439/mobile-assets/steel_rebar_v1oddb.png",
            arabicName: "حديد تسليح",
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
            quantity: 10,
            unitPrice: 100,
          },
          offerAmountBySupplier: {
            amount: 20,
            currency: "SAR",
          },
          offerAmount: {
            amount: 20,
            currency: "SAR",
          },
        },
      ],
    };
    let result = await axios.post(
      returnURL() +
        "/bidding/bid/" +
        localStorage.getItem("opportunityId").replace(/['"]+/g, ""),
      formData
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
