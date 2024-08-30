import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '@core/components/Container/Container';
import { Row } from '@core/components/GridSystem/Row';
import { Column } from '@core/components/GridSystem/Column';
import { NotFound } from '../NotFound/NotFound';

import { clearSelectedItem } from '../../store/items/ItemsSlice';
import { getItemByIdThunk } from '../../store/items/itemsActions';

import { formatCurrency, formatDecimals } from '../../utils/utils';

import './ProductDetails.css';

export const ProductDetails = () => {
  const { t } = useTranslation();
  const { itemId } = useParams();
  const dispatch = useDispatch();

  const { selectedItem } = useSelector(state => state.items);
  const { product } = selectedItem;
  const { item } = product;
  const isSelectedItemEmpty = Object.keys(product).length === 0;

  useEffect(() => {
    dispatch(getItemByIdThunk(itemId));
    return () => dispatch(clearSelectedItem());
  }, []);

  if (selectedItem.notFound) return <NotFound />;

  return (
    <Container className='section'>
      {!isSelectedItemEmpty && (
        <Row className='product-details'>
          <Row colSpacing={3} className='product-info'>
            <Column lg={9} className='product-info--image'>
              <img src={item?.picture} />
            </Column>
            <Column lg={3}>
              <Row direction='column' rowSpacing={1}>
                <p>
                  {t(`PRODUCT.CONDITION.${item?.condition}`)}
                  {item?.sold_quantity && `- ${item.sold_quantity} ${t('PRODUCT.SOLD')}`}
                </p>
                <h3 className='product-info--name'>{item?.title}</h3>
                <p className='product-info--price'>
                  {formatCurrency(item?.price)}
                  <sup>{formatDecimals(item?.price?.decimals)}</sup>
                </p>
              </Row>
              <Row className='product-info--actions'>
                <button className='btn-primary'>{t('BUY')}</button>
              </Row>
            </Column>
          </Row>
          <Row className='product-description'>
            <Column lg={9}>
              <h2 className='product-description--title'>{t('PRODUCT.DESCRIPTION')}</h2>
              <p className='product-description--text'>{item?.description}</p>
            </Column>
          </Row>
        </Row>
      )}
    </Container>
  );
};
