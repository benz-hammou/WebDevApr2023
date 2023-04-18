// Brick Calculator - How Many Bricks Do You Need?
// Hoeveel bakstenen heeft u nodig?

// 1. Create a function that takes the width, height returns the area of a wall.
// 1. Maak een functie die de breedte, hoogte teruggeeft van de oppervlakte van een muur.

// 2. Create a function that takes the width, height returns the area of a single brick.
// 2. Maak een functie die de breedte, hoogte teruggeeft van de oppervlakte van een enkele baksteen.

// 3. Create a function that takes wall area and brick area depending on the brick type and returns the number of bricks required.
// 3. Maak een functie die de oppervlakte van de muur en de oppervlakte van de baksteen afhankelijk van het baksteen type teruggeeft en het aantal benodigde bakstenen.

const BRICK_TYPES = {
  STANDARD_BLOCK: "standardblock",
  STANDARD_HOUSE_BRICK: "standardhousebrick",
};
const sizeOfBrickByType = {
  standardhousebrick: [0.265, 0.065],
  standardblock: [0.44, 0.215],
};

const areaCalcul = (h, w) => h * w;
const wallArea = areaCalcul(10, 10);

const getAmountOfNeededBricks = (wallArea, bricktype) => {
  const width = sizeOfBrickByType[bricktype]?.[0];
  const height = sizeOfBrickByType[bricktype]?.[1];

  switch (bricktype) {
    case BRICK_TYPES.STANDARD_BLOCK:
    case BRICK_TYPES.STANDARD_HOUSE_BRICK:
      return wallArea / areaCalcul(width, height);
    default:
      console.log("enter valid brick type");
      return null;
  }
};

const amountOfNeededBricks = getAmountOfNeededBricks(
  wallArea,
  BRICK_TYPES.STANDARD_BLOCK
);
console.log(`The number of bricks that you need is: ${amountOfNeededBricks.toFixed()}`);


// Convert Meter to Millimeter
// let toMM = [];
// for (let brick in BrickTypes) {
//   const getArea1 = BrickTypes[brick].map((item) => item * 1000);
//   toMM.push(getArea1);
// }
// console.log(toMM[0][1]);
