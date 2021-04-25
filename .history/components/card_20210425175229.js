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

const getImage = async (name) => {
  const result = await axios(
    `https://api.scryfall.com/cards/named?exact=${name}`
  );
  const resultUri = result.data.image_uris.art_crop;
  console.log(resultUri);
  return resultUri;
};

export default function Card(props) {
  var urlImage = [];
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {(urlImage = getImage(props.card.content))}
          <CardAntd
            title={props.card.content}
            style={{ width: 250 }}
            cover={<img alt={props.card.content} src={urlImage} />}
          ></CardAntd>
        </div>
      )}
    </Draggable>
  );
}
