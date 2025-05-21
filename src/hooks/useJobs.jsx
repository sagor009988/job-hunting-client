import axios from 'axios';

import { useQuery } from 'react-query';

const useJobs = () => {
    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            try {
                const response1 = await axios.get('https://server-navy-theta.vercel.app/jobs'); 
                const response2 = await axios.get('https://server-navy-theta.vercel.app/categories');
                // send response
                if (response1.status !== 200 || response2.status !== 200) {
                    throw new Error('Network response was not ok');
                }

                const jobs = response1.data;
                const categories = response2.data;
                return { categories, jobs };
            } catch (error) {
                throw new Error('Network request failed: ' + error.message);
            }
        },
    });
    return { data, isLoading, isFetching, refetch };
};

export default useJobs;


