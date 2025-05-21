import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const JobPost = () => {
    const [categories, setCategories] = useState([]);
    const { user } = useContext(AuthContext);
    const [expirationDate, setExpirationDate] = useState(null);


    const handleJobPost = (e) => {
        e.preventDefault();
        const form = e.target;

        const jobTitle = form.jobTitle.value;
        const category = form.category.value;
        const postbanner = form.postbanner.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const gender = form.gender.value;
        const responsibilities = form.responsibilities.value;
        const eduRequirements = form.eduRequirements.value;
        const statement = form.statement.value;
        const location = form.location.value;
        const applied = 0;
        const postBy = user?.displayName;
        const postEmail = user?.email;

        const newJob = {
            jobTitle,
            category,
            postbanner,
            salary,
            description,
            gender,
            responsibilities,
            eduRequirements,
            applied,
            postBy,
            postEmail,
            expirationDate,
            statement,
            location
        };
 

        fetch('https://server-navy-theta.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => toast.success('Job posted successfully.'))
            .then(data => console.log(data))

    }

    const handleExpirationDateChange = (date) => {
        setExpirationDate(date);
    };

    useEffect(() => {
        fetch('https://server-navy-theta.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data);
            })
    }, [])


    return (
        <div className="max-w-6xl mx-auto py-16">
            <div className="my-16 border rounded-sm p-4 px-2 md:px-4">
                <div>
                    <h2 className="font-bold text-2xl mb-4">Post a job</h2>
                    <form onSubmit={handleJobPost}>

                        <label className="font-bold" htmlFor="jobTitle">Job title:</label><br />
                        <input className="p-1 mb-4 rounded border w-full" required type="text" name='jobTitle' placeholder="Job title" /> <br />
                        <label className="font-bold" htmlFor="postbanner">Post banner</label><br />
                        <input className="p-1 mb-4 rounded border w-full" required type="text" name='postbanner' placeholder="job post banner" /> <br />
                        <label className="font-bold" htmlFor="salary">Salary</label><br />
                        <input className="p-1 mb-4 rounded border w-full" required type="text" name='salary' placeholder="Salary amount" /> <br />
                        <label className="font-bold" htmlFor="location">Location</label><br />
                        <input className="p-1 mb-4 rounded border w-full" required type="text" name='location' placeholder="Location" /> <br />
                        <label className="font-bold" htmlFor="eduRequirements">Educational Requirements</label><br />
                        <input className="p-1 mb-4 rounded border w-full" required type="text" name='eduRequirements' placeholder="Enter educational requirements" /> <br />

                        <label className="font-bold" htmlFor="jobCategory">Job category</label><br />
                        <select id="category" name="category"  className="p-1 mb-4 rounded border w-full">
                            <option value="">Select category</option>
                            {categories.map((ctg, index) => (
                                <option key={index} value={ctg?.name}>{ctg?.name}</option>
                            ))}
                        </select> <br />
                        {/* gender */}
                        <label className="font-bold" htmlFor="jobCategory">Gender</label><br />
                        <select id="gender" name="gender" required className="p-1 mb-4 rounded border w-full">
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="male/female">Male or Female</option>
                        </select> <br />
                        <label className="font-bold" htmlFor="expirationDate">Expiration Date:</label><br />
                        <DatePicker
                            selected={expirationDate}
                            onChange={handleExpirationDateChange}
                            className="p-1 mb-4 rounded border w-full"
                        /><br />
                        <label className="font-bold" htmlFor="statement">Statement</label><br />
                        <textarea className="h-20 p-1 mb-4 rounded border w-full" type="text" name='statement' placeholder="Statement" /> <br />
                        <textarea className="h-44 p-1 mb-4 rounded border w-full" type="text" name='description' placeholder="Job short description" /> <br />
                        <label className="font-bold" htmlFor="responsibilities">Responsibilities</label><br />
                        <textarea className="h-20 p-1 mb-4 rounded border w-full"  type="text" name='responsibilities' placeholder="Responsibilities" /> <br />
                        <input className="p-1 mb-4 rounded bg-blue-700 w-full text-white" type="submit" value={'Post'} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobPost;