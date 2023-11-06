

const SignUpBanner = () => {
    return (
        <div className="bg-[#020A31] py-16">
            <div className="max-w-6xl mx-auto py-8 items-center grid grid-cols-1 md:grid-cols-2 justify-between">
                <div>
                    <h2 className="text-4xl text-white font-bold">Your Dream Jobs Are Waiting</h2>
                    <p className="text-white mt-2">Unlock Your Career Aspirations Now</p>
                </div>
                <div className="flex justify-end">
                    <input className="py-2 w-3/6 px-2 rounded-l-sm" placeholder="Enter your email" type="email" />
                    <input className="py-2 px-6 bg-[#153CF5] rounded-r-sm text-white" type="submit" value="SignUp" />
                </div>
            </div>
        </div>
    );
};

export default SignUpBanner;