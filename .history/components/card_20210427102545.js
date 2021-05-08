import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Card as CardAntd, Skeleton } from "antd";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 8px;
`;

export default function Card(props) {
  const [image, setImage] = useState({ image: [] });

  useEffect(async () => {
    const result = await axios(
      `https://api.scryfall.com/cards/named?exact=${props.card.content}`
    );

    setImage(result.data.image_uris.art_crop);
  }, []);
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <img alt={props.card.content} src={image} />
        </div>
      )}
    </Draggable>
  );
}
