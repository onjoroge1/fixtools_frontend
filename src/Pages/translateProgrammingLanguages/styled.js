import styled from "styled-components";

const StyledTranslateProgrammingLan = styled.div`
  margin-top: 10px;
  margin-bottom: 60px;
  min-height: 500px;
  /* background-color: red; */

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
    .inputs-container {
      /* background-color: orange; */

      .from-to-cnt {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        @media screen and (max-width: 590px) {
          flex-direction: column;
        }
        .from,
        .to {
          width: 100%;
          label {
            font-size: 30px;
            font-weight: 200;
            /* color: #ced4da; */
          }
          input {
            width: 100%;

            border: 1px solid #ced4da;
            padding: 16px 8px;
            border-radius: 3px;
          }
        }
      }
    }
    .text-area-cnt {
      label {
        margin-top: 16px;
        margin-bottom: 8px;
        font-size: 30px;
        font-weight: 200;
      }
      .text-area-output-cnt {
        /* background: red; */
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        gap: 10px;
        @media screen and (max-width: 600px) {
          flex-direction: column;
        }
      }
      textarea {
        padding: 8px;
        /* background-color: red; */
        width: 100%;
        border: 1px solid #ced4da;
        padding: 8px;
        &::placeholder {
          color: #ced4da;
        }
      }
      .res {
        /* border: 1px solid #ced4da; */
        /* background-color: blue; */
        border: 1px solid #ced4da;

        /* min-height: 500px; */
        width: 100%;
        min-height: 80px;
        padding: 8px;
        border-radius: 3px;
      }
    }
    button {
      /* background-color: royalblue; */
      border: none;
      padding: 4px 16px;
      margin-top: 30px;
      color: #0a171c;
      border: 1px solid #0a171c;
      font-weight: 600;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        background-color: #0a171c;
        color: white;
      }
      margin-bottom:5rem;
  
  
      @media screen and (max-width: 500px) {
        margin-bottom:2rem;
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

export { StyledTranslateProgrammingLan };
