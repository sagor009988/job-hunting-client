import { useContext, useState } from 'react';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';



const SignUp = () => {
    const { userSignUp, updateUserData, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errPass, setErrPass] = useState('');
    const [errName, setErrName] = useState('');
    const [errEmail, setErrEamil] = useState('');

    const handleSingUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);



        setErrPass('');
        setErrName('');
        setErrEamil('');

        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (name == '') {
            setErrName('Name is required.')
        }
        if (email == '') {
            setErrEamil('Email is required.')
        }
        if (!pattern.test(password)) {
            setErrPass('Password must be minimum six characters, at least one uppercase letter, one lowercase letter and one special character.');
            return;
        }


        if (name && email && password) {

            userSignUp(email, password).then(res => {
                toast.success('SignUp Successfully. Please login');
                updateUserData(name, photo)
                    .then()
                    .catch()
                signOutUser();
                navigate('/signin');
                setErrPass('');
                setErrName('');
                setErrEamil('');
            })
                .catch(err => toast.warning(err.message));


        }
    }


    return (
        <div className="relative bg-[url('https://i.ibb.co/kMFCXF9/img-2.png')] bg-no-repeat bg-left-top bg-[#f3f3f3] dark:bg-[#121212]">
            <Helmet>
                <title>Career Link | Sign up</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className="absolute right-0 bottom-0 bg-[url('https://i.ibb.co/SBVLKSc/img-1.png')] bg-no-repeat bg-right-bottom w-1/2 h-1/2">
                {/* The above div creates the second background image on the right-bottom */}
            </div>
            <div className="flex items-center justify-center h-screen w-full max-w-6xl mx-auto">
                <div className='bg-white dark:bg-[#26272D] p-8 rounded shadow-md z-30'>
                    <div className='mb-6'>
                        <h2 className='text-xl text-center dark:text-white font-bold'>SIGNUP A NEW ACCOUNT</h2>
                    </div>
                    <form onSubmit={handleSingUp} className="w-[300px]
                    ">
                        <div className="relative mb-6">
                            <input className="border-b py-1 px-2 w-full focus:outline-none dark:bg-[#121212]" placeholder='Name' type="text" name="name" id="" /><br />
                            <AiOutlineUser className='absolute dark:text-white top-2 text-xl right-2' />
                            {
                                errName ? <p className="text-[12px] text-red-600">{errName}</p> : ''
                            }
                        </div>
                        <div className="relative mb-6">
                            <input className="border-b py-1 px-2 w-full focus:outline-none dark:bg-[#121212]" placeholder='Photo url' type="text" name="photo" id="" /><br />
                            <MdOutlineAddAPhoto className='absolute dark:text-white top-2 text-xl right-2' />
                        </div>
                        <div className="relative mb-6">
                            <input className="border-b py-1 px-2 w-full focus:outline-none dark:bg-[#121212]" placeholder='Email Address' type="email" name="email" id="" /><br />
                            <AiOutlineMail className='absolute dark:text-white top-2 text-xl right-2' />
                            {
                                errEmail ? <p className="text-[12px] text-red-600">{errEmail}</p> : ''
                            }
                        </div>
                        <div className="relative mb-6">
                            <input className="border-b py-1 px-2 w-full focus:outline-none dark:bg-[#121212]" placeholder='Password' type="password" name="password" id="" /><br />
                            <RiLockPasswordLine className='absolute dark:text-white  text-xl top-2 right-2' />
                            {
                                errPass ? <p className="text-[12px] text-red-600  -mb-[20px]">{errPass}</p> : ''
                            }
                        </div>
                        <div className="mb-6">
                            <input className='bg-[#153CF5] text-white  py-2 w-full rounded-sm cursor-pointer' type="submit" value="SignUp" />
                        </div>
                    </form>
                    <div>
                        <p className='text-center dark:text-white'>Already have an account? <Link to={'/signin'} className='cursor-pointer text-[#153CF5]'>SignIn here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;