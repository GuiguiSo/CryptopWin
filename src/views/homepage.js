import React from 'react'
import './homepage.css'
import Navbar from '../Components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import imgfront from '../img/Wavy_Bus-29_Single-02.png'
import Carboard from '../Components/card-dashboard'
import Cardhome from '../Components/card_homepage'
import right from '../img/arrow-icon-black-23.png'
import left from '../img/arrow-icon-blac_leftpng.png'



class Homepage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar></Navbar>
        <div className="container pink">
          <div className="row ">
            <div className="col-6 catchtext">
              <h1 className="danger">Bienvenue sur CasinoSafeGame</h1>
            </div>
            <div className="col-sm-10 col-md-4 ml=-5 align-items-center">
              <img src={imgfront} class="img-responsive" alt="ok" />
            </div>
          </div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide pl-5 pr-4" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='card-group mt-5 pb-5 center'>
                <Cardhome />
                <Cardhome />
                <Cardhome />
                <Cardhome />


              </div>
            </div>
            <div className="carousel-item">
              <div className='card-group mt-5 pb-5'>
                <Cardhome></Cardhome>
                <Cardhome></Cardhome>
                <Cardhome></Cardhome>
                <Cardhome></Cardhome>

              </div>
            </div>
            <div className="carousel-item">
              <div className='card-group mt-5 pb-5'>
                <Cardhome></Cardhome>
                <Cardhome></Cardhome>
                <Cardhome></Cardhome>
                <Cardhome></Cardhome>

              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <img src={left} class="visually-hidden carouleft" alt=""/>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <img src={right} class="visually-hidden carouright" alt=""/>
          </a>
        </div>
      </div>




    );
  }
}
export default Homepage;
