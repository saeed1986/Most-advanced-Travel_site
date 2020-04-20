class Person {
  constructor(name, favoriteColor) {
    this.name = name;
    this.favoriteColor = favoriteColor;
  }

  greet() {
    console.log(
      "Hello, my name is " +
        this.name +
        " and my favorite Color is " +
        this.favoriteColor +
        "."
    );
  }
}

export default Person;
