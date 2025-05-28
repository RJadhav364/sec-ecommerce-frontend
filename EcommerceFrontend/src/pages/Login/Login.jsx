import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='dark:bg-darkbg-highlight dark:text-white font-display-Montserrat'>
        <div className='mx-auto w-[1400px] py-[20px] flex items-center flex-col'>
            <div className='dark:bg-[#181818] bg-[#ebebeb] p-[20px] w-[400px] rounded-[10px] shadow-[0px_0px_7px_0px_#ebebeb]'>
                <h3 class="text-center text-[20px] font-[600]">Login to your account</h3>
                <h5 className='text-center text-[18px] text-[#bdbdbd] mt-[5px]'>Don't have an account yet? <Link to={'/register'} className='hover:underline hover:underline-offset-1 hover:decoration-[#bdbdbd] font-bold'>Sign up</Link></h5>
                <div>
                    <div class="form-group w-full mt-5 mb-5 flex flex-col gap-[20px]">
                        <div class="flex flex-col gap-1.5">
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' className='dark:bg-[#111111] bg-[#cccccc] outline-none p-[10px] dark:shadow-[0px_0px_6px_2px_#000] shadow-[0px_0px_6px_2px_#ccc] w-full rounded-md' />
                        </div>
                        <div class="flex flex-col gap-1.5">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' className='dark:bg-[#111111] bg-[#cccccc] outline-none p-[10px] dark:shadow-[0px_0px_6px_2px_#000] shadow-[0px_0px_6px_2px_#ccc] w-full rounded-md' />
                        </div>
                    </div>
                    <button className='w-full p-2.5 bg-[#ff5252] rounded-md inline-block mt-[10px]'>Login</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login
