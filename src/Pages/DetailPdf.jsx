import { useEffect, useRef, useState } from "react";
import HeaderNav from "../components/common/HeaderNav";
import Footer from "../components/home/Footer/Footer";
import { useParams } from "react-router-dom";
import { saveAs } from "file-saver";
import data from "../db.json";
import Spinner from "react-bootstrap/Spinner";

export default function DetailPdf() {
  const { id } = useParams();
  const axios = require("axios");

  let linkRef = useRef();
  var routeExt = id.split("-")[0];

  const [cards, setCards] = useState(null);
  const [pickFile, setpickFile] = useState(false);
  const [selectedFile, setSelectedFile] = useState("/images/card-icon.png");
  const [fileLoading, setFileLoading] = useState(false);
  const [responseSave, setResponseSave] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const filteredCards = data.cards.find((card) => card.id == id);
    setCards(filteredCards);
  }, [data.cards]);

  const handleChose = async (event) => {
    setFileLoading(true);
    const cardType = cards.type;
    setSelectedFile(event.target.files[0]);

    const formFile = new FormData();
    formFile.append("file", event.target.files[0]);

    var fileExt = event.target.files[0].name.split(".")[1];

    if (cardType == "application/pdf") {
      if (routeExt == fileExt) {
        try {
          await axios({
            method: "post",
            url: "https://onlinetoolbackend.herokuapp.com/convertFromPDF",
            data: formFile,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(async (res) => {
            setErrorText("");
            setFileLoading(false);
            setpickFile(true);
            setDownloadUrl(
              "https://onlinetoolbackend.herokuapp.com/getConvertedWord?filename=" +
                event.target.files[0].name
            );
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        setFileLoading(false);
        setErrorText("Wrong File Type, Please check your file type!");
      }
    } else if (cardType == "application/vnd.ms-excel") {
      if (routeExt == fileExt) {
        try {
          await axios({
            method: "post",
            url: "https://onlinetoolbackend.herokuapp.com/convertFromPDFtoEXCEL",
            data: formFile,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(async (res) => {
            setErrorText("");
            setFileLoading(false);
            setpickFile(true);
            setDownloadUrl(
              "https://onlinetoolbackend.herokuapp.com/getConvertedEXCEL?filename=" +
                event.target.files[0].name
            );
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        setFileLoading(false);
        setErrorText("Wrong File Type, Please check your file type!");
      }
    } else if (cardType == "application/HTML") {
      if (routeExt == fileExt) {
        try {
          await axios({
            method: "post",
            url: "https://onlinetoolbackend.herokuapp.com/convertFromPDFtoHTML",
            data: formFile,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(async (res) => {
            setErrorText("");
            setFileLoading(false);
            setpickFile(true);
            setDownloadUrl(
              "https://onlinetoolbackend.herokuapp.com/getConvertedHTML?filename=" +
                event.target.files[0].name
            );
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        setFileLoading(false);
        setErrorText("Wrong File Type, Please check your file type!");
      }
    } else {
      if (routeExt == fileExt) {
        try {
          await axios({
            method: "post",
            url: "https://onlinetoolbackend.herokuapp.com/convertFromOFFICE",
            data: formFile,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(async (res) => {
            setErrorText("");
            setFileLoading(false);
            setpickFile(true);
            setDownloadUrl(
              "https://onlinetoolbackend.herokuapp.com/getConvertedPDF?filename=" +
                event.target.files[0].name
            );
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        setFileLoading(false);
        setErrorText("Wrong File Type, Please check your file type!");
      }
    }
  };

  const handleRemove = () => {
    setpickFile(false);
  };

  if (!cards) {
    return (
      <div className="loader">
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="detail-hero">
        <HeaderNav />
        <div className="detail-hero-content">
          <div className="detail-hero-content-heading">
            <h1>{cards.title}</h1>
          </div>
          <div className="detail-hero-content-des">
            <p>{cards.desc}</p>
          </div>
          {fileLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : null}

          {pickFile ? (
            <div className="detail-hero-content-butn">
              <p>{selectedFile.name}</p>
              <a className="btn btn-outline-danger" onClick={handleRemove}>
                Remove
              </a>
              <a
                href={downloadUrl}
                className="btn btn-primary py-4 download-text mt-4"
              >
                <i className="fa fa-download"></i> Download
              </a>
            </div>
          ) : (
            <div className="detail-hero-content-nav">
              <label htmlFor="inputTag">
                CHOOSE FILE
                <input
                  disabled={fileLoading}
                  id="inputTag"
                  type="file"
                  onChange={handleChose}
                  className="detail-hero-content-nav-home-btn"
                />
              </label>
            </div>
          )}

          <p style={{ color: "red", fontSize: 20, marginTop: 10 }}>
            {errorText}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// await api.getWordDocument(event.target.files[0].name)
//     .then(async (res) => {
//         setFileLoading(false)
//         setpickFile(true)
//         setDownloadUrl("https://onlinetoolbackend.herokuapp.com/convertFromPDF?filename=" + event.target.files[0].name)
//     })
//     .catch((e) => {
//         console.log("API ERROR => ", e)
//     })
