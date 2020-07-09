import axios from 'axios'

const API_KEY = 'AIzaSyDRBIlMXnMrGQmU8irRxVhqxuEQ9niHges'
const URL = 'https://www.googleapis.com/books/v1/volumes'

const getBooksByQry = async query => {
  try {
    const response = await axios.get(URL, {
      params: {
        q: query,
        maxResults: 8,
        key: API_KEY,
      },
    })

    const { data } = response

    return data
  } catch (err) {
    console.error(err)
  }
}

const getBookById = async id => {
  const response = await axios.get(`${URL}/${id}`, {
    params: {
      key: API_KEY,
    },
  })

  const { data } = response

  return data
}

export { getBooksByQry, getBookById }

export default null
