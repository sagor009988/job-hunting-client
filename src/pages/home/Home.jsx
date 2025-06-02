import { Helmet } from 'react-helmet';

import SignUpBanner from '../../components/banner/SignUpBanner';
import Bolgs from '../../components/bolgs/Blogs';
import Campaign from '../../components/campaign/Campaign';
import FeaturedCities from '../../components/featuredCities/FeaturedCities';
import HowWork from '../../components/howWork/HowWork';
import JobTabs from '../../components/jobTabs/JobTabs';
import Banner2 from '../../components/banner/Banner';


const Home = () => {
    return (
        <div className='bg-yellow-100'>
            <Helmet>
                <title>Job Hub || Home</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div>
                <Banner2></Banner2>
            </div>
            <div>
                <HowWork />
            </div>
            <div className='bg-white  dark:bg-black dark:text-white p-4 rounded'>
                {
                    <JobTabs />
                }
            </div>
            <div>
                <Campaign />
            </div>
            <div>
                <FeaturedCities />
            </div>
            <div>
                <SignUpBanner />
            </div>
            <div>
                <Bolgs />
            </div>
        </div>
    );
};

export default Home;

