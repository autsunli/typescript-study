class Dog {

  name: string
  age: number
  constructor(name: string, age: number) {
    console.log(this);
    this.name = name
    this.age = age
  }
  bark() {
    // alert('旺')
    console.log(this);
  }
}

const dog = new Dog('小黑', 23)
console.log(dog);
dog.bark()
