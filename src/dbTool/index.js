import AiTool from "./AiTool";
import conversionToolsDb from "./conversionToolsDb";
import CssTool from "./CssTool";
import HtmlTool from "./HtmlTool";
import JsonTool from "./JsonTool";

const Data = [
    ...HtmlTool,
    ...CssTool,
    ...JsonTool,
    ...AiTool,
    ...conversionToolsDb,
];
export default Data