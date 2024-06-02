// components/UserInfoForm.js

'use client'
import React, { useState } from 'react';

const UserInfoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    hobbies: '',
    age: '',
    gender: '',
    bio: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Form submitted successfully!');
      } else {
        const errorData = await response.json();
        setMessage(`Form submission failed: ${errorData.message}`);
      }
    } catch (error) {
      setMessage(`Form submission failed: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=' pt-[94px] m-auto w-52'>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="hobbies">Hobbies:</label>
        <input type="text" id="hobbies" name="hobbies" value={formData.hobbies} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default UserInfoForm;
