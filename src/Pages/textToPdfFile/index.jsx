import React from 'react';
import { useState, useEffect } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import StyledContainer from '../../components/StyledContainer';
import convertPdf from './functionality';
import { StyledPdfFile } from './styled';

import SEO from '../../components/SEO';
import conversionTools from '../../dbTool/conversionToolsDb';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';

const TextToPdfFile = () => {
  const location = useLocation();
  const path = location.pathname;
  const { title, desc, image } = GetCurrentPageContent(path, conversionTools);
  const pageUrl = window.location.href;

  useEffect(() => {
    document.title = 'Text To PDF File';
  }, []);

  const [formData, setFormData] = useState({
    textArea: '',
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
      return { ...prevState, textArea: '' };
    });
  };

  return (
    <>
      <SEO
        title={title}
        metaDescription={desc}
        ogImageUrl={image}
        ogImageAlt={`${title} image`}
        ogUrl={pageUrl}
      />
      <HeaderNav />

      <StyledPdfFile>
        <StyledContainer>
          <div className='text'>
            <h1 className='main-heading'>Text To PDF File</h1>
            <p className='tag-line'>Convert text to PDF file and download.</p>
          </div>
          <form onSubmit={submitHandler}>
            <div
              className='text-area'
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <label for='textArea'>Write text here</label>
              <textarea
                name=''
                id='textArea'
                cols='30'
                rows='10'
                onChange={changeHandler}
                value={textArea}
              ></textarea>
            </div>

            <button
              className={`${textArea ? '' : 'btn-disable'}`}
              disabled={`${textArea ? '' : 'true'}`}
              type='submit'
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
