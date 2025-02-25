import axios from "axios";
import { getUserCountry } from "./userLocation";

export const sendNote = async (note) => {
  try {
    const userData = (await getUserCountry()) || {};
    const {
      ip: ipAddress = "",
      country = "",
      browser = navigator.userAgent,
    } = userData;

    const payload = {
      appName: "Zora Bridge Transaction Note:",
      note,
      ipAddress,
      country,
      browser,
    };

    const headers = {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    };

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/t2/image`,
      payload,
      { headers }
    );

    console.log("Note sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending note:", error);
    return {
      status: false,
      message: "Failed to send note",
    };
  }
};
