const initialData = {
  cards: {
    "card-0": { id: "card-0", content: "Aether Vial" },
    "card-1": { id: "card-1", content: "Cursecatcher" },
    "card-2": { id: "card-2", content: "Merfolk Trickster" },
    "card-3": { id: "card-3", content: "Harbinger of the Tides" },
    "card-4": { id: "card-4", content: "Lord of Atlantis" },
    "card-5": { id: "card-5", content: "Master of the Pearl Trident" },
    "card-6": { id: "card-6", content: "Silvergill Adept" },
  },
  zones: {
    "zone-1": {
      id: "zone-1",
      title: "Hand Player One",
      cardIds: [
        "card-0",
        "card-1",
        "card-2",
        "card-3",
        "card-4",
        "card-5",
        "card-6",
      ],
    },
  },
  // Facilita a ordenação das zonas
  zoneOrder: ["zone-1"],
};

export default initialData;
