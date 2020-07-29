import React, { Component } from 'react'
import { Link ,Redirect} from 'react-router-dom'
import { login, isAuthenticated } from '../userAction'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  componentDidMount () {
    isAuthenticated().then(res=>{
      if(res === true){
        this.props.history.push('/dashboard');
      }
    })
  }

  __login = () => {
    if (this.state.email != '' && this.state.password != '') {
      login(this.state).then(res => {
        if (res.status == 400) {
          alert(res.data.error)
        } else if (res.status == 200) {
          alert('Login successful')
          this.props.history.push('/dashboard');
        }
      })
    } else {
      alert('Please fill mandatory fields')
    }
  }
  render () {
    return (
      <div className='auth-inner'>
        <h3>Login</h3>

        <div className='form-group'>
          <label>Email address</label>
          <input
            type='email'
            value={this.state.email}
            className='form-control'
            placeholder='Enter email'
            onChange={e =>
              this.setState({
                email: e.target.value
              })
            }
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            value={this.state.password}
            placeholder='Enter password'
            onChange={e =>
              this.setState({
                password: e.target.value
              })
            }
          />
        </div>

        <button
          onClick={() => {
            this.__login()
          }}
          className='btn btn-primary btn-block'
        >
          Submit
        </button>
      </div>
    )
  }
}

export default Login
