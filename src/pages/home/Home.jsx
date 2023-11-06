import Banner from '../../components/banner/Banner';
import SignUpBanner from '../../components/banner/SignUpBanner';
import Bolgs from '../../components/bolgs/Blogs';
import Campaign from '../../components/campaign/Campaign';
import FeaturedCities from '../../components/featuredCities/FeaturedCities';
import HowWork from '../../components/howWork/HowWork';
import JobTabs from '../../components/jobTabs/JobTabs';


const Home = () => {
    return (
        <div>
            <div>
                <Banner />
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

