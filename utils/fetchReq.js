import axios from 'axios'

const fetchReq = async (config) => {
  const defaultConfig = {
    method: 'get',
    url: 'http://192.168.0.138:3000/api/workouts',
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
