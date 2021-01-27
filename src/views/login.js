import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './homepage.css'






class Login extends React.Component {

    constructor(props){
        super(props)
    
        this.state = {
        }
      }


    handleChange(event){

        const name= event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
            
    
    
        })
    
    
    }
    
    render() {
        return (
            <div className="container padlog">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card">
                            <form className='m-5'>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="text" className="form-control" name="email"  value={this.state.email} onChange={(event) => this.handleChange(event)} />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" name='password'  value={this.state.password} onChange={(event) => this.handleChange(event)} />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        {console.log(this.state)}
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>


        );
    }
}
export default Login;
