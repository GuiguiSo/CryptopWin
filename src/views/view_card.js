import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './view_card.css'
import Navbar from '../Components/navbar'
import img from '../img/Wavy_Bus-29_Single-02.jpg'
import * as fromApi from '../utils/api'


class Viewcard extends React.Component {


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
            <div>
            <Navbar></Navbar>
            <div className="container-fluid text-white">
                <svg viewBox="0 0 200 200" className="forme1" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffc0cb" d="M53.5,-40.4C67.7,-24.8,76.6,-2.7,73.8,19.9C71.1,42.5,56.9,65.5,37.4,73.1C18,80.7,-6.7,72.9,-26.1,61C-45.6,49,-59.8,33,-67.1,12.1C-74.4,-8.7,-74.8,-34.3,-62.5,-49.5C-50.1,-64.8,-25.1,-69.5,-2.7,-67.4C19.6,-65.2,39.3,-56.1,53.5,-40.4Z" transform="translate(100 100)" />
                </svg>
                <svg viewBox="0 0 200 200" className='forme2' xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffc0cb" d="M41.6,-55.2C55.5,-47.2,69.3,-37.1,77.9,-22.5C86.4,-7.9,89.6,11.1,80.1,21.5C70.5,31.9,48.1,33.7,32.6,42.9C17.2,52.2,8.6,69,-3.9,74.3C-16.3,79.6,-32.6,73.4,-39.9,61.5C-47.2,49.6,-45.5,31.9,-47.9,17.3C-50.4,2.6,-56.9,-9,-55.7,-19.7C-54.4,-30.4,-45.4,-40.3,-34.8,-49.3C-24.3,-58.4,-12.1,-66.6,0.9,-67.8C13.9,-69.1,27.8,-63.2,41.6,-55.2Z" transform="translate(100 100)" />
                </svg>
                <div className="container mt-5">
                    <div className="card center bg-dark">
                        <img src={img} className='m-2 card-img' style={{width: "rem"}} alt="Accroche HTML" />
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <h3 className="card-subtitle">Sous titre</h3>
                            <p className="card-text">Du texte sous le titre dans le corps de carte</p>
                            <a href="#" className="btn-lg btn-primary pink ">Un lien</a>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 ">
                    <div className="card bg-dark">
                        <div className="card-body center">
                            <h1>Les notes des utilisateurs</h1>
                            <div class="rating"> <input type="radio" name="rating" value="5" id="5" /><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4" /><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3" /><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2" /><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1" /><label for="1">☆</label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="card bg-dark">

                        <div className="card-body">
                            <h2 className="card-title center">Un casino impresionnant !</h2>
                            <p className="card-text">Wouah mais c'est vraiment incroyable ! je peux faire ça plein de fois mais pas pour 10 euros je crois uqe je me fais un peu baisé Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis felis imperdiet, ornare lectus at, gravida elit. Nunc tincidunt mollis turpis a convallis. Duis vel lectus eget neque eleifend rhoncus ut id arcu. Vestibulum convallis sit amet enim at rutrum. In ut quam nec sem cursus ullamcorper. Cras mattis faucibus sapien eget egestas. Maecenas ut tempor mauris. Curabitur tincidunt, mauris nec blandit venenatis, ligula lacus varius felis, malesuada iaculis ex nisl quis quam. Integer quis libero vel ipsum volutpat blandit sed ac ex. Nunc nec nulla id lectus bibendum cursus.

                            Proin suscipit nisi risus, a consequat dui vehicula ut. Phasellus et justo ac dui accumsan placerat. Donec dignissim semper lectus, sed cursus magna hendrerit nec. Nullam eu sem iaculis, sagittis nisl eu, commodo dui. Aliquam pharetra laoreet orci, at facilisis leo sollicitudin nec. Morbi tempor turpis vel lorem dictum mattis. Nullam euismod fringilla sem, bibendum maximus sem pellentesque et. Sed hendrerit, lacus tincidunt vestibulum ultrices, est nisi egestas nisl, sed fermentum justo nibh sed ante. Nulla laoreet ultricies urna, quis ultricies ante gravida sed. Nunc vitae tellus varius velit porta condimentum a quis neque. Maecenas iaculis faucibus elit ac vestibulum.

                            Vestibulum sollicitudin consequat cursus. Proin auctor, mauris semper laoreet fringilla, lectus ante porttitor velit, quis elementum dolor purus vitae eros. Cras in blandit ante, congue pharetra mi. Vivamus bibendum pulvinar risus ac vehicula. Donec eu mauris pulvinar, commodo metus in, ultricies metus. Suspendisse potenti. Maecenas euismod lorem neque, sed eleifend augue finibus et. Aenean ex nulla, laoreet et elit et, vestibulum lacinia felis. Sed nec pretium orci. In varius luctus eros, sed viverra sapien luctus ac. In tempor neque id nunc fringilla, nec tincidunt diam volutpat. Vestibulum aliquet orci vel imperdiet commodo. Sed mattis ac sapien eu malesuada. Mauris condimentum quam a enim elementum fringilla.

                            Praesent condimentum vel leo eget lacinia. Etiam non aliquet mi. Phasellus eu mauris nisi. Mauris urna nunc, euismod vehicula libero et, malesuada tempus tellus. Maecenas in convallis nulla. Morbi venenatis nisi id sapien imperdiet commodo. Nullam a libero pellentesque, hendrerit est id, pulvinar sapien. Aenean et mi eu velit dapibus vehicula vel non tortor. Integer id placerat velit. Etiam ante sapien, fringilla nec nibh dapibus, vehicula cursus elit. Donec ac mauris dignissim, lacinia est eu, accumsan erat. Quisque varius, magna vel efficitur laoreet, mi ligula porttitor metus, quis dapibus tellus libero at magna. Nunc vestibulum massa sed magna sodales lobortis.

Nam tristique sodales dolor, sed mattis lorem venenatis non. Mauris dignissim sem a varius faucibus. Duis sed odio semper, tincidunt nulla ac, ultrices nisi. Nulla vel consequat purus. Pellentesque a metus egestas, ultricies leo a, accumsan risus. Fusce eu nunc ut augue gravida elementum sit amet in purus. Vivamus metus nisi, euismod vitae urna a, dictum ornare quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc pretium neque vulputate, mollis elit ac, dignissim sapien. Aenean magna augue, ornare non pretium quis, convallis et metus. Proin fermentum pretium neque id auctor. Integer laoreet eros sed bibendum commodo. Aliquam orci erat, laoreet a turpis euismod, tincidunt venenatis magna. Etiam sed felis vestibulum, pretium arcu sit amet, semper nulla. Morbi a velit id purus sodales cursus.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        );
    }
}

export default Viewcard;