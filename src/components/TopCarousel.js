import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CardRow from './CardRow';

const TopCarousel = () => {
  return (
    <Carousel variant="dark" style={{ padding : '6.5rem' ,marginTop:'-5rem'}}>
      <Carousel.Item>
          <CardRow/>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default TopCarousel;