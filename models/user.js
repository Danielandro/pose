/*
first method to define is User.create for signup

subsequent tests / routes will cover read.
Delete and update can come later
*/
const env = require('dotenv')
env.config()
const { Client } = require('pg')
const connstring = process.env.DATABASE_URL

client = new Client(connstring);

const create = ({ firstName, lastName, email, password }) => {
  client.connect()
  client.query(
    'INSERT INTO users (first_name, last_name, email, password) VALUES($1, $2, $3, $4)',
    [firstName, lastName, email, password],
    (err, res) => {
      // console.log(err ? err.stack : res.rows[0].message) // Hello World!
      console.log('ERROR IS: ', err)
      console.log('RESPONSE IS: ', res)
      client.end()
    })
}

module.exports = {
  create
}

// client.query(
//   'INSERT INTO users (first_name, last_name, email, password) VALUES($1, $2, $3, $4)',
//   [firstName, lastName, email, password],
//   (err, res) => {
//     console.log(err ? err.stack : res.rows[0].message) // Hello World!
//     console.log('ERROR IS: ', err)
//     console.log('RESPONSE IS: ', res)
//     client.end()

//   })