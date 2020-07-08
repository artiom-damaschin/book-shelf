import React from 'react'
import { string } from 'prop-types'
import { Card } from 'antd'

const { Meta } = Card

function BookCard({ title, description, image }) {
  const shortDescription = `${description.substr(0, 40)}...`

  return (
    <Card
      hoverable
      style={{ width: 200, margin: '10px' }}
      cover={<img alt={`${title}-img`} src={image} />}
    >
      <Meta title={title} description={shortDescription} />
    </Card>
  )
}

BookCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  image: string.isRequired,
}

export default BookCard
