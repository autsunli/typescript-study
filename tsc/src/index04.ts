class myClass {
  private _name: string;
  age: number;
  constructor(name: string, age: number) {
    this._name = name
    this.age = age
  }

  // // getter用来读取属性
  // // setting设置属性
  // // 属性存取器
  // getName() {
  //   return this._name
  // }
  // setName(value: string) {
  //   this._name = value
  // }
  // getAge() {
  //   return this.age
  // }
  // setAge(value: number) {
  //   this.age = value
  // }

  get name() {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

}

const c = new myClass('孙悟空', 20)
console.log(c.name);
c.name = '猪八戒'

// 等价
// class C {
//   name: string
//   age: number
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }

class C {
  constructor(public name: string, public age: number) {
  }
}