import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchResult from '../../components/common/SearchResults';
import style from './SearchResult.module.scss';
import Pagination from '../../components/common/Pagination';

const SearchResultPage = () => (
  <div className={style.searchResult_wrap}>
    <div className={style.searchResult_title}>
      Найдено: 15
    </div>
    <NavLink to="/card">
      <SearchResult
        title="Стиральная машина Bosch"
        description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
        date="14 апреля 2022"
      />
    </NavLink>
    <SearchResult
      title="Стиральная машина Eletroluxe"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина Samsung"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина Candy"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
      />
    <SearchResult
      title="Стиральная машина SMiele"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина Bosch"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина Eletroluxe"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина Samsung"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина Candy"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина Miele"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина Bosch"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина Eletroluxe"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина Samsung"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина Candy"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина SMiele"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <SearchResult
      title="Стиральная машина SMiele"
      description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      date="14 апреля 2022"
    />
    <Pagination />
  </div>
);

export default SearchResultPage;
