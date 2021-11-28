(function () {
  abstract class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    // 抽象方法使用abstract开头，没有方法体
    // 只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract sayhello():void
  }
  class Dog extends Animal {
    weight: number

    constructor(name: string, age: number, weight: number) {
      super(name, age)
      this.weight = weight
    }

    sayhello() {
      console.log('旺');
    }
  }
  class Cat extends Animal {
    sayhello() {
      console.log('喵');
    }
  }

  const dog = new Dog('旺旺', 5, 10)
  const cat = new Cat('喵喵', 5)
  dog.sayhello()
  cat.sayhello()

  // const a = new Animal()
})()