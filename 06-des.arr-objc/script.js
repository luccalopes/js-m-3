const person = {
    name: 'Luke',
    job: 'Farmer',
    parents: ['Anakin', 'Padme']
}

const name = person.name

//quebra o objeto nas propriedades que foram colocadas dentro da chave
const {job, parents} = person
//as variáveis declaradas dentro dos colchetes DEVEM ter o mesmo nome das propriedades e a ordem não importa

console.log(name, job, parents)

//dentro dos colchetes você coloca as variáveis que você quer criar para as propriedades do array
const [father, mother] = parents
//a ordem dos elementos dentro do array é importante na desestruturação pois o js interpreta sempre na mesma ordem

function createUser(name, job, parents) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id, 
        name,
        job,
        parents
    }
}

const luke = createUser(person)
console.log(luke)