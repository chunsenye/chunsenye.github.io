function getAllColor(num) {
    let colorArr = []
    for (let i = 0; i < num; i++) {
        let color = getRandomCorlor()
        colorArr.push(color)
    }
    return colorArr
}

function getRandomCorlor() {
    let color = []
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 255))
    }
    return color
}

function getSumOfPX(divi) {
    return (document.body.clientWidth/divi) * (document.body.clientHeight/divi)
}

function renderToSpan(rgb) {
    let span = document.createElement('span')
    document.body.appendChild(span)
    span.style.background=`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
}
// console.log(getAllColor(getSumOfPX()));
document.body.onload = function () {
    let spanColor =  getAllColor(getSumOfPX(2))
    spanColor.forEach(item=>{
        renderToSpan(item)
    })
}