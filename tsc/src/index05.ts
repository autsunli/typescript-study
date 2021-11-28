function fn<T>(a: T): T {
  return a
}

fn(10)

fn<string>('hello')

function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a
}

fn2<number, string>(123, 'hello')

interface Inter {
  length: number
}

// 表示T必须是Inter的实现类
function fn3<T extends Inter>(a: T): number {
  return a.length
}

fn3('123')

class myClass2<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}

const mc = new myClass2<string>('孙悟空')