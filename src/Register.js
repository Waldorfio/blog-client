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
    <div className="Register">

      <form onSubmit={addUser}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <input type="submit" value="Register" />
      </form>

    </div>
  );
}

export default Register;
