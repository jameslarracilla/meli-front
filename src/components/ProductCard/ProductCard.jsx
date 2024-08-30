import { Row } from '@core/components/GridSystem/Row';
import { Column } from '@core/components/GridSystem/Column';

import './ProductCard.css';

export const ProductCard = ({ id, name, price, place, imgSrc }) => {
  return (
    <Row key={id} className='product-card' colSpacing={2} justifyContent='space-between'>
      <Column lg={8}>
        <Row colSpacing={1.5}>
          <Column lg={4} className='product-card--img'>
            <img src={imgSrc} />
          </Column>
          <Column lg={7}>
            <h3 className='product-card--price'>{price}</h3>
            <p>{name}</p>
          </Column>
        </Row>
      </Column>
      <Column lg={3} className='product-card--place'>
        {place}
      </Column>
    </Row>
  );
};
