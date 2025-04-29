/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack";

class GymBag extends Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    slingStrap
  ) {
    // initialize the parent class properties
    super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
    // new property specific to GymBag
    this.slingStrap = slingStrap; // measure in cm
  }

  // Method to check if sling strap is used
  checkSling() {
    if (this.slingStrap > 0) {
      console.log(`You have used ${this.slingStrap} cm for you to strap it in your shoulder.`);
    } else {
      console.log('You can use your sling strap if you want to!');
    }
  }

  // extend or override methods (use methods from parent) from the parent if necessary
  newStrapLength(lengthLeft, lengthRight) {
    if (lengthLeft === lengthRight) {
      console.log('Your strap is balanced :)');
    } else {
      console.log('Balance your straps for more convenient use of your gym bag!');
    }
  }
}

// Create instances of GymBag
const gymBag1 = new GymBag("Gym Bag 1", 30, "red", 5, 25, 25, false, 100);
const gymBag2 = new GymBag("Gym Bag 2", 40, "blue", 6, 30, 30, true, 120);

// Test the objects
console.log("Gym Bag 1:", gymBag1);
console.log("Gym Bag 2:", gymBag2);

gymBag1.checkSling();
gymBag2.newStrapLength(30, 25);