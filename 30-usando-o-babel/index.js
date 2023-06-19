const arithmeticAverage = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`Média aritmética simples: ${arithmeticAverage(3, 6, 10, 9)}`)

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, {number, weight}) => accum + (number * (weight ?? 1)), 0)//weight dentro de parenteses p/ js interpretar certo usando o op. de coalescencia nula
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}

console.log(`Média ponderada: ${weightedAverage(
    {number: 9, weight: 3},
    {number: 7},
    {number: 10, weight: 1}
)}`)

const median = (...numbers) => {
    //variável array clonada para o .sort não alterar o array original
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)

    //se o tamanho do conteúdo de orderedNumbers quando for dividido por 2 for diferente de 0 ele retorna o número que está no meio
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }

    //retorna o elemento que está antes do elemento no meio do array
    const firstMedian = orderedNumbers[middle - 1]

    //retorna o elemento que esta no meio do array
    const secondMedian = orderedNumbers[middle]

    return arithmeticAverage(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

const mode = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1]) 
    return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)