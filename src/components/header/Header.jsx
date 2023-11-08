import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { GrClose } from 'react-icons/gr';
import { HiBars3 } from 'react-icons/hi2';
import { IoIosLogOut } from 'react-icons/io';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { AuthContext } from "../../providers/AuthProvider";
import { useTheme } from "../../hooks/useTheme";



const Header = () => {
    const { signOutUser, user } = useContext(AuthContext);
    const [menu, setMenu] = useState(false);
    // user signout handle
    const handleSignOutUser = () => {
        signOutUser()
            .then(res => toast.success('Logout successfully.'))
    }

    // theme 

    const { changeTheme, setMode, mode } = useTheme();


    return (
        <div className="bg-[#153CF5] shadow-md">
            {/* mobile and tablet navbar */}
            <nav className="md:flex justify-between items-center py-2 max-w-6xl mx-auto flex lg:hidden p-2 lg:px-0">
                <ul>
                    <li><NavLink className={'text-xl font-extrabold'}><p className='text-2xl text blod font-bold text-white'>LOGO</p>
                    </NavLink></li>
                </ul>
                <ul>
                    <div className="flex gap-3 items-center">
                        {
                            user ? <>
                                <li className="text-center uppercase">
                                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active font-semibold text-[10px]" : "text-white"}>{user?.displayName}</NavLink>
                                </li>
                                <li>
                                    <img className="w-[30px] h-[30px] rounded-full" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/8xpdsJy/user-demo.png'} alt="" />
                                </li>
                            </> : ''
                        }
                        <HiBars3 onClick={() => setMenu(!menu)} className="text-2xl text-white" />
                    </div>

                    <ul className={menu ? "flex items-center gap-6 relative" : 'hidden'}>
                        <ul className={'flex shadow-sm flex-col justify-center absolute -top-9 z-10 bg-white items-center -right-2 h-[100vh] gap-4 w-[300px]'}>
                            <GrClose onClick={() => setMenu(!menu)} className={'absolute top-4 left-2 z-10'} />

                            <li className="text-xl">
                                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-white font-semibold" : ""}>Home</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/jobpost" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-white font-semibold" : ""}>Post a job</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/applied" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-white font-semibold" : ""}>applied</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to={`/myjob`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-white font-semibold" : ""}>My jobs</NavLink>
                            </li>
                            {
                                user ? <>
                                    <li className="text-xl">
                                        <NavLink onClick={handleSignOutUser} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "text-white"}>Logout</NavLink>
                                    </li>
                                </> :
                                    <>
                                        <li className="text-xl">
                                            <NavLink to="/signin" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-white font-semibold" : "text-white"}>Signin</NavLink>
                                        </li>
                                    </>
                            }
                        </ul>
                    </ul>
                </ul>
            </nav>

            {/* desktop navbar  */}
            <nav className="md:hidden justify-between items-center py-2 max-w-6xl mx-auto hidden lg:flex">
                <ul>
                    <li><NavLink className={'text-xl font-extrabold'}><p className='text-2xl text blod font-bold text-white'>TECH ZONE</p>
                    </NavLink></li>
                </ul>
                <ul className="flex items-center gap-6">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-white font-semibold" : "text-white"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/jobpost" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-white font-semibold" : "text-white"}>Post a job</NavLink>
                    </li>
                    <li>
                        <NavLink to="/applied" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-white font-semibold" : "text-white"}>applied</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/myjob`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-white font-semibold" : "text-white"}>My jobs</NavLink>
                    </li>
                    {
                        user ? <>
                            <ul className="flex gap-1 items-center">
                                <li>
                                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-white font-semibold" : "text-white"}>{user?.displayName}</NavLink>
                                </li>
                                <li>
                                    <img className="w-[30px] h-[30px] rounded-full" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/8xpdsJy/user-demo.png'} alt="" />
                                </li>
                            </ul>
                            <li>
                                <NavLink onClick={handleSignOutUser} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active font-semibold" : "text-white"}><IoIosLogOut className="text-[1.3rem] text-white" /></NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to="/signin" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-white font-semibold" : "text-white"}>Signin</NavLink>
                                </li>
                            </>
                    }
                    <li className="text-white cursor-pointer">
                        {
                            mode == "light" ? <BsMoonStars onClick={() => changeTheme()} /> : <BsSun onClick={() => changeTheme()} />
                        }
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Header;