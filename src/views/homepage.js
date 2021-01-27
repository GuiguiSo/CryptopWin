import React from 'react'
import './homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

class Homepage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className='col colpad'>
            <nav class="navbar navbar-expand-lg navbar-dark ">
              <div class="container-fluid">
                <img src="" alt="" />
                <a class="navbar-brand float-left ml-5" href="home">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                  <div class="navbar-nav mr-5">
                    <Link className="nav-link mr-5 active" to="/register"> Home </Link>
                    <Link className="nav-link mr-5 active" to="/login"> Login </Link>
                    <Link className="nav-link mr-5 active" to="/register"> Register </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="container text-danger">
          <div className="row ">
            <div className="col-6 catchtext">
              <h1 className="danger">Bienvenue sur CasinoSafeGame</h1>
            </div>
            <div className="col-sm-10 col-md-4 ml=-5 align-items-center">
              <img src="https://image.freepik.com/free-vector/gambling-winnings-luck-chance-jackpot-prize-casino-poker-card-game-win-money-winner-gambler-card-player-cartoon-character-vector-isolated-concept-metaphor-illustration_335657-2864.jpg" alt="ok" />
            </div>
          </div>
        </div>
        <div className='card-group mt-5 pb-5'>
          <div className="col-sm-12 col-md-3">
            <div className="card">
              <img className="card-img-top" src="https://via.placeholder.com/150x150" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="card">
              <img className="card-img-top" src="https://via.placeholder.com/150x150" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="card">
              <img className="card-img-top" src="https://via.placeholder.com/150x150" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="card">
              <img className="card-img-top" src="https://via.placeholder.com/150x150" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide b-5" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="http://via.placeholder.com/350x100" class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="http://via.placeholder.com/350x100" class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="http://via.placeholder.com/350x100" class="d-block w-100" alt="..." />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>




    );
  }
}
export default Homepage;
