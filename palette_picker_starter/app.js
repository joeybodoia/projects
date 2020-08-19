////////////////////////
// GLOBAL DATA
////////////////////////

const $colorPalette = $('#color-palette')
const $myPalette = $('#my-palette')
const $generate = $('#generate')



////////////////////////
// FUNCTION DEFINITIONS
////////////////////////

addColor = (event) => {
    const color =$(event.currentTarget).css('background-color')
    const $square = $('<div>')
    $square.addClass('square')
    $square.css('background-color',color)
    $myPalette.append($square)
}

const makePalette = () => {
    $colorPalette.empty()
    for(let i =0;i<150;i++){
        const $square = $('<div>')
        $square.addClass('square')
        $colorPalette.append($square)
        $square.on('click', addColor)
        const red = Math.floor(Math.random()*255)
        const green = Math.floor(Math.random()*255)
        const blue = Math.floor(Math.random()*255)
        const color = `rgb(${red},${green},${blue})`
        $square.css('background-color',color)
    }
}



/////////////////////////
// MAIN APP LOGIC
/////////////////////////
$generate.on('click',makePalette)
