import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../image/banner1.jpg'
import banner2 from '../../../image/banner2.jpg'
import banner3 from '../../../image/banner3.jpg'
import banner4 from '../../../image/banner4.jpg'
import banner5 from '../../../image/banner5.jpg'
import banner6 from '../../../image/banner6.jpg'
import banner7 from '../../../image/banner7.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div >
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;