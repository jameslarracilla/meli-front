import { Container } from '@core/components/Container/Container';
import { Row } from '@core/components/GridSystem/Row';
import { ProductCard } from '../../components/ProductCard/ProductCard';

import './ProductsResults.css';

export const ProductsResults = () => {
  return (
    <Container className='section'>
      <Row className='products-results' direction='row'>
        <ProductCard
          id='1'
          name='Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!'
          imgSrc='https://cdn.thewirecutter.com/wp-content/media/2022/10/whichiphone-2048px-2684.jpg'
          price='$15.00'
          place='Capital Federal'
        />
        <ProductCard
          id='2'
          name='Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!'
          imgSrc='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818'
          price='$15.00'
          place='Capital Federal'
        />
      </Row>
    </Container>
  );
};
