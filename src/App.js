

import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home/Home.component';
import { Navigation } from './Components/Navigation/Navigation.component';
import { Signin } from './Pages/Signin/Signin.component';

const Shop = function(){
  return <h1>This is the shop page </h1>
}

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={ <Navigation /> } >
        <Route index element={ <Home /> } />
        <Route path='shop' element={ <Shop /> } />
        <Route path='/signin' element={<Signin />}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
