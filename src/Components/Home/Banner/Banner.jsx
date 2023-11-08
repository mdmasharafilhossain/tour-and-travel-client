

const Banner = () => {
    return (
        <div>
            <div className="carousel lg:w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img  src="https://i.ibb.co/fvKy2DL/baanner1.jpg" className="w-full h-[890px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn bg-orange-600 hover:bg-orange-500 border-none btn-circle">❮</a>
                        <a href="#slide2" className="btn bg-orange-600 hover:bg-orange-500 border-none btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/wMzjK0x/banner2.jpg" className="w-full h-[890px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn bg-orange-600 hover:bg-orange-500 btn-circle">❮</a>
                        <a href="#slide3" className="btn bg-orange-600 hover:bg-orange-500 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/fHynmDF/banner3.jpg" className="w-full h-[890px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn bg-orange-600 hover:bg-orange-500 btn-circle">❮</a>
                        <a href="#slide4" className="btn bg-orange-600 hover:bg-orange-500 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/NL6fFDZ/bannner4.jpg" className="w-full h-[890px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn bg-orange-600 hover:bg-orange-500 btn-circle">❮</a>
                        <a href="#slide1" className="btn bg-orange-600 hover:bg-orange-500 btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;