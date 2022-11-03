import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import BannerItem from './BannerItem';

const Banner = () => {

    const bannerData = [
        {
            image: img1,
            id: 1,
            preb: 6,
            next: 2
        },
        {
            image: img2,
            id: 2,
            preb: 1,
            next: 3
        },
        {
            image: img3,
            id: 3,
            preb: 2,
            next: 4
        },
        {
            image: img4,
            id: 4,
            preb: 3,
            next: 5
        },
        {
            image: img5,
            id: 5,
            preb: 4,
            next: 6
        },
        {
            image: img6,
            id: 6,
            preb: 5,
            next: 1
        },
    ]

    return (
        <div className="carousel w-full mb-16">

            {
                bannerData.map( item => <BannerItem key={item.id} item={item}></BannerItem>)
            }





            {/* <div id="slide1" className="carousel-item relative w-full">
                <div className='img-carosel'>
                    <img alt="" src={img1} className="w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4 ">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br />
                        Price For <br />
                        Servicing <br />
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-1/2 ">
                    <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4 ">

                    <button className="btn btn-warning mr-5">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt="" src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt="" src={img3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img alt="" src={img4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;