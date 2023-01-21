import React, { useState } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import HtmlTool from '../../dbTool/HtmlTool';
import SEO from '../../components/SEO';

export const Meter = () => {
  const locattion = useLocation();
  const path = locattion.pathname;
  const { title, desc, image } = GetCurrentPageContent(path, HtmlTool);
  const pageUrl = window.location.href;
  useEffect(() => {
    document.title = 'HTML Meter Generator';
  }, []);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);
  const [optimum, setOptimum] = useState(0);
  const [value, setValue] = useState(40);

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

  let tag = '';
  tag += `<meter low="${low}" high="${high}" min="${min}" max="${max}" optimum="${optimum}" value="${value}">40/100</meter>`;

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
            <h1>HTML Meter Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate HTML Meter with our Html generator tool. Preview the
              result and copy the generated code to your website.
            </p>
          </div>
        </div>
      </div>
      <div className='screen'>
        <div className='screen-editor'>
          <h1>Options</h1>

          <div className='screen-editor-color'>
            <label>Min</label>

            <input
              type={'number'}
              placeholder='0'
              onChange={(e) => setMin(e.target.value)}
            />
          </div>
          <div className='screen-editor-color'>
            <label>Max</label>

            <input
              type={'number'}
              placeholder='0'
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
          <div className='screen-editor-color'>
            <label>Low</label>

            <input
              type={'number'}
              placeholder='0'
              onChange={(e) => setLow(e.target.value)}
            />
          </div>
          <div className='screen-editor-color'>
            <label>High</label>

            <input
              type={'number'}
              placeholder='0'
              onChange={(e) => setHigh(e.target.value)}
            />
          </div>
          <div className='screen-editor-color'>
            <label>Optimum</label>

            <input
              type={'number'}
              placeholder='0'
              onChange={(e) => setOptimum(e.target.value)}
            />
          </div>
          <div className='screen-editor-color'>
            <label>Value</label>

            <input
              type={'number'}
              placeholder='0'
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className='screen-preview'>
          <h1>Preview</h1>
          <div className='screen-preview-box'>
            <div
              className='screen-preview-box-sample'
              style={{ overflow: 'hidden' }}
            >
              <div>
                <meter
                  low={low}
                  high={high}
                  min={min}
                  max={max}
                  optimum={optimum}
                  value={value}
                >
                  40/100
                </meter>
              </div>
            </div>
          </div>
          <h1>Code</h1>
          <div className='screen-preview-code'>
            <code className='element-code'> {tag} </code>
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
