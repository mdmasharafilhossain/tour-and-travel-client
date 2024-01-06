

const MyScheduleDetails = ({ myShe }) => {
    const { Image, name, ServiceEmail, Price, date } = myShe;
    return (
        <div >
            <div className="flex  border-2 rounded-lg gap-10 border-orange-600">
               {/* Image div */}
                 <div className="flex-1">
                    <img className="w-72 h-60" src={Image} alt="" />
                 </div>

                 {/* text div */}
                <div className="space-y-2 pr-8 flex-1">
                     <h1 className="text-2xl font-bold text-orange-600">{name}</h1>
                     <p className="font-bold text-lg">Service Provider Email: {ServiceEmail}</p>
                     <h1 className="font-bold text-lg">Cost: ${Price}</h1>
                     <h1 className="font-bold text-lg">Date: {date}</h1>
                     <button className="btn w-full bg-orange-600 text-white">Cancel Bookings</button>
                </div>
            </div>
        </div>
    );
};

export default MyScheduleDetails;