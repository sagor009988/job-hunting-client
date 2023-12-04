

const Campaign = () => {
    return (
        <div className="max-w-6xl mx-auto py-16">
            <div className="flex flex-col gap-8 md:gap-4 md:flex-row items-center justify-end py-16">
                <div className="flex-1 order-last md:order-first">
                    <h2 className='text-4xl text-[#020A31] text-center md:text-left font-bold mb-4'>
                        Check out our <span className="text-[#D2DE32]">Job Board</span> to discover <br /> great companies that are already hiring
                    </h2>
                </div>
                <div className="flex order-first md:order-last justify-center md:justify-end">
                    <img className="w-2/4 md:w-3/4 object-contain" src="https://i.ibb.co/R0Wjw1g/Group-39471.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Campaign;