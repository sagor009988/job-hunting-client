import { useEffect, useState } from 'react';
import Blog from './Blog';
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch(`https://server-gqpyn78t7-sohel-ranas-projects-3e3e749a.vercel.app`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto">
                <div className='flex items-start flex-col'>
                    <h2 className='text-4xl text[#020A31] font-bold mb-2'>Read our blog</h2>
                    <p>Dive into our blog for insightful content on diverse topics. Stay informed and entertained with our engaging articles.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                    {
                        blogs?.map((blg, idx) => <Blog key={idx} blg={blg} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;




