import React, { useRef } from 'react'
import logo from '../Assets/kidsloop_min_logo.svg'
import SignInFooter from './SignInFooter'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import GoBack from './GoBack';

function SignUp() {


    const barRef = useRef(null)
    const formRef = useRef(null)
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


    return (
        <div className='sign-in-background' >
            <div className="progress-bar" ref={barRef} style={{width: '0%'}}  ></div>
            <div className="sign-in-wrapper" >
                <GoBack />
                <div className="sign-in-form" >
                    <img src={logo} className="kids-loop-logo" alt="kids-loop-logo" />
                    <h2 className='title' >Create your account</h2>
                    <Formik
                        initialValues = {{
                            name: "",
                            phone: "",
                            email: "",
                            password: "",
                        }}
                        validationSchema = {Yup.object({
                            name: Yup.string()
                                .min(2, 'Too Short!')
                                .required('Required'),
                            phone: Yup.string().matches(phoneRegExp, 'Invalid phone number').required(),
                            email: Yup.string()
                                .min(3, 'Too Short!')
                                .email("Invalid email format")
                                .required("Required!"),
                            password: Yup.string()
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
                                    <ErrorMessage name="name" component="p"/>
                                </div>
                                <Field
                                    className="sign-in-inputs"
                                    type = 'text'
                                    name = 'name'
                                    placeholder = 'Name *'
                                    style={{
                                        borderColor: errors.name && touched.name ? 'tomato' : ' #999999'
                                    }}

                                />
                                <div className="form-error" >
                                    <ErrorMessage name="phone" component="p"/>
                                </div>
                                <Field
                                    className="sign-in-inputs"
                                    type = 'tel'
                                    name = 'phone'
                                    placeholder = 'Phone Number *'
                                    style={{
                                        borderColor: errors.phone && touched.phone ? 'tomato' : ' #999999'
                                    }}

                                />
                                <div className="form-error" >
                                    <ErrorMessage name="email" component="p"/>
                                </div>
                                <Field
                                    className="sign-in-inputs"
                                    type = 'email'
                                    name = 'email'
                                    placeholder = 'Email *'
                                    style={{
                                        borderColor: errors.name && touched.name ? 'tomato' : ' #999999'
                                    }}

                                />
                                <div className="form-error" >
                                    <ErrorMessage name="password" component="p"/>
                                </div>
                                <Field
                                    className="sign-in-inputs"
                                    type = 'password'
                                    name = 'password'
                                    placeholder = 'Password *'
                                    style={{
                                        borderColor: errors.password && touched.password ? 'tomato' : ' #999999'
                                    }}
                                />
                                <div className="sign-in-form-footer" >
                                    <button className="sign-in-submit" type="submit" >Sign Up</button>
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

export default SignUp
