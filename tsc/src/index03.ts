(function () {
  type myType = {
    name: string,
    age: number
  }

  interface myInterface {
    name: string
    age: number
  }

  interface myInterface {
    gender: string
  }

  const obj: myInterface = {
    name: 'sss',
    age: 111,
    gender: 'nan'
  }

  interface myInter {
    name: string
    sayhello():void
  }

  class myClass implements myInter {
    name: string;
    constructor(name: string) {
      this.name = name
    }
    sayhello() {
      console.log('大家好');
    }
  }

  console.log(obj);
  
})()