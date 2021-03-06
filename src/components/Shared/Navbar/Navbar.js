import { Button } from 'react-bootstrap';
import React from 'react';
import logo from '../../../images/logo.png'


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div style={{ height: '50px', width: '50px', marginLeft: '100px' }}>  <img className="img-fluid" src={logo} alt="" /></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="/makeAppointment">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="/appointment">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 " href="/testimonials">Reviews</a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link ms-5" href="/admin">Admin</a>
                        </li> */}
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="/login">Log In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;