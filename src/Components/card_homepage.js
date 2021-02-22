import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../views/homepage.css'


class Cardhome extends React.Component {
    render() {
        return (

            <div className="col-sm-12 col-md-2 cardtest padlog" >
                <div className="card" >
                    <img className="card-img-top img-radius img-radius-media" src="https://via.placeholder.com/150x150" alt="" />
                    <div className="card-body" >
                        <p className="card-text" > Some quick example text to build on the card title and make up the bulk of the card 's content.</p>
                    </div>
                </div>
            </div>

        );
    }
}
export default Cardhome;