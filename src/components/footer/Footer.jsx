import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-[#020A31] py-16">
            <div className="grid grid-cols-1 md:grid-cols-6 justify-between gap-6 max-w-6xl mx-auto">
                <div className="col-span-2">
                    <h2 className="text-4xl font-bold text-[#F5F7FF] mb-6">LOGO</h2>
                    <p className="w-2/3 text-[#F5F7FF]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className="text-[#94A3B8]">
                    <h2 className="text-[#94A3B8] mb-6 font-bold text-xl">Company</h2>
                    <div className="flex flex-col">
                        <NavLink className="text-[#94A3B8] text-[18px] mb-6">Home</NavLink>
                        <NavLink className="text-[#94A3B8] text-[18px] mb-6">Jobs</NavLink>
                        <NavLink className="text-[#94A3B8] text-[18px] mb-6">Contact</NavLink>
                        <NavLink className="text-[#94A3B8] text-[18px] mb-6">Find salaries</NavLink>
                    </div>
                </div>
                <div className="text-[#94A3B8]">
                    <h2 className="text-[#94A3B8] mb-6 font-bold text-xl">Help</h2>
                    <div className="flex flex-col">
                        <NavLink className="text-[#94A3B8] text-[18px] mb-6">Customer Support</NavLink>
                        <NavLink className="text-[#94A3B8] text-[18px] mb-6">Delivery Details</NavLink>
                        <NavLink className="text-[#94A3B8] text-[18px] mb-6">Terms & Conditions</NavLink>
                        <NavLink className="text-[#94A3B8] text-[18px] mb-6">Privacy Policy</NavLink>
                    </div>
                </div>
                <div className="col-span-2">
                    <h2 className="text-[#94A3B8] mb-6 font-bold text-xl">Newsletter</h2>
                    <div className="flex justify-end">
                        <input className="py-2 w-full px-2 rounded-l-sm" placeholder="Enter your email" type="email" />
                        <input className="py-2 px-6 bg-[#153CF5] rounded-r-sm text-white" type="submit" value="SignUp" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;