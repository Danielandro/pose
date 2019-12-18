import React from 'react'
import PropTypes from 'prop-types'

const Signup = () => {
  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <form className="signup-form">
      {/* First Name */}
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        value="firstName"
        placeholder="First Name"
        onChange={handleChange}
        id="firstName"
        required
      /><br />
      {/* Last Name */}
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        value="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        id="lastName"
        required
      /><br />
      {/* Email */}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value="email"
        placeholder="Email"
        onChange={handleChange}
        id="email"
        required
      /><br />
      {/* Password */}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value="password"
        placeholder="Password"
        onChange={handleChange}
        id="password"
        required
      /><br />
      {/* Password Confirmation */}
      <label htmlFor="password-confirmation">Confirm Password</label>
      <input
        type="password"
        value="password-confirmation"
        placeholder="password-confirmation"
        onChange={handleChange}
        id="password-confirmation"
        required
      /><br />
    </form>
  )
}

export default Signup