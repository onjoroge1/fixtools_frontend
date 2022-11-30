import React from "react";
import StyledContainer from "../StyledContainer";
import HeaderNav from "../common/HeaderNav";
import Footer from "../home/Footer/Footer";
import { StyledTimeZoneTool } from "./styles";

const TimeZone = () => {
  return (
    <>
      <HeaderNav />
      <StyledTimeZoneTool>
        <StyledContainer>
          <div className="timezone-tools-container">
            <form>
              <div className="text">
                <h1 className="main-heading">Title </h1>
                <p className="tag-line">Description </p>
              </div>
              <div className="select-container">
                <div className="from-to">
                  <div className="from">
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="to">
                    <select name="" id="">
                      <option value="">Deselect</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="input-value">
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            </form>
          </div>
        </StyledContainer>
      </StyledTimeZoneTool>
      <Footer />
    </>
  );
};

export default TimeZone;
