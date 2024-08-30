import { Container } from '@core/components/Container/Container';
import { Row } from '@core/components/GridSystem/Row';
import { Column } from '@core/components/GridSystem/Column';

import { useSearchParams } from 'react-router-dom';

import './ProductDetails.css';

export const ProductDetails = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('james');

  return (
    <Container className='section'>
      <Row className='product-details'>
        <Row colSpacing={3} className='product-info'>
          <Column lg={9} className='product-info--image'>
            <img src='https://cdn.thewirecutter.com/wp-content/media/2022/10/whichiphone-2048px-2684.jpg' />
          </Column>
          <Column lg={3}>
            <Row direction='column' rowSpacing={1}>
              <p>Nuevo - 234 vendidos</p>
              <h3 className='product-info--name'>Deco Reverse Sombrero Oxfor</h3>
              <p className='product-info--price'>
                $ 1.980<sup>00</sup>
              </p>
            </Row>
            <Row className='product-info--actions'>
              <button className='btn-primary'>Comprar</button>
            </Row>
          </Column>
        </Row>
        <Row className='product-description'>
          <Column lg={9}>
            <h2 className='product-description--title'>Descripcion del producto</h2>
            <p className='product-description--text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo provident, cumque assumenda
              tempore maiores odio vero beatae aspernatur dolore laboriosam, pariatur voluptate! Error voluptatum
              commodi deleniti animi unde sint. Amet corporis dicta voluptate nihil facilis quia quos necessitatibus.
              Nulla laudantium voluptatum praesentium delectus quisquam quod fugiat ea laboriosam id voluptas corporis,
              consequatur, sit quis repudiandae quae maxime sint distinctio. Veniam, ratione aperiam magnam numquam,
              deleniti sequi unde molestiae omnis, quam esse fugit. Fugit tempora ad voluptatibus velit eaque. Iusto,
              veniam quam natus ullam tenetur fugiat libero voluptatum commodi voluptatibus! Esse quasi, explicabo rerum
              illum nam praesentium laudantium sequi doloribus repellendus recusandae vel nobis, blanditiis temporibus
              unde assumenda atque accusamus, voluptates culpa sed neque. Praesentium nobis quibusdam quidem facere
              doloribus. Dolorum error itaque suscipit nesciunt, labore iure qui dolore, voluptatum at libero iste
              minima illum reiciendis, tempore minus ducimus perferendis consequatur necessitatibus quidem ipsum sequi
              molestiae voluptas distinctio! Laboriosam, iure.
            </p>
          </Column>
        </Row>
      </Row>
    </Container>
  );
};
