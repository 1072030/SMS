//台灣定價 0.0444歐元
const Vonage = require("@vonage/server-sdk");
require("dotenv").config();
const vonage = new Vonage({
  apiKey: process.env.APIKEY,
  apiSecret: process.env.APISECRET,
});

const from = "Vonage APIs";
const to = "886918388719";
const text = "A text message sent using the Vonage SMS API";

vonage.message.sendSms(from, to, text, (err, responseData) => {
  if (err) {
    console.log(err);
  } else {
    if (responseData.messages[0]["status"] === "0") {
      console.log("Message sent successfully.");
    } else {
      console.log(
        `Message failed with error: ${responseData.messages[0]["error-text"]}`
      );
    }
  }
});
