const evaulateString = () => {
    eval(string);
} 



$(() => {


    let string = ""
    let $result = $('#result') 
    const $0 = $('#0')
    const $1 = $('#1')
    const $2 = $('#2')
    const $3 = $('#3')
    const $4 = $('#4')
    const $5 = $('#5')
    const $6 = $('#6')
    const $7 = $('#7')
    const $8 = $('#8')
    const $9 = $('#9')
    const $plus = $('#plus')
    const $decimal = $('#decimal')
    const $divide = $('#divide')
    const $multiply = $('#multiply')
    const $subtract = $('#subtract')
    const $equal = $('#equal')


    $0.on('click', () => {
        string += '0'
        console.log(string)
    })
    $1.on('click', () => {
        string += '1'
        console.log(string)
    })
    $2.on('click', () => {
        string += '2'
        console.log(string)
    })
    $3.on('click', () => {
        string += '3'
        console.log(string)
    })
    $4.on('click', () => {
        string += '4'
        console.log(string)
    })
    $5.on('click', () => {
        string += '5'
        console.log(string)
    })
    $6.on('click', () => {
        string += '6'
        console.log(string)
    })
    $7.on('click', () => {
        string += '7'
        console.log(string)
    })
    $8.on('click', () => {
        string += '8'
        console.log(string)
    })
    $9.on('click', () => {
        string += '9'
        console.log(string)
    })


    $plus.on('click', () => {
        string += '+'
        console.log(string)
    })

    $decimal.on('click', () => {
        string += '.'
        console.log(string)
    })
    $divide.on('click', () => {
        string += '/'
        console.log(string)
    })
    $multiply.on('click', () => {
        string += '*'
        console.log(string)
    })
    $subtract.on('click', () => {
        string += '-'
        console.log(string)
    })
    $equal.on('click', () => {
        $result.text(eval(string))
    })
})