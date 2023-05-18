const fps = 60

let repeat = 2
let interval_cache = 500
let interval = Number(document.querySelector(".interval").value)
const loop = () => repeat += 1
let id = setInterval(loop, 500)
setInterval(() => {
    interval = Number(document.querySelector(".interval").value)
    if (interval == 0) {
        interval = 500
    }
    if (interval != interval_cache) {
        interval_cache = interval
        clearInterval(id)
        id = setInterval(loop, interval_cache)
    }
    document.querySelector(".main").innerHTML = `y${"oy".repeat(repeat)}jaj is s<b>tom</b>pid`
}, 1000 / fps)
