import { Container } from '@core/components/Container/Container';
import { Row } from '@core/components/GridSystem/Row';
import { FiChevronRight } from 'react-icons/fi';

import './BreadCrum.css';

export const BreadCrum = () => {
  return (
    <Container className='breadcrum section'>
      <Row colSpacing={0.5}>
        Electrónica, Audio y Video <FiChevronRight />
        iPod <FiChevronRight />
        Reproducciones <FiChevronRight />
        iPod touch <FiChevronRight />
        Electrónica <FiChevronRight />
        <span>32 GB</span>
      </Row>
    </Container>
  );
};
