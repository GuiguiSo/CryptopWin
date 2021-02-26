import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './homepage.css'
import * as fromApi from '../utils/api'
import Navbar from '../Components/navbar'
import { Link } from 'react-router-dom'

class Register extends React.Component {

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
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
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
                <Navbar></Navbar>
                <div className='Container text-danger formuregi'>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" Name="email" value={this.state.email} onChange={(event) => this.handleChange(event)} placeholder="Email" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" name="password" value={this.state.password} onChange={(event) => this.handleChange(event)} placeholder="Password" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">firsname</label>
                            <input type="text" class="form-control" name="firstName" value={this.state.firstName} onChange={(event) => this.handleChange(event)} placeholder="Firstname" />
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Lastname</label>
                            <input type="text" class="form-control" name="lastName" value={this.state.lastName} onChange={(event) => this.handleChange(event)} placeholder="lastname" />
                        </div>
                        <br></br>
                        <button type="submit" class="btn btn-primary" onClick={() => this.postUser()}>Sign in</button>
                    </form>
                    <table className="table text-danger mt-5 ">
                        <thead>

                            <tr >
                                <th scope="col">#</th>
                                <th scope="col" className='center' >Email</th>
                                <th scope="col" className='center'>Password</th>
                                <th scope="col" className='center'>Firstname</th>
                                <th scope="col" className='center'>Lastname</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map((user) => {
                                    return (
                                        <tr>
                                            <th scope="row" >{user._id}</th>
                                            <td className='center'>{user.email}</td>
                                            <td className='center'>{user.password}</td>
                                            <td className='center'>{user.firstName}</td>
                                            <td className='center'>{user.lastName}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Register;
