import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleChange = (e) => {
    const newValue = e.target.value
    setUserDetails({
      ...userDetails,
      [e.target.name]: newValue
    })
  }

  return (
    <form className="signup-form">
      {/* First Name */}
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        value={userDetails.firstName}
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        id="firstName"
        required
      /><br />
      {/* Last Name */}
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        value={userDetails.lastName}
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        id="lastName"
        required
      /><br />
      {/* Email */}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={userDetails.email}
        placeholder="Email"
        onChange={handleChange}
        name="email"
        id="email"
        required
      /><br />
      {/* Password */}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={userDetails.password}
        placeholder="Password"
        onChange={handleChange}
        name="password"
        id="password"
        required
      /><br />
      {/* Password Confirmation */}
      <label htmlFor="password-confirmation">Confirm Password</label>
      <input
        type="password"
        value={userDetails.passwordConfirmation}
        placeholder="Confirm Password"
        onChange={handleChange}
        name="password-confirmation"
        id="password-confirmation"
        required
      /><br />
      {/* Submit button */}
      <input
        type="submit"
        value="Signup"
        name="submit"
      /><br />
    </form>
  )
}

export default Signup