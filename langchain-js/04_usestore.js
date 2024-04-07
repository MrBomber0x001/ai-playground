import { config } from "dotenv";
config();

import { OpenAIEmbeddings } from "@langchain/openai";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import {ChatOpenAI} from '@langchain/openai'

import { RetrievalQAChain, loadQAStuffChain } from "langchain/chains";

const embeddings = new OpenAIEmbeddings();
const vectorStore = await FaissStore.load("./", embeddings);


const chatModel = new ChatOpenAI({
    openAIApiKey: process.env["OPENAI_API_KEY"],
    temperature: 0
})

const chain = new RetrievalQAChain({
  combineDocumentsChain: loadQAStuffChain(chatModel),
  retriever: vectorStore.asRetriever(),
  returnSourceDocuments: true,
});

const res = await chain.invoke({
  query: "When does the restaurant open on friday?",
});


console.log(res.text);
