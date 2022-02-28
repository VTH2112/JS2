let col = document.getElementById("col")
let row = document.getElementById("row")
let btnEt = document.getElementById("Enter")
let btnRs = document.getElementById("Reset")
let table = document.getElementsByClassName("table")



console.dir(btnEt);
btnEt.addEventListener("click", function () {
    if (col.value == '' && row.value == '') {
        alert("Row and column must be filled")
    } else if (col.value == '') {
        alert("Please enter column value")
    } else if (row.value == '') {
        alert("Please enter row value")
    } else {
        for (let i = 1; i <= row.value; i++) {
            let tr = `<tr id = ${i}></tr>`
            let td = `<td><textarea ></textarea></td>`
            // let td = `<td id = ${j}>${j}</td>`
            table[0].innerHTML += tr
            // table[0].innerHTML += `<tr id=${i}><td>${i}</td></tr>`
            let row2id = document.getElementById(`${i}`)
            for (let j = 1; j <= col.value; j++) {
                row2id.innerHTML += td


            }

        }
        btnEt.disabled = true
        btnRs.disabled = false

    }

})
btnRs.addEventListener("click", function () {
    table[0].innerHTML = ''
    btnEt.disabled = false
    btnRs.disabled = true
})