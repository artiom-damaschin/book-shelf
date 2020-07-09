import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from 'antd'

import { getBookById } from '../api'
import { BookCard } from '../components'

const { Content } = Layout

function BookReview() {
  const { bookId } = useParams()

  const [book, setBook] = React.useState({})

  React.useEffect(() => {
    async function fetchBooks() {
      const response = await getBookById(bookId)

      setBook(response)
    }
    fetchBooks()
  }, [bookId])

  return (
    <Layout>
      <Content
        style={{
          margin: '24px 0 0 200px',
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
        }}
      >
        {book?.volumeInfo && (
          <>
            <BookCard
              title={book.volumeInfo.title}
              image={book.volumeInfo.imageLinks.thumbnail}
              width={300}
            />
            <div
              dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
            />
          </>
        )}
      </Content>
    </Layout>
  )
}

export default BookReview
