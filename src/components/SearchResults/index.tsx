import React from 'react';
import style from './SearchResult.module.scss';

type SearchResultPropsType = {
  title: string;
  description: string;
  date: string;
};

const SearchResult = (props: SearchResultPropsType) => {
  const { title, description, date } = props;

  return (
    <div className={style.searchResult}>
      <div className={style.searchResult_title}>
        {title}
      </div>
      <div className={style.searchResult_description}>
        {description}
      </div>
      <div className={style.searchResult_date}>
        {date}
      </div>
    </div>
  );
};

export default SearchResult;
