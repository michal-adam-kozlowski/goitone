import './App.css';
import { Routes, Route } from 'react-router-dom'
import { About, Home, ProductDetails, Products } from './pages';

import { Mission, Reviews, SharedLayout, Team } from './components';

function App() {
  
  return (
    
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:productId' element={<ProductDetails/>}/>
          <Route path='/about' element={<About/>}>
            <Route path='mission' element={<Mission/>} />
            <Route path='team' element={<Team/>} />
            <Route path='reviews' element={<Reviews/>} />
          </Route>
        </Route>
        {/* <Route path='*' element={<NotFound/>}/> */}
      </Routes>

  );
}

export default App;
