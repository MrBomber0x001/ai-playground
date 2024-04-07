import {config} from "dotenv"
config();


import OpenAI from 'openai'
const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY']
})


async function chat(input){
    const messages = [{role: "user", content: input}];

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages, 
        temperature: 0
    })

    return response.choices[0].message.content;
}

async function main(input){
    try {
        const response = await chat(input);
        console.log(response);
    } catch (error) {
        console.error(error)
    }
}

const promptTemplate = `
    Be very funny when answering questions
    Questions: {question}
`
const question = "what is the captial of France."
const prompt = promptTemplate.replace("{question}", question)
main(prompt);