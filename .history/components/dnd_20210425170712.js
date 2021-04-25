import React, { useState, useEffect } from "react";
import axios from "axios";
import "@atlaskit/css-reset";
import "antd/dist/antd.css";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./../public/initalData";
import Zone from "./zone";

function Dnd(props) {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    // TODO: reordernar as zonas
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.zoneOrder.map((zoneId) => {
        const zone = state.zones[zoneId];
        const cards = zone.cardIds.map((cardId) => state.cards[cardId]);

        return <Zone key={zone.id} zone={zone} cards={cards} />;
      })}
    </DragDropContext>
  );
}

export default Dnd;
