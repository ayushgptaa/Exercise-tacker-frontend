import axios from 'axios'

import API_URL from '../constant'

const fetchReq = async (config) => {
  const defaultConfig = {
    method: 'get',
    url: `${API_URL}/workouts`,
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  }

  return axios(defaultConfig)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default fetchReq
