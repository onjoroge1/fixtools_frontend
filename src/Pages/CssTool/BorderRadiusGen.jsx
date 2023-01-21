import React, { useState } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import CssTool from '../../dbTool/CssTool';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import SEO from '../../components/SEO';

export const BorderRadiusGen = () => {
  const [top, settop] = useState('0');
  const [left, setleft] = useState('0');
  const [bottom, setbottom] = useState('0');
  const [right, setright] = useState('0');
  const location = useLocation();

  useEffect(() => {
    document.title = 'CSS Border Radius Generator';
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
  const path = location.pathname;
  const { title, desc, image } = GetCurrentPageContent(path, CssTool);
  const pageUrl = window.location.href;
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
            <h1>CSS Border Radius Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate CSS border radius with our generator tool. Preview the
              result and copy the generated code to your website.
            </p>
          </div>
        </div>
      </div>
      <div className='screen'>
        <div className='screen-editor'>
          <h1>Options</h1>

          <div className='screen-editor-color'>
            <label>Top Left</label>
            <input
              id='horizontal'
              type='range'
              min='1'
              max='50'
              onChange={(e) => settop(e.target.value)}
              value={top}
            />
            <code>{top}px</code>
          </div>
          <div className='screen-editor-color'>
            <label>Top Right</label>
            <input
              id='horizontal'
              type='range'
              min='1'
              max='50'
              onChange={(e) => setleft(e.target.value)}
              value={left}
            />
            <code>{left}px</code>
          </div>
          <div className='screen-editor-color'>
            <label>Bottom Right</label>
            <input
              id='horizontal'
              type='range'
              min='1'
              max='50'
              onChange={(e) => setbottom(e.target.value)}
              value={bottom}
            />
            <code>{bottom}px</code>
          </div>
          <div className='screen-editor-color'>
            <label>Bottom Left</label>
            <input
              id='horizontal'
              type='range'
              min='1'
              max='50'
              onChange={(e) => setright(e.target.value)}
              value={right}
            />
            <code>{right}px</code>
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
                  border: `5px solid black`,
                  borderRadius: `${top}px ${left}px ${bottom}px ${right}px`,
                  width: '150px',
                  height: '150px',
                  background: 'skyblue',
                }}
              >
                This block is visible
              </div>
            </div>
          </div>
          <h1>Code</h1>
          <div className='screen-preview-code'>
            <code className='element-code'>
              border-radius: {top}px {left}px {bottom}px {right}px;
            </code>
            <i
              style={{ cursor: 'pointer' }}
              onClick={copyText}
              className='fa-regular fa-clone'
            ></i>
          </div>
        </div>
      </div>

      <Footer />

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
    </div>
  );
};
