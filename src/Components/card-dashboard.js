import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as fromApi from '../utils/api'
import '../views/homepage.css'
import './card-dashboard.css'
import { Link } from 'react-router-dom'
import logo1 from '../img/Crypto/crypto-com.png'



class Carboard extends React.Component {

    constructor(props) {
        super(props)


        this.state = {
            casinos: []
        }
    }


    async componentDidMount() {
        this.getCasinos()


    }
    async getCasinos() {
        const casinos = await fromApi.getCasinos()
        this.setState({
            casinos: casinos
        })
    }

    render() {
        return (
            <div className="container-fluid mt-5">
                <svg viewBox="0 0 200 200" className="forme1" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffc0cb" d="M53.5,-40.4C67.7,-24.8,76.6,-2.7,73.8,19.9C71.1,42.5,56.9,65.5,37.4,73.1C18,80.7,-6.7,72.9,-26.1,61C-45.6,49,-59.8,33,-67.1,12.1C-74.4,-8.7,-74.8,-34.3,-62.5,-49.5C-50.1,-64.8,-25.1,-69.5,-2.7,-67.4C19.6,-65.2,39.3,-56.1,53.5,-40.4Z" transform="translate(100 100)" />
                </svg>
                <svg viewBox="0 0 200 200" className='forme2' xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffc0cb" d="M41.6,-55.2C55.5,-47.2,69.3,-37.1,77.9,-22.5C86.4,-7.9,89.6,11.1,80.1,21.5C70.5,31.9,48.1,33.7,32.6,42.9C17.2,52.2,8.6,69,-3.9,74.3C-16.3,79.6,-32.6,73.4,-39.9,61.5C-47.2,49.6,-45.5,31.9,-47.9,17.3C-50.4,2.6,-56.9,-9,-55.7,-19.7C-54.4,-30.4,-45.4,-40.3,-34.8,-49.3C-24.3,-58.4,-12.1,-66.6,0.9,-67.8C13.9,-69.1,27.8,-63.2,41.6,-55.2Z" transform="translate(100 100)" />
                </svg>

                {
                    this.state.casinos.map(casino  => {
                        return (

                            <div className="row" >
                                <div className="offset-md-1 col-md-10 col-sm-12 padding20 mt-3" >
                                    <div className="card sm-mt-4 bg-dark cardtest" >
                                        <div className="row" >
                                            <div className='col-sm-5' >
                                                <img src={logo1} className="raddash card-img" alt="yes" />
                                            </div>
                                            <div class="col-sm-7">
                                                <div class="card-body text-light center">
                                                    <h1 class="card-title">{casino.name}</h1>
                                                    <h2 class="card-text">{casino.description}</h2>
                                                    <div className="mt-2">
                                                        <Link to={`viewcard/?id=${casino._id}`} >
                                                            <button className="btn-primary btn-lg">BONUS</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        )
                    })
                }

            </div>
        );
    }
}
export default Carboard;