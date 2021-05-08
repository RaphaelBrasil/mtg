import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card as CardAntd, Skeleton, Typography } from 'antd'
import { Draggable } from 'react-beautiful-dnd'
import BaseCard from './baseCard'

export default function Card(props) {
  const { Text } = Typography
  const { card, index } = props
  const [image, setImage] = useState({ image: [] })
  const [oracle, setOracle] = useState({ oracle: [] })

  useEffect(async () => {
    const result = await axios(
      `https://api.scryfall.com/cards/named?exact=${card.content}`
    )
    setImage(result.data.image_uris.large)
    setOracle(result.data.oracle_text)
  }, [])
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <BaseCard
            card={props.card}
            image={image}
            oracle={oracle}
            isDragging={snapshot.isDragging}
          />
        </div>
      )}
    </Draggable>
  )
}
