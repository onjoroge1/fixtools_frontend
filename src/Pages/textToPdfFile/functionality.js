import { jsPDF } from "jspdf";

const convertPdf = (text) => {
  const doc = new jsPDF();

  var line = 25; // Line height to start text at
  var lineHeight = 10;
  var leftMargin = 20;
  var wrapWidth = 180;
  var longString = text;

  var splitText = doc.splitTextToSize(longString, wrapWidth);

  for (var i = 0, length = splitText.length; i < length; i++) {
    // loop thru each line and increase

    doc.text(splitText[i], leftMargin, line);

    line = lineHeight + line;
  }

  doc.save("a4.pdf");
};

export default convertPdf;
