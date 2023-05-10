let repeat = 2
setInterval(() => {
    repeat += 1
    document.querySelector(".main").innerHTML = `y${"oy".repeat(repeat)}jaj is s<b>tom</b>pid`
}, 500)
