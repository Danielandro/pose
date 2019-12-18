import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup, wait, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Signup from './signup'

afterEach(cleanup)

describe('signup form', () => {

  const utils = render(<Signup />)

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Signup />, div)
  })

  it('correct fields are present', () => {
    const { getByLabelText, getByText } = render(<Signup />)
    const firstName = getByLabelText('First Name')
    const lastName = getByLabelText('Last Name')
    const email = getByLabelText('Email')
    const password = getByLabelText('Password')
    const passwordConfirmation = getByLabelText('Confirm Password')
    const submitButton = getByText('Signup')
  })

  it('user can successfully signup', async () => {
    const { container } = render(<Signup />)
    const firstName = container.querySelector('input[name="firstName"]')
    // const lastName = container.querySelector('input[name="firstName"]')
    // const email = container.querySelector('input[name="email"]')
    // const password = container.querySelector('input[name="password"]')
    // const passwordConfirmation = container.querySelector('input[name="passwordConfirmation"]')
    // const submitButton = container.querySelector('input[type="submit"]')

    // const firstName = await utils.getAllByDisplayValue('First Name')
    // console.log(firstName)
    await wait(() => {
      fireEvent.change(firstName, {
        target: {
          value: "Tunde"
        }
      })
    })

    await expect(firstName.value).toEqual("Tunde")

  })
})