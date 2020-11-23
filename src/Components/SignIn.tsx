import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/kidsloop_min_logo.svg'
import SignInFooter from './SignInFooter'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

const SignIn: React.FC = () => {
    const barRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    return (
        <div className='sign-in-background' >
            <div className="progress-bar" ref={barRef} style={{width: '0%'}}  ></div>
            <div className="sign-in-wrapper" >
                <div className="sign-in-form" >
                    <img src={logo} className="kids-loop-logo" alt="kids-loop-logo" />
                    <h2 className='title' >Sign In</h2>
                    <Formik
                        initialValues = {{
                            email: "",
                            password: ""
                        }}
                        validationSchema = {Yup.object({
                            email: Yup.string()
                            .min(3, 'Too Short!')
                            .email("Invalid email format")
                            .required("Required!"),
                            password: Yup.string()
                            .required("Required!"),
                        })}
                        onSubmit ={values => {
                            barRef.current && (barRef.current.style.display = 'block')
                            barRef.current && (barRef.current.style.transition = '1s linear width')
                            barRef.current && (barRef.current.style.width = '100%')
                            console.log('submit')
                            setTimeout(() => {
                                console.log('submit')
                                barRef.current && (barRef.current.style.display = 'none')
                                alert(JSON.stringify(values, null, 2));
                            }, 1000);
                            }}
                        render={({ errors, touched }) => (
                                

                            <Form className='sign-in-form-main' ref={formRef} autoComplete="on" >
                                <div className="form-error" >
                                    <ErrorMessage name="email" component="p"/>
                                </div>
                                <Field
                                    autoComplete="username"
                                    className="sign-in-inputs"
                                    type = 'email'
                                    name = 'email'
                                    placeholder = 'Email *'
                                    style={{
                                        borderColor: errors.email && touched.email ? 'tomato' : ' #999999'
                                    }}

                                />
                                <div className="form-error" >
                                    <ErrorMessage name="password" component="p"/>
                                </div>
                                <Field
                                    autoComplete="new-password"
                                    className="sign-in-inputs"
                                    type = 'password'
                                    name = 'password'
                                    placeholder = 'Password *'
                                    style={{
                                        borderColor: errors.password && touched.password ?  'tomato' : ' #999999'
                                    }}
                                />
                                <div className="sign-in-form-footer" >
                                    <Link to="/password-reset" >Forgot Password?</Link>
                                    <button className="sign-in-submit" type="submit" >Sign In</button>
                                </div>
                            </Form>
                        )}
                    />

                    <div className="sign-in-create" >
                        <Link to="/signup" >Create an account</Link>
                    </div>
                </div>
                <SignInFooter />
            </div>
        </div>
       
    )
}

export default SignIn


