import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Button } from '@mui/material';



const HomeSectionCarousel = () => {

    const [activeIndex,setActiveIndex] = React.useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 5 },
    };
    
    const slidePrev=() =>{
        setActiveIndex(activeIndex-1);
    }

    const slideNext=() =>{
        setActiveIndex(activeIndex+1);
    }
    
    const syncActiveIndex=({item}) => setActiveIndex(item);

    const items = [1, 1, 1, 1, 1, 1, 1, 1].map((items) => <HomeSectionCard />);
    
    return (
        <div className='relative px-4 lg:px-8'>
            <div className='relative p-5'>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    disableButtonsControls
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                <Button onClick={slideNext} variant='contained' className='z-50' sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translate(50%) rotate(90deg)', bgcolor: 'white' }} aria-label='next'>
                    <ArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>
                <Button onClick={slidePrev} variant='contained' className='z-50' sx={{ position: 'absolute', top: '8rem', left: '0rem', transform: 'translate(50%) rotate(90deg)', bgcolor: 'white' }} aria-label='next'>
                    <ArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                </Button>
            </div>
        </div>
    )
}

export default HomeSectionCarousel
