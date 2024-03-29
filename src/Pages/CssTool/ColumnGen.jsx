import React, { useState } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';

import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import CssTool from '../../dbTool/CssTool';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import SEO from '../../components/SEO';

export const ColumnGen = () => {
  const [count, setCount] = useState(2);
  const location = useLocation();

  useEffect(() => {
    document.title = 'CSS Columns Generator';
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
            <h1>CSS Columns Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate Columns with our generator tool. Preview the result and
              copy the generated code to your website.
            </p>
          </div>
        </div>
      </div>
      <div className='uppscreen'>
        <div
          className='screen'
          style={{
            minHeight: '20vh',
            width: '100%',
            background: 'none',
            margin: '0px',
          }}
        >
          <div className='screen-editor'>
            <h1>Options</h1>

            <div className='screen-editor-color'>
              <label>Horizontal Length</label>
              <input
                id='horizontal'
                type='range'
                min='1'
                max='8'
                step={'1'}
                onChange={(e) => setCount(e.target.value)}
                value={count}
              />
              <code>{count} </code>
            </div>
          </div>
          <div className='screen-preview'>
            <h1>Code</h1>
            <div
              className='screen-preview-code'
              style={{ height: '135px' }}
            >
              <code className='element-code'>column-count: {count};</code>
              <i
                style={{ cursor: 'pointer' }}
                onClick={copyText}
                className='fa-regular fa-clone'
              ></i>
            </div>
          </div>
        </div>
        <div
          className='screen-preview'
          style={{ width: '100%', padding: '20px', marginTop: '-70px' }}
        >
          <h1>Preview</h1>
          <div className='screen-preview-box'>
            <div
              className='screen-preview-box-sample'
              style={{ overflow: 'hidden' }}
            >
              <div style={{ 'column-count': `${count}` }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Nam liber
                tempor cum soluta nobis eleifend option congue nihil imperdiet
                doming id quod mazim placerat facer possim assum. Typi non
                habent claritatem insitam; est usus legentis in iis qui facit
                eorum claritatem. Investigationes demonstraverunt lectores
                legere me lius quod ii legunt saepius.
              </div>
            </div>
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
