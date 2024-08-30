import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Container } from '@core/components/Container/Container';
import { Row } from '@core/components/GridSystem/Row';
import { ProductCard } from '../../components/ProductCard/ProductCard';

import { getItemsByQueryThunk } from '../../store/items/itemsActions';
import { clearItems } from '../../store/items/ItemsSlice';

import './ProductsResults.css';

export const ProductsResults = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  const { items } = useSelector(state => state?.items);
  const areItemsEmpty = items.length === 0;

  useEffect(() => {
    dispatch(getItemsByQueryThunk(query));
    return () => dispatch(clearItems());
  }, [query]);

  return (
    <Container className='section'>
      {!areItemsEmpty && (
        <Row className='products-results' direction='row'>
          {items.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Row>
      )}
    </Container>
  );
};
