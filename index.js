document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    let x = document.getElementById("num1").value
    let y = document.getElementById("num2").value
    const devide = (x, y) => {
        if (x == 0 || y == 0) {
            throw new Error("Invalid Values")
        } else {
            return Math.round(x / y)
        }

    }

    try {
        document.getElementById("answer").innerHTML = devide(x, y)
    } catch (err) {
        document.getElementById("answer").innerHTML = err.message
    }
})