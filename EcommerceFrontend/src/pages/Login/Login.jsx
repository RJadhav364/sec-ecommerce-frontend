import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Flip, toast, Zoom } from 'react-toastify';
import { emailregx } from '../../Validation/inputValidation';
import { loginCustomerDetail } from './services/loginApis';
import { useNavigate } from 'react-router-dom';
import useCustomerStore from '../../store/customerStore';
import Button from '../../components/Button';

const Login = () => {
    const navigate = useNavigate();
    const customerLoginDetails = useRef({
        email: "",
        password: "",
    });
    const authStore = useCustomerStore();
    const loginCustomer = async() => {
        let formValues = {};
        switch(true){
            case customerLoginDetails.current.email.value == "" || customerLoginDetails.current.password.value == "":
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
            case !emailregx.test(customerLoginDetails.current.email.value):
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
            default:
                for(let key in customerLoginDetails.current){
                    // createdCustomerData.current[key] = createdCustomerData.current[key].value
                    formValues[key] = customerLoginDetails.current[key].value;
                }
                const result = await loginCustomerDetail(formValues);
                console.log(result);
                const finalResult = await result.json();
                switch(true){
                    case result.status == 200:
                        toast.success('Login Successfully', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "drak",
                            transition: Zoom,
                        });
                        authStore.setAuth({
                            isCustomerLogin: true,
                            token: finalResult.data.token,
                            email: finalResult.data.email,
                            id: finalResult.data.id,
                            username: finalResult.data.username,
                            customeProfilePic: finalResult.data.customeProfilePic,
                            wishList: finalResult.data.wishList,
                        })
                        navigate("/");
                        break;
                    case result.status == 404:
                        toast.error('User not found', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "drak",
                            transition: Zoom,
                        });
                        break;
                    case result.status == 401:
                        toast.error('Password not match', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "drak",
                            transition: Zoom,
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
                            theme: "drak",
                            transition: Zoom,
                        })
                }
        }
    }
  return (
    <section className='dark:bg-darkbg-highlight dark:text-white font-display-Montserrat'>
        <div className='mx-auto w-[1400px] py-[50px] flex items-center flex-col'>
            <div className='dark:bg-[#181818] bg-[#ffffff] p-[20px] w-[400px] rounded-[10px] dark:shadow-[0px_0px_12px_0px_#000] shadow-[0px_0px_12px_0px_#ebebeb]'>
                <h3 className="text-center text-[20px] font-[600]">Login to your account</h3>
                <h5 className='text-center text-[18px] dark:text-[#bdbdbd] mt-[5px]'>Don't have an account yet? <Link to={'/register'} className='hover:underline hover:underline-offset-1 hover:decoration-[#bdbdbd] font-bold'>Sign up</Link></h5>
                <div>
                    <div className="form-group w-full mt-5 mb-5 flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' className='dark:bg-[#111111] bg-[#fff] outline-none p-[10px] dark:shadow-[0px_0px_6px_2px_#000] shadow-[0px_0px_6px_2px_#ccc] w-full rounded-md' ref={(e)=>{customerLoginDetails.current.email = e}} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' className='dark:bg-[#111111] bg-[#fff] outline-none p-[10px] dark:shadow-[0px_0px_6px_2px_#000] shadow-[0px_0px_6px_2px_#ccc] w-full rounded-md' ref={(e)=>{customerLoginDetails.current.password = e}} />
                        </div>
                    </div>
                    <Button classes='w-full p-2.5 dark:bg-[#ff5252] bg-[#f76d6d] text-white rounded-md inline-block mt-[10px] cursor-pointer font-semibold' btnLabel="Login" onClick={loginCustomer} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login
