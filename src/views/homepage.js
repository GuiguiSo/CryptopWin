import React from 'react'
import './homepage.css'
import Navbar from '../Components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import imgfront from '../img/Wavy_Bus-29_Single-02.jpg.png'
import Cardhome from '../Components/card_homepage'




class Homepage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar></Navbar>
        <div className="container pink mt-5">
          <div className="row ">
            <div className="col-6 catchtext">
              <h1 className="danger">Bienvenue sur CasinoSafeGame</h1>
            </div>
            <div className="col-sm-10 col-md-4 ml=-5 align-items-center">
              <img src={imgfront} class="img-responsive" alt="ok" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card-deck mb-3 text-center">
          <Cardhome></Cardhome>
          </div>
        </div>
      </div>






    );
  }
}
export default Homepage;
