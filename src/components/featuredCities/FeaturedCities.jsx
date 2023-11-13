

const FeaturedCities = () => {
    return (
        <div className="bg-[#F2F4FF] py-16">
            <div className="max-w-6xl mx-auto">
                <div className='flex items-start flex-col'>
                    <h2 className='text-4xl text[#020A31] font-bold mb-2'>Featured Cities</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                    <div className="bg-white rounded-lg p-4">
                        <img className="w-full" src="https://i.ibb.co/mtx6p75/Rectangle-664-3.png" alt="" />
                        <div className="mt-4">
                            <h2 className="font-bold text-black">Alabama ,USA</h2>
                            <p>50 Jobs</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <img className="w-full" src="https://i.ibb.co/DQZ7brL/Rectangle-664-2.png" alt="" />
                        <div className="mt-4">
                            <h2 className="font-bold text-black">Silicon valley,USA</h2>
                            <p>23 Jobs</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <img className="w-full" src="https://i.ibb.co/gvPdKZ3/Rectangle-664-1.png" alt="" />
                        <div className="mt-4">
                            <h2 className="font-bold text-black">Arkansas,USA</h2>
                            <p>40 Jobs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCities;