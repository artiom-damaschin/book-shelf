import React from 'react'
import { Layout, Menu } from 'antd'

import './App.css'

import { getBooks } from './api'
import BookCard from './components/BookCard'

const { Content, Sider } = Layout
const { Item } = Menu

function App() {
  const [books, setBooks] = React.useState([])

  React.useEffect(() => {
    async function fetchBooks() {
      const result = await getBooks('potter')
      setBooks(result.items)
    }
    fetchBooks()
  }, [])

  return (
    <Layout>
      <Sider theme="light">
        <Menu theme="light" mode="inline">
          <Item key="1">Book Lists</Item>
          <Item key="2">Shelves</Item>
          <Item key="3">Shelf</Item>
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px 0',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
          }}
        >
          {books.map(book => {
            const {
              id,
              volumeInfo: { title, imageLinks, description },
            } = book
            return (
              <BookCard
                key={id}
                title={title}
                image={imageLinks.thumbnail}
                description={description}
              />
            )
          })}
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
