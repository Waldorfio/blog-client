import React, { useState } from 'react';
import './styles/style.css';
import './styles/style2.css';
import Header from './components/Header';
import Footer from './components/Footer';

function Register() {
  return (
    <div className="Register">

      <Header />

      <form action='' method='post' id="register">
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username'></input>

        <label for='email'>Email:</label>
        <input type='email' id='emai' name='emai'></input>

        <label for='password'>Password:</label>
        <input type='password' id='password' name='password'></input>

        <label for='password_confirm'>Confirm Password:</label>
        <input type='password' id='password_confirm' name='password_confirm'></input>
      </form>

      <Footer />

    </div>
  );
}

export default Register;
