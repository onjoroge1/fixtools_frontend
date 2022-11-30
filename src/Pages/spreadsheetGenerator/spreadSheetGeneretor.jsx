import React, { useState, useEffect } from "react";
import HeaderNav from "../../components/common/HeaderNav";
import Footer from "../../components/home/Footer/Footer";
import { useParams } from "react-router-dom";
import data from "../../db.json";
import "./spreadsheetGenerator.css";

const AIToolsFormatter = () => {
  const { id } = useParams();

  const [result, setResult] = useState();
  const [apiParamEndPoint, setapiParamEndPoint] = useState("");
  const [buttonLoading, setbuttonLoading] = useState(false);
  const [selectedItem, setselectedItem] = useState("");
  const [disableBtn,setDisableBtn] = useState(true)


  const [spreadsheetData, setSpreadsheetData] = useState({
    topic: "",
    columns: "",
    requiredDataHeading: "",
  });

  const { topic, columns, requiredDataHeading } = spreadsheetData;
  useEffect(()=>{
    if(topic && columns && requiredDataHeading){
      setDisableBtn(false)
    }else{
      setDisableBtn(true)
    }
  },[topic,columns,requiredDataHeading])
  const spreadsheetchangeHandler = (e) => {
    const { id, value } = e.target;
    setSpreadsheetData((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  useEffect(() => {
    setDisableBtn(true)
 
    if (id === "spreadsheetCreator") {
      setapiParamEndPoint("spreadsheetCreator");
    }

    const findCurrentItem = data.cards.find((item) => item.type === id);
    setselectedItem(findCurrentItem);
  }, [id]);

  const handleSubmit = async (e) => {
    let reqData = spreadsheetData.requiredDataHeading.split(",").join("|");

    let stringInput = `write a ${spreadsheetData.columns} on ${spreadsheetData.topic} \n ${reqData}`;
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
          body: JSON.stringify({ inputText: stringInput }),
        }
      );
      const data = await response.json();

      setResult(data.result);
      setbuttonLoading(false);
    } catch (err) {
      setbuttonLoading(false);
      alert("ERROR: Unable to parse JSON");
    }
  };

  //for spread sheet
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
            <p>{selectedItem.desc}.</p>
          </div>
          <label className="my-1 mr-2">
            <h2>Type Text Here</h2>
          </label>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              {/*  */}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="form-inp-container">
                    <div className="inp-cnt">
                      <div className="inp">
                        <label for="topic">topic for spreadsheet</label>
                        <input
                          type="text"
                          id="topic"
                          placeholder="eg : Top Movies"
                          value={topic}
                          onChange={spreadsheetchangeHandler}
                        />
                      </div>
                      <div className="inp">
                        <label for="columns">create columns</label>
                        <input
                          type="number"
                          id="columns"
                          name=""
                          value={columns}
                          onChange={spreadsheetchangeHandler}
                        />
                      </div>
                    </div>
                    <div className="text-area-cnt">
                      <label for="requiredDataHeading"></label>
                      <textarea
                        name=""
                        id="requiredDataHeading"
                        cols="30"
                        rows="10"
                        value={requiredDataHeading}
                        onChange={spreadsheetchangeHandler}
                      ></textarea>
                    </div>
                  </div>
                  {/* <button
                    className="btn btn-primary btn-block w-100 p-3 mt-4 sub-btn"
                    style={{ fontSize: "16px" }}
                    disabled={spreadsheetData == ""}
                  >
                    {buttonLoading ? (
                      <div class="spinner-border text-dark" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button> */}
                  
                  <button
                    className={`${
                      disableBtn
                        ? "btn-disable"
                        : ""
                    }`}
                    disabled={`${
                      disableBtn ? "true" : ""
                    }`}
                    type="submit"
                  >
                      {buttonLoading ? (
                        <div class="spinner-border text-dark" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Submit"
                      )}
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-12 col-lg-6 ai-tools-results">
              {result
                ?.trim()
                .split("\n")
                .map((data) => {
                  return <div>{data}</div>;
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIToolsFormatter;
