import React, { useState } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import HtmlTool from '../../dbTool/HtmlTool';
import SEO from '../../components/SEO';

export const HtmlTextInput = () => {
  const [value, setValue] = useState('Text..');
  const [spellchek, setspellchek] = useState('');
  const [required, setrequired] = useState('');
  const [size, setSize] = useState('');
  const locattion = useLocation();
  const path = locattion.pathname;
  const { title, desc, image } = GetCurrentPageContent(path, HtmlTool);
  const pageUrl = window.location.href;

  useEffect(() => {
    document.title = 'HTML Text Input Generator';
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

  let tag = '';
  tag += `   <input type="${'text'}" size="${size}" ${required} ${spellchek} placeholder="${value}"   />`;

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
            <h1>HTML Text Input Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate HTML Text Input with our generator tool. Preview the
              result and copy the generated code to your website.
            </p>
          </div>
        </div>
      </div>
      <div className='screen'>
        <div className='screen-editor'>
          <h1>Options</h1>

          <div className='screen-editor-color'>
            <label>Placeholder</label>
            <input
              type={'text'}
              placeholder={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className='screen-editor-color'>
            <label>Size</label>
            <input
              type={'number'}
              placeholder={'Enter number'}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div
            className='screen-editor-color'
            style={{ flexDirection: 'column' }}
          >
            <label style={{ 'align-items': 'flex-end' }}>
              <input
                onChange={(e) =>
                  setspellchek(e.target.checked ? 'spellcheck' : '')
                }
                type={'checkbox'}
                style={{ height: '20px', width: '25px' }}
              />
              Spellcheck
            </label>
            <label style={{ 'align-items': 'flex-end' }}>
              <input
                type={'checkbox'}
                onChange={(e) =>
                  setrequired(e.target.checked ? 'required' : '')
                }
                style={{ height: '20px', width: '25px' }}
              />
              Required
            </label>
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
                <input
                  type={'text'}
                  size={size}
                  required={required}
                  spellchek={spellchek}
                  placeholder={value}
                />
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
