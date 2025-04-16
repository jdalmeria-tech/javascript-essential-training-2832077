/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newName: function (updateName) {
    this.name = updateName;
  },
  updateVolume: function (newVolume) {
    this.volume = newVolume;
  },
  newColor: function (newColor) {
    this.color = newColor;
  },
  newPocketNum: function (newValue) {
    this.pocketNum = newValue;
  }
};

console.log("Before... ");
console.log("Name: ", backpack.name);
console.log("Volume: ", backpack.volume);
console.log("Color: ", backpack.color);
console.log("Number of Pockets: ", backpack.pocketNum);
// update usind the methods created
backpack.newName("Legion Gaming Backpack");
backpack.updateVolume(45);
backpack.newColor("matte black and gray");
backpack.newPocketNum(25);

console.log("After... ");
console.log("Name: ", backpack.name);
console.log("Volume: ", backpack.volume);
console.log("Color: ", backpack.color);
console.log("Number of Pockets: ", backpack.pocketNum);




