const dayjs = require('dayjs')

function birthday(date) {
    //parametro com a data sera criado quando a função for chamada
    const birthday = dayjs(date)

    //dayjs sem parâmetro retorna a data atual
    const today = dayjs()

    //cria a diferença entre hoje e o aniversario
    const ageInYears = today.diff(birthday, 'year')

    //soma o aniversário com a idade + 1
    //retorna um objeto clonado com o tempo que a gente especificou
    const nextBirthday = birthday.add(ageInYears + 1, 'year')

    //calcula quantos dias faltam para o próximo aniversário
    //mostra a diferença de dias entre a data de hoje até o aniversario
    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

    //nextBirthday.format('DD/MM/YYYY')

    console.log(`Idade: ${ageInYears}`)
    console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)

    //birthday.diff('1996-11-01')


}
birthday('1996-11-01')