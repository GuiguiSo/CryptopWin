import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './homepage.css'
import Navbar from '../Components/navbar'


class Dashboard extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar></Navbar>

            </div>
        );
    }
}

export default Dashboard;