const user = require('../../models/user')

describe('user', () => {
  describe('#create', () => {
    const mockUser = {
      "firstName": "Bram",
      "lastName": "Stoker",
      "email": "myemail@mail.com",
      "password": "1234"
    }
    it('creates a new user', async () => {
      let newUser = await user.create({ ...mockUser })
      console.log('NEW USER IS: ', newUser)
      expect(newUser.id).toEqual(1)
      expect(newUser.firstName).toEqual("Bram")
      expect(newUser.lastName).toEqual("Stoker")
      expect(newUser.email).toEqual("myemail@mail.com")
    })
  })
})