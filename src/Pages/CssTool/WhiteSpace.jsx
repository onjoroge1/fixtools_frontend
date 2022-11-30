import React, { useState } from 'react'
import HeaderNav from '../../components/common/HeaderNav'
import Footer from '../../components/home/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

export const WhiteSpace = () => {


    const [position, setPosition] = useState('nowrap')

    useEffect(() => {
        document.title = "CSS White Space Generator";
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
                        <h1>CSS White Space Generator
                        </h1>
                    </div>
                    <div className="detail-hero-content-des">
                        <p>Generate CSS White Space with our generator tool. Preview the result and copy the generated code to your website.
                        </p>
                    </div>


                </div>
            </div>
            <div className='screen'>
                <div className='screen-editor'>
                    <h1>Options</h1>


                    <div className='screen-editor-color'>
                        <label>Value</label>
                        <select onChange={(e) => setPosition(e.target.value)}>
                            <option value={'nowrap'}>nowrap  </option>
                            <option value={'pre'}>pre</option>
                            <option value={'pre-line'}>pre-line  </option>
                            <option value={'pre-wrap'}>pre-wrap  </option>




                        </select>
                    </div>




                </div>
                <div className='screen-preview'>
                    <h1>Preview</h1>
                    <div className='screen-preview-box'>
                        <div className='screen-preview-box-sample' style={{ 'overflow': 'hidden' }}>
                            <div style={{ 'width': '300px', 'height': '150px', 'border': '1px solid black' }}>
                                <p style={{  'whiteSpace': `${position}` }}>
                                    But ere she from the church-door stepped
                                    She smiled and told us why:
                                    'It was a wicked woman's curse,'
                                    Quoth she, 'and what care I?'

                                    She smiled, and smiled, and passed it off
                                    Ere from the door she stept—
                                </p>
                            </div>
                        </div>
                    </div>
                    <h1>Code</h1>
                    <div className='screen-preview-code'>
                        <code className='element-code'> white-space:  {position};</code>
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

