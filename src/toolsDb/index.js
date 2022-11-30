import conversionToolsDb from "./conversionToolsDb";
import htmlTools from "./htmlToolsDb";
import cssToolsDb from "./cssToolsDb";
import aiToolsDb from "./aiToolsDb";
import jsonToolsDb from "./jsonToolsDb";

export default [
  ...aiToolsDb,
  ...conversionToolsDb,
  ...htmlTools,
  ...cssToolsDb,
  ...jsonToolsDb,
];
