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
            <div className="card-group col-12">
                {
                    
                
                    this.state.casinos.sort(() => Math.random() -0.5).slice(0, 4).map(casino => {
                        return (
                            <div>
                                <Link className="padlog text-light" to={`/${casino._id}`}>
                                    <div class="card card-test bg-dark mr-3" style={{width: '25rem'}}>
                                        <img class="card-img-top" src={logo} alt="Card image cap"/>
                                            <div class="card-body center d-flex flex-column ">
                                                <h5 class="card-title">{casino.name}</h5>
                                                <p class="card-text ">{casino.description}</p>
                                                <a href="#" class="card-btn btn-primary mt-auto btn-block ">Voir plus</a>
                                            </div>    
                                    </div> 
                                </Link>
                            </div>
                        )
                    })
                }
                            </div>
                        );
                    }
}
export default Cardhome;