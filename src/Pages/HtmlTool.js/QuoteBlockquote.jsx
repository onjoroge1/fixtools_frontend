import React, { useState } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import HtmlTool from '../../dbTool/HtmlTool';
import SEO from '../../components/SEO';

export const QuoteBlockquote = () => {
  const locattion = useLocation();
  const path = locattion.pathname;
  const { title, desc, image } = GetCurrentPageContent(path, HtmlTool);
  const pageUrl = window.location.href;

  useEffect(() => {
    document.title = 'HTML Quote & Blockquote Generator';
  }, []);

  const [type, settype] = useState('q');
  const [text, settext] = useState('Your text here');
  const [caption, setCaption] = useState('Albert Einstein');

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
            <h1>HTML Quote & Blockquote Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate HTML Quote & Blockquote with our generator tool. Preview
              the result and copy the generated code to your website.
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
              <option value={'q'}>quote </option>
              <option value={'blockquote'}>blockquote </option>
            </select>
          </div>

          <div className='screen-editor-color'>
            <label>Text</label>

            <textarea
              style={{ padding: '10px' }}
              placeholder='Click here'
              onChange={(e) => settext(e.target.value)}
            ></textarea>
          </div>
          {type === 'q' ? (
            ''
          ) : (
            <div className='screen-editor-color'>
              <label>Caption</label>

              <input
                placeholder={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className='screen-preview'>
          <h1>Preview</h1>
          <div className='screen-preview-box'>
            <div
              className='screen-preview-box-sample'
              style={{ overflow: 'hidden' }}
            >
              <div>
                {type === 'q' ? (
                  <q>{text}</q>
                ) : (
                  <figure>
                    <blockquote>
                      <p>{text}</p>
                    </blockquote>
                    <figcaption>– {caption}</figcaption>
                  </figure>
                )}
              </div>
            </div>
          </div>
          <h1>Code</h1>
          <div className='screen-preview-code'>
            <code className='element-code'>
              {' '}
              {type === 'q'
                ? `<q>${text}</q>`
                : ` <figure>
                                <blockquote>
                                    <p>${text}</p>
                                </blockquote>
                                <figcaption>– ${caption}</figcaption>
                            </figure>`}
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
