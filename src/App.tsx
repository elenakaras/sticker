import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SearchResultContainer from './containers/SearchResultContainer';
import ProductCardContainer from './containers/ProductCardContainer';
import ErrorContainer from './containers/ErrorContainer';
import MainContainer from './containers/MainContainer';
import PageWrapper from './components/common/PageWrapper';
import FormContainer from './containers/FormContainer';
import RecoveryPasswordContainer from './containers/RecoveryPasswordContainer';
// import AdContainer from './containers/AdContainer';

const App = () => {
  useEffect(() => console.log('APP - MOUNT'), []);
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<MainContainer />} />
        <Route path="/login" element={<FormContainer />} />
        <Route path="/recovery" element={<RecoveryPasswordContainer />} />
        <Route path="/card" element={<ProductCardContainer />} />
        <Route path="/search" element={<SearchResultContainer />} />
        <Route path="/" element={<SearchResultContainer />} />
        <Route path="*" element={<ErrorContainer />} />
      </Route>
    </Routes>
  );
};

export default App;
