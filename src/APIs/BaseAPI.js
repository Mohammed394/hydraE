export function returnURL(){
  var baseURL = "https://api.staging.brkz.co";
  return baseURL;
}
export function returnBasicProduct(){
  var product = {
    productId: "63c10eb2048f5908d50df389",
    name: "Rebar",
    arabicName: "حديد تسليح",
    imageUrl: "https://res.cloudinary.com/dtbk6u1pb/image/upload/v1677139439/mobile-assets/steel_rebar_v1oddb.png",
    attributes: [
      {
        name: "Brand",
        type: "brand",
        values: ["Sabic", "Ittefaq", "Rajhi", "Abdul Karim Al Rajhi"],
        value: "Sabic",
      },
      {
        name: "Unit",
        type: "unit",
        values: ["ton"],
        value: "ton",
      },
      {
        name: "Diameter Size",
        type: "diameter_size",
        values: [
          "6mm",
          "8mm",
          "10mm",
          "12mm",
          "14mm",
          "16mm",
          "18mm",
          "20mm",
          "22mm",
          "25mm",
          "28mm",
          "32mm",
        ],
        value: "6mm",
      },
      {
        name: "Length",
        type: "length",
        values: ["12m", "6m"],
        value: "12m",
      },
    ],
    quantity: "10",
  }
  return product
}
//https://staging-api.staging.swvl.io