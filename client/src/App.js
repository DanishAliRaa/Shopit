import React, { Component } from 'react';
import { BrowserRouter,Route} from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home';

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
          </div>
          <Footer />
        </BrowserRouter>
     </div>
    );
  }
}
  
export default App;
