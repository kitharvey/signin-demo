import React, { useRef, useState } from 'react'
import logo from '../Assets/kidsloop_min_logo.svg'
import SignInFooter from './SignInFooter'

function SignUp() {

    const [info, setInfo] = useState({
        name: {
            text: '',
            error: false
        },
        phone: {
            text: '',
            error: false
        },
        email: {
            text: '',
            error: false
        },
        password: {
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
        if(!(info.email.text.includes('@')) || !(info.email.text.includes('.')) || info.email.text.length < 8) {
            setInfo({...info, email: {
                text: info.email.text,
                error: true
            }})
        }
        
        else if (info.name.text.length < 8 || !info.name.text.match(/^[a-zA-Z]+$/)) {
            setInfo({...info, name: {
                text: info.name.text,
                error: true
            }})
        }

        else if (info.phone.text.length < 8 || !info.phone.text.match(/^[0-9]+$/)) {
            setInfo({...info, phone: {
                text: info.phone.text,
                error: true
            }})
        }

        else if (info.password.text.length < 8) {
            setInfo({...info, password: {
                text: info.password.text,
                error: true
            }})
        }
        
        // else if(info.email.text.includes('@') && info.email.text.includes('.') && info.email.text.length >= 8 && info.password.text.length >= 8 && info.name.text.length >= 8 && info.name.text.match(/^[a-zA-Z]+$/) && info.phone.text.length >= 8 && info.phone.text.match(/^[0-9]+$/)){
        else if(!info.name.error && !info.phone.error && !info.email.error && !info.password.error){
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
        
        console.log(info)
    }

    return (
        <div className='sign-in-background' >
            <div className="progress-bar" ref={barRef} style={{width: '0%'}}  ></div>
            <div className="sign-in-wrapper" >
                <div className="sign-in-form" >
                    <img src={logo} className="kids-loop-logo" alt="kids-loop-logo" />
                    <h2 className='title' >Create your account</h2>
                    <form className='sign-in-form-main' ref={formRef}>
                        <div className="form-error" >{info.name.error && "Invalid Name"}</div>
                        <input
                            className="sign-in-inputs"
                            type = 'text'
                            name = 'name'
                            placeholder = 'Name *'
                            value = {info.name.text}
                            onChange = {handleChange}
                            style={{
                                borderColor: info.name.error ? 'tomato' : ' #999999'
                            }}

                        />
                        <div className="form-error" >{info.phone.error && "Invalid Phone Number"}</div>
                        <input
                            className="sign-in-inputs"
                            type = 'tel'
                            name = 'phone'
                            placeholder = 'Phone Number *'
                            value = {info.phone.text}
                            onChange = {handleChange}
                            style={{
                                borderColor: info.phone.error ? 'tomato' : ' #999999'
                            }}

                        />
                        <div className="form-error" >{info.email.error && "Invalid Email"}</div>
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
                        <div className="form-error" >{info.password.error && "Invalid Password"}</div>
                        <input
                            className="sign-in-inputs"
                            type = 'password'
                            name = 'password'
                            placeholder = 'Password *'
                            value = {info.password.text}
                            onChange = {handleChange}
                            style={{
                                borderColor: info.password.error ? 'tomato' : ' #999999'
                            }}
                        />
                        <div className="sign-in-form-footer" >
                            <button className="sign-in-submit" onClick={handleSubmit} >Sign Up</button>
                        </div>
                    </form>
                </div>
                <SignInFooter />
            </div>
        </div>
    )
}

export default SignUp
