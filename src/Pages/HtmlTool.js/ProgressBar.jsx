import React, { useState } from 'react'
import HeaderNav from '../../components/common/HeaderNav'
import Footer from '../../components/home/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

export const ProgressBar = () => {


    useEffect(() => {
        document.title="HTML Progress Bar Generator";
      }, []);

    const [max, setMax] = useState(100)
    const [value, setValue] = useState(40)

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
    tag += `<progress max="${max}" value="${value}">${value / max * 100}%</progress>`


    return (
        <div>
            <div className="detail-hero">
                <HeaderNav />
                <div className="detail-hero-content">
                    <div className="detail-hero-content-heading">
                        <h1>HTML Progress Bar Generator

                        </h1>
                    </div>
                    <div className="detail-hero-content-des">
                        <p>Generate HTML Progress Bar with our generator tool. Preview the result and copy the generated code to your website.

                        </p>
                    </div>


                </div>
            </div>
            <div className='screen'>
                <div className='screen-editor'>
                    <h1>Options</h1>



                    <div className='screen-editor-color'>
                        <label>Max</label>

                        <input type={'number'} placeholder='0' onChange={(e) => setMax(e.target.value)} />
                    </div>

                    <div className='screen-editor-color'>
                        <label>Value</label>

                        <input type={'number'} placeholder='0' onChange={(e) => setValue(e.target.value)} />
                    </div>





                </div>
                <div className='screen-preview'>
                    <h1>Preview</h1>
                    <div className='screen-preview-box'>
                        <div className='screen-preview-box-sample' style={{ 'overflow': 'hidden' }}>
                            <div>
                                <progress max={max} value={value}>{value / max}%</progress>
                            </div>
                        </div>
                    </div>
                    <h1>Code</h1>
                    <div className='screen-preview-code'>
                        <code className='element-code'> {tag} </code>
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

