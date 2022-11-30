import React, { useState } from 'react'
import HeaderNav from '../../components/common/HeaderNav'
import Footer from '../../components/home/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

export const OpacityGen = () => {

    const [opacity, setOpacity] = useState('')

    useEffect(() => {
        document.title="CSS Opacity Generator";
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
                        <h1>CSS Opacity Generator
                        </h1>
                    </div>
                    <div className="detail-hero-content-des">
                        <p>Generate CSS Opacity with our generator tool. Preview the result and copy the generated code to your website. 
                        </p>
                    </div>


                </div>
            </div>
            <div className='screen'>
                <div className='screen-editor'>
                    <h1>Options</h1>


                    <div className='screen-editor-color'>
                        <label>Opacity</label>
                        <input id="horizontal" type="range" min="1" max="100" onChange={(e) => setOpacity(e.target.value)} value={opacity} />
                        <code>{opacity}%</code>

                    </div>




                </div>
                <div className='screen-preview'>
                    <h1>Preview</h1>
                    <div className='screen-preview-box'>
                        <div className='screen-preview-box-sample' style={{ 'overflow': 'hidden' }}>
                            <div style={{ 'border': '1px solid #000000', 'opacity': `${opacity / 100}`, 'width': '150px', 'height': '150px', 'background': 'gray' }}>

                            </div>
                        </div>
                    </div>
                    <h1>Code</h1>
                    <div className='screen-preview-code'>
                        <code className='element-code'>opacity :{opacity / 100};</code>
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

