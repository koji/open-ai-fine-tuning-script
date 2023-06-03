import { openai } from "./api.js";

const checkStatus = async () => {
  try {
    const response = await openai.listFineTunes();
    console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

checkStatus();
