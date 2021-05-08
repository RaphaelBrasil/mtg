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
  const [oracle, setOracle] = useState({ oracle: [] });

  useEffect(async () => {
    const result = await axios(
      `https://api.scryfall.com/cards/named?exact=${props.card.content}`
    );

    setImage(result.data.image_uris.art_crop);
    console.log(result.data);
    //setOracle(result.data.oracle_text);
  }, []);
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CardAntd
            title={props.card.content}
            style={{
              width: 250,
              transition: "background-color 0.2s ease",
              backgroundColor: snapshot.isDragging ? "lightblue" : "white",
            }}
            cover={<img alt={props.card.content} src={image} />}
          >
            {
              //oracle
            }
          </CardAntd>
        </div>
      )}
    </Draggable>
  );
}
