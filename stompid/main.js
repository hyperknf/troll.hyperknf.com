let repeat = 2
let interval_cache
let interval = Number(document.querySelector(".interval").value)
const loop = () => {
    repeat += 1
    document.querySelector(".main").innerHTML = `y${"oy".repeat(repeat)}jaj is s<b>tom</b>pid`
}
let id = setInterval(loop, 500)
setInterval(() => {
    interval = Number(document.querySelector(".interval").value)
    if (interval != interval_cache) {
        interval_cache = interval
        clearInterval(id)
        id = setInterval(loop, interval_cache)
    }
}, 16.66666666666666666666666666)
