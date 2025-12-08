import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Bounce, Slide, toast } from 'react-toastify';
import { emailregx } from '../../Validation/inputValidation';
import { createNewCustomer } from './services/registerRelatedApi';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const Register = () => {
    const navigate = useNavigate();
    const createdCustomerData = useRef({
        username: "",
        email: "",
        password: "",
        confirm_password: ""
    });
    const registerCustomer = async() => {
        // console.log(createdCustomerData.current)
        let formValues = {};
        switch(true){
            case createdCustomerData.current.username.value == "" || createdCustomerData.current.email.value == "" || createdCustomerData.current.password.value == "":
                toast.error('All fields are required!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark", 
                });
                break;
            case !emailregx.test(createdCustomerData.current.email.value):
                toast.error('Enter Valid Email', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark", 
                });
                break;
            case createdCustomerData.current.password.value != createdCustomerData.current.confirm_password.value:
                toast.error('Cofirm Password Should Match', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark", 
                });
                break;
            default:
                for(let key in createdCustomerData.current){
                    // createdCustomerData.current[key] = createdCustomerData.current[key].value
                    formValues[key] = createdCustomerData.current[key].value;
                }
                let {confirm_password , ...resValues} = formValues;
                // console.log(resValues);
                const result = await createNewCustomer(resValues);
                // console.log(result)
                switch(true){
                    case result.status == 200:
                        toast.success('Registration Completed', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "drak",
                            transition: Bounce,
                        });
                        navigate("/login");
                        break;
                    case result.status == 409:
                        toast.error('User already Registered with this email', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "dark", 
                            transition: Slide,
                        });
                        break;
                    default:
                        toast.error('Something went wrong', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "dark", 
                            transition: Slide,
                        });
                        break;
                }
        }
    }
  return (
    <section className='dark:bg-darkbg-highlight dark:text-white font-display-Montserrat'>
        <div className='mx-auto w-[1400px] py-[50px] flex items-center flex-col'>
            <div className='dark:bg-[#181818] bg-[#ffffff] p-[20px] w-[600px] rounded-[10px] dark:shadow-[0px_0px_12px_0px_#000] shadow-[0px_0px_12px_0px_#ebebeb]'>
                <h3 className="text-center text-[20px] font-[600]">Welcome to EcommerceHUb! 👋</h3>
                <h5 className='text-center text-[18px] dark:text-[#bdbdbd] mt-[5px]'>Already have an account? <Link to={"/login"} className='hover:underline hover:underline-offset-1 hover:decoration-[#bdbdbd] font-bold'>Sign In</Link></h5>
                <div>
                    <div className="form-group w-full mt-5 mb-5 grid grid-cols-2 gap-[20px]">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' className='dark:bg-[#111111] bg-[#fff] outline-none p-[10px] dark:shadow-[0px_0px_6px_2px_#000] shadow-[0px_0px_6px_2px_#ccc] w-full rounded-md' ref={(e)=>{createdCustomerData.current.username = e}} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' className='dark:bg-[#111111] bg-[#fff] outline-none p-[10px] dark:shadow-[0px_0px_6px_2px_#000] shadow-[0px_0px_6px_2px_#ccc] w-full rounded-md' ref={(e)=>{createdCustomerData.current.email = e}} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' className='dark:bg-[#111111] bg-[#fff] outline-none p-[10px] dark:shadow-[0px_0px_6px_2px_#000] shadow-[0px_0px_6px_2px_#ccc] w-full rounded-md' ref={(e)=>{createdCustomerData.current.password = e}} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input type="password" name='confirm_password' className='dark:bg-[#111111] bg-[#fff] outline-none p-[10px] dark:shadow-[0px_0px_6px_2px_#000] shadow-[0px_0px_6px_2px_#ccc] w-full rounded-md' ref={(e)=>{createdCustomerData.current.confirm_password = e}} />
                        </div>
                    </div>
                    <Button classes="w-full p-2.5 dark:bg-[#ff5252] bg-[#f76d6d] text-white rounded-md inline-block mt-[10px] font-semibold cursor-pointer" btnLabel="Register" onClick={registerCustomer} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register
