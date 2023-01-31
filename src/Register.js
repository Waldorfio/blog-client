import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Register() {
  const [users, setUsers] = useOutletContext();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const addUser = async (e) => {
    e.preventDefault();
    try {
      // Send post request
      const res = await fetch('https://blog-api-production-6aeb.up.railway.app/users/create', {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(formData),
      });
      // Check data
      const data = await res.json();
      if (data.success) {
        console.log('registration successful');
        setUsers([...users, data.user]); // Append the new user to the user state
      } else {
        console.log('data was not a success');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="register-main">
        <div className='user-form' id="register">
            <h3>Signup</h3>
            <form className='user-form' onSubmit={addUser}>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value=""
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value=""
                  placeholder="Create a username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value=""
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <input type="submit" value="Signup">
            </form>
            <div className="signup">
                <span className="signup">Already have an account?
                <label htmlFor="check">Login</label>
                </span>
            </div>
        </div>
    </main>
  );
}

export default Register;
