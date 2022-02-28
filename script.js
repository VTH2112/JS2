let col = document.getElementById("col")
let row = document.getElementById("row")
let btnEt = document.getElementById("Enter")
let btnRs = document.getElementById("Reset")
let table = document.getElementsByClassName("table")


btnEt.addEventListener("click", function () {
    if (col.value == '' && row.value == '') {
        alert("Row and column must be filled")
    } else if (col.value == '') {
        alert("Please enter column value")
    } else if (row.value == '') {
        alert("Please enter row value")
    } else {
        for (let i = 0; i <= row.value; i++) {
            // let th = `<th>${k}</th>`
            let tr = `<tr id = ${i}></tr>`
            let td = `<td ><textarea ></textarea></td>`
            table[0].innerHTML += tr
            let row2id = document.getElementById(`${i}`)
            let k = 0;
            let acci = 65;
            if (row2id.id < 1) {
                while (k <= col.value) {
                    if(k == 0 ){
                        row2id.innerHTML += `<th>${String.fromCharCode(83,84,84)}</th>`
                    }
                    else{
                        row2id.innerHTML += `<th>${String.fromCharCode(acci++)}</th>`
                    }
                
                    k++;
                }
            } else {
                for (let j = 0; j <= col.value; j++) {
                    if(j == 0 ){
                        row2id.innerHTML += `<td>${i}</td>`
                    }
                    else{
                        row2id.innerHTML += td
                    }
                    console.log(td);
                }
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