// document.writeln(` <div class="hamburger" id="hhh">
// <div class="hotDog">
//     <div class="searchDog">
//         <div>
//             <img src="./images/search.png">二胎问题</div>
//     </div>

//     <div class="femaleDog" style="height: 0.7rem;">
//         <h6>
//             <img src="./images/female.png">女性不孕疾病</h6>
//     </div>
//     <div class="maleDog">
//         <h6>输卵管不孕</h6>
//         <div class="contentDog">
//             <a href="">
//                 <p>输卵管堵塞</p>
//             </a>
//             <a href="">
//                 <p>输卵管积水</p>
//             </a>
//         </div>
//         <div class="contentDog">
//             <a href="">
//                 <p>输卵管炎</p>
//             </a>
//             <a href="">
//                 <p>输卵管通而不畅</p>
//             </a>
//         </div>
//     </div>
//     <div class="femaleDog">
//         <h6>卵巢性不孕</h6>
//         <div class="contentDog">
//             <a href="">
//                 <p>多囊卵巢</p>
//             </a>
//             <a href="">
//                 <p>卵巢早衰</p>
//             </a>
//         </div>
//         <div class="contentDog">
//             <a href="">
//                 <p>卵巢囊肿</p>
//             </a>
//             <a href="">
//                 <p>排卵异常</p>
//             </a>
//         </div>
//     </div>
//     <div class="maleDog">
//         <h6>宫颈性不孕</h6>
//         <div class="contentDog">
//             <a href="">
//                 <p>宫颈糜烂</p>
//             </a>
//             <a href="">
//                 <p>宫颈粘液异常</p>
//             </a>
//         </div>
//         <div class="contentDog">
//             <a href="">
//                 <p>宫颈息肉</p>
//             </a>
//             <a href="">
//                 <p>宫颈发育异常</p>
//             </a>
//         </div>
//     </div>
//     <div class="femaleDog">
//         <h6>子宫性不孕</h6>
//         <div class="contentDog">
//             <a href="">
//                 <p>后位子宫</p>
//             </a>
//             <a href="">
//                 <p>子宫发育不良</p>
//             </a>
//         </div>
//         <div class="contentDog">
//             <a href="">
//                 <p>子宫畸形</p>
//             </a>
//             <a href="">
//                 <p>宫内粘连</p>
//             </a>
//         </div>
//     </div>
//     <div class="maleDog">
//         <h6>其它</h6>
//         <div class="contentDog">
//             <a href="">
//                 <p>不孕检查</p>
//             </a>
//             <a href="">
//                 <p>习惯性流产</p>
//             </a>
//         </div>
//         <div class="contentDog">
//             <a href="">
//                 <p>免疫性不孕</p>
//             </a>
//             <a href="">
//                 <p>内分泌失调</p>
//             </a>
//         </div>
//     </div>
//     <div class="femaleDog" style="height: 0.8rem;">
//         <h6 style="padding-top: 0.25rem;">
//             <img src="./images/male.png">男性不育疾病</h6>
//     </div>
//     <div class="maleDog">
//         <h6>精液异常</h6>
//         <div class="contentDog">
//             <a href="">
//                 <p>血精症</p>
//             </a>
//             <a href="">
//                 <p>无精症</p>
//             </a>
//         </div>
//         <div class="contentDog">
//             <a href="">
//                 <p>精液不液化</p>
//             </a>
//             <a href="">
//                 <p>精液检查</p>
//             </a>
//         </div>
//     </div>
//     <div class="femaleDog">
//         <h6>精子异常</h6>
//         <div class="contentDog">
//             <a href="">
//                 <p>少精症</p>
//             </a>
//             <p>精子畸形</p>
//         </div>
//         <div class="contentDog">
//             <p>死精症</p>
//             <p>弱精症</p>
//         </div>
//     </div>
//     <div class="maleDog">
//         <h6>精道异常</h6>
//         <div class="contentDog">
//             <p>睾丸活检</p>
//             <p>精索静脉曲张</p>
//         </div>
//         <div class="contentDog">
//             <p>输精管堵塞</p>
//             <p>梗阻性无精症</p>
//         </div>
//     </div>
//     <div class="femaleDog">
//         <h6>其它</h6>
//         <div class="contentDog">
//             <p>不育检查</p>
//             <p>前列腺炎</p>
//         </div>
//         <div class="contentDog">
//             <p>内分泌异常</p>
//             <p>性功能障碍</p>
//         </div>
//     </div>
// </div>
// <div class="hotDog2">

// </div>
// <div class="hotDog3">

// </div>
// </div>`)

function bodyScroll(event){  
    event.preventDefault();  
} 
$('.searchDog').css({
    display: 'none'
})
$('.header_left').click(function () {

    document.body.addEventListener('touchmove',bodyScroll,false);  
    $('body').css({'position':'fixed',"width":"100%"});
    $('.hamburger').css({
        display: 'block'
    })
    // $('#container').css({
    //     display:'none',
    //     height:'14.5rem'
    // })

    $('.hamburger .hotDog').animate({
        width: '4.5rem',
        opacity: 1
    }, 500)
})
$('.hotDog2 , .hotDog3').click(function () {
    // $('#container').css({
    //     display:'block',
    // })
    document.body.removeEventListener('touchmove',bodyScroll,false);   
$("body").css({"position":"initial","height":"auto"});  
    $('.hamburger .hotDog').animate({
        width: '0rem',
        opacity: 0
    }, 500)
    setTimeout(function () {
        $('.hamburger').css({
            display: 'none'
        })
    }, 500)
})
var searchFlag = 1;
$('.searchDog').click(function () {
    if (searchFlag) {
        $('.searchDog').html(`<div href="">
        <img class="searchBtn" src="../images/search.png" style="float: right;margin-right: 0.1rem;">
        <input type="text"  id='searchText'></div> `);
        searchFlag = 0;
    }
})
$('.searchBtn').click(function () {
    alert(1);
    // alert($('#searchText').value);
})
// document.onmousewheel=function(e){
//     console.log(e.wheelDelta);
//     console.log(e.offsetY);
// }