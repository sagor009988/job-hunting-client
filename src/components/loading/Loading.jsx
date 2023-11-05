import Lottie from 'lottie-react';
import loading from './loading.json';

const Loading = () => {
    const containerStyle = {
        width: '50px',
        height: '50px',
    };

    return (
        <div className="flex items-center justify-center w-full h-[90vh] bg-white p-4  opacity-50 absolute top-0 right-0">
            <div style={containerStyle}>
                <Lottie
                    animationData={loading}
                    loop={true}
                    autoplay={true}
                    width={50}
                    height={50}
                />
            </div>
        </div>
    );
};

export default Loading;