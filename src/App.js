import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.jsx'

const HatsPage=()=>{return (<div>
<h1>HATS PAGE</h1>
</div>)}

function App() {
  return (
    <div>
    <Switch>
<Route exact path='/' component={Homepage}/>
<Route exact path='/shop' component={ShopPage}/>

    
     </Switch> 
    </div>
    
  );
}

export default App;
