import axios from 'axios'

const API_KEY = 'AIzaSyDRBIlMXnMrGQmU8irRxVhqxuEQ9niHges'
const URL = 'https://www.googleapis.com/books/v1/volumes'

const getBooks = async (bookName = '') => {
  try {
    const books = await axios.get(URL, {
      params: {
        q: bookName,
        maxResults: 10,
        key: API_KEY,
      },
    })

    const { data } = books

    return data
  } catch (err) {
    console.error(err)
  }
}

export { getBooks }

export default null
