function getAllColor(num) {
    let colorArr = []
    for (let i = 0; i < num; i++) {
        let color = getRandomCorlor()
        colorArr.push(color)
    }
    console.log(colorArr);
    
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
    return (document.body.clientWidth / divi) * (document.body.clientHeight / divi)
}

var x = 0
var y = 0

function drawReat(rgb) {
    ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]})`
    ctx.fillRect(x, y, 1, 1)
    x += 1
    if (x >= document.body.clientWidth) {
        y += 1
        x = 0
    }
}
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
function renderAll() {
    x=0 
    y=0
    ctx.clearRect(0,0,document.body.clientWidth,document.body.clientHeight)
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight
    let boxColor = getAllColor(getSumOfPX(1))
    boxColor.forEach(item => {
        drawReat(item)
    })
    getTheImageData()
}
function getTheImageData() {
    let imageData = ctx.getImageData(0, 0, 1, 1)
    console.log(imageData)
}
var myimage = new Image()
var myimage2 = new Image()
myimage.src = './ME.jpg'
myimage.crossOrigin = 'anonymous'; 
myimage2.src = './metwo.png'
document.body.onload = function () {
    // renderAll()
    
    // ctx.drawImage(myimage,0,0,myimage.width/10,myimage.height/10)
    ctx.drawImage(myimage,0,0,myimage.width/100,myimage.height/100)
    console.log(myimage.width/100,myimage.height/100);
    let imageData = ctx.getImageData(0,0,myimage.width/100,myimage.height/100)
    console.log(imageData);
    let data =new Uint8ClampedArray(2112);
    data.map((item,index)=>{
        if(index % 2 === 0 && index >= 2){
            data[index] = imageData.data[index/2]
            return
        }
        data[index] = 255
    })
    // data.push(9)
    console.log(data);
    
    // data.splice(0,1,99)
    console.log(imageData);
    let imageDatanew =new ImageData(data,24,22)
    console.log(imageDatanew);
    ctx.putImageData(imageDatanew,20,20)
    ctx.putImageData(imageData,50,50)
    // ctx.drawImage(myimage2,200,200,)
}

window.onresize = function () {
    // renderAll()
}