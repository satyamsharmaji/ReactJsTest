import axios from 'axios'

const BASE_URL = 'https://reqres.in/api'

export async function login (data) {
  return await axios
    .post(`${BASE_URL}/login`, data)
    .then(response => {
      if (response.status == 200) {
        localStorage.setItem('token', response.data.token)
      }
      return response
    })
    .catch(err => {
      return err.response
    })
}

export async function isAuthenticated () {
  return localStorage.getItem('token') != null ? true : false
}

export async function getUsers (pageNumber, dataPerPage) {
  return await axios
    .get(`${BASE_URL}/users?page=${pageNumber}&per_page=${dataPerPage}`)
    .then(response => {
      return response
    })
    .catch(err => {
      return err.response
    })
}

export async function getSpecificUsers (id) {
  return await axios
    .get(`${BASE_URL}/users/${id}`)
    .then(response => {
      return response
    })
    .catch(err => {
      return err.response
    })
}

export async function userlogout () {
  localStorage.removeItem('token')
}
