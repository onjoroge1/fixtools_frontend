import React, { useState } from 'react'
import HeaderNav from '../../components/common/HeaderNav'
import Footer from '../../components/home/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

export const HtmlColorInput = () => {


    const [color, setColor] = useState('#3783be')
    const [name, setname] = useState('Myinput')

    useEffect(() => {
        document.title="HTML Color Input Generator";
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
    tag += `  <input type="color" name="${name}" />`

    return (
        <div>
            <div className="detail-hero">
                <HeaderNav />
                <div className="detail-hero-content">
                    <div className="detail-hero-content-heading">
                        <h1>HTML Color Input Generator

                        </h1>
                    </div>
                    <div className="detail-hero-content-des">
                        <p>Generate HTML Color Input with our generator tool. Preview the result and copy the generated code to your website.

                        </p>
                    </div>


                </div>
            </div>
            <div className='screen'>
                <div className='screen-editor'>
                    <h1>Options</h1>

                    <div className='screen-editor-color' >
                        <label>
                            Name
                        </label>
                        <input type={'text'} onChange={(e)=>setname(e.target.value)} placeholder={name} />
                        
                    </div>
                    <div className='screen-editor-color' >
                        <label>
                            Color
                        </label>
                        <input type={'color'} onChange={(e)=>setColor(e.target.value)} value={color} />
                        <code>{color}</code>
                    </div>

                </div>
                <div className='screen-preview'>
                    <h1>Preview</h1>
                    <div className='screen-preview-box'>
                        <div className='screen-preview-box-sample' style={{ 'overflow': 'hidden' }}>
                            <div style={{ 'width': '100%' }}>
                                <div>
                                <input type={'color'} value={color}/>
                                </div>
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

