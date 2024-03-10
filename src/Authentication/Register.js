import React from 'react';
import useForm from '../customHooks/useForm'; // Import the useForm hook
import Navbar from '../Components/Navbar/Navbar';
import '../Styles/LandingPage.css'
const RegisterPage = ({closeRegisterModal}) => {
  const { formData, errors, handleChange, handleSubmit } = useForm(
    {
      username: '',
      email: '',
      password: '',
    },
    validateForm // Pass a validate function for form validation
  );

  // Add your form validation logic here
  function validateForm(values) {
    let errors = {};

    // Example validation: Check if username is empty
    if (!values.username.trim()) {
      errors.username = 'Username is required';
    }

    // Example validation: Check if email is a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      errors.email = 'Enter a valid email address';
    }

    // Example validation: Check if password is at least 6 characters
    if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  }

  return (
   
    <div className=" flex items-center justify-center bg-cover h-96 absolute top-32 positions" >
     
      <div className="bg-slate-50 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
              {errors.username && ' *Required'}
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${errors.username && 'border-red-500'}`}
              required
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
              {errors.email && ' *Required'}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${errors.email && 'border-red-500'}`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
              {errors.password && ' *Required'}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${errors.password && 'border-red-500'}`}
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      <span onClick={closeRegisterModal}> <button
            type="submit"
            className="w-36 bg-red-500 mt-6 text-white p-2 rounded-md hover:bg-red-600"
          >
            Close
          </button>
          </span> 
      </div>
     
</div>
  );
};

export default RegisterPage;
