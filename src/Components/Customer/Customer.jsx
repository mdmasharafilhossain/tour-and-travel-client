

const Customer = () => {
    return (
        <div>
          <h2 className="text-center text-orange-600   text-5xl font-bold mt-20 my-20">Our Customer Review</h2>  

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-14 gap-20 md:gap-10 lg:gap-10 pb-10 container mx-auto mb-10 mt-5">
              
          <div className="border-2 border-orange-600 rounded-xl ">
            <div className="py-10 px-10">
                <img className="mx-auto pb-5 relative -mt-24" src="https://i.ibb.co/g4zJ7q7/comment-people-1.png"alt="" />
                <p className="text-justify">We recently took the tour, and it exceeded our expectations! The guide was knowledgeable and engaging, and the itinerary was well-planned. We got to see all the highlights and even some hidden gems. It was a fantastic experience, and I highly recommend it to anyone looking for a great tour.</p>
                <h1 className="text-center font-bold text-xl mt-5">Sourav</h1>

            </div>
        </div>
          <div className="border-2 border-orange-600 rounded-xl ">
            <div className="py-10 px-10">
                <img className="mx-auto pb-5 relative -mt-24" src="https://i.ibb.co/swXD40B/comment-people-4.png"alt="" />
                <p className="text-justify">Amazing tour! The guide made the history and culture of the place come to life. We had a fantastic time and learned so much. The tour was very well-organized, and the small group size made it feel personalized. I can't say enough good things about it. A must-do when visiting the area!</p>
                <h1 className="text-center font-bold text-xl mt-5">Soumita</h1>

            </div>
        </div>
          <div className="border-2 border-orange-600 rounded-xl ">
            <div className="py-10 px-10">
                <img className="mx-auto pb-5 relative -mt-24" src="https://i.ibb.co/Cs2cLjg/comment-people-5.png"alt="" />
                <p className="text-justify">"We had an incredible time on this tour. The tour guide was not only informative but also passionate about the destination. The tour was well-paced, allowing us to take in all the sights without feeling rushed. It was an unforgettable experience, and I'm so glad we chose this tour for our vacation."</p>
                <h1 className="text-center font-bold text-xl mt-5">Mohasin</h1>

            </div>
        </div>
          <div className="border-2 border-orange-600 rounded-xl ">
            <div className="py-10 px-10">
                <img className="mx-auto pb-5 relative -mt-24" src="https://i.ibb.co/Z8M4SWM/comment-people-2.png"alt="" />
                <p className="text-justify">"I can't express how much we enjoyed this tour. It was the highlight of our trip. The tour company provided top-notch service, and the guide's expertise was evident throughout. We felt like we got a deep understanding of the area's history and culture. I would book this tour again without hesitation."</p>
                <h1 className="text-center font-bold text-xl mt-5">Motia</h1>

            </div>
        </div>

            </div>
        </div>
    );
};

export default Customer;