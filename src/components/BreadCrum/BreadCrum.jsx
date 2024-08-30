import { useSelector } from 'react-redux';

import { Container } from '@core/components/Container/Container';
import { Row } from '@core/components/GridSystem/Row';
import { FiChevronRight } from 'react-icons/fi';

import './BreadCrum.css';

export const BreadCrum = ({ categories }) => {
  const categoriesList = categories || useSelector(state => state?.items?.categories) || [];
  const categoriesAreEmpty = categoriesList.length === 0;

  const displayList = categoriesList.map((category, index) => (
    <span key={index}>
      {category} {index < categoriesList.length - 1 ? <FiChevronRight /> : null}
    </span>
  ));

  return (
    <Container className='breadcrum section'>
      {!categoriesAreEmpty && <Row colSpacing={0.5}>{displayList}</Row>}
    </Container>
  );
};
