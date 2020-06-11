import React from 'react'
import LoginSignin from './LoginSignin'
// import {
//   validateExistence,
//   validateEmail,
//   validateLength,
//   validateLowerCase,
//   validateUpperCase
// } from './utils/validation'


// const INPUT_CONFIG = [
//   {
//     name: "email",
//     validations: [validateExistence, validateEmail]
//   },
//   {
//     name: "password",
//     validations: [validateExistence, validateLength(6, 15), validateLowerCase, validateUpperCase]
//   }
// ]

export default function Login() {
  return (
    <div>
      <LoginSignin/>
    </div>
  )
}





