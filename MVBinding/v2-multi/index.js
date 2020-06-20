var model = document.getElementById('model');
var data = {};
const keys = ["username", "password", "sex"];
keys.forEach(item => {
    bindViewAndModel(item, "", document.getElementById(item))
})

function bindViewAndModel(key, val, dom) {
    Object.defineProperty(data, key, {
        enumerable: true,
        get: function () {
            return val;
        },
        set: function (newValue) {
            val = newValue;
            dom.value = newValue;
            // 这里只是前端展示 可以省去
            model.innerHTML = JSON.stringify(data);
        },
    })

    dom.addEventListener("keyup", function (event) {
        data[key] = event.target.value;
    })
}