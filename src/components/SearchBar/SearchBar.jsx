import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IoSearchOutline } from 'react-icons/io5';
import { Container } from '@core/components/Container/Container';
import { Column } from '@core/components/GridSystem/Column';
import { Row } from '@core/components/GridSystem/Row';

import { MELI_LOGO, PATHS } from '../../utils/constants';

import './SearchBar.css';

export const SearchBar = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;

    navigate({
      pathname: PATHS.ITEMS,
      search: createSearchParams({
        search: query,
      }).toString(),
    });
  };

  return (
    <Container className='search-bar section'>
      <Row colSpacing={1} alignItems='stretch'>
        <Column xs={3} sm={2} lg={1} className='search-bar--icon'>
          <img src={MELI_LOGO} />
        </Column>
        <Column xs={9} sm={10} lg={11}>
          <form onSubmit={handleSubmit}>
            <Row className='search-bar--actions'>
              <input
                type='text'
                placeholder={t('SEARCH.PLACEHOLDER')}
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <button type='submit'>
                <IoSearchOutline size={20} />
              </button>
            </Row>
          </form>
        </Column>
      </Row>
    </Container>
  );
};
