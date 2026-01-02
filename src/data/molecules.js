export const molecules = {
  "H2O": {
    name: "Water",
    formula: "H2O",
    atoms: [
      { element: "O", position: { x: 0, y: 0, z: 0 }, color: "#F00", radius: 0.4 },
      { element: "H", position: { x: 0.4, y: -0.3, z: 0 }, color: "#FFF", radius: 0.25 },
      { element: "H", position: { x: -0.4, y: -0.3, z: 0 }, color: "#FFF", radius: 0.25 }
    ],
    bonds: [
      { start: { x: 0, y: 0, z: 0 }, end: { x: 0.4, y: -0.3, z: 0 }, color: "#CCC", radius: 0.05 },
      { start: { x: 0, y: 0, z: 0 }, end: { x: -0.4, y: -0.3, z: 0 }, color: "#CCC", radius: 0.05 }
    ]
  },
  "SF6": {
    name: "Sulfur Hexafluoride",
    formula: "SF6",
    atoms: [
      { element: "S", position: { x: 0, y: 0, z: 0 }, color: "#FFD700", radius: 0.4 }, // Sulfur (Yellow)
      { element: "F", position: { x: 0.6, y: 0, z: 0 }, color: "#90EE90", radius: 0.25 },
      { element: "F", position: { x: -0.6, y: 0, z: 0 }, color: "#90EE90", radius: 0.25 },
      { element: "F", position: { x: 0, y: 0.6, z: 0 }, color: "#90EE90", radius: 0.25 },
      { element: "F", position: { x: 0, y: -0.6, z: 0 }, color: "#90EE90", radius: 0.25 },
      { element: "F", position: { x: 0, y: 0, z: 0.6 }, color: "#90EE90", radius: 0.25 },
      { element: "F", position: { x: 0, y: 0, z: -0.6 }, color: "#90EE90", radius: 0.25 }
    ],
    bonds: [
      { start: { x: 0, y: 0, z: 0 }, end: { x: 0.6, y: 0, z: 0 }, color: "#CCC", radius: 0.05 },
      { start: { x: 0, y: 0, z: 0 }, end: { x: -0.6, y: 0, z: 0 }, color: "#CCC", radius: 0.05 },
      { start: { x: 0, y: 0, z: 0 }, end: { x: 0, y: 0.6, z: 0 }, color: "#CCC", radius: 0.05 },
      { start: { x: 0, y: 0, z: 0 }, end: { x: 0, y: -0.6, z: 0 }, color: "#CCC", radius: 0.05 },
      { start: { x: 0, y: 0, z: 0 }, end: { x: 0, y: 0, z: 0.6 }, color: "#CCC", radius: 0.05 },
      { start: { x: 0, y: 0, z: 0 }, end: { x: 0, y: 0, z: -0.6 }, color: "#CCC", radius: 0.05 }
    ]
  }
};
