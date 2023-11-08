import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';


const UpdateJobPost = () => {
    const [categories, setCategories] = useState([]);
    const { user } = useContext(AuthContext);
    const id = useParams();
    const { jobTitle, postingDate, postbanner, category, postedBy, _id, description, salary, gender, eduRequirements, applied, postBy, expirationDate, statement, location, responsibilities } = useLoaderData();
    const [newExpirationDate, setNewExpirationDate] = useState(null);
 



    const handleJobUpdate = (e) => {

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

        const newJob = {
            jobTitle,
            category,
            postbanner,
            salary,
            description,
            gender,
            responsibilities,
            newExpirationDate,
            eduRequirements,
            statement,
            location
        };
        console.log(newJob);

        fetch(`http://localhost:5000/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob), 
        })
            .then(res => toast.success('Job details update successfully'))
            .catch();

    }

    const handleExpirationDateChange = (date) => {
        setNewExpirationDate(date);
    };

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])


    return (
        <div className="max-w-6xl mx-auto py-16">
            <div className="my-16 border rounded-sm p-4 px-2 md:px-4">
                <div>
                    <h2 className="font-bold text-2xl mb-4">Updates job</h2>
                    <form onSubmit={handleJobUpdate}>

                        <label className="font-bold" htmlFor="jobTitle">Job title:</label><br />
                        <input defaultValue={jobTitle} className="p-1 mb-4 rounded border w-full" required type="text" name='jobTitle' placeholder="Job title" /> <br />
                        <label className="font-bold" htmlFor="postbanner">Post banner</label><br />
                        <input defaultValue={salary} className="p-1 mb-4 rounded border w-full" required type="text" name='postbanner' placeholder="job post banner" /> <br />
                        <label className="font-bold" htmlFor="salary">Salary</label><br />
                        <input defaultValue={salary} className="p-1 mb-4 rounded border w-full" required type="text" name='salary' placeholder="Salary amount" /> <br />
                        <label className="font-bold" htmlFor="location">Location</label><br />
                        <input defaultValue={location} className="p-1 mb-4 rounded border w-full" required type="text" name='location' placeholder="Location" /> <br />
                        <label className="font-bold" htmlFor="eduRequirements">Educational Requirements</label><br />
                        <input defaultValue={eduRequirements} className="p-1 mb-4 rounded border w-full" required type="text" name='eduRequirements' placeholder="Enter educational requirements" /> <br />

                        <label className="font-bold" htmlFor="jobCategory">Job category</label><br />
                        <select id="category" name="category" className="p-1 mb-4 rounded border w-full">
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
                        <label className="font-bold" htmlFor="newExpirationDate">Expiration Date:</label><br />
                        <DatePicker
                            selected={newExpirationDate} // Use lowercase "newExpirationDate"
                            onChange={handleExpirationDateChange}
                            className="p-1 mb-4 rounded border w-full"
                        /><br />
                        <label className="font-bold" htmlFor="statement">Statement</label><br />
                        <textarea defaultValue={statement} className="h-20 p-1 mb-4 rounded border w-full" type="text" name='statement' placeholder="Statement" /> <br />
                        <textarea defaultValue={description} className="h-44 p-1 mb-4 rounded border w-full" type="text" name='description' placeholder="Job short description" /> <br />
                        <label className="font-bold" htmlFor="responsibilities">Responsibilities</label><br />
                        <textarea defaultValue={responsibilities} className="h-20 p-1 mb-4 rounded border w-full" type="text" name='responsibilities' placeholder="Responsibilities" /> <br />
                        <input className="p-1 mb-4 rounded bg-blue-700 w-full text-white" type="submit" value={'Post'} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateJobPost;
