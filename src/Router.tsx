import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin';
function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route  path="/:coinId">
          <Coin />
        </Route>
        <Route exact={true} path='/'>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router