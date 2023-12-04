
import banner from '../../assets/banner.png'

const Banner2 = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src={banner} className="w-full h-96 rounded-md" />
  </div> 
  <div className='absolute  '>
    <h1 className='text-5xl bg-gradient-to-r py-3 rounded-md from-[#151515] to-[rgba(21,21,21,0)] text-white font-bold'>We Are Provide All Categoris Job Info</h1>
   <div className=' flex gap-7'>
    <div>
    <h2 className='text-3xl font-semibold text-red-600'>Visit Our Page to Get best Job</h2> 
    <h3 className='text-2xl font-semibold text-red-600'>Find a job on Categors Wise</h3>
    </div>
    
   </div>
  </div>

  
</div>
    );
};

export default Banner2;