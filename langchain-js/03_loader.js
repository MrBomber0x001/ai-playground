import {config} from 'dotenv'
config();

import { OpenAIEmbeddings } from "@langchain/openai";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { CharacterTextSplitter } from "langchain/text_splitter";
import { FaissStore } from "@langchain/community/vectorstores/faiss";

const loader = new TextLoader("./resturants.txt");

const docs = await loader.load();

const splitter = new CharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 50
})

const documents = await splitter.splitDocuments(docs);
console.log(`document: `, documents);

const embeddings = new OpenAIEmbeddings(docs);

const vectorStore = await FaissStore.fromDocuments(documents, embeddings);
await vectorStore.save("./")