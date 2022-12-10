import conversionToolsDb from "./conversionToolsDb";
import htmlTools from "./htmlToolsDb";
import cssToolsDb from "./cssToolsDb";
import aiToolsDb from "./aiToolsDb";
import jsonToolsDb from "./jsonToolsDb";
import textTool from "./textTools";

export default [
  ...aiToolsDb,
  ...conversionToolsDb,
  ...htmlTools,
  ...cssToolsDb,
  ...jsonToolsDb,
  ...textTool
];
