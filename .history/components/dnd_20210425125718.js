import React, { useState } from "react";
import initialData from "./../public/initalData";

const [state, setState] = useState(initialData);

function dnd(props) {
  return state.zoneOrder.map((zoneId) => {
    const zone = state.zones[ZoneId];
    const cards = zone.cardIds.map((cardId) => state.cards[cardId]);
  });
}

export default dnd;
