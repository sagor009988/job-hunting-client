import { Link, NavLink } from "react-router-dom";
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className="bg-slate-500 text-white border-t py-16">
            <div className="grid grid-cols-1 md:grid-cols-6 justify-between gap-6 max-w-6xl mx-auto">
                <div className="col-span-2 text-black">
                    <h2 className="text-3xl font-bold  mb-6">Job News</h2>
                    
                    <div className="flex gap-4 mt-4 text-black">
                        <Link><BsFacebook className=" text-2xl" /></Link>
                        <Link><AiFillTwitterCircle className=" text-2xl" /></Link>
                        <Link><AiFillInstagram className="text-2xl" /></Link>
                    </div>
                </div>
                <div className="text-black">
                    <h2 className="text-black mb-6 font-bold text-xl">Company</h2>
                    <div className="flex flex-col">
                        <NavLink className="text-black text-[18px] mb-6">Home</NavLink>
                        <NavLink className="text-black text-[18px] mb-6">Jobs</NavLink>
                        <NavLink className="text-black text-[18px] mb-6">Contact</NavLink>
                        <NavLink className="text-black text-[18px] mb-6">Find salaries</NavLink>
                    </div>
                </div>
                <div className="text-black">
                    <h2 className="text-black mb-6 font-bold text-xl">Help</h2>
                    <div className="flex flex-col">
                        <NavLink className="text-black text-[18px] mb-6">Customer Support</NavLink>
                        <NavLink className="text-black text-[18px] mb-6">Delivery Details</NavLink>
                        <NavLink className="text-black text-[18px] mb-6">Terms & Conditions</NavLink>
                        <NavLink className="text-black text-[18px] mb-6">Privacy Policy</NavLink>
                    </div>
                </div>
                <div className="col-span-2">
                    <h2 className="text-black mb-6 font-bold text-xl">Newsletter</h2>
                    <div className="flex justify-end">
                        <input className="py-2 w-full px-2 rounded-l-sm border" placeholder="Enter your email" type="email" />
                        <input className="py-2 px-6 bg-[#D2DE32] rounded-r-sm text-white" type="submit" value="SignUp" />
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto text-white text-center border-t py-4">
                <p className="text-black">All &copy; Copyright reserved by Job Hub</p>
            </div>
        </div >
    );
};

export default Footer;