import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import * as fromApi from '../utils/api'


class Navbar extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className='col colpad'>
                        <nav class="navbar navbar-expand-lg navbar-dark ">
                            <div class="container-fluid">
                                <img src="" alt="" />
                                <a class="navbar-brand float-left ml-5" href="\">Home</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                                    <div class="navbar-nav mr-5">
                                        <Link className="nav-link mr-5 active" to="/login"> Login </Link>
                                        <Link className="nav-link mr-5 active" to="/register"> Register </Link>
                                        <Link className="nav-link mr-5 active" to="/global"> Global </Link>

                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        );
    }
}
export default Navbar;