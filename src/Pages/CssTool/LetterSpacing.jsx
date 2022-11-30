import React, { useState } from 'react'
import HeaderNav from '../../components/common/HeaderNav'
import Footer from '../../components/home/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

export const LetterSpacing = () => {

    const [value, setValue] = useState('')

    useEffect(() => {
        document.title="CSS Letter Spacing Generator";
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
                        <h1>CSS Letter Spacing Generator
                        </h1>
                    </div>
                    <div className="detail-hero-content-des">
                        <p>Generate CSS Letter Spacing with our generator tool. Preview the result and copy the generated code to your website.
                        </p>
                    </div>


                </div>
            </div>
            <div className='screen'>
                <div className='screen-editor'>
                    <h1>Options</h1>


                    <div className='screen-editor-color'>
                        <label>Length</label>
                        <input id="horizontal" type="range" min="0" max="30" onChange={(e) => setValue(e.target.value)} value={value} />
                        <code>{value}px</code>
                    </div>




                </div>
                <div className='screen-preview'>
                    <h1>Preview</h1>
                    <div className='screen-preview-box'>
                        <div className='screen-preview-box-sample' style={{ 'overflow': 'hidden' }}>
                            <p style={{ 'letter-spacing': `${value}px`, 'width': '70%', 'height': '150px', }} >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae est ex. Pellentesque rutrum posuere neque, sed luctus leo ornare at. Ut sit amet velit in nunc suscipit pretium ac a magna.

                            </p>

                        </div>

                    </div>
                    <h1>Code</h1>
                    <div className='screen-preview-code'>
                        <code className='element-code'>letter-spacing : {value}px;</code>
                        <i style={{ 'cursor': 'pointer' }} onClick={copyText} className="fa-regular fa-clone"></i>
                    </div>
                </div>

            </div>


            <Footer />
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
        </div>
    )
}

