import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { userlogout, isAuthenticated, getSpecificUsers } from '../userAction'

class UserDetail extends Component {
  state = {
    firstName: '',
    lastName: '',
    profileImage: '',
    email: ''
  }
  componentDidMount () {
    getSpecificUsers(this.props.match.params.id).then(res => {
      if (res.status == 200) {
        this.setState({
          firstName: res.data.data.first_name,
          lastName: res.data.data.last_name,
          profileImage: res.data.data.avatar,
          email: res.data.data.email
        })
      }
    })
    isAuthenticated().then(res => {
      if (res === false) {
        this.props.history.push('/')
      }
    })
  }

  render () {
    const { firstName, lastName, email, profileImage } = this.state
    return (
      <div className='auth-inner'>
        <h3>User Details</h3>
        <div className='userProfile'>
          <img src={profileImage} alt={firstName} />
        </div>
        <div className='userDetailTable'>
          <div className='userDetailRow'>
            <div className='heading'>First Name</div>
            <div className='userContent'>{firstName}</div>
          </div>
          <div className='userDetailRow'>
            <div className='heading'>Last Name</div>
            <div className='userContent'>{lastName}</div>
          </div>
          <div className='userDetailRow'>
            <div className='heading'>Email</div>
            <div className='userContent'>{email}</div>
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: 20
          }}
        >
          <Link to='/dashboard' className='btn btn-primary'>
            Go Back
          </Link>
        </div>
      </div>
    )
  }
}

export default UserDetail
