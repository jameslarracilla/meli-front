import { IoSearchOutline } from 'react-icons/io5';
import { Container } from '@core/components/Container/Container';
import { Column } from '@core/components/GridSystem/Column';
import { Row } from '@core/components/GridSystem/Row';

import { MELI_LOGO } from '../../utils/constants';

import { useTranslation } from 'react-i18next';

import './SearchBar.css';

export const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <Container className='search-bar section'>
      <Row colSpacing={1} alignItems='stretch'>
        <Column xs={3} sm={2} lg={1} className='search-bar--icon'>
          <img src={MELI_LOGO} />
        </Column>
        <Column xs={9} sm={10} lg={11}>
          <form>
            <Row className='search-bar--actions'>
              <input type='text' placeholder={t('SEARCH.PLACEHOLDER')} />
              <button>
                <IoSearchOutline size={20} />
              </button>
            </Row>
          </form>
        </Column>
      </Row>
    </Container>
  );
};
