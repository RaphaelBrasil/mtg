import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./../public/initalData";
import Zone from "./zone";

function Dnd(props) {
  const [state, setState] = useState(initialData);

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
