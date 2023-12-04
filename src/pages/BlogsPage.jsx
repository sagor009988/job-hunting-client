
import { Helmet } from 'react-helmet';
import Blogs from './../components/bolgs/Blogs';

const BlogsPage = () => {
    return (
        <div>
            <Helmet>
                <title>Job news | Blogs</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <Blogs />
        </div>
    );
};

export default BlogsPage;