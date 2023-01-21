import React, { useState } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import HtmlTool from '../../dbTool/HtmlTool';
import SEO from '../../components/SEO';

export const HtmlButton = () => {
  const [type, settype] = useState('button');
  const [text, settext] = useState('click here!');
  const [focus, setFocus] = useState('');
  const [disable, setDisable] = useState('');
  const locattion = useLocation();
  const path = locattion.pathname;
  const { title, desc, image } = GetCurrentPageContent(path, HtmlTool);
  const pageUrl = window.location.href;

  useEffect(() => {
    document.title = 'HTML Button Generator';
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
  tag += ` <button type="${type}" ${focus} ${disable} >${text}</button>`;

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
            <h1>HTML Button Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate HTML Button with our generator tool. Preview the result
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

            <select onChange={(e) => settype(e.target.value)}>
              <option value={'reset '}>reset </option>
              <option value={'submit '}>submit </option>
              <option value={'button '}>button </option>
            </select>
          </div>

          <div className='screen-editor-color'>
            <label>Text</label>

            <input
              placeholder='Click here'
              onChange={(e) => settext(e.target.value)}
            />
          </div>

          <div
            className='screen-editor-color'
            style={{ flexDirection: 'column' }}
          >
            <label style={{ 'align-items': 'flex-end' }}>
              <input
                onChange={(e) => setFocus(e.target.checked ? 'autofocus' : '')}
                type={'checkbox'}
                style={{ height: '20px', width: '25px' }}
              />
              Autofocus
            </label>
            <label style={{ alignItems: 'flex-end' }}>
              <input
                type={'checkbox'}
                onChange={(e) => setDisable(e.target.checked ? 'disabled' : '')}
                style={{ height: '20px', width: '25px' }}
              />
              Disabled
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
              <div style={{ width: '100%' }}>
                <button
                  type={type}
                  autofocus={focus}
                  disabled={disable}
                >
                  {text}
                </button>
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
