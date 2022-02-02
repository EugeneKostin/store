import axios from 'axios'

/*{
    "name": "Apple iPhone 11",
    "desc": "The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the 13th generation, lower-priced iPhone, succeeding the iPhone XR",
    "info" : [
        {"label": "Brand", "value": "Apple"},
        {"label": "Operating System", "value": "iOS"},
        {"label": "Storage Capacity", "value": "64 GB"}
        ]
} */

export const getProducts = (data = {}) => {
  return (
    axios.get(`http://${process.env.REACT_APP_BACKEND_HOST}/api`, {
      params: {
        name: data.name || ''
      }
    })
      .then((res) =>
        res.data
      )
      .catch((err) => {
        console.error(err)
      })
  )
}

export const createProduct = (data) => {
  return (
    axios.post(`http://${process.env.REACT_APP_BACKEND_HOST}/api/create`, data)
      .then((res) =>
        res
      )
      .catch((err) => {
        console.error(err)
      })
  )
}