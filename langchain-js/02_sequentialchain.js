import {SimpleSequentialChain} from 'langchain/chains'

import {ChatOpenAI} from '@langchain/openai'
import {ChatPromptTemplate} from '@langchain/core/prompts'
import {StringOutputParser} from '@langchain/core/output_parsers'
const chatModel = new ChatOpenAI({
    openAIApiKey: process.env["OPENAI_API_KEY"]
})

const responseTemplate1 = `
You are a playwright. Given the title of play, it is your job to write a synopsis for that title.

Title: {title}
Playwright: This is a synopsis for the above play:
`