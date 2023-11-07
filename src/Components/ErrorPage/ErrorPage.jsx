import { Link } from 'react-router-dom';
import error from '../../assets/404-error-page-found_125755-1.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto w-full lg:h-[900px]' src={error} alt="" />
            <Link to="/"><button className='btn mt-2 lg:ml-[900px]  bg-orange-500 text-white mx-auto'>Go To Home</button></Link>
        </div>
    );
};

export default ErrorPage;