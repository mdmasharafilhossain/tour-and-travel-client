

const Special = () => {
    return (
        <div>
            <div className="">
            <h2 className="text-center text-orange-600   text-5xl font-bold mt-20 ">What Makes Us Special?</h2>
            <div className="flex border-2 border-orange-600 py-20 mt-10 flex-col md:flex-row lg:flex-row lg:gap-20 shadow-lg justify-center">
                <div className="text-center">
                   <img className="mx-auto" src="https://i.ibb.co/b2H9mdx/logo1.png" alt="" />
                    <h1 className="font-bold text-2xl">Local Expert Guides</h1>
                   {/* <img src="https://i.ibb.co/S7Jgz9p/logo2.png" alt="" />
                   <img src="https://i.ibb.co/jwmBsbc/logo3.png" alt="" /> */}

                </div>
                <div className="text-center mt-3">
                   <img className="mx-auto" src="https://i.ibb.co/S7Jgz9p/logo2.png" alt="" />
                    <h1 className="font-bold text-2xl">Handpicked Adventures</h1>
                   {/* <img src="https://i.ibb.co/S7Jgz9p/logo2.png" alt="" />
                   <img src="https://i.ibb.co/jwmBsbc/logo3.png" alt="" /> */}

                </div>
                <div className="text-center mt-3">
                   <img className="mx-auto" src="https://i.ibb.co/jwmBsbc/logo3.png" alt="" />
                    <h1 className="font-bold text-2xl">Hidden Gem Destinations</h1>
                   {/* <img src="https://i.ibb.co/S7Jgz9p/logo2.png" alt="" />
                   <img src="https://i.ibb.co/jwmBsbc/logo3.png" alt="" /> */}

                </div>


                


            </div>
            </div>
        </div>
    );
};

export default Special;