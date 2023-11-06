import Carousel from 'react-bootstrap/Carousel';

import './CarrouselImagens.css'

import Foto1 from '../../public/1.jpg'
import Foto2 from '../../public/2.jpg'
import Foto3 from '../../public/3.jpg'

function CarrouselImagens () {
  

  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={Foto1}/>
        
        <Carousel.Caption>
          <h3>Cimento</h3>
          <p>Sacos a partir de 20 reais.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Foto2}/>
        
        <Carousel.Caption>
          <h3>Furadeira</h3>
          <p>ótima qualidade por preços mínimos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Foto3}/>
       
        <Carousel.Caption>
          <h3>Caminhões de cimento</h3>
          <p>
            Alugamos para quem precisar.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarrouselImagens
