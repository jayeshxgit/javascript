
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name // "this" here set the object’s name property to the value of the name parameter.
    this.legCount = legCount
    this.speaks = speaks
  }
  speak(){
    console.log("hi there " + this.speaks)
  }
}
let dog = new Animal("dog", 4, "woof");
let cat = new Animal("cat", 4, "meow");

cat.speak();
// understand the dry run and concepts of these concepts.
// class is the blueprint of the building and and it can have multiple objects.

// objects
// purpose of "new".
//A new object is created: {}.
// this.name = "cat" → now object is { name: "cat" }
// this.legCount = 4 → { name: "cat", legCount: 4 }
// this.speaks = "meow" → { name: "cat", legCount: 4, speaks: "meow" }

// static functions. these are not associated to the objects but are associated to the class itself.

class Animals {
  constructor(name, legCount, speaks) {
    this.name = name
    this.legCount = legCount
    this.speaks = speaks
  }
static mytype() {
  console.log("animal")
  return "animal";
}
  speak(){
    console.log("hi there " + this.speaks)
  }
}
// understand the dry run and concepts of these concepts.
// class is the blueprint of the building and and it can have multiple objects.
// objects
let dogs = new Animal("dog", 4, "woof");
let cats = new Animal("cat", 4, "meow");

Animals.mytype()




