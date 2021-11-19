/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

const CarouselItem = ({ src, alt }: { src: string, alt: string }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

const items = [
  {
    src: '/dualapanbubbletea.png',
    alt: 'Dualapan Bubbletea',
  },
  {
    src: '/dualapanbubbletea.png',
    alt: 'Dualapan Bubbletea',
  },
  {
    src: '/dualapanbubbletea.png',
    alt: 'Dualapan Bubbletea',
  },
  {
    src: '/dualapanbubbletea.png',
    alt: 'Dualapan Bubbletea',
  },
];

const MainCarousel = () => {
  return (
    <Carousel className='w-full' ariaLabel='Showcase'>
      {
        items.map( (item, i) => <CarouselItem key={i} src={item.src} alt={item.alt} /> )
      }
    </Carousel>
  );
};

export default MainCarousel;
