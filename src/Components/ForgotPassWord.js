import React, { useRef, useState } from 'react'
import SignInFooter from './SignInFooter'
import logo from '../Assets/kidsloop_min_logo.svg'

function ForgotPassWord() {
    const [info, setInfo] = useState({
        email: {
            text: '',
            error: false
        },
    })

    const barRef = useRef(null)
    const formRef = useRef(null)

    const handleChange = (event) => {
        event.preventDefault()
        setInfo({...info, [event.target.name]: {
            text: event.target.value,
            error: false
        }})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(info.email.text.includes('@') && info.email.text.includes('.') && info.email.text.length >= 8){
            barRef.current.style.display = 'block'
            barRef.current.style.transition = '1s linear width'
            barRef.current.style.width = '100%'
            console.log('submit')
            setTimeout(() => {
                console.log('submit')
                barRef.current.style.display = 'none'
                formRef.current.submit()
            }, 1000);
        }
        else {
            setInfo({...info, email: {
                text: info.email.text,
                error: true
            }})
        }
    }
    return (
        <div className='sign-in-background' >
            <div className="progress-bar" ref={barRef} style={{width: '0%'}}  ></div>
            <div className="sign-in-wrapper" >
                <div className="sign-in-form" >
                    <img src={logo} className="kids-loop-logo" alt="kids-loop-logo" />
                    <h2 className='title' >Password Reset</h2>
                    <form className='sign-in-form-main' ref={formRef}>
                        <div className="form-error" >{(info.email.error) && "Invalid Email"}</div>
                        <input
                            className="sign-in-inputs"
                            type = 'email'
                            name = 'email'
                            placeholder = 'Email *'
                            value = {info.email.text}
                            onChange = {handleChange}
                            style={{
                                borderColor: info.email.error ? 'tomato' : ' #999999'
                            }}
                        />
                        <div className="sign-in-form-footer" >
                            <button className="sign-in-submit" onClick={handleSubmit} >Search</button>
                        </div>
                    </form>
                </div>
                <SignInFooter />
            </div>
        </div>
    )
}

export default ForgotPassWord
