// src/components/MyForm.js

import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    itemName:'',
    itemDescription:'',
    itemPrice:'',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call your API here
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
        body: JSON.stringify(formData),
      });

      // Handle the response, e.g., show a success message
      console.log('API Response:', response);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Item Name:
        <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Item Description:
        <textarea name="itemDescription" value={formData.itemDescription} onChange={handleChange} />
      </label>
      <br />
      <label>
        Item Price:
        <input type="number" name="itemPrice" value={formData.itemPrice} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
