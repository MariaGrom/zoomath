
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import CardAlgebra from '../CardAlgebra/CardAlgebra';
import ProfileAlgebra from '../Main/ProfileAlgebra/ProfileAlgebra';
import ProfileGeometry from '../Main/ProfileGeometry/ProfileGeometry';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BaseTasksAlgebra from '../BaseTasksAlgebra/BaseTasksAlgebra';
import BaseTasksGeometry from '../BaseTasksGeometry/BaseTasksGeometry';
import TheoryAlgebra from '../TheoryAlgebra/TheoryAlgebra';
import TestAlgebra from '../TestAlgebra/TestAlgebra';
import TestGeometry from '../TestGeometry/TestGeometry';
import TheoryGeometry from '../TheoryGeometry/TheoryGeometry';
import CardGeometry from '../CardGeometry/CardGeometry';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path='/zoomath' element={<Main />}/>
        <Route path='/algebra/base' element={<BaseTasksAlgebra />} />
        {/* к кард  path='/algebra/base/card' нужно добавить id каждой карточки, когда загружу что-то на бэк*/}
        <Route path='/algebra/base/card' element={<CardAlgebra />} />
        <Route path='/algebra' element={<ProfileAlgebra />} />
        <Route path='/geometry' element={<ProfileGeometry />} />
        <Route path='/algebra/theory' element={<TheoryAlgebra />} />
        <Route path='/algebra/test' element={<TestAlgebra />} />
        <Route path='/geometry/theory' element={<TheoryGeometry />} />
        <Route path='/geometry/test' element={<TestGeometry />} />
        <Route path='/geometry/base' element={< BaseTasksGeometry/>} />
        <Route path='/geometry/base/card' element={<CardGeometry />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
