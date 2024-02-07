import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from '@mui/material';
import { useState } from "react";


const HomeSectionCarousel = ({data,sectionName}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({item}) => setActiveIndex(item);

    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 5 },
    };

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    return (
        <div className='border'>
        <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    disableButtonsControls
                    disableDotsControls
                    items={items}
                    activeIndex={activeIndex}
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                />
                {activeIndex != 0 && <Button onClick={slideNext} variant='contained' className='z-50' sx={{ position: 'absolute', top: '8rem', left: '0rem', transform: 'translate(50%) rotate(90deg)', bgcolor: 'white' }} aria-label='next'>
                    <ArrowForwardIosIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>}
                {activeIndex !== items.length - 5 && <Button variant='contained' className='z-50' onClick={slidePrev} sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translate(50%) rotate(90deg)', bgcolor: 'white' }} aria-label='next'>
                    <ArrowForwardIosIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarousel



