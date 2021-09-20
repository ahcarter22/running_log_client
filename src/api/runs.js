// apiUrl will be either the production or development url defined
// in the apiConfig.js file
import apiUrl from '../apiConfig'
import axios from 'axios'

// Create Run Request
// assume that `data` is an object with `distance` and `shoe`
// { distance: 'something', shoe: 'someone' }
export const createRun = (data, user) => {
  return axios({
    url: apiUrl + '/runs/',
    method: 'post',
    data: { run: data },
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

// Index request
// no data, we will need a token
export const indexRuns = (user) => {
  return axios({
    // method key sets the HTTP verb/method for this request
    // GET is the default method, so we can include or not up to us
    method: 'GET',
    url: apiUrl + '/runs',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

// GET /runs/:id
export const showRun = (id, user) => {
  return axios({
    url: apiUrl + '/runs/' + id,
    // method is optional, default is GET
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

// DELETE /runs/:id
export const deleteRun = (id, user) => {
  return axios({
    url: apiUrl + '/runs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

// PATCH /runs/:id
export const updateRun = (data, id, user) => {
  return axios({
    url: apiUrl + `/runs/${id}/`,
    method: 'patch',
    data: { run: data },
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
