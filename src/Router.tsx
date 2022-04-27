import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin';
import Price from './routes/Price';
import Chart from './routes/Chart';
function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route  path="/:coinId/*" element={<Coin />} />
        <Route path='/' element={<Coins />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default Router