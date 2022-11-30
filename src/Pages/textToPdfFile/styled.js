import styled from "styled-components";

const StyledPdfFile = styled.div`
  margin-top: 10px;
  margin-bottom: 60px;
  min-height: 500px;

  .text {
    /* background-color: magenta; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .main-heading {
      /* background-color: red; */
      padding-bottom: 40px;
      font-weight: 800;
      color: #212529;
      font-size: 4.5rem;
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
      font-size: 2rem;
      font-weight: 400;
    }
  }
  form {
    /* background-color: red; */
    padding: 5px;

    label {
      margin-bottom: 10px;
      font-size:2rem;
      font-weight:500;
    }
   
    
    textarea {
      border: 1px solid #3333;
      border-radius: 3px;
      // margin-bottom: 20px;
    }

    button {
      /* background-color: royalblue; */
      border: none;
      padding: 4px 16px;
      margin-top: 15px;
      color: #0a171c;
      border: 1px solid #0a171c;
      font-weight: 600;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        background-color: #0a171c;
        color: white;
      }
    }
    .btn-disable {
      background-color: #d3d3d3;
      border: none;
      color: gray;
      &:hover {
        background-color: #d3d3d3;
        color: gray;
      }
    }
  }
`;

export { StyledPdfFile };
