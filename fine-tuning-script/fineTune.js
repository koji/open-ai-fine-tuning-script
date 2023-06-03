import { openai } from "./api.js";
import { fileId } from "./fileId.js";

const model = "davinci";
const doFineTune = async () => {
  try {
    const response = await openai.createFineTune({
      training_file: fileId,
      model: model,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

doFineTune();
