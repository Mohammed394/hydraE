import axios from "axios";
import { returnURL } from "../APIs/BaseAPI";
import { getRandomName, getBid } from "../utilities/commonMethods";

export async function updateMargin(){
    try {
        var formData = {
            opportunityId: localStorage.getItem("opportunityId").replace(/['"]+/g, ""),
            supplierId: "63c4f8a715b61712067115c6",
            productInformationList: [
              {
                productId: "63c10eb2048f5908d50df389",
                sellingPrice: {
                  currency: "SAR",
                  amount: 20,
                },
              },
            ],
        };
        let result = await axios.patch(
          returnURL() +
            "/bidding/bid/" +
            localStorage.getItem("bidId").replace(/['"]+/g, "")+"/service/charges",
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

export async function selectWinning(){
    try {
        var formData = {
            opportunityId: localStorage.getItem("opportunityId").replace(/['"]+/g, ""),
            supplierId: "63c4f8a715b61712067115c6",
            bidStatus: "SELECTED",
            rejectedReasons:[]
        };
        let result = await axios.patch(
          returnURL() +
            "/bidding/bid/" +
            localStorage.getItem("bidId").replace(/['"]+/g, "")+"/status",
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