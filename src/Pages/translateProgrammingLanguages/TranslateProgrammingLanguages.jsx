import React, { useState, useEffect } from "react";
import HeaderNav from "../../components/common/HeaderNav";
import Footer from "../../components/home/Footer/Footer";
import { useParams } from "react-router-dom";
import data from "../../db.json";
// import "./translateProgrammingLan.css";
import StyledContainer from "../../components/StyledContainer";

import { StyledTranslateProgrammingLan } from "./styled";

const TranslateProgrammingLanguages = () => {
  const { id } = useParams();

  const [result, setResult] = useState();
  const [apiParamEndPoint, setapiParamEndPoint] = useState("");
  const [buttonLoading, setbuttonLoading] = useState(false);
  const [selectedItem, setselectedItem] = useState("");
  const [disableBtn,setDisableBtn] = useState(true)

  const [programmingLanguageData, setPrpogrammingLanguageData] = useState({
    from: "",
    to: "",
    code: "",
  });

  const { from, to, code } = programmingLanguageData;
  useEffect(()=>{
    if(from && to && code){
      setDisableBtn(false)
    }else{
      setDisableBtn(true)
    }
  },[from, to,code])
  const programmingLanguageChangeHandler = (e) => {
    const { id, value } = e.target;
    setPrpogrammingLanguageData((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  useEffect(() => {
    if (id === "translateProgrammingLanguages") {
      setapiParamEndPoint("translateProgrammingLanguages");
    }

    const findCurrentItem = data.cards.find((item) => item.type === id);
    setselectedItem(findCurrentItem);
  }, [id]);

  const handleSubmit = async (e) => {
    let inputString = `##### Translate this function  from ${from} into ${to}\n### ${from}\n    \n ${code} \n    \n### ${to}`;
    e.preventDefault();
    setbuttonLoading(true);
    setDisableBtn(true)

    try {
      const response = await fetch(
        `https://onlinetoolbackend.herokuapp.com/api/${apiParamEndPoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputText: inputString }),
        }
      );
      const data = await response.json();

      setResult(data.result);

      setbuttonLoading(false);
      console.log(data);
    } catch (err) {
      setbuttonLoading(false);
      alert("ERROR: Unable to parse JSON");
    }
  };
  if (result) {
    console.log(result.trim().split("\n"));
  }

  // return (
  //   <div>
  //     <HeaderNav />

  //     <div
  //       className="tools-for-better-thinking"
  //       style={{ padding: "5rem 0px 5rem 0px" }}
  //     >
  //       <div className="container">
  //         <div className="ai_tools_heading">
  //           <h1>{selectedItem.title}</h1>
  //         </div>
  //         <div className="ai_tools_description">
  //           <p>{selectedItem.desc}</p>
  //         </div>

  //         <div className="row">
  //           <div className="col-md-12 col-lg-6">
  //             <form onSubmit={handleSubmit}>
  //               <div className="form-group">
  //                 <div className="form-inp-container">
  //                   <div className="inp-cnt">
  //                     <div className="inp">
  //                       <label for="from">From</label>
  //                       <input
  //                         id="from"
  //                         value={from}
  //                         onChange={programmingLanguageChangeHandler}
  //                         type="text"
  //                         placeholder="eg: javascript"
  //                       />
  //                     </div>
  //                     <div className="inp">
  //                       <label for="to">To</label>
  //                       <input
  //                         id="to"
  //                         value={to}
  //                         onChange={programmingLanguageChangeHandler}
  //                         type="text"
  //                         placeholder="eg: python"
  //                       />
  //                     </div>
  //                   </div>
  //                   <div className="text-area-cnt">
  //                     <label for="code">Write Code Here</label>
  //                     <textarea
  //                       name=""
  //                       id="code"
  //                       onChange={programmingLanguageChangeHandler}
  //                     ></textarea>
  //                   </div>
  //                 </div>
  //                 <button
  //                   className="btn btn-primary btn-block w-100 p-3 mt-4 sub-btn"
  //                   style={{ fontSize: "16px" }}
  //                   disabled={programmingLanguageData == ""}
  //                 >
  //                   {buttonLoading ? (
  //                     <div class="spinner-border text-dark" role="status">
  //                       <span class="sr-only">Loading...</span>
  //                     </div>
  //                   ) : (
  //                     "Submit"
  //                   )}
  //                 </button>
  //               </div>
  //             </form>
  //           </div>
  //           <div className="col-md-12 col-lg-6 ai-tools-results">
  //             {result
  //               ?.trim()
  //               .split("\n")
  //               .map((data) => {
  //                 return <div>{data}</div>;
  //               })}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <Footer />
  //   </div>
  // );

  return (
    <>
      <HeaderNav />
      <StyledTranslateProgrammingLan>
        <StyledContainer>
          <form onSubmit={handleSubmit}>
            <div className="text">
              <h1 className="main-heading">{selectedItem.title}</h1>
              <p className="tag-line">{selectedItem.desc}</p>
            </div>
            <div className="inputs-container">
              <div className="from-to-cnt">
                <div className="from">
                  <label for="">From</label>
                  <input
                    id="from"
                    value={from}
                    onChange={programmingLanguageChangeHandler}
                    type="text"
                    placeholder="eg: javascript"
                  />
                </div>
                <div className="to">
                  <label for="">To</label>
                  <input
                    id="to"
                    value={to}
                    onChange={programmingLanguageChangeHandler}
                    type="text"
                    placeholder="eg: python"
                  />
                </div>
              </div>
              <div className="text-area-cnt">
                <label for="code">Write Code Here</label>
                <div className="text-area-output-cnt">
                  <textarea
                    placeholder={selectedItem.desc + "..."}
                    name=""
                    id="code"
                    onChange={programmingLanguageChangeHandler}
                  ></textarea>
                  {result ? (
                    <div className="res">
                      {result
                        ?.trim()
                        .split("\n")
                        .map((data) => {
                          return <div>{data}</div>;
                        })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {/* <button
              type="submit"
              className="btn btn-primary btn-block w-100 p-3 mt-4 sub-btn"
              style={{ fontSize: "16px" }}
              disabled={from && to && code ? "" : true}
            >
              Convert
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
          </form>
        </StyledContainer>
      </StyledTranslateProgrammingLan>
      <Footer />
    </>
  );
};

export default TranslateProgrammingLanguages;
