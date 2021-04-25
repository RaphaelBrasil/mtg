import React, { useState } from "react";
import initialData from "./../public/initalData";

const [state, setState] = useState(initialData);

function Dnd(props) {
  return state.zoneOrder.map((zoneId) => {
    const zone = state.zones[zoneId];
    const cards = zone.cardIds.map((cardId) => state.cards[cardId]);

    return zone.title;
  });
}

export default Dnd;
