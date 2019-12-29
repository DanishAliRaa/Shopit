import React, { Component } from 'react';
import Main from '../Home/Home'
import Carousel from '../Carousel/Carousel'

class Home extends Component {
  render(){
    return (
      <div>
        <Carousel />
        <Main />
      </div>
    );
  }
}
  
export default Home;