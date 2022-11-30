import React, { useState, useEffect } from "react";
import StyledContainer from "../StyledContainer";
import { StyledConversionTool } from "./styled";
import unitsDB from "./toolsData";
import HeaderNav from "../common/HeaderNav";
import Footer from "../home/Footer/Footer";

import {
  massConversion,
  volumeConversion,
  areaConversion,
  bitByteConversion,
  powerConversion,
  timeConversion,
  temperatureConversion,
  presurreConversion,
  lengthConversion,
  energyConversion,
  speedConversion,
  fuelEconomyConversion,
  planeAngleConversion,
} from "./conversionToolsFunctions";

import { useParams } from "react-router-dom";

import { LineWave } from "react-loader-spinner";

const ConversionTool = () => {
  const [formData, setFormData] = useState({
    inputValue: "",
    selectId: "",
    convertFrom: "",
    convertTo: "",
  });

  console.log(unitsDB);

  const [apiParamEndPoint, setapiParamEndPoint] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const { inputValue, convertFrom, convertTo } = formData;

  const toolsData = unitsDB.find((item) => item.id === id);
  // console.log(toolsData.convertOptions);

  useEffect(() => {
    document.title=toolsData.title;
    if (id === "currencyConversion") {
      setapiParamEndPoint("currencyConversion");
    }
  }, [id]);

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [id]: value };
    });
  };
  const fromHandler = (e) => {
    console.log(e.target.value);
    setFormData((prevState) => {
      return { ...prevState, ["convertFrom"]: e.target.value };
    });
  };
  const toHandler = (e) => {
    console.log(e.target.value);
    setFormData((prevState) => {
      return { ...prevState, ["convertTo"]: e.target.value };
    });
  };

  const submitHandler = async (e) => {
    if (convertFrom === convertTo) {
      setFormData((prevState) => {
        return { ...prevState, inputValue: "" };
      });
      return alert(
        "Inputs should not be same \nPlease provide different Inputs"
      );
    }
    e.preventDefault();
    // setFormData((prevState) => {
    //   return { ...prevState, inputValue: "" };
    // });
    if (id === "presurreConversion") {
      setResult(
        presurreConversion(convertFrom, convertTo, Number(inputValue)) +
          " " +
          convertTo
      );
    } else if (id === "temperatureConversion") {
      return setResult(
        temperatureConversion(convertFrom, convertTo, Number(inputValue))+
          " " +
          convertTo
      );
    } else if (id === "massConversion") {
      return setResult(
        massConversion(convertFrom, convertTo, Number(inputValue)) +
          " " +
          convertTo
      );
    } else if (id === "volumeConversion") {
      return setResult(
        volumeConversion(convertFrom, convertTo, Number(inputValue)) +
          " " +
          convertTo
      );
    } else if (id === "areaConversion") {
      return setResult(
        areaConversion(convertFrom, convertTo, Number(inputValue)) +
          " " +
          convertTo
      );
    } else if (id === "bitByteConversion") {
      return setResult(
        bitByteConversion(convertFrom, convertTo, Number(inputValue)) +
          " " +
          convertTo
      );
    } else if (id === "timeConversion") {
      return setResult(
        timeConversion(convertFrom, convertTo, Number(inputValue))+
          " " +
          convertTo
      );
    } else if (id === "powerConversion") {
      return setResult(
        powerConversion(convertFrom, convertTo, Number(inputValue)) +
          " " +
          convertTo
      );
    } else if (id === "lengthConversion") {
      return setResult(
        lengthConversion(convertFrom, convertTo, Number(inputValue))+
          " " +
          convertTo
      );
    } else if (id === "fuelEconomyConversion") {
      return setResult(
        fuelEconomyConversion(convertFrom, convertTo, Number(inputValue)) +
          " " +
          convertTo
      );
    } else if (id === "planeAngleConversion") {
      return setResult(
        planeAngleConversion(convertFrom, convertTo, Number(inputValue)) +
          " " +
          convertTo
      );
    } else if (id === "energyConversion") {
      setResult(
        energyConversion(convertFrom, convertTo, Number(inputValue))+
          " " +
          convertTo
      );
    } else if (id === "speedConversion") {
      return setResult(
        speedConversion(convertFrom, convertTo, Number(inputValue)) +
          " " +
          convertTo
      );
    } else if (id === "currencyConversion") {
      setLoading(true);
      console.log("hello");
      try {
        const response = await fetch(
          `https://onlinetoolbackend.herokuapp.com/api/${apiParamEndPoint}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              input: inputValue,
              from: convertFrom,
              to: convertTo,
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        if (data.result) {
          setResult(data.result + " " + convertTo);
        } else {
          setResult("Not Avalible");
        }

        setFormData((prevState) => {
          return { ...prevState, inputValue: "" };
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        // setbuttonLoading(false);
        alert("ERROR: Unable to parse JSON");
      }

      //
      //
    }
  };

  function firstLetterCapitalize(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
      if (i === 0) {
        result = result + input[i].toUpperCase();
      } else {
        result = result + input[i];
      }
    }
    return result;
  }

  console.log(firstLetterCapitalize("gangsta paradise"));

  console.log(result)
  return (
    <>
      <HeaderNav />
      <StyledConversionTool>
        <div className="conversion-tools-container">
          <StyledContainer>
            <form onSubmit={submitHandler} autoComplete="off">
              <div className="text">
                <h1 className="main-heading">{toolsData.title}</h1>
                <p className="tag-line">{toolsData.description}</p>
              </div>

              <div className="select-container">
                <div className="from-to">
                  <div className="from">
                    <select id={id} onChange={fromHandler}>
                      <option value="" disabled selected>
                        Convert From
                      </option>
                      {toolsData.convertOptions.map((option, index) => {
                        return (
                          <option
                            className="convertFrom"
                            value={option}
                            key={index}
                          >
                            {firstLetterCapitalize(option)}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="to">
                    <select id={id} onChange={toHandler}>
                      <option value="" disabled selected>
                        Convert To
                      </option>
                      {toolsData.convertOptions.map((option, index) => {
                        return (
                          <option
                            className="convertFrom"
                            value={option}
                            key={index}
                          >
                            {firstLetterCapitalize(option)}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="input-value">
                  <label for="inputValue"></label>
                  <input
                    type="number"
                    id="inputValue"
                    value={inputValue}
                    onChange={changeHandler}
                    placeholder="Input value"
                  />
                  <br />
                  <button
                    className={`${
                      convertFrom && convertTo && inputValue
                        ? ""
                        : "btn-disable"
                    }`}
                    disabled={`${
                      inputValue && convertFrom && convertTo ? "" : "true"
                    }`}
                    type="submit"
                  >
                    Convert
                  </button>

                  <div className="result">
                    <h1>Output</h1>
                    {loading ? (
                      <LineWave
                        height="80"
                        width="80"
                        radius="9"
                        color="royalBlue"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                      />
                    ) : (
                      <div>{result}</div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </StyledContainer>
        </div>
      </StyledConversionTool>
      <Footer />
    </>
  );
};

export default ConversionTool;
