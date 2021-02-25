import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../views/homepage.css'
import { Link } from 'react-router-dom'


class Cardhome extends React.Component {
    render() {
        return (
            <Link className="offset-sm-1col-sm-10 col-md-3 cardtest padlog text-light" to="/viewcard">
                <div className="card bg-dark" >
                    <img className="card-img-top img-radius img-radius-media" src="https://via.placeholder.com/150x150" alt="" />
                    <div className="card-body" >
                        <p className="card-text" > Some quick example text to build on the card title and make up the bulk of the card 's content.</p>
                    </div>
                </div>
            </Link>

        );
    }
}
export default Cardhome;