
import { signInWithPopup } from 'firebase/auth';
const AboutUs = () => {
    return (
        <div className="mx-20">
            <h2 className="text-center text-orange-600   text-5xl font-bold mt-20 ">About Us</h2>
            <h1 className="text-center text-lg mt-5 mb-10">
                Welcome to Travel. your gateway to unforgettable travel experiences. We are a passionate team of adventurers, explorers, and travel enthusiasts who have come together to curate exceptional journeys for you. Our mission is simple: to provide you with the most memorable and enriching travel experiences possible.
            </h1>
            <div className="flex flex-col md:flex-row lg:flex-row flex-1">
                <div>
                    <img src="https://i.ibb.co/TPVc2fh/2-840x473.jpg" alt="" />
                </div>
                <div className="flex-1 lg:ml-10 mt-10">
                    <p className='text-2xl font-bold mb-5'>Our Story</p>
                    <h1 className='text-lg'>


                        Founded in 2000, Travel was born out of a deep love for exploration and a desire to share the beauty of the world with others. Our journey began with a single idea - to create unique, immersive, and personalized travel experiences that go beyond the ordinary. Over the years, we have grown and evolved, but our commitment to excellence and unwavering dedication to our clients have remained constant.
                    </h1>
                    <p className='text-2xl font-bold mb-5 mt-5'>What Sets Us Apart</p>
                    <h1 className='text-lg'>
                        

                        At Travel, we understand that every traveler is unique. That's why we take the time to get to know you, your interests, and your preferences. We craft our tours with care, ensuring that each adventure is tailored to your individual desires. Our team is made up of experienced travelers and destination experts who are passionate about what they do. We believe in the power of travel to transform, inspire, and connect people from all walks of life
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;