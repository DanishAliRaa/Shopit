import React, { Component } from 'react';
// import Header from './components/Header/Header'

class Carousel extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block" height="350px" width="100%" src="pic1.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block" height="350px" width="100%" src="pic2.jpg" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block" height="350px" width="100%" src="pic3.jpg" alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;

