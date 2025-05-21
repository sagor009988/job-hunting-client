import { useContext, useState } from 'react';
import { AiOutlineMail, AiFillFacebook, AiFillGoogleSquare } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet';


const Signin = () => {

    const { signInUser, googleSignin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [errEmail, setErrEmail] = useState('');
    const [errPass, setErrPass] = useState('');


    // handle google signin
    const handleGoogleSignin = () => {
        googleSignin()
            .then(res => {
                toast.success('Login successfully.');
                location.state ? navigate(location.state) : navigate('/');
            })
            .then(err => console.log(err));
    }



    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrEmail('');
        setErrPass('');

        if (email == '') {
            setErrEmail('Please enter your eamil.')
        }
        if (password == '') {
            setErrPass('Please enter your password.')
        }

        if (email && password) {
            signInUser(email, password)
                .then(res => {
                    setErrEmail('');
                    setErrPass('');
                    toast.success('Login successfully.');
                    location.state ? navigate(location.state) : navigate('/');
                    fetch('https://server-navy-theta.vercel.app/jwt', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({ email: email })
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))


                })
                .catch(err => toast.warning("Invalid user login."));
        }
    }

    return (
        <div className='bg-lime-500'>
            <Helmet>
                <title>Job News | Sign in</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div >
                {/* The above div creates the second background image on the right-bottom */}
            </div>
            <div className="flex items-center justify-center h-screen w-full max-w-6xl mx-auto">
                <div className='bg-white dark:bg-[#26272D] p-8 rounded shadow-md z-30'>
                    <div className='mb-6'>
                        <h2 className='text-xl text-center dark:text-white font-bold'>SIGNIN INTO YOUR ACCOUNT</h2>
                    </div>
                    <form onSubmit={handleSignin} className="w-[300px]">
                        <div className="relative mb-6">
                            <input className="border-b py-1 px-2 w-full focus:outline-none  dark:bg-[#121212]" placeholder='Email Address' type="email" name="email" id="" /><br />
                            <AiOutlineMail className='absolute top-2 text-xl right-2 dark:text-white' />
                            {
                                errEmail ? <p className="text-[12px] text-red-600 -mb-[15px]">{errEmail}</p> : ''
                            }
                        </div>
                        <div className="relative mb-6">
                            <input className="border-b py-1 px-2 w-full focus:outline-none dark:bg-[#121212]" placeholder='Password' type="password" name="password" id="" /><br />
                            <RiLockPasswordLine className='absolute  text-xl top-2 right-2 dark:text-white' />
                            {
                                errPass ? <p className="text-[12px] text-red-600 -mb-[15px]">{errPass}</p> : ''
                            }
                        </div>
                        <div className="mb-6">
                            <input className='bg-[#D2DE32] text-white py-2 w-full rounded-sm cursor-pointer' type="submit" value="SignIn" />
                        </div>
                    </form>
                    <div>
                        <div className="flex justify-between dark:text-white text-sm -mt-4 mb-6">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember me</label>
                            </div>
                            <Link>Forget Your Password?</Link>
                        </div>
                        <div className="relative w-full flex items-center justify-center mb-6">
                            <div className="w-full border-t border-gray-300"></div>
                            <div className="flex items-center">
                                <span className="bg-white dark:bg-[#121212] px-2 text-gray-500 text-base mx-auto absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">Or Login With</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mb-6 '>
                           
                            <AiFillGoogleSquare onClick={() => handleGoogleSignin()} className='text-blue-600 text-5xl cursor-pointer dark:text-white' />
                        </div>
                        <div>
                            <p className='text-center dark:text-white'>Don't have an account? <Link to={'/signup'} className='cursor-pointer text-[#D2DE32]'>Register here</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signin;
