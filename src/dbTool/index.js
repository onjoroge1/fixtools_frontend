import AiTool from './AiTool';
import conversionToolsDb from './conversionToolsDb';
import CssTool from './CssTool';
import HtmlTool from './HtmlTool';
import JsonTool from './JsonTool';
import textTool from './textTools';
import seoTools from './seoTools';

const Data = [
  ...HtmlTool,
  ...CssTool,
  ...JsonTool,
  ...AiTool,
  ...conversionToolsDb,
  ...textTool,
  ...seoTools,
];
export default Data;
