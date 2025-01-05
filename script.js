const testBtn = document.querySelector('.testBtn')

testBtn.addEventListener("click", (e) => {
    console.log(e.target)
})

const array = [30, 13, 7, 9, 66, 89, 435]
//let new_arr = array.forEach((val, idx, arr) => { arr[idx] = val * val })
const new_arr = array.filter(x => x > 21)
const sorted_new_arr = new_arr.sort((a, b) => a - b)
const reduced = sorted_new_arr.reduce((total, val) => total + val, 0)
console.log('old array - ', array)
console.log('new array - ', sorted_new_arr)
console.log('reduced val - ', reduced)