import React, { useState } from 'react';
import './styles/style.css';
import './styles/style2.css';
import Header from './components/Header';
import Footer from './components/Footer';

function Register() {
  return (
    <div className="Register">

      <Header />

      <form action="" method="post" id="register">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="emai" name="emai" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="password_confirm">Confirm Password:</label>
        <input type="password" id="password_confirm" name="password_confirm" />

        <input type="submit" value="Register" />
      </form>

      <Footer />

    </div>
  );
}

export default Register;
