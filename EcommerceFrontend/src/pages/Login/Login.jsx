import React from 'react'

const Login = () => {
  return (
    <section className='dark:bg-darkbg-highlight dark:text-white font-display-Montserrat'>
        <div className='mx-auto w-[1400px] py-[20px] flex items-center flex-col'>
            <div className='dark:bg-[#181818] bg-[#ebebeb] p-[20px] w-[400px]'>
                <h3 class="text-center text-[20px] font-[600]">Login to your account</h3>
                <div>
                    <div class="form-group w-full mt-5 mb-5 flex flex-col gap-[30px]">
                        <div class="MuiFormControl-root MuiTextField-root w-full css-1pv2xcc">
                            <input type="text" name='email' className='dark:bg-[#111111] bg-white outline-none p-[10px] dark:shadow-[0px_0px_6px_2px_#000] shadow-[0px_0px_6px_2px_#fff] w-full' />
                        </div>
                        <div class="MuiFormControl-root MuiTextField-root w-full css-1pv2xcc">
                            <input type="password" name='password' className='bg-[#111111] outline-none p-[10px] shadow-[0px_0px_6px_2px_#000] w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login
