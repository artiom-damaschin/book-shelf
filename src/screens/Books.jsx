import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'

import { getBooksByQry } from '../api'
import { BookCard } from '../components'

const { Content } = Layout

function Books() {
  const [books, setBooks] = React.useState([])

  React.useEffect(() => {
    async function fetchBooks() {
      const result = await getBooksByQry('got')

      if (Array.isArray(result.items)) {
        setBooks(result.items)
      }
    }
    fetchBooks()
  }, [])

  return (
    <Layout>
      <Content
        style={{
          margin: '24px 0 0 200px',
          display: 'flex',
          flexFlow: 'row wrap',
        }}
      >
        {books.map(book => {
          const {
            id,
            volumeInfo: { title, imageLinks },
          } = book
          return (
            <Link key={id} to={`book/${id}`}>
              <BookCard
                id={id}
                title={title}
                image={imageLinks.thumbnail}
                width={200}
              />
            </Link>
          )
        })}
      </Content>
    </Layout>
  )
}

export default Books
