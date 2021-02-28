export default function getRandomColor() {
  const colorStrings = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#f39c12",
  ];

  const index = Math.floor(Math.random() * (colorStrings.length));
  return colorStrings[index];
}
