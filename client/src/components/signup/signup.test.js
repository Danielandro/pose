import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Signup from './signup'

afterEach(cleanup)

describe('signup form', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Signup />, div)
  })

  it('correct fields are present', () => {
    const { getByLabelText } = render(<Signup />)
    const firstName = getByLabelText('First Name')
    const lastName = getByLabelText('Last Name')
    const email = getByLabelText('Email')
    const password = getByLabelText('Password')
    const passwordConfirmation = getByLabelText('Confirm Password')
  })

})