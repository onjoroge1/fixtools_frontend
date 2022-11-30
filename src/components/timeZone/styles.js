import styled from "styled-components";

const StyledTimeZoneTool = styled.div`
  background-color: red;
  margin-top: 10px;
  margin-bottom: 60px;
  min-height: 500px;
  .timezone-tools-container {
    form {
      padding: 50px;
      .text {
        /* background-color: magenta; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .main-heading {
          /* background-color: red; */
          padding-bottom: 40px;
          font-weight: 900;
          color: #212529;
          font-size: 60px;
          /* background-color: red; */
          text-align: center;
          max-width: 800px;
          text-align: center;
        }
        .tag-line {
          text-align: center;
          /* background-color: green; */
          max-width: 800px;
          text-align: start;
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }
`;

export { StyledTimeZoneTool };
