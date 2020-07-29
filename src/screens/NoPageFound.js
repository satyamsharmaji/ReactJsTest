import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { userlogout, isAuthenticated, getSpecificUsers } from '../userAction'

class NoPageFound extends Component {
  render () {
    return (
      <div className='auth-inner'>
        <h3>No Page Found</h3>
      </div>
    )
  }
}

export default NoPageFound
