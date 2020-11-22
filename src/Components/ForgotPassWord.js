import React, { useRef } from 'react'
import SignInFooter from './SignInFooter'
import logo from '../Assets/kidsloop_min_logo.svg'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from "yup"
import GoBack from './GoBack'

function ForgotPassWord() {

    const barRef = useRef(null)
    const formRef = useRef(null)

    return (
        <div className='sign-in-background' >
            <div className="progress-bar" ref={barRef} style={{width: '0%'}}  ></div>
            <div className="sign-in-wrapper" >
                <GoBack />
                <div className="sign-in-form" >
                    <img src={logo} className="kids-loop-logo" alt="kids-loop-logo" />
                    <h2 className='title' >Password Reset</h2>
                    <Formik
                        initialValues = {{
                            email: "",
                        }}
                        validationSchema = {Yup.object({
                            email: Yup.string()
                            .min(3, 'Too Short!')
                            .email("Invalid email format")
                            .required("Required!"),
                        })}
                        onSubmit ={values => {
                            barRef.current.style.display = 'block'
                            barRef.current.style.transition = '1s linear width'
                            barRef.current.style.width = '100%'
                            console.log('submit')
                            setTimeout(() => {
                                console.log('submit')
                                barRef.current.style.display = 'none'
                                alert(JSON.stringify(values, null, 2));
                            }, 1000);
                            }}
                        render={({ errors, touched }) => (
                            <Form className='sign-in-form-main' ref={formRef}>
                                <div className="form-error" >
                                    <ErrorMessage name="email" component="p"/>
                                </div>
                                <Field
                                    className="sign-in-inputs"
                                    type = 'email'
                                    name = 'email'
                                    placeholder = 'Email *'
                                    style={{
                                        borderColor: errors.email && touched.email ? 'tomato' : ' #999999'
                                    }}
                                />
                                <div className="sign-in-form-footer" >
                                    <button className="sign-in-submit" type="submit" >Search</button>
                                </div>
                            </Form>
                        )}
                        />
                    
                </div>
                <SignInFooter />
            </div>
        </div>
    )
}

export default ForgotPassWord
