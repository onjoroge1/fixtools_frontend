import React, { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../../components/home/Footer/Footer';
import HeaderNav from '../../components/common/HeaderNav';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import CssTool from '../../dbTool/CssTool';
import SEO from '../../components/SEO';

export default function CSSFormatter() {
  const [formdata, setformdata] = useState('');
  const [result, setResult] = useState();
  const [buttonLoading, setbuttonLoading] = useState(false);
  const [place, setplace] = useState('Type (or paste) here...');
  const [disableBtn, setDisableBtn] = useState(true);

  const location = useLocation();
  const path = location.pathname;
  const { title, desc, image } = GetCurrentPageContent(path, CssTool);
  const pageUrl = window.location.href;

  const handleChange = (e) => {
    setformdata(e.target.value);
    setDisableBtn(false);
  };

  useEffect(() => {
    document.title = 'CSS Formatter Generator';
  }, []);

  const handleSubmit = async (e) => {
    setDisableBtn(true);
    setbuttonLoading(true);
    e.preventDefault();
    const data = {
      bodyData: formdata,
    };
    await axios
      .post(
        'https://fixtoolupdateninenovember.herokuapp.com/api/cssvalidator',
        data
      )
      .then(async (response) => {
        if (response.data.valid === true) {
          try {
            await axios
              .post(
                'https://fixtoolupdateninenovember.herokuapp.com/api/beautycss',
                data
              )
              .then((response) => {
                setResult(response.data);
              });

            // setResult(rep2)
          } catch (err) {}
          // .then(response => {
          //     if (response.data.valid === true) {
          //         var rep = formdata.split(' ').join('');
          //         var rep2 = rep.replace(/\,/g, ', ')
          //             .replace(/\{/g, ' {\n\t')
          //             .replace(/\}/g, '}\n')
          //             .replace(/\;/g, ';\n\t');

          //         setResult(rep2)
          setbuttonLoading(false);
          toast.success('Success!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        } else {
          setbuttonLoading(false);
          toast.error('Please Write valid Css!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      });
  };
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
      <div
        className='detail-hero'
        style={{ minHeight: '320px', maxHeight: '320px' }}
      >
        <HeaderNav />
        <div className='detail-hero-content'>
          <div className='detail-hero-content-heading'>
            <h1>CSS Formatter Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate CSS Formatter with our generator tool. Preview the result
              and copy the generated code to your website.
            </p>
          </div>
        </div>
      </div>
      <div
        className='tools-for-better-thinking'
        style={{ padding: '5rem 0px 5rem 0px' }}
      >
        <div className='container d-flex align-items-center justify-content-center row col-md-8'>
          <div className='col-md-12 col-lg-12 offset-lg-6'>
            <label className='my-1 mr-2'>
              <h2>Input CSS</h2>
            </label>
            <form
              className=''
              role='form'
              onSubmit={handleSubmit}
            >
              <div className='form-group'>
                <textarea
                  required
                  className='form-control'
                  placeholder={place}
                  rows='15'
                  id='input-comment'
                  onChange={handleChange}
                  style={{ fontSize: '1.5rem' }}
                ></textarea>
              </div>
              <p></p>
              <div className='d-grid gap-3 col-md-2'>
                <button
                  style={{ borderRadius: '3px' }}
                  className={`${disableBtn ? 'btn-disable' : ''}`}
                  disabled={`${disableBtn ? 'true' : ''}`}
                  type='submit'
                >
                  {buttonLoading ? (
                    <div
                      className='spinner-border text-dark'
                      role='status'
                    >
                      <span className='sr-only'>Loading...</span>
                    </div>
                  ) : (
                    'Format CSS'
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className='col-md-12 col-lg-12 offset-lg-6'>
            <i
              style={{ cursor: 'pointer', float: 'right', padding: '10px' }}
              onClick={copyText}
              className='fa-regular fa-clone'
            ></i>
            <div className='form-group'>
              <textarea
                className='form-control element-code'
                rows='15'
                id='input-comment'
                value={result}
                style={{ fontSize: '2rem' }}
                disabled
                placeholder='Output'
              ></textarea>
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
}
