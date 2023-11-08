import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiTime } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { toast } from "react-toastify";
import swal from "sweetalert";


const MyJob = ({ job }) => {
    const { _id, jobTitle, category, postbanner, salary, description, gender, qualification, eduRequirements, applied, postBy, postEmail, expirationDate, statement, location } = job;

    function calculateRemainingTime() {
        const currentDate = new Date();
        const expirationDateObject = new Date(expirationDate);

        if (expirationDateObject <= currentDate) {
            return 'Expired';
        } else if (!isNaN(expirationDateObject)) {
            const timeDifference = expirationDateObject - currentDate;
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);

            return `${daysDifference}d ${hoursDifference}h ${minutesDifference}m ${secondsDifference}s remaining`;
        } else {
            console.error('Invalid expirationDate format.');
            return 'Invalid date format';
        }
    }
    // show real time
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

    useEffect(() => {
        if (remainingTime !== 'Expired') {
            const interval = setInterval(() => {
                try {
                    setRemainingTime(calculateRemainingTime());
                } catch (error) {
                    console.error('Error calculating remaining time:', error);
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [remainingTime]);


    // const handleDeteleJob = (_id) => {
    //     fetch(`https://brand-server-pi.vercel.app/jobsDelete/${_id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => toast.success('Job deleted successfully.'))
    //         .then(data => console.log(data))
    // }


    const handleDeteleJob = _id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(willDelete => {
            if (willDelete) {

                fetch(`https://brand-server-pi.vercel.app/jobsDelete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => toast.success('Job deleted successfully.'))
                    .then(data => {
                        console.log(data);
                        swal("Poof! Your product has been deleted!", {
                            icon: "success",
                        })
                            .then()
                    })

                    .catch(error => {
                        console.error("Error deleting the product: ", error);
                    });
            }
        });
    }


    return (
        <div key={_id} className='bg-white dark-bg-[#26272D]'>
            <div className='flex mt-6 p-4 border shadow-sm rounded justify-between'>
                <div className='flex gap-1 md:gap-2'>
                    <div>
                        <img className='w-[60px] md:w-[80px]' src={postbanner} alt={postbanner} />
                    </div>
                    <div className='flex gap-0 md:gap-4 flex-col justify-center'>
                        <h2 className='text-xl font-semibold text-[16px] md:text-base'>{jobTitle}</h2>
                        <div className='flex gap-2 md:gap-6 items-center'>
                            <p className='text-[#45A600] font-semibold hidden md:visible'>
                                {postBy}
                            </p>
                            <div className='hidden md:flex gap-1 top-0 right-0  font-semibold items-center text-[10px] md:text-base'>
                                <BiTime />
                                {
                                    remainingTime == 'Expired' ? <p className="text-[red]">{remainingTime}</p> : <p>{remainingTime}</p>
                                }
                            </div>
                            <div className='hidden md:flex gap-1 top-0 right-0  font-semibold items-center text-[10px] md:text-base'>
                                <BiTime />
                                <p>$ Salary: {salary}</p>
                            </div>
                            <div className='flex gap-1 font-semibold items-center text-[10px] md:text-base'>
                                <CiLocationOn />
                                <p>{location}</p>
                            </div>
                            <div className='flex gap-1 font-semibold items-center text-[10px] md:text-base'>
                                <BsPeople />
                                <p>Applied: {applied} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <Link to={`/updatesjob/${_id}`} className='border-[#153CF5] border py-1 px-2 md:px-4 rounded-sm hover.bg-[#153CF5] hover.text-white block text-[10px] md:text-base'>
                            Update
                        </Link>
                    </div>
                    <div>
                        <button onClick={() => handleDeteleJob(_id)} className=' border py-1 px-2 md:px-4 rounded-sm bg-[red]  text-white block text-[10px] md:text-base'>
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default MyJob;