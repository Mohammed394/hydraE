import axios from "axios";

export async function sendVerificationCode() {
  try {
    var national_number = Math.floor(Math.random() * 10000000);

    var formData = {
      phone_data: {
        national_number: "100" + national_number.toString(),
        region_code: "eg",
        country_code: "+20",
      },
    };
    var baseURL = localStorage.getItem("baseURL");
    let result = await axios.post(
      baseURL + "/user/v2/send_verification_code/",
      formData
    );
    if (result.status == 204) {
      national_number = "100" + +national_number.toString();
      localStorage.setItem("phoneNumber", national_number);
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
export async function getVerificationCode() {
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")
          .replace(/['"]+/g, "")}`,
      },
    };
    var baseURL = localStorage.getItem("baseURL");
    let result = await axios.get(
      baseURL +
        "/dashboard/user/verification_code?phone=20" +
        localStorage.getItem("phoneNumber"),
      config
    );
    if (result.status == 200) {
      localStorage.setItem("verificationCode", result.data.verification_code);
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
export async function verifyAccount() {
  try {
    var formData = {
      phone_data: {
        national_number: localStorage.getItem("phoneNumber"),
        region_code: "eg",
        country_code: "+20",
      },
      verification_code: localStorage.getItem("verificationCode"),
    };
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")
          .replace(/['"]+/g, "")}`,
      },
    };
    var baseURL = localStorage.getItem("baseURL");
    let result = await axios.post(
      baseURL + "/user/v2/phone/verify",
      formData,
      config
    );
    if (result.status == 200) {
      localStorage.setItem(
        "verificationCodeId",
        result.data.verification_code_id
      );
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
export async function signUp() {
  try {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let res = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
        res += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    var name = "Automation" + res;
    var email = name + "@swvl.com";
    var formData = {
      name: name,
      email: email,
      password: "12345678",
      city_id: "58d1560b2207c00001aabc9a",
      verification_code_id: localStorage.getItem("verificationCodeId"),
      phone_data: {
        national_number: localStorage.getItem("phoneNumber"),
        region_code: "eg",
        country_code: "+20",
      },
      verification_code: localStorage.getItem("verificationCode"),
    };
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")
          .replace(/['"]+/g, "")}`,
      },
    };
    var baseURL = localStorage.getItem("baseURL");
    let result = await axios.post(
      baseURL + "/user/v2/signup",
      formData,
      config
    );
    if (result.status == 200) {
      localStorage.setItem("Name", name);
      localStorage.setItem("Email", email);
      localStorage.setItem("Password", "12345678");
      localStorage.setItem("User ID", result.data.user.id);
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
