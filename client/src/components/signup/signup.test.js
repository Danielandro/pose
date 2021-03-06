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
    const lastName = container.querySelector('input[name="lastName"]')
    const email = container.querySelector('input[name="email"]')
    const password = container.querySelector('input[name="password"]')
    const passwordConfirmation = container.querySelector('input[name="passwordConfirmation"]')
    const submitButton = container.querySelector('input[type="submit"]')

    await wait(() => {
      fireEvent.change(firstName, {
        target: {
          value: "Tunde"
        }
      })
    })

    await wait(() => {
      fireEvent.change(lastName, {
        target: {
          value: "Akinwale"
        }
      })
    })

    await wait(() => {
      fireEvent.change(email, {
        target: {
          value: "T.Akinwale@gmail.com"
        }
      })
    })

    await wait(() => {
      fireEvent.change(password, {
        target: {
          value: "123456"
        }
      })
    })

    await wait(() => {
      fireEvent.change(passwordConfirmation, {
        target: {
          value: "123456"
        }
      })
    })

    await wait(() => { fireEvent.click(submitButton) })

    await expect(firstName.value).toEqual("Tunde")
    await expect(lastName.value).toEqual("Akinwale")
    await expect(email.value).toEqual("T.Akinwale@gmail.com")
    await expect(password.value).toEqual("123456")
    await expect(passwordConfirmation.value).toEqual("123456")
  })
})