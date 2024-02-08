const Razorpay = require("razorpay");

apiKey = "rzp_live_OVjxDZWTDvM1ja";
apiSecret = "UuiFHtsY6N8TOJIJE5v3Ekwb";

const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret,
});

module.exports = razorpay;
