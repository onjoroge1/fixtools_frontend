import React, { useState } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import CssTool from '../../dbTool/CssTool';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import SEO from '../../components/SEO';

export const OutlineGen = () => {
  const [color, setColor] = useState('#000000');
  const [style, setstyle] = useState('solid');
  const [width, setwidth] = useState('1');
  const [offset, setOffset] = useState('0');
  const location = useLocation();

  useEffect(() => {
    document.title = 'CSS Outline Generator';
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
            <h1>CSS Outline Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate CSS outline with our generator tool. Preview the result
              and copy the generated code to your website.
            </p>
          </div>
        </div>
      </div>
      <div className='screen'>
        <div className='screen-editor'>
          <h1>Options</h1>
          <div className='screen-editor-color'>
            <label>Width</label>
            <input
              id='horizontal'
              type='range'
              min='1'
              max='20'
              onChange={(e) => setwidth(e.target.value)}
              value={width}
            />
            <code>{width}px</code>
          </div>

          <div className='screen-editor-color'>
            <label>Style</label>
            <select onChange={(e) => setstyle(e.target.value)}>
              <option value={'dotted'}>dotted </option>
              <option value={'dashed'}>dashed </option>
              <option value={'solid'}>solid double </option>
              <option value={'double'}>double </option>
              <option value={'groove'}>groove</option>
              <option value={'ridge'}>ridge</option>
              <option value={'inset'}>inset</option>
              <option value={'outset'}>outset</option>
            </select>
          </div>
          <div className='screen-editor-color'>
            <label> Color </label>
            <code>{color}</code>
            <input
              type={'color'}
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
          </div>

          <div className='screen-editor-color'>
            <label>Offset</label>
            <input
              id='horizontal'
              type='range'
              min='1'
              max='100'
              onChange={(e) => setOffset(e.target.value)}
              value={offset}
            />
            <code>{offset}px</code>
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
                  outline: `${width}px ${style} ${color}`,
                  'outline-offset': `${offset}px`,
                  width: '150px',
                  height: '150px',
                  background: 'skyblue',
                }}
              ></div>
            </div>
          </div>
          <h1>Code</h1>
          <div className='screen-preview-code'>
            <code className='element-code'>
              offset: {width}px {style} {color}; <br></br>outline-offset:{' '}
              {offset}px;
            </code>
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
