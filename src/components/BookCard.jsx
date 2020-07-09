import React from 'react'
import { string, number } from 'prop-types'
import { Card } from 'antd'

const { Meta } = Card

function BookCard({ title, image, width }) {
  return (
    <Card
      hoverable
      style={{ width, margin: '10px' }}
      cover={<img alt={`${title}-img`} src={image} />}
    >
      <Meta title={title} />
    </Card>
  )
}

BookCard.propTypes = {
  width: number.isRequired,
  title: string.isRequired,
  image: string.isRequired,
}

export default BookCard
