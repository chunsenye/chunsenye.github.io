window.onload = windowInit;
window.onresize = windowInit;
init();
// All var
var canvas1 = document.getElementById('canvas1');
var canvas2 = document.getElementById('canvas2');
var canvas3 = document.getElementById('canvas3');
var canvas4 = document.getElementById('canvas4');
var canvas5 = document.getElementById('canvas5');
var spaceExample = document.getElementById('spaceExample');
var wExample = document.getElementById('wExample');
var spaceContainer = document.getElementById('spaceContainer');
var massageBox = document.getElementById('massageBox');
var massage = document.getElementById('massage');
var c1big = document.getElementById('c1big');
var c1small = document.getElementById('c1small');
var c2big = document.getElementById('c2big');
var c2small = document.getElementById('c2small');
var c3big = document.getElementById('c3big');
var c3small = document.getElementById('c3small');
var glass = document.getElementById('glass');
var changeProperty = document.getElementById('changeProperty');
var p_width = document.getElementById('p_width');
var p_height = document.getElementById('p_height');
var p_deep = document.getElementById('p_deep');
var p_x = document.getElementById('p_x');
var p_y = document.getElementById('p_y');
var p_z = document.getElementById('p_z');
var spaceEdit = document.getElementById('spaceEdit');
var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');
var ctx4 = canvas4.getContext('2d');
var ctx5 = canvas5.getContext('2d');
var c1h, c1w, c2h, c2w, c3h, c3w;
//正 比例值 lScale=3 l=100 实际为300
var lScale = 1;
var fScale = 1;
var pScale = 1;
var scale = 1;
var sl, sw, sh;
var viewFlag = 4;
var caculate = false;
var spaceFlag = false;
var MOVING=false;
//窗口初始化
function windowInit() {
    $('#Aside').height(window.innerHeight - 80);
    $('#canvasBox').height(window.innerHeight - 80);
    $('#canvasBox').width(window.innerWidth - 317);
    canvas1.width = window.innerWidth - 717;
    canvas2.width = 400;
    canvas2.height = window.innerHeight - 380;
    canvas3.width = window.innerWidth - 717;
    canvas3.height = window.innerHeight - 380;
    //宽度高度赋值
    c1h = canvas1.height;
    c1w = canvas1.width;
    c2h = canvas2.height;
    c2w = canvas2.width;
    c3h = canvas3.height;
    c3w = canvas3.width;
    ctx1.fillStyle = 'red';
    ctx2.fillStyle = 'red';
    ctx3.fillStyle = 'red';

    drawView1();
    drawView2();
    drawView3();
    changeTo3view();
}
//画四分图中的俯视图
function drawView1() {
    canvas1.style.top = 40 + 'px';
    // canvas1.style.left = 0 + 'px';
    canvas1.style.left = 400 + 'px';
    // c1big.style.right= 350 + 'px';
    // c1big.style.top = 50 + 'px';
    // c1small.style.right= 350 + 'px';
    // c1small.style.top = 50 + 'px';
    canvas1.width = window.innerWidth - 717;
    canvas1.height = 300;
    //坐标箭头1  
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx1.strokeRect(0, 0, canvas1.width, 300);
    ctx1.beginPath();
    ctx1.moveTo(10, 10);
    ctx1.lineTo(10, 50);
    ctx1.lineTo(6, 46);
    ctx1.moveTo(10, 50);
    ctx1.lineTo(14, 46);
    ctx1.stroke();
    ctx1.closePath();
    ctx1.beginPath();
    ctx1.moveTo(10, 10);
    ctx1.lineTo(50, 10);
    ctx1.lineTo(46, 6);
    ctx1.moveTo(50, 10);
    ctx1.lineTo(46, 14);
    ctx1.stroke();
    ctx1.closePath();
    ctx1.strokeText('x', 54, 12);
    ctx1.strokeText('y', 8, 58);
    ctx1.strokeText('俯视图', canvas1.width - 40, canvas1.height - 12);
    // ctx1.fillRect(canvas1.width / 2 - 1, canvas1.height / 2 - 1, 2, 2);
    c1big.style.right = 350 + 'px';
    c1big.style.left = '';
    c1big.style.top = 50 + 'px';
    c1small.style.right = 330 + 'px';
    c1small.style.left = '';
    c1small.style.top = 50 + 'px';
}
//画四分图中的左视图
function drawView2() {
    canvas2.style.top = 340 + 'px';
    //坐标箭头2
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.strokeRect(0, 0, canvas2.width, canvas2.height);
    ctx2.beginPath();
    ctx2.moveTo(10, canvas2.height - 10);
    ctx2.lineTo(10, canvas2.height - 50);
    ctx2.lineTo(6, canvas2.height - 46);
    ctx2.moveTo(10, canvas2.height - 50);
    ctx2.lineTo(14, canvas2.height - 46);
    ctx2.stroke();
    ctx2.closePath();
    ctx2.beginPath();
    ctx2.moveTo(10, canvas2.height - 10);
    ctx2.lineTo(50, canvas2.height - 10);
    ctx2.lineTo(46, canvas2.height - 6);
    ctx2.moveTo(50, canvas2.height - 10);
    ctx2.lineTo(46, canvas2.height - 14);
    ctx2.stroke();
    ctx2.closePath();
    ctx2.strokeText('z', 54, canvas2.height - 12);
    ctx2.strokeText('y', 8, canvas2.height - 58);
    ctx2.strokeText('左视图', canvas2.width - 40, canvas2.height - 12);
    // ctx2.fillRect(canvas2.width / 2 - 1, canvas2.height / 2 - 1, 2, 2);
    c2big.style.left = 355 + 'px';
    c2big.style.top = 350 + 'px';
    c2small.style.left = 375 + 'px';
    c2small.style.top = 350 + 'px';

}
//画四分图中的正视图
function drawView3() {
    canvas3.height = window.innerHeight - 380;
    canvas3.style.left = 400 + 'px';
    canvas3.style.top = 340 + 'px';
    //坐标箭头3
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    ctx3.strokeRect(1, 1, canvas3.width - 1, canvas3.height - 1);
    ctx3.beginPath();
    ctx3.moveTo(10, canvas2.height - 10);
    ctx3.lineTo(10, canvas2.height - 50);
    ctx3.lineTo(6, canvas2.height - 46);
    ctx3.moveTo(10, canvas2.height - 50);
    ctx3.lineTo(14, canvas2.height - 46);
    ctx3.stroke();
    ctx3.closePath();
    ctx3.beginPath();
    ctx3.moveTo(10, canvas2.height - 10);
    ctx3.lineTo(50, canvas2.height - 10);
    ctx3.lineTo(46, canvas2.height - 6);
    ctx3.moveTo(50, canvas2.height - 10);
    ctx3.lineTo(46, canvas2.height - 14);
    ctx3.stroke();
    ctx3.closePath();
    ctx3.strokeText('x', 54, canvas2.height - 12);
    ctx3.strokeText('z', 8, canvas2.height - 58);
    ctx3.strokeText('正视图', canvas1.width - 40, canvas2.height - 12);
    // ctx3.fillRect(canvas3.width / 2 - 1, canvas3.height / 2 - 1, 2, 2);
    c3big.style.right = 350 + 'px';
    c3big.style.top = 350 + 'px';
    c3small.style.right = 330 + 'px';
    c3small.style.top = 350 + 'px';
}
//画三分图中的俯视图
function drawView4() {
    c1big.style.left = 350 + 'px';
    c1big.style.top = 350 + 'px';
    c1small.style.left = 370 + 'px';
    c1small.style.top = 350 + 'px';
    canvas1.style.top = 340 + 'px';
    canvas1.style.left = 0 + 'px';
    canvas1.width = 400;
    canvas1.height = window.innerHeight - 380;
    //坐标箭头1  
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx1.strokeRect(0, 0, canvas1.width, canvas1.height);
    ctx1.beginPath();
    ctx1.moveTo(10, 10);
    ctx1.lineTo(10, 50);
    ctx1.lineTo(6, 46);
    ctx1.moveTo(10, 50);
    ctx1.lineTo(14, 46);
    ctx1.stroke();
    ctx1.closePath();
    ctx1.beginPath();
    ctx1.moveTo(10, 10);
    ctx1.lineTo(50, 10);
    ctx1.lineTo(46, 6);
    ctx1.moveTo(50, 10);
    ctx1.lineTo(46, 14);
    ctx1.stroke();
    ctx1.closePath();
    ctx1.strokeText('x', 54, 12);
    ctx1.strokeText('y', 8, 58);
    ctx1.strokeText('俯视图', canvas1.width - 40, canvas1.height - 12);
    // ctx1.fillRect(canvas1.width / 2 - 1, canvas1.height / 2 - 1, 2, 2);
    c1big.style.left = 350 + 'px';
    c1big.style.top = 350 + 'px';
    c1small.style.left = 370 + 'px';
    c1small.style.top = 350 + 'px';

}
//画三分图中的正视图
function drawView5() {
    canvas3.style.top = 40 + 'px';
    canvas3.height = window.innerHeight - 80;
    c3big.style.top = 50 + 'px';
    c3small.style.top = 50 + 'px';
    //坐标箭头3
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    ctx3.strokeRect(1, 1, canvas3.width - 1, canvas3.height - 1);
    ctx3.beginPath();
    ctx3.moveTo(10, canvas3.height - 10);
    ctx3.lineTo(10, canvas3.height - 50);
    ctx3.lineTo(6, canvas3.height - 46);
    ctx3.moveTo(10, canvas3.height - 50);
    ctx3.lineTo(14, canvas3.height - 46);
    ctx3.stroke();
    ctx3.closePath();
    ctx3.beginPath();
    ctx3.moveTo(10, canvas3.height - 10);
    ctx3.lineTo(50, canvas3.height - 10);
    ctx3.lineTo(46, canvas3.height - 6);
    ctx3.moveTo(50, canvas3.height - 10);
    ctx3.lineTo(46, canvas3.height - 14);
    ctx3.stroke();
    ctx3.closePath();
    ctx3.strokeText('x', 54, canvas3.height - 12);
    ctx3.strokeText('z', 8, canvas3.height - 58);
    ctx3.strokeText('正视图', canvas3.width - 40, canvas3.height - 12);
    // ctx3.fillRect(canvas3.width / 2 - 1, canvas3.height / 2 - 1, 2, 2);
    c3big.style.top = 50 + 'px';
    c3small.style.top = 50 + 'px';
}
//根据输入的内容画空间原始
var first = true;

function drawSpace() {
    if (spaceContainer.style.display == 'none' && spaceFlag) {
        drawFrontView(sl, sh);
        drawLeftView(sw, sh);
        drawPlanView(sl, sw);
    } else {
        //需要一个比例
        var l = parseInt($('#spaceLength').val());
        var w = parseInt($('#spaceWidth').val());
        var h = parseInt($('#spaceHeight').val());
        var max = 0;
        if (l && w && h) {
            //取最大值
            if (first) {
                if (l >= w) {
                    max = l;
                    if (l < h) {
                        max = h;
                    }
                } else if (w >= h) {
                    max = w;
                } else {
                    max = h;
                }
                console.log(max);
                //根据max值求缩放值

                scale = Math.ceil(max / 250);
            }

            //要对l,h,w进行处理
            sl = l;
            sw = w;
            sh = h;
            lScale = scale;
            fScale = scale * 0.5;
            pScale = scale;
            // //画正视图
            // // ctx3.strokeRect(c3w/2-l/2,c3h/2-h/2, l, h);
            // drawFrontView(l, h);
            // //画左视图
            // // ctx2.strokeRect(c2w/2-w/2,c2h/2-h/2, w, h);
            // drawLeftView(w, h);
            // //画俯视图
            // // ctx1.strokeRect(c1w/2-l/2,c1h/2-w/2, l, w);
            // drawPlanView(l, w);
            spaceContainer.style.display = 'none';
            $('#spaceLength').val('');
            $('#spaceWidth').val('');
            $('#spaceHeight').val('');
            first = false;
        } else {
            showMassageBox(3000, '文本框不能为空');
        }
    }
}

function drawSpace2() {
    var l = parseInt($('#spaceLength').val());
    var w = parseInt($('#spaceWidth').val());
    var h = parseInt($('#spaceHeight').val());
    var max = 0;
    if (l && w && h) {
        //取最大值
        if (l >= w) {
            max = l;
            if (l < h) {
                max = h;
            }
        } else if (w >= h) {
            max = w;
        } else {
            max = h;
        }
        console.log(max);
        //根据max值求缩放值

        scale = Math.ceil(max / 250);
        //要对l,h,w进行处理
        sl = l;
        sw = w;
        sh = h;
        lScale = scale;
        fScale = scale;
        pScale = scale;
        canvas4.style.display = 'block';
        canvas4.width = sl / fScale;
        canvas4.height = sh / fScale;
        canvas4.style.left = 400 + (canvas3.width - canvas4.width) / 2 + 'px';
        canvas4.style.top = 40 + (canvas3.height - canvas4.height) / 2 + 'px';
        canvas5.style.display = 'block';
        canvas5.width = sl / pScale;
        canvas5.height = sw / pScale;
        canvas5.style.left = (canvas1.width - canvas5.width) / 2 + 'px';
        canvas5.style.top = 340 + (canvas1.height - canvas5.height) / 2 + 'px';
        spaceContainer.style.display = 'none';
    }
}
//画正视图中的空间
function drawFrontView(l, h) {
    l = l / fScale;
    h = h / fScale;
    if (viewFlag == 3) {
        drawView5();
    }
    if (viewFlag == 4) {
        drawView3();
    }
    // ctx3.strokeRect(canvas3.width / 2 - l / 2, canvas3.height / 2 - h / 2, l, h);
    // ctx3.strokeText(fScale, 0, 10);

}
//画左视图中的空间
function drawLeftView(w, h) {
    h = h / lScale;
    w = w / lScale;
    drawView2();
    // ctx2.strokeRect(canvas2.width / 2 - w / 2, canvas2.height / 2 - h / 2, w, h);
    // ctx2.strokeText(lScale, 0, 10);
}
//画俯视图中的空间
function drawPlanView(l, w) {
    l = l / pScale;
    w = w / pScale;
    if (viewFlag == 3) {
        drawView4();
    }
    if (viewFlag == 4) {
        drawView1();
    }
    // ctx1.strokeRect(canvas1.width / 2 - l / 2, canvas1.height / 2 - w / 2, l, w);
    // ctx1.strokeText(pScale, 0, 10);

}
//监听空间示例被拖动时
spaceExample.onmousedown = function () {
    // spaceExample.style.position='absolute'
    // spaceExample.style.cursor='move';
    if (spaceFlag) {
        return;
    }
    var l = spaceExample.style.left;
    var t = spaceExample.style.top;
    canvas3.onmousemove = function (e) {
        spaceExample.style.left = e.clientX - 50 + 'px';
        spaceExample.style.top = e.clientY - 50 + 'px';
        spaceExample.onmouseup = function () {
            spaceContainer.style.display = 'block';
            spaceExample.style.left = l;
            spaceExample.style.top = t;
            canvas3.onmousemove = '';
            spaceExample.onmouseup = '';
            spaceFlag = true;
        }
    }
}
//显示信息窗口
function showMassageBox(time, str) {
    massage.innerHTML = str;
    // massageBox.style.display='block';
    $('#massageBox').slideDown(500);
    setTimeout(function () {
        $('#massageBox').slideUp(500);
    }, time);
}
//按下enter提交数据
document.onkeydown = function (e) {
    if (e.which == 13 && spaceContainer.style.display == 'block') {
        drawSpace();
    }
}
//三分图
function changeTo3view() {
    //切换为3分图
    canvas2.style.display = 'none';
    c2big.style.display = 'none';
    c2small.style.display = 'none';
    drawView4();
    drawView5();
    viewFlag = 3;
    if (spaceFlag) {
        drawSpace();
        drawAll();
    }

}
//四分图
function changeTo4view() {
    //切换为4分图
    viewFlag = 4;
    canvas2.style.display = 'block';
    c2big.style.display = 'block';
    c2small.style.display = 'block';
    drawView1();
    drawView3();
    drawView2();
    if (spaceFlag) {
        drawSpace();
        drawAll();
    }
}
// 点击柜子，并添加柜子
wExample.onmousedown = function () {
    console.log('按了');
    if (spaceFlag) {
        var l = wExample.style.left;
        var t = wExample.style.top;
        document.onmousemove = function (e) {
            wExample.style.left = e.clientX - 50 + 'px';
            wExample.style.top = e.clientY - 150 + 'px';
            wExample.onmouseup = function () {
                wExample.style.left = l;
                wExample.style.top = t;
                document.onmousemove = '';
                wExample.onmouseup = '';
                //空间为空的话不能添加柜子
                addW();
                caculate = true;
            }
        }
    } else {
        showMassageBox(1000, '请先添加一个空间');
    }
}
//显示表单
function addW() {
    changeProperty.style.width = window.innerWidth * 0.5 + 'px';
    changeProperty.style.height = window.innerHeight * 0.4 + 'px';
    glass.style.display = 'block';
}
//画出柜子
var wardrobe = [];
var wnum = 0;
wardrobe[wnum] = new Wardrobe(0, 0, 0, 0, 0, 0,"black");
// 根据表单信息画出不同视图下的柜子
function update() {
    var x = parseInt(p_x.value);
    var y = parseInt(p_y.value);
    var z = parseInt(p_z.value);
    //获取宽高
    if ($('#p_height')[0].value != '' && $('#p_height')[0].value != '' && $('#p_deep')[0].value != '' && p_x.value && p_y.value && p_z.value) {
        wardrobe[wnum].w = parseInt($('#p_width')[0].value);
        wardrobe[wnum].h = parseInt($('#p_height')[0].value);
        wardrobe[wnum].d = parseInt($('#p_deep')[0].value);
        //
       // 
        //
        wardrobe[wnum].x = x;
        wardrobe[wnum].y = y;
        wardrobe[wnum].z = z;
        
        if( $('input[name="checkbox0"]')[0].checked){
            wardrobe[wnum].x=0;   
        }
        if( $('input[name="checkbox1"]')[0].checked){
            wardrobe[wnum].x=canvas4.width*fScale-wardrobe[wnum].w;   
        }
        if( $('input[name="checkbox2"]')[0].checked){
            wardrobe[wnum].x=0;   
            wardrobe[wnum].w=canvas4.width*fScale;
        }
        if( $('input[name="checkbox3"]')[0].checked){
            wardrobe[wnum].z=0;   
        }
        if( $('input[name="checkbox4"]')[0].checked){
            wardrobe[wnum].z=canvas4.height*fScale-wardrobe[wnum].d;   
        }
        if( $('input[name="checkbox5"]')[0].checked){
            wardrobe[wnum].z=0;
            wardrobe[wnum].d=canvas4.height*fScale; 
        }
        if( $('input[name="checkbox6"]')[0].checked){
            wardrobe[wnum].y=canvas5.height*pScale-wardrobe[wnum].h;   
        }
        if( $('input[name="checkbox7"]')[0].checked){
            wardrobe[wnum].y=0;   
        }
        if( $('input[name="checkbox8"]')[0].checked){
            wardrobe[wnum].y=0;
            wardrobe[wnum].h=canvas5.height*pScale;   
        }
        //正视图中检测碰撞
        for(i in wardrobe){
            if(wnum!=i){
                if(wardrobe[wnum].x>=wardrobe[i].x&&wardrobe[wnum].x<=wardrobe[i].x+wardrobe[i].w){
                    if(wardrobe[wnum].z>=wardrobe[i].z&&wardrobe[wnum].z<=wardrobe[i].z+wardrobe[i].h){
                        console.log('发生了碰撞');
                    }
                }else{
                    console.log('没有发生碰撞');
                }
            }
            
        }
        draw();
        glass.style.display = 'none';
        //添加到数组里面
        wnum++;
        wardrobe[wnum] = new Wardrobe(0, 0, 0, 0, 0, 0,"black");
        // console.log(wardrobe)
    } else {
        showMassageBox(1000, '文本框不能为空')
    }
}
function draw(){
    ctx4.clearRect(0,0,canvas4.width,canvas4.height);
    ctx5.clearRect(0,0,canvas5.width,canvas5.height);
    for (i in wardrobe){
        ctx5.strokeStyle=wardrobe[i].color;
        ctx4.strokeStyle=wardrobe[i].color;
        ctx5.strokeRect(wardrobe[i].x / pScale, wardrobe[i].y / pScale, wardrobe[i].w / pScale, wardrobe[i].h / pScale);
        ctx4.strokeRect(wardrobe[i].x / fScale, wardrobe[i].z / fScale, wardrobe[i].w / fScale, wardrobe[i].d / fScale);
    }
}
//创建柜子的构造方法
function Wardrobe(x, y, z, w, h, d,color) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.h = h;
    this.d = d;
    this.color = color;
}
//自动计算坐标的范围

document.onkeyup = function () {
    //当只有一个柜子的时候
    if (caculate) {
        p_width.placeholder = '0~' + sl;
        p_height.placeholder = '0~' + sw;
        p_deep.placeholder = '0~' + sh;
        if (p_width.value > sl) {
            p_width.value = sl;
        }
        if (p_height.value > sw) {
            p_height.value = sw;
        }
        if (p_deep.value > sh) {
            p_deep.value = sh;
        }
        p_x.placeholder = '0~' + (sl - p_width.value);
        p_y.placeholder = '0~' + (sw - p_height.value);
        p_z.placeholder = '0~' + (sh - p_deep.value);
        if (p_x.value > sl - p_width.value) {
            p_x.value = sl - p_width.value;
        }
        if (p_y.value > sw - p_height.value) {
            p_y.value = sw - p_height.value;
        }
        if (p_z.value > sh - p_deep.value) {
            p_z.value = sh - p_deep.value;
        }
    }
}
// 正视图选中高亮
canvas4.onmousedown = function (e) {
    console.log(1)
    if (spaceFlag && e.which == 1) {
        for (i in wardrobe) {
            wardrobe[i].color='black';
            ctx4.lineWidth=1;
            ctx5.lineWidth=1;
            if (pinTheBox((e.clientX - canvas4.offsetLeft) / fScale, (e.clientY - canvas4.offsetTop) / fScale, (wardrobe[i].x) / fScale, (wardrobe[i].z) / fScale, wardrobe[i].w / fScale, wardrobe[i].d / fScale)) {
                console.log(2);
                // ctx1.strokeStyle = 'red';
                // ctx1.clearRect((canvas1.width - sh / pScale) / 2 + wardrobe[i].x / pScale - 1, (canvas1.height - sw / pScale) / 2 + wardrobe[i].y / pScale - 1, wardrobe[i].w / pScale + 2, wardrobe[i].h / pScale + 2);
                // ctx1.strokeRect((canvas1.width - sh / pScale) / 2 + wardrobe[i].x / pScale, (canvas1.height - sw / pScale) / 2 + wardrobe[i].y / pScale, wardrobe[i].w / pScale, wardrobe[i].h / pScale);
                var num = i;
                wardrobe[i].color='blue';
                ctx4.lineWidth=3;
                ctx5.lineWidth=3;
                draw();
                // canvas4.onmousemove = function (e2) {
                //     console.log(2)
                //     // console.log(1)
                //     canvas1.style.cursor = 'move';
                //     wardrobe[num].x = e2.clientX - canvas4.offsetLeft;
                //     wardrobe[num].y = e2.clientY - canvas4.offsetTop;
                //     // var offsetx=clickx-wardrobe[num].x / pScale;
                //     // ctx1.clearRect((canvas1.width - sh / pScale) / 2 + wardrobe[i].x / pScale - 1, (canvas1.height - sw / pScale) / 2 + wardrobe[i].y / pScale - 1, wardrobe[i].w / pScale + 2, wardrobe[i].h / pScale + 2);
                //     drawView4();
                //     drawSpace();
                // }
                // canvas1.onmouseup = function () {
                //     canvas1.onmousemove = '';
                //     canvas1.onmouseup = '';
                //     ctx1.strokeStyle = 'black';
                //     drawView4();
                //     drawSpace();
                //     drawAll();
                //     canvas1.style.cursor = 'default';
                // }
            }else{
                draw();
            }
        }
    }
}
//判断点是否在柜子里面
function pinTheBox(e_x, e_y, box_x, box_y, box_w, box_h) {
    if (e_x >= box_x && e_x <= (box_x + box_w) && e_y >= box_y && e_y <= (box_y + box_h)) {
        return 1;
    } else {
        return 0;
    }
}
//画出所有的柜子
function drawAll() {
    ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
    ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
    for (i in wardrobe) {
        // ctx1.strokeRect((canvas1.width - sl / pScale) / 2 + wardrobe[i].x / pScale - wardrobe[i].w / (pScale * 2), (canvas1.height - sw / pScale) / 2 + wardrobe[i].y / pScale - wardrobe[i].h / (pScale * 2), wardrobe[i].w / pScale, wardrobe[i].h / pScale);
        // ctx2.strokeRect((canvas2.width - sh / lScale) / 2 + wardrobe[i].z / lScale - wardrobe[i].d / (lScale * 2), (canvas2.height - sw / lScale) / 2 + wardrobe[i].y / lScale - wardrobe[i].h / (lScale * 2), wardrobe[i].d / lScale, wardrobe[i].h / lScale);
        // ctx3.strokeRect((canvas3.width - sl / fScale) / 2 + wardrobe[i].x / fScale - wardrobe[i].w / (fScale * 2), (canvas3.height - sh / fScale) / 2 + wardrobe[i].z / fScale - wardrobe[i].d / (fScale * 2), wardrobe[i].w / fScale, wardrobe[i].d / fScale);
        ctx4.strokeRect(wardrobe[i].x / fScale, wardrobe[i].z / fScale, wardrobe[i].w / fScale, wardrobe[i].d / fScale);
        ctx5.strokeRect(wardrobe[i].x / pScale, wardrobe[i].y / pScale, wardrobe[i].w / pScale, wardrobe[i].h / pScale);
    }
}
//右键编辑空间
canvas3.onmousedown = function (e) {
    if (e.which == 3) {
        spaceEdit.style.display = 'block';
        spaceEdit.style.left = e.clientX + 'px';
        spaceEdit.style.top = e.clientY + 'px';
    } else if (e.which == 1) {
        console.log((e.clientX - 400) + ':' + (e.clientY - 40));
        for (i in wardrobe) {
            var num = i;
            if (pinTheBox(e.clientX - 400, e.clientY - 40, wardrobe[num].x, wardrobe[num].z, wardrobe[num].w, wardrobe[num].d)) {
                console.log('我' + num + '要变蓝');
            }
        }
        spaceEdit.style.display = 'none';
    }
}
//滚轮滚动时
canvas4.onmousewheel = function (e) {
    console.log(e.wheelDelta);
    if (e.wheelDelta >= 120) {
        fScale -= 0.1;
        if (canvas4.height >= canvas3.height - 130 || canvas4.width >= canvas3.width - 130) {
            showMassageBox(1000, '太大了');
            fScale += 0.1;
            return;
        }
    }
    if (e.wheelDelta <= -120) {
        fScale += 0.1;
    }
    // drawPlanView(sl, sw);
    canvas4.width = sl / fScale;
    canvas4.height = sh / fScale;
    canvas4.style.left = 400 + (canvas3.width - canvas4.width) / 2 + 'px';
    canvas4.style.top = 40 + (canvas3.height - canvas4.height) / 2 + 'px';
    drawAll();
}
canvas5.onmousewheel = function (e) {
    console.log(e.wheelDelta);
    if (e.wheelDelta >= 120) {
        pScale -= 0.1;
        if (canvas5.height >= canvas1.height - 130 || canvas5.width >= canvas1.width - 130) {
            showMassageBox(1000, '太大了');
            pScale += 0.1;
            return;
        }
    }
    if (e.wheelDelta <= -120) {
        pScale += 0.1;
    }
    // drawPlanView(sl, sw);
    canvas5.width = sl / pScale;
    canvas5.height = sw / pScale;
    canvas5.style.left = (canvas1.width - canvas5.width) / 2 + 'px';
    canvas5.style.top = 340 + (canvas1.height - canvas5.height) / 2 + 'px';
    drawAll();
}

//空间编辑
function sEdit() {
    spaceContainer.style.display = 'block';
}
//加载一个3d模型到div里面
function init() {
    var scene = new THREE.Scene(); //生成一个场景
    //生成一个相机
    var camera = new THREE.PerspectiveCamera(75, 4 / 3, 0.1, 10000); //视场，长宽比，近面，远面
    camera.position.x = 500;
    camera.position.y = 500;
    camera.position.z = 500;
    camera.rotation.y = 0.4;
    camera.lookAt(new THREE.Vector3(100, 100, 100));
    //生成一个渲染器
    var render = new THREE.WebGLRenderer({
        color: 0xffffff,
        // opacity:true,
        antialias: true
    });
    render.setClearColor(0xffffff);
    render.setSize(400, 300);
    //生成一个坐标轴，辅助线，坐标轴的参数
    render.shadowMapEnabled = true; //允许阴影映射，渲染阴影需要大量的资源，因此我们需要告诉渲染器我们需要阴影
    var axes = new THREE.AxisHelper(30);
    //生成网格1----------------------
    var lineMaterial = new THREE.LineBasicMaterial({
        color: 0x999900
    });
    var lineGeometry = new THREE.Geometry();
    lineGeometry.center(0, 0, 0);
    lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
    // lineGeometry.vertices.push(new THREE.Vector3(100, 0, 0));
    for (var i = 0; i <= 30; i++) {
        lineGeometry.vertices.push(new THREE.Vector3(0, i * 50, 0));
        lineGeometry.vertices.push(new THREE.Vector3(1500, i * 50, 0));
        lineGeometry.vertices.push(new THREE.Vector3(0, i * 50, 0));
    }
    lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
    for (var i = 1; i <= 30; i++) {
        lineGeometry.vertices.push(new THREE.Vector3(50 * i, 0, 0));
        lineGeometry.vertices.push(new THREE.Vector3(50 * i, 1500, 0));
        lineGeometry.vertices.push(new THREE.Vector3(50 * i, 0, 0));
    }
    lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
    var line = new THREE.Line(lineGeometry, lineMaterial);
    //生成网格2------------------
    var lineMaterial2 = new THREE.LineBasicMaterial({
        color: 0x990099
    });
    var lineGeometry2 = new THREE.Geometry();
    lineGeometry2.center(0, 0, 0);
    lineGeometry2.vertices.push(new THREE.Vector3(0, 0, 0));
    for (var i = 0; i <= 30; i++) {
        lineGeometry2.vertices.push(new THREE.Vector3(0, 0, i * 50));
        lineGeometry2.vertices.push(new THREE.Vector3(0, 1500, i * 50));
        lineGeometry2.vertices.push(new THREE.Vector3(0, 0, i * 50));
    }
    lineGeometry2.vertices.push(new THREE.Vector3(0, 0, 0));
    for (var i = 1; i <= 30; i++) {
        lineGeometry2.vertices.push(new THREE.Vector3(0, 50 * i, 0));
        lineGeometry2.vertices.push(new THREE.Vector3(0, 50 * i, 1500));
        lineGeometry2.vertices.push(new THREE.Vector3(0, 50 * i, 0));
    }
    lineGeometry2.vertices.push(new THREE.Vector3(0, 0, 0));
    var line2 = new THREE.Line(lineGeometry2, lineMaterial2);
    ///----------------网格3
    var lineMaterial3 = new THREE.LineBasicMaterial({
        color: 0x009999
    });
    var lineGeometry3 = new THREE.Geometry();
    lineGeometry3.center(0, 0, 0);
    lineGeometry3.vertices.push(new THREE.Vector3(0, 0, 0));
    for (var i = 0; i <= 30; i++) {
        lineGeometry3.vertices.push(new THREE.Vector3(0, 0, i * 50));
        lineGeometry3.vertices.push(new THREE.Vector3(1500, 0, i * 50));
        lineGeometry3.vertices.push(new THREE.Vector3(0, 0, i * 50));
    }
    lineGeometry3.vertices.push(new THREE.Vector3(0, 0, 0));
    for (var i = 1; i <= 30; i++) {
        lineGeometry3.vertices.push(new THREE.Vector3(50 * i, 0, 0));
        lineGeometry3.vertices.push(new THREE.Vector3(50 * i, 0, 1500));
        lineGeometry3.vertices.push(new THREE.Vector3(50 * i, 0, 0));
    }
    lineGeometry3.vertices.push(new THREE.Vector3(0, 0, 0));
    var line3 = new THREE.Line(lineGeometry3, lineMaterial3);


    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(1000, 400, 1000);
    var spotLight2 = new THREE.SpotLight(0xffffff);
    spotLight2.position.set(0, 2000,0 );
    spotLight.castShadow = true;
    //将相机，渲染器，坐标轴，平面都追加到场景中，然后对场景和相机进行渲染
    scene.add(line);
    scene.add(line2);
    scene.add(line3);
    scene.add(camera);
    scene.add(axes);
    scene.add(spotLight);
    scene.add(spotLight2);
    var controls = new THREE.OrbitControls(camera, render.domElement)
    document.getElementById("threed").appendChild(render.domElement);
    renderScene();

    console.log(scene)

    function renderScene() {
        //如果有增加才渲染
        if(!MOVING){
            requestAnimationFrame(renderScene);
            //  console.log(addFlag);
            // if (spaceFlag) {
            createCude();
            render.render(scene, camera);
        }     
        // }
    }
    document.onkeydown = function (e) {
        console.log(e.which);
        if (e.which == 65) {
            camera.position.x -= 10;
        }
        if (e.which == 68) {
            camera.position.x += 10;
        }
        if (e.which == 83) {
            camera.position.y -= 10;
        }
        if (e.which == 87) {
            camera.position.y += 10;
        }
        if (e.which == 81) {
            camera.position.z -= 10;
        }
        if (e.which == 69) {
            camera.position.z += 10;
        }
        addFlag = true;
    }


    function createCude() {
        // cubeboxMaterial.color=0x990099;
        for (i in wardrobe) {
            if(wardrobe[i].color=='blue'){
                var cubeboxMaterial = new THREE.MeshLambertMaterial({
                    color: 0x000099,
                    //  wireframe: true
                });
            }else{
                var cubeboxMaterial = new THREE.MeshLambertMaterial({
                    color: 0x999999,
                    //  wireframe: true
                });
            }
           
            var cubeboxGeometry = new THREE.CubeGeometry(wardrobe[i].w, wardrobe[i].d, wardrobe[i].h);
            var cubebox = new THREE.Mesh(cubeboxGeometry, cubeboxMaterial);
            cubebox.position.x = wardrobe[i].x + wardrobe[i].w / 2;
            cubebox.position.y = canvas4.height-(wardrobe[i].z + wardrobe[i].d / 2);
            cubebox.position.z = (wardrobe[i].y + wardrobe[i].h / 2);
            scene.add(cubebox);
        }

    }
};
//复选框
function checkBox(num) {
    switch (num) {
        case 0:
            $('input[name="checkbox0"]')[0].checked = true;
            $('input[name="checkbox1"]')[0].checked = false;
            $('input[name="checkbox2"]')[0].checked = false;
            break
        case 1:
            $('input[name="checkbox0"]')[0].checked = false;
            $('input[name="checkbox1"]')[0].checked = true;
            $('input[name="checkbox2"]')[0].checked = false;
            break
        case 2:
            $('input[name="checkbox0"]')[0].checked = false;
            $('input[name="checkbox1"]')[0].checked = false;
            $('input[name="checkbox2"]')[0].checked = true;
            break
        case 3:
            $('input[name="checkbox3"]')[0].checked = true;
            $('input[name="checkbox4"]')[0].checked = false;
            $('input[name="checkbox5"]')[0].checked = false;
            break
        case 4:
            $('input[name="checkbox3"]')[0].checked = false;
            $('input[name="checkbox4"]')[0].checked = true;
            $('input[name="checkbox5"]')[0].checked = false;
            break
        case 5:
            $('input[name="checkbox3"]')[0].checked = false;
            $('input[name="checkbox4"]')[0].checked = false;
            $('input[name="checkbox5"]')[0].checked = true;
            break
        case 6:
            $('input[name="checkbox6"]')[0].checked = true;
            $('input[name="checkbox7"]')[0].checked = false;
            $('input[name="checkbox8"]')[0].checked = false;
            break
        case 7:
            $('input[name="checkbox6"]')[0].checked = false;
            $('input[name="checkbox7"]')[0].checked = true;
            $('input[name="checkbox8"]')[0].checked = false;
            break
        case 8:
            $('input[name="checkbox6"]')[0].checked = false;
            $('input[name="checkbox7"]')[0].checked = false;
            $('input[name="checkbox8"]')[0].checked = true;
            break

    }
}
// 暂时留着
c1big.onclick = function () {
    if ((sl / pScale) <= 270 && (sh / pScale) <= 270) {
        pScale -= 0.1;
        drawPlanView(sl, sw);
    } else {
        showMassageBox(1000, '已经是最大了');
    }

}
c2big.onclick = function () {
    if ((sw / lScale) <= 350 && (sh / lScale) <= 350) {
        lScale -= 0.1;
        drawLeftView(sw, sh)
    } else {
        showMassageBox(1000, '已经是最大了');
    }

}
c3big.onclick = function () {
    if (viewFlag == 4) {
        if ((sl / fScale) <= 400 && (sh / fScale) <= 400) {
            fScale -= 0.1;
            drawFrontView(sl, sh)
        } else {
            showMassageBox(1000, '已经是最大了');
        }
    }
    if (viewFlag == 3) {
        if ((sl / fScale) <= 600 && (sh / fScale) <= 600) {
            fScale -= 0.1;
            drawFrontView(sl, sh)
        } else {
            showMassageBox(1000, '已经是最大了');
        }
    }

}
c1small.onclick = function () {
    pScale += 0.1;
    drawPlanView(sl, sw);
}
c2small.onclick = function () {
    lScale += 0.1;
    drawLeftView(sw, sh);
}
c3small.onclick = function () {
    fScale += 0.1;
    drawFrontView(sl, sh);
}