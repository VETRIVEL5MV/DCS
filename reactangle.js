class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
  calculateArea() {
    return this.length * this.breadth;
  }
  calculatePerimeter() {
    return 2 * (this.length + this.breadth);
  }
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.calculateArea()); 
console.log(rectangle.calculatePerimeter());
