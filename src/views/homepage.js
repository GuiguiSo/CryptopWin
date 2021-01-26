import React from 'react'
import './homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class Homepage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className='col colpad'>
            <nav class="navbar navbar-expand-lg navbar-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="container text-danger">
          <div className="row">
            <div className="col-6">
              <h1 className="danger">Bienvenue sur CasinoSafeGame</h1>
            </div>
            <div className="col-6">
              <h1 className="danger"></h1>
            </div>
          </div>
        </div>
      </div>



    );
  }
}
export default Homepage;
