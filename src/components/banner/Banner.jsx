

const Banner = () => {
    return (
        <div>
            <div className="bg-[url(https://i.ibb.co/WkTPt6h/slider4-removebg-preview-1.png)] h-screen w-full bg-cover bg-center bg-[#F2F4FF] flex items-center">
                <div className="flex items-center justify-center h-screen w-full max-w-6xl mx-auto">
                    <div className="w-full">
                        <h1 className="text-5xl font-extrabold dark:text-white text-[#26272D] leading-[3.5rem]">Jobs for <span className="text-[#153CF5]">Developers</span> <br /> Designers and Marketers</h1>
                        <p>Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
                        <div className="my-8">
                            <input className="p-2 w-1/3 focus:outline-0 rounded-l-sm" placeholder="Search job with name" type="text" name="serach" />
                            <input className="p-2 rounded-r-sm bg-[#153CF5] w-28 text-white" type="submit" value="Search" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;