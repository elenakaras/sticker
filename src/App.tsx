import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductCardContainer from './containers/ProductCardContainer';
// import PageWrapper from './components/common/PageWrapper';
// import AuthContainer from './containers/AuthContainer';
// import ErrorContainer from './containers/ErrorContainer';
// import MainContainer from './containers/MainContainer';
import RegistrationContainer from './containers/RegistrationContainer';
// import TabFormContainer from './containers/TabFormContainer';

const App = () => (
  <>
    {/* <MainContainer /> */}
    {/* <RegistrationContainer /> */}
    {/* <AuthContainer /> */}
    {/* <TabFormContainer /> */}
    {/* <ErrorContainer /> */}
    <ProductCardContainer />
  </>
);

// const App = () => {
//   console.log('APP => start');
//   useEffect(() => console.log('APP - MOUNT'), []);
//   return (
//     <Routes>
//       <Route path="/" element={<PageWrapper />}>
//         <Route path="/main" element={<MainContainer />} />
//         <Route path="/auth" element={<AuthContainer />} />
//         <Route path="/reg" element={<RegistrationContainer />} />
//         <Route path="*" element={<h1>NOT FOUND</h1>} />
//       </Route>
//     </Routes>
//   );
// };

export default App;
