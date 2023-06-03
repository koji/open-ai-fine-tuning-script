import { openai } from './api.js'

const prompt =
  'Give me a sample code that OT-2 transfer liquid from well A1 to well B1' // put your prompt here
const maxTokens = 150
const model = 'davinci:ft-opentrons-labworks-2023-04-20-19-15-42' // put your model id here
const createCompletion = async () => {
  try {
    const response = await openai.createCompletion({
      model: model,
      prompt: prompt,
      max_tokens: maxTokens,
    })
    if (response.data) {
      console.log(response.data.choices)
    } else {
      console.log('no response data')
    }
  } catch (error) {
    console.log(error)
  }
}

createCompletion()
