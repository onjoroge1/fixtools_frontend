import React, { useState } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import CssTool from '../../dbTool/CssTool';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import SEO from '../../components/SEO';

export const BoxShadow = () => {
  const [color1, setcolor1] = useState('#48aadb');
  const [horizontalRange, setHorizontalRange] = useState('5');
  const [vertical, setVertical] = useState('5');
  const [blur, setBlur] = useState('5');
  const [spread, setSpread] = useState('-5');
  const [check, setCheck] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.title = 'CSS Box Shadow Generator';
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
            <h1>CSS Box Shadow Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate Box Shadow with our generator tool. Preview the result
              and copy the generated code to your website.
            </p>
          </div>
        </div>
      </div>
      <div className='screen'>
        <div className='screen-editor'>
          <h1>Options</h1>
          <div className='screen-editor-color'>
            <label>Shadow Color </label>
            <code>{color1}</code>
            <input
              type={'color'}
              onChange={(e) => setcolor1(e.target.value)}
              value={color1}
            />
          </div>
          <div className='screen-editor-color'>
            <label>Horizontal Length</label>
            <input
              id='horizontal'
              type='range'
              min='-200'
              max='200'
              onChange={(e) => setHorizontalRange(e.target.value)}
              value={horizontalRange}
            />
            <code>{horizontalRange}px</code>
          </div>
          <div className='screen-editor-color'>
            <label>Vertical Length</label>
            <input
              id='horizontal'
              type='range'
              min='-200'
              max='200'
              onChange={(e) => setVertical(e.target.value)}
              value={vertical}
            />
            <code>{vertical}px</code>
          </div>
          <div className='screen-editor-color'>
            <label>Blur Radius </label>
            <input
              id='horizontal'
              type='range'
              min='0'
              max='100'
              onChange={(e) => setBlur(e.target.value)}
              value={blur}
            />
            <code>{blur}px</code>
          </div>
          <div className='screen-editor-color'>
            <label>Spread Radius </label>
            <input
              id='horizontal'
              type='range'
              min='-50'
              max='50'
              onChange={(e) => setSpread(e.target.value)}
              value={spread}
            />
            <code>{horizontalRange}px</code>
          </div>
          <div className='screen-editor-color checkbox'>
            <label style={{ 'align-items': 'flex-end' }}>
              <input
                onChange={(e) => setCheck(e.target.checked ? 'inset' : '')}
                type={'checkbox'}
                style={{ height: '25px', width: '25px' }}
              />
              inset
            </label>
          </div>
        </div>
        <div className='screen-preview'>
          <h1>Preview</h1>
          <div className='screen-preview-box'>
            <div className='screen-preview-box-sample'>
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  background: 'skyblue',
                  boxShadow: `${
                    check ? 'inset' : ''
                  } ${horizontalRange}px ${vertical}px ${blur}px ${spread}px ${color1}`,
                }}
              ></div>
            </div>
          </div>
          <h1>Code</h1>
          <div className='screen-preview-code'>
            <code className='element-code'>
              box-shadow: {check} {horizontalRange}px {vertical}px {blur}px{' '}
              {spread}px {color1};
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
