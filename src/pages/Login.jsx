import React, { useRef, useState } from 'react'
import logo from '../assets/icons/logo.svg'
import eye from '../assets/icons/eye.png'
import eye_close from '../assets/icons/hidden.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [passwordEyeCanSee, setPasswordEyeCanSee] = useState(false);
    const [errorText, setErrorText] = useState('');

    const navigate = useNavigate()

    const emailRef = useRef();
    const passwordRef = useRef();

    const loginSubmit = (e) => {
        e.preventDefault()
        navigate('/')
        // if(emailRef.current.value !== 'demo@demo.com') {
        //     setErrorText('Invalid Email')
        // }
        // else if (passwordRef !== 'demo123') {
        //     setErrorText('Invalid Password')
        // }else if(emailRef.current.value === 'demo@demo.com' && passwordRef.current.value === 'demo123'){
        //     localStorage.setItem('status', 'true')
        //     setErrorText('')
        //     navigate('/')
        // }
    }


    return (
        <div className='w-full h-screen flex justify-center items-center fixed inset-0 z-[700] bg-[#f5f5f9]'>

            {/* login component */}
            <form onSubmit={loginSubmit} className='bg-[color:var(--primary-color)] flex flex-col items-center w-full max-w-[400px] px-6 shadow-md rounded-[15px]'>
                <div className='w-full flex justify-center items-center mr-1 pt-3'>
                    <img src={logo} className='w-ful max-w-[100px]' alt="" />
                </div>
                <div className='w-full p-3 mt-2'>
                    <div className='w-full'>
                        <input type="text" ref={emailRef} className='text-[13px] my-2 px-2 py-2 w-full outline-none rounded-[10px]' placeholder='email' />
                    </div>
                    <div className='w-full flex justify-center items-center bg-white  rounded-[10px] pr-2 my-2'>
                        <input type={passwordEyeCanSee ? 'text' : 'password'} ref={passwordRef} className='text-[13px] px-2 py-2 w-full outline-none rounded-[10px]' placeholder='password' />
                        <span className='border-l border-[#696969] pl-2'>
                            <img src={passwordEyeCanSee ? eye_close : eye} className='w-[22px] cursor-pointer opacity-60' alt="" onClick={() => setPasswordEyeCanSee(!passwordEyeCanSee)}/>
                        </span>
                    </div>
                </div>
                <div className='w-full'>
                    {errorText}
                </div>
                <div className='w-full flex justify-center items-center py-2 pb-5'>
                    <button className='px-10 py-[7px] bg-[#3711069d] text-white rounded-[10px] active:scale-[0.95]'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login