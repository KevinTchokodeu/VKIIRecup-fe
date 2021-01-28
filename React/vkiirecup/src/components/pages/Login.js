import React from 'react';
import '../../App.css';
import Footer from '../Footer';


export default function Login() {
  return(
    <>
    <div className="base-container">
            <div className="header">Login</div>
            <div className="content"></div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="Pasword" placeholder="password"/>
                </div>
            </div>
        </div>
    <Footer />
    </>

  )
}

