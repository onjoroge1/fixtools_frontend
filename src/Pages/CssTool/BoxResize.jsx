import React, { useState } from 'react'
import HeaderNav from '../../components/common/HeaderNav'
import Footer from '../../components/home/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

export const BoxResize = () => {

    const [style, setstyle] = useState('both')
    useEffect(() => {
        document.title="CSS Box Resize Generator";
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
                        <h1>CSS Box Resize Generator
                        </h1>
                    </div>
                    <div className="detail-hero-content-des">
                        <p>Generate CSS box resize with our CSS generator tool. Preview the result and copy the generated code to your website.
                        </p>
                    </div>


                </div>
            </div>
            <div className='screen'>
                <div className='screen-editor'>
                    <h1>Options</h1>


                    <div className='screen-editor-color'>
                        <label style={{'font-weight':'500'}}>Style</label>
                        <select onChange={(e) => setstyle(e.target.value)}>
                            <option value={'both'} selected >both </option>
                            <option value={'horizontal'}>horizontal </option>
                            <option value={'vertical'}>vertical </option>



                        </select>
                    </div>




                </div>
                <div className='screen-preview'>
                    <h1>Preview</h1>
                    <div className='screen-preview-box'>
                        <div className='screen-preview-box-sample' style={{ 'overflow': 'hidden' }}>
                            <textarea style={{ 'border': '1px solid #000000', 'resize': `${style}`, 'width': '150px', 'height': '150px', 'background': 'skyblue' }}>

                            </textarea>
                        </div>
                    </div>
                    <h1>Code</h1>
                    <div className='screen-preview-code'>
                        <code className='element-code'>resize : {style};</code>
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

