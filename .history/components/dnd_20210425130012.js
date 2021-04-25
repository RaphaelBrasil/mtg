import React, { useState } from "react";
import initialData from "./../public/initalData";

function Dnd(props) {
  const [state, setState] = useState(initialData);

  return state.zoneOrder.map((zoneId) => {
    const zone = state.zones[zoneId];
    const cards = zone.cardIds.map((cardId) => state.cards[cardId]);

    return <Zone key={zone.id} zone={zone} cards={cards} />;
  });
}

export default Dnd;
