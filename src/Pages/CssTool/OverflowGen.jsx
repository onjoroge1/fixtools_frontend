import React, { useState } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import CssTool from '../../dbTool/CssTool';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import SEO from '../../components/SEO';

export const OverflowGen = () => {
  const [type, setType] = useState('overflow');
  const [value, setValue] = useState('auto');
  const location = useLocation();

  useEffect(() => {
    document.title = 'CSS Overflow Generator';
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
            <h1>CSS Overflow Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              {' '}
              Generate CSS Overflow with our generator tool. Preview the result
              and copy the generated code to your website.
            </p>
          </div>
        </div>
      </div>
      <div className='screen'>
        <div className='screen-editor'>
          <h1>Options</h1>

          <div className='screen-editor-color'>
            <label>Type</label>
            <select onChange={(e) => setType(e.target.value)}>
              <option value={'overflow'}>overflow </option>
              <option value={'overflow-x'}>overflow-x </option>
              <option value={'overflow-y'}>overflow-y </option>
            </select>
          </div>
          <div className='screen-editor-color'>
            <label>Value</label>
            <select onChange={(e) => setValue(e.target.value)}>
              <option value={'auto'}>auto </option>
              <option value={'hidden'}>hidden </option>
              <option value={'scroll'}>scroll </option>
              <option value={'visible'}>visible </option>
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
                  width: '150px',
                  height: '150px',
                  background: 'skyblue',
                  overflow: `${value}`,
                  overflowX: `${value}`,
                  overflowY: `${value}`,
                }}
              >
                This is just text to show you what happens when you use the
                overflow property on a box with text in it. The box is any
                container, such as the body, a div, a section, or anything else.
                If overflow is set to auto or scroll, you can scroll inside the
                box. If overflow is set to hidden, the text will be cut off. If
                overflow is set to visible, the text will be visible outside the
                box without the need to scroll.
              </div>
            </div>
          </div>
          <h1>Code</h1>
          <div className='screen-preview-code'>
            <code className='element-code'>
              {type}: {value};
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
