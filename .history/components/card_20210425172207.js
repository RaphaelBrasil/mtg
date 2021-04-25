import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Card as CardAntd } from "antd";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 8px;
`;

/*
  useEffect(async () => {
    const result = await axios(
      "https://api.scryfall.com/cards/named?exact=aether+vial"
    );

    //console.log(result.data.image_uris.art_crop);
    setData(result.data.image_uris.art_crop);
  }, []);
  */

const getImage = async () => {
  const result = await axios(
    "https://api.scryfall.com/cards/named?exact=aether+vial"
  );

  console.log(result.data.image_uris.art_crop);
  return result.data.image_uris.art_crop;
};

export default function Card(props) {
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CardAntd
            title={props.card.content}
            style={{ width: 250 }}
            cover={<img src={`${getImage(props.card.content)}`} />}
          ></CardAntd>
        </div>
      )}
    </Draggable>
  );
}
