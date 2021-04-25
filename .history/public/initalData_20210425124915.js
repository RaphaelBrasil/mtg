const initialData = {
  cards: {
    "card-1": { id: "card-1", content: "All Merfolks get +1/+1" },
    "card-2": { id: "card-2", content: "All Humans get +1/+1" },
    "card-3": { id: "card-3", content: "All Elfs get +1/+1" },
    "card-4": { id: "card-4", content: "All Dragons get +1/+1" },
    "card-5": { id: "card-5", content: "All Zombies get +1/+1" },
    "card-6": { id: "card-6", content: "All Phoenix get +1/+1" },
    "card-7": { id: "card-7", content: "All Horses get +1/+1" },
  },
  zones: {
    "zone-1": {
      id: "zone-1",
      title: "Hand",
      cardIds: ["card-1", "card-2", "card-3", "card-3", "card-5"],
    },
  },
  zoneOrder: ["zone-1"],
};

export defalt initialData;
