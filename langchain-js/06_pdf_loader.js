import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const loader = new PDFLoader("./assets/example_pdf.pdf");

const docs = await loader.load();
console.log({docs})