/*const a = 0
const b = null
const c = 'Teste'

console.log(a || b || c)

console.log(a ?? b ?? c)

let aa = 0
let bb = aa || 42
console.log({aa, bb})
//o js entende que o 0 em 'aa' é falso e então atribui o valor 42 para o bb

bb = aa ?? 42
console.log({aa, bb})*/

let person = {
    name: 'John Doe',
    email: 'doejohn@email.com',
    birthday: '1990-03-14',
    age: 32
}

let x = 0
x = person.data?.age
console.log(x)

const f = (...args) => console.log(args[0], args[args.length - 1])
