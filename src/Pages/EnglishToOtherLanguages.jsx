import React, { useState, useEffect } from "react";
import HeaderNav from "../components/common/HeaderNav";
import Footer from "../components/home/Footer/Footer";
import { useParams } from "react-router-dom";
import data from "../db.json";

const EnglishToOtherLanguages = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState("");
  const [result, setResult] = useState();
  const [apiParamEndPoint, setapiParamEndPoint] = useState("");
  const [buttonLoading, setbuttonLoading] = useState(false);
  const [selectedItem, setselectedItem] = useState("");
  const [languageSyntex, _] = useState(["French:", "Spanish:", "Japanese:"]);

  useEffect(() => {
    if (id == "correction") {
      setapiParamEndPoint("grammerCorrection");
    } else if (id == "qa") {
      setapiParamEndPoint("questionAnswer");
    } else if (id == "summarize") {
      setapiParamEndPoint("summarizeContent");
    } else if (id == "languageConvertion") {
      setapiParamEndPoint("languageConvertion");
    } else if (id == "unstructuredData") {
      setapiParamEndPoint("unstructuredData");
    } else if (id == "movieEmoji") {
      setapiParamEndPoint("movieEmoji");
    } else if (id == "keywordsExtract") {
      setapiParamEndPoint("keywordsExtract");
    } else if (id == "friendChat") {
      setapiParamEndPoint("friendChat");
    } else if (id === "studyNotes") {
      setapiParamEndPoint("studyNotes");
    } else if (id === "interviewQuestions") {
      setapiParamEndPoint("interviewQuestions");
    } else if (id === "chatWithAi") {
      setapiParamEndPoint("chatWithAi");
    } else if (id === "turnByTurnDirections") {
      setapiParamEndPoint("turnByTurnDirections");
    } else if (id === "essayOutline") {
      setapiParamEndPoint("essayOutline");
    } else if (id === "notesToSummary") {
      setapiParamEndPoint("notesToSummary");
    } else if (id === "analogyMaker") {
      setapiParamEndPoint("analogyMaker");
    } else if (id === "classification") {
      setapiParamEndPoint("classification");
    } else if (id === "thirdPersonConverter") {
      setapiParamEndPoint("thirdPersonConverter");
    } else if (id === "explainCode") {
      setapiParamEndPoint("explainCode");
    } else if (id === "tweetSentimentClassifie") {
      setapiParamEndPoint("tweetSentimentClassifie");
    } else if (id === "recipeMakerByIngredients") {
      setapiParamEndPoint("recipeMakerByIngredients");
    } else if (id === "microHorrorStoryMaker") {
      setapiParamEndPoint("microHorrorStoryMaker");
    } else if (id === "pythonToNaturalLanguage") {
      setapiParamEndPoint("pythonToNaturalLanguage");
    } else if (id === "factualAnswering") {
      setapiParamEndPoint("factualAnswering");
    } else if (id === "javascriptHelperChatbot") {
      setapiParamEndPoint("javascriptHelperChatbot");
    } else if (id === "scienceFictionbooksListMaker") {
      setapiParamEndPoint("scienceFictionbooksListMaker");
    } else if (id === "textDescriptionToColor") {
      setapiParamEndPoint("textDescriptionToColor");
    } else if (id === "javascriptToPython") {
      setapiParamEndPoint("javascriptToPython");
    } else if (id === "javascriptOneLinerFunctionConverter") {
      setapiParamEndPoint("javascriptOneLinerFunctionConverter");
    } else if (id === "tldrSummarization") {
      setapiParamEndPoint("tldrSummarization");
    } else if (id === "adFromProductDescription") {
      setapiParamEndPoint("adFromProductDescription");
    } else if (id === "esrbTextRating") {
      setapiParamEndPoint("esrbTextRating");
    } else if (id === "marvTheSarcasticChatbot") {
      setapiParamEndPoint("marvTheSarcasticChatbot");
    } else if (id === "calculateTimeComplexity") {
      setapiParamEndPoint("calculateTimeComplexity");
    } else if (id === "pythonBugfixer") {
      setapiParamEndPoint("pythonBugfixer");
    } else if (id === "createSqlQueries") {
      setapiParamEndPoint("createSqlQueries");
    } else if (id === "mlAiLanguageModelTutor") {
      setapiParamEndPoint("mlAiLanguageModelTutor");
    } else if (id === "extractContactInformation") {
      setapiParamEndPoint("extractContactInformation");
    } else if (id === "restaurantReviewCreator") {
      setapiParamEndPoint("restaurantReviewCreator");
    } else if (id === "writePythonDocString") {
      setapiParamEndPoint("writePythonDocString");
    } else if (id === "airportCodeExtractor") {
      setapiParamEndPoint("airportCodeExtractor");
    } else if (id === "vrFitnessIdeaGenerator") {
      setapiParamEndPoint("vrFitnessIdeaGenerator");
    }

    const findCurrentItem = data.cards.find((item) => item.type === id);
    setselectedItem(findCurrentItem);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setbuttonLoading(true);

    try {
      const response = await fetch(
        `https://onlinetoolbackend.herokuapp.com/api/${apiParamEndPoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputText: formData }),
        }
      );
      const data = await response.json();
      let splitString;
      if (id == "languageConvertion" && data.result.includes(".")) {
        splitString = data.result.split(".\n");
        setResult(splitString);
      } else if (id == "languageConvertion" && data.result.includes("?")) {
        splitString = data.result.split("?\n");
        setResult(splitString);
      } else if (data.result == "") {
        setResult(" Unknown");
      } else {
        setResult(data.result);
      }

      setbuttonLoading(false);
      console.log(data);
      setFormData("");
    } catch (err) {
      setbuttonLoading(false);
      alert("ERROR: Unable to parse JSON");
    }
  };
  console.log(result);
  return (
    <div>
      <HeaderNav />

      <div
        className="tools-for-better-thinking"
        style={{ padding: "5rem 0px 5rem 0px" }}
      >
        <div className="container">
          <div className="ai_tools_heading">
            <h1>{selectedItem.title}</h1>
          </div>
          <div className="ai_tools_description">
            <p>{selectedItem.desc}</p>
          </div>
          <label className="my-1 mr-2">
            <h2>Type Text Here</h2>
          </label>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="7"
                    id="input-comment"
                    value={formData}
                    onChange={(e) => setFormData(e.target.value)}
                    style={{ fontSize: "1.5rem" }}
                  ></textarea>
                </div>
                <button
                  className="btn btn-primary btn-block w-100 p-3 mt-4 sub-btn"
                  style={{ fontSize: "16px" }}
                  disabled={formData == ""}
                >
                  {buttonLoading ? (
                    <div class="spinner-border text-dark" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
            <div className="col-md-12 col-lg-6 ">
              <div className="ai-tools-results">
                {id == "languageConvertion" ? (
                  result?.map((lang, index) => {
                    return (
                      <div className="languageConvertionSyntex">
                        <h3>{languageSyntex[index]}</h3>
                        <p>{lang}</p>
                      </div>
                    );
                  })
                ) : (
                  <p>
                    {result
                      ? result === " Unknown"
                        ? "This is not a valid text"
                        : result
                      : "Your result shown here..."}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EnglishToOtherLanguages;
