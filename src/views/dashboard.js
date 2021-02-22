import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './homepage.css'
import Navbar from '../Components/navbar'
import Carboard from '../Components/card-dashboard'


class Dashboard extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar></Navbar>
                <Carboard></Carboard>
                <Carboard></Carboard>
                <Carboard></Carboard>
                <Carboard></Carboard>
                <Carboard></Carboard>
                <Carboard></Carboard>
                <Carboard></Carboard>
                <Carboard></Carboard>

            </div>
        );
    }
}

export default Dashboard;