import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './homepage.css'
import { Link } from 'react-router-dom'
import * as fromApi from '../utils/api'





class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }


    async componentDidMount() {
        this.getUsers()


    }
    async getUsers() {
        const users = await fromApi.getUsers()
        this.setState({
            users: users
        })
    }

    async postUser() {
        let user = {
            email: this.state.email,
            password: this.state.password
        }

        let userCreated = await fromApi.postUser(user)
        this.getUsers()


    }


    handleChange(event) {

        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value


        })


    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className='col colpad'>
                        <nav class="navbar navbar-expand-lg navbar-dark ">
                            <div class="container-fluid">
                                <img src="" alt="" />
                                <a class="navbar-brand float-left ml-5" href="home">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                                    <div class="navbar-nav mr-5">
                                        <Link className="nav-link mr-5 active" to="/"> Home </Link>
                                        <Link className="nav-link mr-5 active" to="/login"> Login </Link>
                                        <Link className="nav-link mr-5 active" to="/register"> Register </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="container padlog">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <div className="card mb-5">
                                <form className='m-5'>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="text" className="form-control" name="email" value={this.state.email} onChange={(event) => this.handleChange(event)} />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" name='password' value={this.state.password} onChange={(event) => this.handleChange(event)} />
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={() => this.postUser()}>Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Login;
