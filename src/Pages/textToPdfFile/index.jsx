import React from "react";
import { useState,useEffect } from "react";
import HeaderNav from "../../components/common/HeaderNav";
import Footer from "../../components/home/Footer/Footer";
import StyledContainer from "../../components/StyledContainer";
import convertPdf from "./functionality";
import { StyledPdfFile } from "./styled";


const TextToPdfFile = () => {

  useEffect(()=>{
    document.title="Text To PDF File"
  },[])

  const [formData, setFormData] = useState({
    textArea: "",
  });

  const { textArea } = formData;
  const changeHandler = (e) => {
    const { id, value } = e.target;

    setFormData((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    convertPdf(textArea);
    setFormData((prevState) => {
      return { ...prevState, textArea: "" };
    });
  };

  return (
    <>
      <HeaderNav />

      <StyledPdfFile>
        <StyledContainer>
          <div className="text">
            <h1 className="main-heading">Text To PDF File</h1>
            <p className="tag-line">Convert text to PDF file and download.</p>
          </div>
          <form onSubmit={submitHandler}>
            <div
              className="text-area"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label for="textArea">Write text here</label>
              <textarea
                name=""
                id="textArea"
                cols="30"
                rows="10"
                onChange={changeHandler}
                value={textArea}
              ></textarea>
            </div>
       
                   <button
                    className={`${
                  textArea
                        ? ""
                        : "btn-disable"
                    }`}
                    disabled={`${
                     textArea ? "" : "true"
                    }`}
                    type="submit"
                  >
                    Convert
                  </button>
          </form>
        </StyledContainer>
      </StyledPdfFile>

      <Footer />
    </>
  );
};

export default TextToPdfFile;
