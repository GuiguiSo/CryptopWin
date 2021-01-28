import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as fromApi from '../utils/api'
import '../views/homepage.css'


class Carboard extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="offset-1 col-10 ">
                    <div className="card-group">
                        <div className="card">
                            <div className="row">
                                <div className='col-3'>
                                    <img src="https://via.placeholder.com/350x100" className="raddash" alt="yes" />
                                </div>
                                <div className='col-2'>
                                    <p>blop</p>
                                </div>
                                <div className="col-3">

                                </div>
                                <div className="col-4">
                                <button type="button" class="btn btn-outline-primary buttondash">Primary</button>
                                    
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