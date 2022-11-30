import React, { useState } from 'react'
import HeaderNav from '../../components/common/HeaderNav'
import Footer from '../../components/home/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

export const TextColorGen = () => {
  const [color1, setcolor1] = useState('#48aadb')

  useEffect(() => {
    document.title="CSS Text Color Generator";
  }, []);

  const copyText = () => {

    const selct = document.querySelector(".element-code").textContent;
    navigator.clipboard.writeText(selct);
    toast.success('Copied!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  }

  return (
    <div>
      <div className="detail-hero">
        <HeaderNav />
        <div className="detail-hero-content">
          <div className="detail-hero-content-heading">
            <h1>CSS Text Color Generator</h1>
          </div>
          <div className="detail-hero-content-des">
            <p>Generate CSS text color with our generator tool. Preview the result and copy the generated code to your website.</p>
          </div>


        </div>
      </div>
      <div className='screen'>
        <div className='screen-editor'>
          <h1>Options</h1>
          <div className='screen-editor-color'>
            <label>Color</label>
            <input type={'color'} onChange={(e) => setcolor1(e.target.value)} value={color1} />
          </div>
        </div>
        <div className='screen-preview'>
          <h1>Preview</h1>
          <div className='screen-preview-box'>
            <h1 style={{ 'color': `${color1}` }} className='screen-preview-box-sample'>
              Color Generator
            </h1>
          </div>
          <h1>Code</h1>
          <div className='screen-preview-code'>
            <code className='element-code'>color: {color1};</code>
            <i style={{ 'cursor': 'pointer' }} onClick={copyText} className="fa-regular fa-clone"></i>
          </div>
        </div>

      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Footer />
    </div>
  )
}
