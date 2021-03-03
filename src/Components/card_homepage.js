import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../views/homepage.css'
import { Link } from 'react-router-dom'
import * as fromApi from '../utils/api'
import logo from '../img/Crypto/Binance-banniere-1.jpg'


class Cardhome extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            casinos: []
        }
    }


    async componentDidMount() {
        this.getCasinosid()


    }
    async getCasinosid() {
        const casinos = await fromApi.getCasinos()
        this.setState({
            casinos: casinos
        })
    }

    render() {
        return (
            <div className="card-deck mt-auto">
                {


                    this.state.casinos.sort(() => Math.random() - 0.5).slice(0, 4).map(casino => {
                        return (
                            <div className="col-md-3 col-sm-12 mb-5">

                                <div class="card card-test bg-dark cardtest text-light" >
                                    <img class="card-img-top" src={logo} alt="Card image cap" />
                                    <div class="card-body center d-flex flex-column ">
                                        <h5 class="card-title mb-md-4 mb-sm-2">{casino.name}</h5>
                                        <p class="card-text">{casino.description}</p>
                                        <p class="card-text">Si vous clique sur le lien</p>
                                        <Link className=" " to={`viewcard/${casino._id}`}>
                                            <button className="btn-primary btn mt-md-4 mt-sm-3" style={{ width: '15rem' }}>BONUS</button>
                                        </Link>
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
export default Cardhome;