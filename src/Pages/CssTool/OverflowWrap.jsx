import React, { useState } from 'react'
import HeaderNav from '../../components/common/HeaderNav'
import Footer from '../../components/home/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

export const OverflowWrap = () => {

    const [value, setValue] = useState('anywhere')

    useEffect(() => {
        document.title="CSS Overflow Wrap Generator";
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
                        <h1>CSS Overflow Wrap Generator
                        </h1>
                    </div>
                    <div className="detail-hero-content-des">
                        <p>Generate CSS Overflow wrap with our generator tool. Preview the result and copy the generated code to your website.
                        </p>
                    </div>


                </div>
            </div>
            <div className='screen'>
                <div className='screen-editor'>
                    <h1>Options</h1>


                    <div className='screen-editor-color'>
                        <label>Value</label>
                        <select onChange={(e) => setValue(e.target.value)}>
                            <option value={'anywhere'}>anywhere</option>
                            <option value={'break-word'}>break-word</option>
                            <option value={'normal'}>normal</option>


                        </select>
                    </div>




                </div>
                <div className='screen-preview'>
                    <h1>Preview</h1>
                    <div className='screen-preview-box'>
                        <div className='screen-preview-box-sample' style={{ 'overflowWrap': `${value}`,'border':'1px solid black','width':'150px', 'background': 'skyblue','display':'inline-block','word-break':`word-wrap` }}>
                           
                        This is a very very very very very long word: pneumonoultramicroscopicsilicovolcanoconiosis

                            

                        </div>

                    </div>
                    <h1>Code</h1>
                    <div className='screen-preview-code'>
                        <code className='element-code'>overflow-wrap : {value};</code>
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

