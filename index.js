const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./table");
const HtmlParser = require('./HtmlParse')
const Writer = require('./Writer')
const PDFWriter = require('./PDFWriter')
const Leitor = new Reader();
const Escritor = new Writer()

const main = async () => {
  const Data = await Leitor.Read("./users.csv");
  const DataProcess = Processor.Process(Data);
  const Usuarios = new Table(DataProcess);
  const html = await HtmlParser.Parser(Usuarios);
  Escritor.Write(Date.now() + ".html",html)
  PDFWriter.WritePDF(Date.now() + ".pdf",html)
};

main();
