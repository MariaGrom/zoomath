
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Card from '../Card/Card';
import ProfileAlgebra from '../Main/ProfileAlgebra/ProfileAlgebra';
import ProfileGeometry from '../Main/ProfileGeometry/ProfileGeometry';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BaseTasks from '../BaseTasks/BaseTasks';
import Theory from '../Theory/Theory';
import Test from '../Test/Test';

function App() {
  return (
    <div className="App">
      <Header />
<Main />
      <Routes>

        {/* <Route path='/' element={<Main />}/> */}
        <Route path='/algebra/base' element={<BaseTasks/>} />
        {/* к кард  path='/algebra/base/card' нужно добавить id каждой карточки, когда загружу что-то на бэк*/}
        <Route path='/algebra/base/card' element={<Card />}/>
        <Route path='/algebra' element={<ProfileAlgebra/>}/>
        <Route path='/geometry' element={<ProfileGeometry/>}/>
        <Route path='/algebra/theory' element={<Theory />}/>
        <Route path='/algebra/test' element={<Test/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
