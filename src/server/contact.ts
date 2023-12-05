"use server";

import axios from "axios";

export const sendEmail = async (body: Record<string, string>) => {
  const k = await axios.post(
    "https://6zr597n1ei.execute-api.us-west-2.amazonaws.com/dev/serverlessscraper/ooaymail",
    body
  );

  return k.status === 200;
};
