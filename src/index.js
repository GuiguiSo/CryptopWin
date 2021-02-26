import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import Register from './views/register';
import Login from './views/login';
import Global from './views/dashboard'
import Viewcard from './views/view_card'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


const Root = () => {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/global' component={Global}/>
          <Route exact path='/viewcard' component={Viewcard}/>
        </Switch>
      </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <div className='color1 color'>
    <Root />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
