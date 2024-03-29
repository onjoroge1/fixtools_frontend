import React, { useState } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import SEO from '../../components/SEO';
import CssTool from '../../dbTool/CssTool';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';

export const AlignText = () => {
  const location = useLocation();
  const path = location.pathname;
  const { title, desc, image } = GetCurrentPageContent(path, CssTool);
  const pageUrl = window.location.href;

  //   console.log(CssTool);
  const [position, setPosition] = useState('center');

  useEffect(() => {
    document.title = 'CSS Text Align Generator';
  }, []);

  const copyText = () => {
    const selct = document.querySelector('.element-code').textContent;
    navigator.clipboard.writeText(selct);
    toast.success('Copied!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <div>
      <SEO
        title={title}
        metaDescription={desc}
        ogImageUrl={image}
        ogImageAlt={`${title} image`}
        ogUrl={pageUrl}
      />
      <div className='detail-hero'>
        <HeaderNav />
        <div className='detail-hero-content'>
          <div className='detail-hero-content-heading'>
            <h1>CSS Text Align Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate CSS Align Text with our generator tool. Preview the
              result and copy the generated code to your website.
            </p>
          </div>
        </div>
      </div>
      <div className='screen'>
        <div className='screen-editor'>
          <h1>Options</h1>

          <div className='screen-editor-color'>
            <label>Value</label>
            <select onChange={(e) => setPosition(e.target.value)}>
              <option value={'center '}>center </option>
              <option value={'justify '}>justify </option>
              <option value={'left '}>left </option>
              <option value={'right '}>right </option>
            </select>
          </div>
        </div>
        <div className='screen-preview'>
          <h1>Preview</h1>
          <div className='screen-preview-box'>
            <div
              className='screen-preview-box-sample'
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{
                  width: '250px',
                  height: '150px',
                  'text-align': `${position}`,
                  border: '1px solid black',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                feugiat dui id turpis
              </div>
            </div>
          </div>
          <h1>Code</h1>
          <div className='screen-preview-code'>
            <code className='element-code'> text-align : {position};</code>
            <i
              style={{ cursor: 'pointer' }}
              onClick={copyText}
              className='fa-regular fa-clone'
            ></i>
          </div>
        </div>
      </div>

      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <Footer />
    </div>
  );
};
