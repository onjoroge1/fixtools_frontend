import React, { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../../components/home/Footer/Footer';
import HeaderNav from '../../components/common/HeaderNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JsonTools from '../../dbTool/JsonTool';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import SEO from '../../components/SEO';

export default function JSONValidator() {
  const [formdata, setformdata] = useState('');
  const [result, setResult] = useState();
  const [buttonLoading, setbuttonLoading] = useState(false);
  const [place, setplace] = useState('Type (or paste) here...');
  const [disableBtn, setDisableBtn] = useState(true);
  const locattion = useLocation();
  const path = locattion.pathname;
  const { title, desc, image } = GetCurrentPageContent(path, JsonTools);
  const pageUrl = window.location.href;

  const handleChange = (e) => {
    setformdata(e.target.value);
    setDisableBtn(false);
  };

  useEffect(() => {
    document.title = 'JSON Validator';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    setbuttonLoading(true);
    try {
      JSON.parse(formdata);
      setbuttonLoading(false);

      toast.success('Valid Json !', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      setbuttonLoading(false);
      toast.error('Not Valid', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
            <h1>JSON Validator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Validate Json with our generator tool. Preview the result and copy
              the generated code to your website.
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
              <h2>Input JSON</h2>
            </label>
            <form
              className=''
              role='form'
              onSubmit={handleSubmit}
            >
              <div className='form-group'>
                <textarea
                  className='form-control'
                  required
                  placeholder={place}
                  rows='15'
                  id='input-comment'
                  value={formdata}
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
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}
