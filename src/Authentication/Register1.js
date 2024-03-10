import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import axios from 'axios';
import FormModal from '../Modals/FormModal';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../helper';
const Register1 = () => {
    const [credentials,setCredentails] = useState({
        username:'',
        password:'',
        email:''
    })
const [usernameError,setUsernameError] = useState(null)
const[passwordError,setPasswordError] = useState(null)
const[validEmail,setValidEmail] = useState(null)
const[showSuccessModal,setShowSuccessModal] = useState(false)
const[emailError,setEmailError] = useState(null)
const[error,setError] = useState(null)
    const handleChange = (e) => {
        setCredentails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    console.log(credentials)

    const handleSubmit =async()=>{
 
        try{
            const response = await axios.post(`${BASE_URL}/auth/register`,credentials)
if(response.data.success){
    console.log("New user have been regsitered!!")
    setShowSuccessModal(true)
}
else{
    console.log("lol what the fuck!!")
}
        }
        catch(err){
            console.log(err)
            if(err.response.status === 400){
                if(err.response.data.message.includes('Username')){
                    setUsernameError(err.response.data.message)
                }
                else if(err.response.data.message.includes('Email')){
                    setEmailError(err.response.data.message)
                }
                else if(err.response.data.message.includes('Password')){
                    setPasswordError(err.response.data.message)
                }
                else if(err.response.data.message.includes('valid')){
                    setValidEmail(err.response.data.message)
                }
                else{
                    setError(err.response.data.message)
                }
            }
        }
    }
    console.log("username error",usernameError)
    console.log("email error",emailError)
  return (
    <div className='bg-gradient-to-b from-purple-200 to-green-300  h-screen'>
    <Navbar/>
    <div class="w-3/4 bg-gradient-to-r from-cyan-500 to-blue-500 px-3 mt-11 mx-auto rounded-lg shadow-xl md:flex-0 shrink-0 text-white">
    
    <div class="relative z-0 flex flex-col min-w-0 break-words bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
      <div class="p-6 mb-0 text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-b-0 rounded-t-2xl">
        <h5 className='text-3xl font-bold'>Register</h5>
        {showSuccessModal && <FormModal
        title="New User have been Registered Sucessfully"
        subtitle="Go to Login"
        />}
      </div>
 
      <div class="flex-auto p-6">
        <form role="form text-left">
          <div class="mb-4">
            {usernameError && <small className='text-red-500 font-semibold'>* {usernameError}</small>}
          {!usernameError &&  <label htmlFor="">Username*</label>}
            <input aria-describedby="email-addon" aria-label="Name" placeholder="Name" class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" name='username' onChange={(e)=>handleChange(e)}/>
          </div>
          <div class="mb-4">
          {emailError && <small className='text-red-500 font-semibold'>* {emailError}</small>}
          {validEmail && <small className='text-red-500 font-semibold'>* {validEmail}</small>}
          {!emailError && !validEmail &&  <label htmlFor="">Email*</label>}
      
            <input aria-describedby="email-addon" aria-label="Email" placeholder="Email" class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="email" name='email' onChange={(e)=>handleChange(e)}/>
          </div>
          <div class="mb-4">
          {passwordError && <small className='text-red-500 font-semibold'>* {passwordError}</small>}
        {!passwordError &&  <label htmlFor="">Password*</label>}
            <input aria-describedby="password-addon" aria-label="Password" placeholder="Password" class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="password" name='password' onChange={(e)=>handleChange(e)}/>
          </div>
          <div class="min-h-6 pl-7 mb-0.5 block">
    <input checked="" value="" type="checkbox" class="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100" id="terms"/>
    <label for="terms" class="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"> I agree the <a class="font-bold text-slate-700">Terms and Conditions</a>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline ml-1 fill-current text-green-500">
        <path d="M6.293 9.293a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"></path>
      </svg>
    </label>
  </div>
  
          <div class="text-center">
            <button class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25  bg-gradient-to-r from-purple-500 to-pink-500 hover:border-slate-700 hover:bg-slate-700 hover:text-white" type="button" onClick={handleSubmit}>Sign up</button>
          </div>
          <p class="mt-4 mb-0 leading-normal text-sm text-white">Already have an account?
          <Link to='/login1'><a class="font-bold text-white" href="../pages/sign-in.html">Sign in</a>
          </Link> </p>
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Register1
