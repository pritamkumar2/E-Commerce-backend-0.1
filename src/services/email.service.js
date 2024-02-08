const nodemailer = require("nodemailer");

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gitamapptech@gmail.com",
    pass: "ajza yvpi ptur jinv",
  },
});

// Function to send OTP email
const sendOTPEmail = async (toEmail, otp) => {
  try {
    await transporter.sendMail({
      from: "gitamapptech@gmail.com",
      to: toEmail,
      subject: "Password Reset OTP",
      html: `<p>Your OTP for password reset is: <strong>${otp}</strong></p>`,
    });
    console.log("OTP email sent successfully");
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw error;
  }
};

module.exports = { sendOTPEmail };
