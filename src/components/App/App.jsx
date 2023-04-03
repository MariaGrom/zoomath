
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Theme from '../Theme/Theme';
import Card from '../Card/Card';
import ProfileAlgebra from '../Main/ProfileAlgebra/ProfileAlgebra';
import ProfileGeometry from '../Main/ProfileGeometry/ProfileGeometry';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BaseTasks from '../BaseTasks/BaseTasks';

function App() {
  return (
    <div className="App">
<Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/basetasks' element={<BaseTasks />} />
        <Route path='/theme' element={<Theme />}/>
        <Route path='/card' element={<Card />}/>
        <Route path='/algebra' element={<ProfileAlgebra/>}/>
        <Route path='/geometry' element={<ProfileGeometry/>}/>
      </Routes>
<Footer />
    </div>
  );
}

export default App;
