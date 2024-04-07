import {config} from 'dotenv'
config();


import {ChatOpenAI} from '@langchain/openai'
import {ChatPromptTemplate} from '@langchain/core/prompts'
import {StringOutputParser} from '@langchain/core/output_parsers'
const chatModel = new ChatOpenAI({
    openAIApiKey: process.env["OPENAI_API_KEY"]
})

// const response = await chatModel.invoke("what is LangSmith?")
// console.log(response.content);
const outoutParser = new StringOutputParser();

const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a world class technical documentation writer"],
    ["user", "{input}"],
])


const chain = prompt.pipe(chatModel).pipe(outoutParser);

// const response = await chain.invoke({
//     input: "what is LangSmith?"
// })

await chain.invoke({
    input: "what is LangSmith?"
})
