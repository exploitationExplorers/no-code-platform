let obj1 = {
  a: 0,
  b: 1
}

let obj2 = {
  a: 1
}

let obj3 = {
  ...obj2
  ...obj1

}
console.log(obj3)
