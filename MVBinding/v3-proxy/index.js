var model = document.getElementById('model');
const domKeys =["username","password","sex"];
const domEnum = {};
var data = {};
const proxy = new Proxy(data, {
    get: function (target, prop) {
        return target[prop];
    },
    set: function (target, prop, value) {
        target[prop] = value;        
        domEnum[prop+'Dom'].value = target[prop];
        // 这里只是前端展示 可以省去
        model.innerHTML = JSON.stringify(data);
    }
})
domKeys.forEach(item=>{
    const dom = document.getElementById(item);
    domEnum[item+'Dom'] = dom;
    dom.addEventListener("keyup", function (event) {
        proxy[item] = event.target.value;
    })
})

