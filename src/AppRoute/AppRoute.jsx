import React, { Component } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import DetailPdf from '../Pages/DetailPdf';
import Home from '../Pages/Home';
import MinifyCSS from '../Pages/MinifyCSS';
import MinifyJSON from '../Pages/MinifyJSON';
import JSONFormatter from '../Pages/JSONFormatter';
import CSSFormatter from '../Pages/CSSFormatter';
import HTMLFormatter from '../Pages/HTMLFormatter';
import MinifyHTML from '../Pages/MinifyHTML';
import WordcountTool from '../Pages/WordCountTool';
import AIToolsFormatter from '../Pages/AIToolsFormatter';
import SpreadSheetGeneretor from '../Pages/spreadsheetGenerator/spreadSheetGeneretor';
import TranslateProgrammingLanguages from '../Pages/translateProgrammingLanguages/TranslateProgrammingLanguages';

import TimeZone from '../components/timeZone/TimeZone';
import LanguageTranslator from '../Pages/languageTranslator';
import TextToPdfFile from '../Pages/textToPdfFile';
import TimeZoneConverter from '../Pages/timeZoneConverter';
import Iplocation from '../Pages/Iplocation';

//
// text tools
import {
  RemoveSpaces,
  ExtractLinks,
  ExtractEmailAddress,
} from '../Pages/textTools';

//
import SitemapGenerator from '../Pages/SitemapGenerator';
import CompareTwoStrings from '../Pages/CompareTwoStrings';

import { Gradient } from '../Pages/CssTool/Gradient';
import { BoxShadow } from '../Pages/CssTool/BoxShadow';
import { TextShadow } from '../Pages/CssTool/TextShadow';
import { ColumnGen } from '../Pages/CssTool/ColumnGen';
import { DisplayGen } from '../Pages/CssTool/DisplayGen';
import { VisibiltyGen } from '../Pages/CssTool/VisibiltyGen';
import { BorderGen } from '../Pages/CssTool/BorderGen';
import { BorderRadiusGen } from '../Pages/CssTool/BorderRadiusGen';
import { TransformGen } from '../Pages/CssTool/TransformGen';
import { BorderImgGen } from '../Pages/CssTool/BorderImgGen';
import { BoxResize } from '../Pages/CssTool/BoxResize';
import { OpacityGen } from '../Pages/CssTool/OpacityGen';
import { OutlineGen } from '../Pages/CssTool/OutlineGen';
import { OverflowGen } from '../Pages/CssTool/OverflowGen';
import { BackgroundGen } from '../Pages/CssTool/BackgroundGen';
import { TextColorGen } from '../Pages/CssTool/TextColorGen';
import { BlurGen } from '../Pages/CssTool/BlurGen';
import { BrightnessGen } from '../Pages/CssTool/BrightnessGen';
import { ContrastGen } from '../Pages/CssTool/ContrastGen';
import { GrayscaleGen } from '../Pages/CssTool/GrayscaleGen';
import { HueRotate } from '../Pages/CssTool/HueRotate';
import { InvertGen } from '../Pages/CssTool/InvertGen';
import { SaturateGen } from '../Pages/CssTool/SaturateGen';
import { SepiaGen } from '../Pages/CssTool/SepiaGen';
import { ListStyleGen } from '../Pages/CssTool/ListStyleGen';
import { Cursor } from '../Pages/CssTool/Cursor';
import { LetterSpacing } from '../Pages/CssTool/LetterSpacing';
import { LineHeight } from '../Pages/CssTool/LineHeight';
import { OverflowWrap } from '../Pages/CssTool/OverflowWrap';
import { TabSize } from '../Pages/CssTool/TabSizeGen';

import ConversionTool from '../components/conversionToolComponent/ConversionTool';
import { AlignText } from '../Pages/CssTool/AlignText';
import { TextDecoration } from '../Pages/CssTool/TextDecoration';
import { IndentText } from '../Pages/CssTool/IndentText';
import { TransformText } from '../Pages/CssTool/TransformText';
import { WhiteSpace } from '../Pages/CssTool/WhiteSpace';
import { BreakWord } from '../Pages/CssTool/BreakWord';
import { WordSpacing } from '../Pages/CssTool/WordSpacing';
import { HtmlimageGen } from '../Pages/HtmlTool.js/HtmlimageGen';
import { HtmliframGen } from '../Pages/HtmlTool.js/HtmlIframGen';
import { HtmlLinkGen } from '../Pages/HtmlTool.js/HtmlLinkGen';
import { HtmlButton } from '../Pages/HtmlTool.js/HtmlButton';
import { HtmlColorInput } from '../Pages/HtmlTool.js/HtmlColorInput';
import { HtmlDateInput } from '../Pages/HtmlTool.js/HtmlDateInput';
import { HtmlEmailInput } from '../Pages/HtmlTool.js/HtmlEmailInput';
import { HtmlFileGen } from '../Pages/HtmlTool.js/HtmlFlieGen';
import { HtmlImageInput } from '../Pages/HtmlTool.js/HtmlImageInput';
import { HtmlNumberInput } from '../Pages/HtmlTool.js/HtmlNumberInput';
import { HtmlPasswordInput } from '../Pages/HtmlTool.js/HtmlPasswordInput';
import { HtmlRangeInput } from '../Pages/HtmlTool.js/HtmlRangeInput';
import { HtmlSearchInput } from '../Pages/HtmlTool.js/HtmlSearchInput';
import { HtmlSubmitInput } from '../Pages/HtmlTool.js/HtmlSubmitInput';
import { HtmlTelInput } from '../Pages/HtmlTool.js/HtmlTelInput';
import { HtmlTextInput } from '../Pages/HtmlTool.js/HtmlTextInput';
import { HtmlUrlInput } from '../Pages/HtmlTool.js/HtmlUrlInput';
import { HtmlTextareaInput } from '../Pages/HtmlTool.js/HtmlTextarea';
import { HtmlAudio } from '../Pages/HtmlTool.js/HtmlAudio';
import { HtmlVideo } from '../Pages/HtmlTool.js/VideoHtml';
import { BiDirectional } from '../Pages/HtmlTool.js/BiDirectional';
import { Bold } from '../Pages/HtmlTool.js/Bold';
import { HtmlCitation } from '../Pages/HtmlTool.js/HtmlCitation';
import { Code } from '../Pages/HtmlTool.js/CodeGen';
import { Italic } from '../Pages/HtmlTool.js/ItilecGen';
import { Highlight } from '../Pages/HtmlTool.js/HighlightGen';
import { Strikethrough } from '../Pages/HtmlTool.js/StrikethroughGen';
import { Underline } from '../Pages/HtmlTool.js/UnderlineGen';
import { QuoteBlockquote } from '../Pages/HtmlTool.js/QuoteBlockquote';
import { Superscript } from '../Pages/HtmlTool.js/Superscript';
import { HtmlDetail } from '../Pages/HtmlTool.js/HtmlDetailsGen';
import { Meter } from '../Pages/HtmlTool.js/HtmlMeterGen';
import { ProgressBar } from '../Pages/HtmlTool.js/ProgressBar';
import JSONValidator from '../Pages/JsonTool/JsonValidator';
import JsonToXml from '../Pages/JsonTool/JsonToXml';
import XmlToJson from '../Pages/JsonTool/XmlToJson';
import JsonToYaml from '../Pages/JsonTool/JsonToYaml';
import JsonToBase64 from '../Pages/JsonTool/JsonToBase64';
import Base64ToJson from '../Pages/JsonTool/Base64ToJson';
import JsonToText from '../Pages/JsonTool/JsonToText';
import JsonToCsv from '../Pages/JsonTool/JsonToCsv';
import CsvToJson from '../Pages/JsonTool/CsvToJson';
import TsvToJson from '../Pages/JsonTool/TsvToJson';
import JsonToTsv from '../Pages/JsonTool/JsonToTsv';
import { NotFound } from '../Pages/404';
import ScrollTop from '../components/ScrollToTop';

export class AppRoute extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <ScrollTop />
          <Routes>
            <Route
              exact
              path='/'
              element={<Home />}
            />
            <Route
              path='/detail/:id'
              element={<DetailPdf />}
            />
            <Route
              path='/MinifyCSS'
              element={<MinifyCSS />}
            />
            <Route
              path='/MinifyJSON'
              element={<MinifyJSON />}
            />
            <Route
              path='/jsonformatter'
              element={<JSONFormatter />}
            />
            <Route
              path='/CSSformatter'
              element={<CSSFormatter />}
            />

            <Route
              path='/WordCountTool'
              element={<WordcountTool />}
            />
            <Route
              path='/box-shadow'
              element={<BoxShadow />}
            />
            <Route
              path='/text-shadow'
              element={<TextShadow />}
            />
            <Route
              path='/css-column'
              element={<ColumnGen />}
            />
            <Route
              path='/display-gen'
              element={<DisplayGen />}
            />
            <Route
              path='/visibilty-gen'
              element={<VisibiltyGen />}
            />
            <Route
              path='/border-gen'
              element={<BorderGen />}
            />
            <Route
              path='/border-radius-gen'
              element={<BorderRadiusGen />}
            />
            <Route
              path='/css-borderimg-gen'
              element={<BorderImgGen />}
            />
            <Route
              path='/css-boxresize-gen'
              element={<BoxResize />}
            />
            <Route
              path='/css-opacity-gen'
              element={<OpacityGen />}
            />
            <Route
              path='/css-outline-gen'
              element={<OutlineGen />}
            />
            <Route
              path='/css-overflow-gen'
              element={<OverflowGen />}
            />
            <Route
              path='/css-background-gen'
              element={<BackgroundGen />}
            />
            <Route
              path='/css-textcolor-gen'
              element={<TextColorGen />}
            />
            <Route
              path='/css-blur-gen'
              element={<BlurGen />}
            />
            <Route
              path='/css-brightness-gen'
              element={<BrightnessGen />}
            />
            <Route
              path='/css-contrast-gen'
              element={<ContrastGen />}
            />
            <Route
              path='/css-grayscale-gen'
              element={<GrayscaleGen />}
            />
            <Route
              path='/css-hue-rotate-gen'
              element={<HueRotate />}
            />
            <Route
              path='/css-invert-gen'
              element={<InvertGen />}
            />
            <Route
              path='/css-saturate-gen'
              element={<SaturateGen />}
            />
            <Route
              path='/css-sepia-gen'
              element={<SepiaGen />}
            />
            <Route
              path='/css-transform-gen'
              element={<TransformGen />}
            />
            <Route
              path='/gradientgenrator'
              element={<Gradient />}
            />
            <Route
              path='/css-liststyle-gen'
              element={<ListStyleGen />}
            />
            <Route
              path='/css-cursor-gen'
              element={<Cursor />}
            />
            <Route
              path='/css-letter-spacing-gen'
              element={<LetterSpacing />}
            />
            <Route
              path='/css-line-height-gen'
              element={<LineHeight />}
            />
            <Route
              path='/css-overflow-wrap-gen'
              element={<OverflowWrap />}
            />
            <Route
              path='/css-tab-size-gen'
              element={<TabSize />}
            />
            <Route
              path='/css-text-align-gen'
              element={<AlignText />}
            />
            <Route
              path='/css-text-decoration-gen'
              element={<TextDecoration />}
            />
            <Route
              path='/css-text-indent-gen'
              element={<IndentText />}
            />
            <Route
              path='/css-text-transform-gen'
              element={<TransformText />}
            />
            <Route
              path='/css-white-space-gen'
              element={<WhiteSpace />}
            />
            <Route
              path='/css-word-break-gen'
              element={<BreakWord />}
            />
            <Route
              path='/css-word-spacing-gen'
              element={<WordSpacing />}
            />

            <Route
              path='/HTMLFormatter'
              element={<HTMLFormatter />}
            />
            <Route
              path='/MinifyHTML'
              element={<MinifyHTML />}
            />
            <Route
              path='/html-image-gen'
              element={<HtmlimageGen />}
            />
            <Route
              path='/html-ifram-gen'
              element={<HtmliframGen />}
            />
            <Route
              path='/html-link-gen'
              element={<HtmlLinkGen />}
            />
            <Route
              path='/html-button-gen'
              element={<HtmlButton />}
            />
            <Route
              path='/html-color_input-gen'
              element={<HtmlColorInput />}
            />
            <Route
              path='/html-date_input-gen'
              element={<HtmlDateInput />}
            />
            <Route
              path='/html-email_input-gen'
              element={<HtmlEmailInput />}
            />
            <Route
              path='/html-file_input-gen'
              element={<HtmlFileGen />}
            />
            <Route
              path='/html-image_input-gen'
              element={<HtmlImageInput />}
            />
            <Route
              path='/html-number_input-gen'
              element={<HtmlNumberInput />}
            />
            <Route
              path='/html-password_input-gen'
              element={<HtmlPasswordInput />}
            />
            <Route
              path='/html-range_input-gen'
              element={<HtmlRangeInput />}
            />
            <Route
              path='/html-search_input-gen'
              element={<HtmlSearchInput />}
            />
            <Route
              path='/html-submit_input-gen'
              element={<HtmlSubmitInput />}
            />
            <Route
              path='/html-telephone_input-gen'
              element={<HtmlTelInput />}
            />
            <Route
              path='/html-text_input-gen'
              element={<HtmlTextInput />}
            />
            <Route
              path='/html-url_input-gen'
              element={<HtmlUrlInput />}
            />
            <Route
              path='/html-textarea-gen'
              element={<HtmlTextareaInput />}
            />

            <Route
              path='/html-audio-gen'
              element={<HtmlAudio />}
            />
            <Route
              path='/html-video-gen'
              element={<HtmlVideo />}
            />
            <Route
              path='/html-bidirectional-gen'
              element={<BiDirectional />}
            />
            <Route
              path='/html-bold-gen'
              element={<Bold />}
            />
            <Route
              path='/html-cite-gen'
              element={<HtmlCitation />}
            />
            <Route
              path='/html-code-gen'
              element={<Code />}
            />
            <Route
              path='/html-italic-gen'
              element={<Italic />}
            />
            <Route
              path='/html-highlight-gen'
              element={<Highlight />}
            />
            <Route
              path='/html-strikethrough-gen'
              element={<Strikethrough />}
            />
            <Route
              path='/html-underline-gen'
              element={<Underline />}
            />
            <Route
              path='/html-quote-gen'
              element={<QuoteBlockquote />}
            />
            <Route
              path='/html-superscript-gen'
              element={<Superscript />}
            />
            <Route
              path='/html-detail-gen'
              element={<HtmlDetail />}
            />
            <Route
              path='/html-meter-gen'
              element={<Meter />}
            />
            <Route
              path='/html-progress-gen'
              element={<ProgressBar />}
            />

            <Route
              path='/json-validator'
              element={<JSONValidator />}
            />
            <Route
              path='/json-to-xml'
              element={<JsonToXml />}
            />
            <Route
              path='/xml-to-json'
              element={<XmlToJson />}
            />
            <Route
              path='/json-to-yaml'
              element={<JsonToYaml />}
            />
            <Route
              path='/json-to-base64'
              element={<JsonToBase64 />}
            />
            <Route
              path='/base64-to-json'
              element={<Base64ToJson />}
            />
            <Route
              path='/json-to-text'
              element={<JsonToText />}
            />
            <Route
              path='/json-to-csv'
              element={<JsonToCsv />}
            />
            <Route
              path='/csv-to-json'
              element={<CsvToJson />}
            />
            <Route
              path='/tsv-to-json'
              element={<TsvToJson />}
            />
            <Route
              path='/json-to-tsv'
              element={<JsonToTsv />}
            />
            <Route
              path='/SitemapGenerator'
              element={<SitemapGenerator />}
            />
            <Route
              path='/RemoveSpaces'
              element={<RemoveSpaces />}
            />
            <Route
              path='/extract_email_address'
              element={<ExtractEmailAddress />}
            />
            <Route
              path='/compare-two-strings'
              element={<CompareTwoStrings />}
            />
            <Route
              path='/extract_links'
              element={<ExtractLinks />}
            />
            <Route
              path='/find_ip_address'
              element={<Iplocation />}
            />

            <Route
              path='/aitools/:id'
              element={<AIToolsFormatter />}
            />
            <Route
              path='/spreadsheet/:id'
              element={<SpreadSheetGeneretor />}
            />

            <Route
              path='/tanslateProgrammingLanguages/:id'
              element={<TranslateProgrammingLanguages />}
            />
            <Route
              path='/conversiontools/:id'
              element={<ConversionTool />}
            />
            <Route
              path='/conversiontools/timeZone'
              element={<TimeZone />}
            />
            <Route
              path='/conversiontools/languageTranslation'
              element={<LanguageTranslator />}
            />
            <Route
              path='/conversiontools/textToPdfFile'
              element={<TextToPdfFile />}
            />
            <Route
              path='/conversiontools/timeZoneConversion'
              element={<TimeZoneConverter />}
            />
            <Route
              path='/*'
              element={<NotFound />}
            />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default AppRoute;
