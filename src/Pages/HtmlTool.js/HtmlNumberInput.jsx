import React, { useState } from 'react'
import HeaderNav from '../../components/common/HeaderNav'
import Footer from '../../components/home/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

export const HtmlNumberInput = () => {


    const [value, setValue] = useState('123...')
    const [required, setrequired] = useState('')

    useEffect(() => {
        document.title="HTML Number Input Generator";
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



    let tag = ""
    tag += `   <input type="${'number'} "${required}  placeholder="${value}"   />`

    return (
        <div>
            <div className="detail-hero">
                <HeaderNav />
                <div className="detail-hero-content">
                    <div className="detail-hero-content-heading">
                        <h1>HTML Number Input Generator

                        </h1>
                    </div>
                    <div className="detail-hero-content-des">
                        <p>Generate HTML Number Input with our generator tool. Preview the result and copy the generated code to your website.

                        </p>
                    </div>


                </div>
            </div>
            <div className='screen'>
                <div className='screen-editor'>
                    <h1>Options</h1>

                    <div className='screen-editor-color' >
                        <label>
                            Placeholder
                        </label>
                        <input type={'number'} placeholder={value} onChange={(e) => setValue(e.target.value)} />
                    </div>

                    <div className='screen-editor-color checkbox' style={{ 'flexDirection': 'row' }}>
                        <label style={{'align-items':'flex-end'}}>
                            <input type={'checkbox'} onChange={(e) => setrequired(e.target.checked ? 'required' : '')} style={{ 'height': '25px', 'width': '25px' }} />
                            Required
                        </label>
                    </div>

                </div>
                <div className='screen-preview'>
                    <h1>Preview</h1>
                    <div className='screen-preview-box'>
                        <div className='screen-preview-box-sample' style={{ 'overflow': 'hidden' }}>
                            <div>

                                <input type={'number'} placeholder={value} style={{ 'width': '200px' }} />
                            </div>
                        </div>
                    </div>
                    <h1>Code</h1>
                    <div className='screen-preview-code'>
                        <code className='element-code'> {tag}  </code>
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

