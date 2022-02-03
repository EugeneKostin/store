import axios from 'axios'

export const getProducts = (data = {}) => {
  return (
    axios.get(`http://${process.env.REACT_APP_BACKEND_HOST || 'localhost:3000'}/api`, {
      params: {
        name: data.name || '',
        info: data.info || []
      }
    })
      .then((res) =>
        res
      )
      .catch((err) => {
        console.error(err)
      })
  )
}

export const createProduct = (data) => {
  return (
    axios.post(`http://${process.env.REACT_APP_BACKEND_HOST || 'localhost:3000'}/api/create`, data)
      .then((res) =>
        res
      )
      .catch((err) => {
        console.error(err)
      })
  )
}
