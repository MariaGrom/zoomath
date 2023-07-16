
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CardAlgebra from '../CardAlgebra/CardAlgebra';
import ProfileAlgebra from '../ProfileAlgebra/ProfileAlgebra';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BaseTasksAlgebra from '../BaseTasksAlgebra/BaseTasksAlgebra';
import TheoryAlgebra from '../TheoryAlgebra/TheoryAlgebra';
import TestAlgebra from '../TestAlgebra/TestAlgebra';
import Register from '../Register/Register';
import Login from '../Login/Login';
import AboutProject from '../AboutProject/AboutProject';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <AboutProject /> */}
      <Routes>

        <Route path='/zoomath' element={<AboutProject />} />
        <Route path='/algebra/base' element={<BaseTasksAlgebra />} />
        {/* к кард  path='/algebra/base/card' нужно добавить id каждой карточки, когда загружу что-то на бэк*/}
        <Route path='/algebra/base/card' element={<CardAlgebra />} />
        <Route path='/algebra' element={<ProfileAlgebra />} />
        <Route path='/algebra/theory' element={<TheoryAlgebra />} />
        <Route path='/algebra/test' element={<TestAlgebra />} />
        <Route path='/signup' element={<Register />} />
        <Route path='signin' element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
