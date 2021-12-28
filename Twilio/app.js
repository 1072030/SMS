//0.054 USD
require("dotenv").config();
const twilio = require("twilio");
const client = new twilio(process.env.ACCOUNTSSID, process.env.AUTHTOKEN);

client.messages
  .create({
    body: "Hello from Node",
    to: "+886918388719", // Text this number
    //from: "+12544574947"
    messagingServiceSid: "MGbaba29a0fd8db224233946463626d364", // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
