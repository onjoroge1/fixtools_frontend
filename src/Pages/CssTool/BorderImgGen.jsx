import React, { useState } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import CssTool from '../../dbTool/CssTool';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import SEO from '../../components/SEO';

export const BorderImgGen = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg'
  );
  const [outset, setOutset] = useState('5');
  const [style, setstyle] = useState('');
  const [slice, setSlice] = useState('5');
  const [width, setwidth] = useState('5');
  const location = useLocation();

  useEffect(() => {
    document.title = 'CSS Border Image Generator';
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
            <h1>CSS Border Image Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate CSS Border Image with our generator tool. Preview the
              result and copy the generated code to your website.
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
              max='50'
              onChange={(e) => setwidth(e.target.value)}
              value={width}
            />
            <code>{width}px</code>
          </div>

          <div className='screen-editor-color'>
            <label>Image URL</label>
            <input
              type={'text'}
              placeholder='Enter image address'
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className='screen-editor-color'>
            <label>Outset</label>
            <input
              id='horizontal'
              type='range'
              min='1'
              max='50'
              onChange={(e) => setOutset(e.target.value)}
              value={outset}
            />
            <code>{outset}px</code>
          </div>
          <div className='screen-editor-color'>
            <label>Slice</label>
            <input
              id='horizontal'
              type='range'
              min='1'
              max='100'
              onChange={(e) => setSlice(e.target.value)}
              value={slice}
            />
            <code>{slice}px</code>
          </div>
          <div className='screen-editor-color'>
            <label>Style</label>
            <select onChange={(e) => setstyle(e.target.value)}>
              <option value={'stretch'}>stretch </option>
              <option value={'repeat'}>repeat </option>
              <option value={'round'}>round </option>
              <option value={'space'}>space </option>
              <option value={'groove'}>groove</option>
              <option value={'ridge'}>ridge</option>
              <option value={'inset'}>inset</option>
              <option value={'outset'}>outset</option>
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
                  border: '1px solid #000000',
                  'border-image': `url(${imageUrl}) ${slice}/${width}px/${outset}px ${style}`,
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
              border-image: url({imageUrl}) {slice}/{width}px/{outset}px {style}
              ;
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
