import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as fromApi from '../utils/api'
import '../views/homepage.css'
import './card-dashboard.css'


class Carboard extends React.Component {
    render() {
        return (
            <div className="row" >
                <div className="offset-1 col-10 padding20" >
                    <div className="card-group cardtest" >
                        <div className="card sm-mt-4" >
                            <div className="row" >
                                <div className='col-md-3  margintopcard' >
                                    <img src="https://via.placeholder.com/350x100" className="raddash" alt="yes" />
                                </div>
                                <div className='col-md-2 textdash' >
                                    <p> blop </p>
                                </div>
                                <div className="col-md-3">

                                </div>
                                <div className="col-md-4 row align-items-center " >
                                    <button type="button" class="btn  offset-sm-4 col-sm-8  btn-primary butdash " > Voir </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Carboard;