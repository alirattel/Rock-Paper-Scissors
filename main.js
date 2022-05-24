const ResultType = document.getElementById("result-typing")
let i = 0
function typingWin() {
    let text = "ربحت"
    if (i < text.length) {
        setTimeout(typingWin, 120)
        ResultType.innerHTML += text.charAt(i)
        i++
    }
}
function typingLose() {
    let text = "خسرت"
    if (i < text.length) {
        setTimeout(typingLose, 120)
        ResultType.innerHTML += text.charAt(i)
        i++
    }
}
function Draw() {
    let text = "تعادل"
    if (i < text.length) {
        setTimeout(Draw, 120)
        ResultType.innerHTML += text.charAt(i)
        i++
    }
}
