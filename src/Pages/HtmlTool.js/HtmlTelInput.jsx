import React, { useState } from 'react';
import { useEffect } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import HtmlTool from '../../dbTool/HtmlTool';
import SEO from '../../components/SEO';

export const HtmlTelInput = () => {
  const [value, setValue] = useState('Telephone..');
  const [required, setrequired] = useState('');
  const [size, setSize] = useState('');
  const locattion = useLocation();
  const path = locattion.pathname;
  const { title, desc, image } = GetCurrentPageContent(path, HtmlTool);
  const pageUrl = window.location.href;

  useEffect(() => {
    document.title = 'HTML Telephone Input Generator';
  }, []);

  let tag = '';
  tag += `   <input type="${'tel'}" size="${size}" ${required} placeholder="${value}"   />`;

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
            <h1>HTML Telephone Input Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate HTML Telephone Input with our generator tool. Preview the
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
              type={'email'}
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
            className='screen-editor-color checkbox'
            style={{ flexDirection: 'row' }}
          >
            <label style={{ 'align-items': 'flex-end' }}>
              <input
                type={'checkbox'}
                onChange={(e) =>
                  setrequired(e.target.checked ? 'required' : '')
                }
                style={{ height: '25px', width: '25px' }}
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
                  type={'tel'}
                  size={size}
                  required={required}
                  placeholder={value}
                />
              </div>
            </div>
          </div>
          <h1>Code</h1>
          <div className='screen-preview-code'>
            <code> {tag} </code>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
