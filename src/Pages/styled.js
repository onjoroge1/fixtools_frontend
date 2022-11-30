import styled from "styled-components";
export const BoxOutputContainer = styled.div`
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
    margin: 0px;
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
    cursor: not-allowed;
    margin: 0px;
    &:hover {
      background-color: #d3d3d3;
      color: gray;
    }
  }
`;
