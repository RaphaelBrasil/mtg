import React from 'react'

import { Card as CardAntd, Typography } from 'antd'

function BaseCard(props) {
  const { Text } = Typography
  const { card, image, isDragging, oracle } = props
  console.log(card, image, isDragging, oracle)
  return (
    <img
      alt={card.content}
      src={image}
      style={{
        width: 125,
        transition: 'background-color 0.2s ease',
        backgroundColor: isDragging ? 'lightblue' : 'white',
        borderRadius: '5px',
      }}
    />
  )
}
// width: 250 === borderRadius: '10px'
export default BaseCard
