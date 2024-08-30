import { Container } from '@core/components/Container/Container';
import { Row } from '@core/components/GridSystem/Row';

import './NotFound.css';

export const NotFound = () => {
  return (
    <Container>
      <Row className='not-found' justifyContent='center' alignItems='center'>
        <h1>Not Found</h1>
      </Row>
    </Container>
  );
};
