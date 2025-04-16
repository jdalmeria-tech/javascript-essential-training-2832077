/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const luggage = {
  name: "Samsonite",
  color: "Red",
  volume: 250,
  handleLength: 50,
  backpack: {
    color: "black and neon blue",
    gadget: "laptop"
  },
  newHandleLength: function (length) {
    this.handleLength = length;
  },
};

// using the bracket [] to access the property inside an object
let handle = "handleLength";
console.log("This is the adjustable handle", luggage[handle]);

// dot notation the most common way
console.log("Inside this luggage is a backpack:", luggage.backpack.color);
console.log("Inside this backpack is a gaming gadget:", luggage.backpack.gadget)

