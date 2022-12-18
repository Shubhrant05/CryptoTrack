import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import TopCard from './topcard';
import img1 from '../Images/crypto.jpg'

const TopCarouselMobile = () => {
  return (
    <Carousel variant="dark" style={{ padding : '2.5rem' ,marginTop:'-2rem',marginLeft: '-2.5rem',
    width: 'fit-content'}}>
      <Carousel.Item>
      <TopCard img1 = {img1}  title = "Take a quiz!" content = "Learn and earn $CKB"/>
      </Carousel.Item>
      <Carousel.Item>
      <TopCard img1 = {img1} title = "Portfolio" content = "Track your trades in one place,not all over the place" />
      </Carousel.Item>
      <Carousel.Item>
      <TopCard img1 = {img1} title = "Portfolio" content = "Track your trades in one place,not all over the place"/>
      </Carousel.Item>      
    </Carousel>
  );
}

export default TopCarouselMobile;