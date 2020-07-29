import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { userlogout, isAuthenticated, getUsers } from '../userAction'

class Dashboard extends Component {
  state = {
    totalNumberOfPages: 0,
    currentPage: 1,
    data: [],
    dataPerPages: 9
  }
  componentDidMount () {
    const { currentPage, dataPerPages } = this.state
    getUsers(currentPage, dataPerPages).then(res => {
      if (res.status == 200) {
        this.setState({
          data: res.data.data,
          totalNumberOfPages: res.data.total_pages
        })
      }
    })
    isAuthenticated().then(res => {
      if (res === false) {
        this.props.history.push('/')
      }
    })
  }

  updateDataAsPerPageIndex = pageIndex => {
    getUsers(pageIndex, this.state.dataPerPages).then(res => {
      if (res.status == 200) {
        this.setState({
          data: res.data.data,
          totalNumberOfPages: res.data.total_pages,
          currentPage: pageIndex
        })
      }
    })
  }

  render () {
    return (
      <div className='userTable'>
        <div
          style={{
            textAlign: 'right',
            margin: 25
          }}
        >
          <button
            className='btn btn-primary'
            onClick={() => {
              userlogout().then(() => {
                this.props.history.push('/')
              })
            }}
          >
            Logout
          </button>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <td>S. No.</td>
              <td>Fullname</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>
                  {item.first_name} {item.last_name}
                </td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/userDetail/${item.id}`}>view</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            textAlign: 'right'
          }}
        >
          <ul className='userPagination'>
            {Array.from(Array(this.state.totalNumberOfPages).keys()).map(
              index => {
                return (
                  <li
                    className={
                      this.state.currentPage == index + 1 ? 'active' : ''
                    }
                    key={index}
                    onClick={() => {
                      this.updateDataAsPerPageIndex(index + 1)
                    }}
                  >
                    {index + 1}
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Dashboard
