var view = document.getElementById('view');
var model = document.getElementById('model');
var data = {};
let temp = 0;
Object.defineProperty(data, "number", {
    enumerable:true,
    get: function () {
        return temp;
    },
    set: function (value) {
        view.value = value;
        temp = value;
        model.innerHTML = `"data":${JSON.stringify(data)}`;
    },
})
view.addEventListener("keyup", function (event) {
    data.number = event.target.value;
})