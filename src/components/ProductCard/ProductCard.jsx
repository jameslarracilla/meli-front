import { useNavigate } from 'react-router-dom';

import { Row } from '@core/components/GridSystem/Row';
import { Column } from '@core/components/GridSystem/Column';
import { TbTruckDelivery } from 'react-icons/tb';

import { formatCurrency } from '../../utils/utils';

import { PATHS } from '../../utils/constants';

import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const { id, title, price, place, picture, free_shipping } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${PATHS.ITEMS}/${id}`);
  };

  return (
    <Row key={id} className='product-card' colSpacing={2} justifyContent='space-between' onClick={handleClick}>
      <Column lg={8}>
        <Row colSpacing={5}>
          <Column lg={4} className='product-card--img'>
            <img src={picture} />
          </Column>
          <Column lg={7}>
            <h3 className='product-card--price'>
              {formatCurrency(price)}
              <sup>{price.decimals}</sup>
              {free_shipping && (
                <span>
                  <TbTruckDelivery />
                </span>
              )}
            </h3>
            <p>{title}</p>
          </Column>
        </Row>
      </Column>
      <Column lg={3} className='product-card--place'>
        {place}
      </Column>
    </Row>
  );
};
