import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';
import SearchResult from '../../components/SearchResults';
import style from './SearchResult.module.scss';
import Pagination from '../../components/Pagination';

const SearchResultPage = () => {
  const [searchResults, setSearchResults] = useState([
    {
      title: 'Стиральная машина Bosch',
      description: `Стиральная машина в отличном состянии, чистая, без накипи.
      С машиной отдам новый шланг для подключения воды и упаковку средства против накипи.`,
      date: '14 апреля 2022'
    },
    {
      title: 'Стиральная машина Eletroluxe',
      description: `Стиральная машина в отличном состянии, чистая, без накипи.
      С машиной отдам новый шланг для подключения воды и упаковку средства против накипи.`,
      date: '14 апреля 2022'
    },
    {
      title: 'Стиральная машина Samsung',
      description: `Стиральная машина в отличном состянии, чистая, без накипи.
      С машиной отдам новый шланг для подключения воды и упаковку средства против накипи.`,
      date: '14 апреля 2022'
    },
    {
      title: 'Стиральная машина Candy',
      description: `Стиральная машина в отличном состянии, чистая, без накипи.
      С машиной отдам новый шланг для подключения воды и упаковку средства против накипи.`,
      date: '14 апреля 2022'
    },
    {
      title: 'Стиральная машина Miele',
      description: `Стиральная машина в отличном состянии, чистая, без накипи.
      С машиной отдам новый шланг для подключения воды и упаковку средства против накипи.`,
      date: '14 апреля 2022'
    },
  ]);

  // axios.post(
  //   'Здесь должен быть полный адрес сервера с его Api',
  //   {
  //     title: 'werwerwer',
  //     description: 'werwerwer',
  //     date: 'werwerwer'
  //   }
  // )
  //   .then((response) => {
  //     console.log(response);
  //     setSearchResults(response.data);
  //   });

  return (
    <div className={style.searchResult_wrap}>
      <div className={style.searchResult_title}>
        Найдено: 15
      </div>
      {searchResults.map((searchResult) => (
        <NavLink to="/card">
          <SearchResult
            title={searchResult.title}
            description={searchResult.description}
            date={searchResult.date}
          />
        </NavLink>
      ))}
      <Pagination />
    </div>
  );
};

export default SearchResultPage;
