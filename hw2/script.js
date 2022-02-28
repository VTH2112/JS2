let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let btnEt = document.getElementById("Enter")
let content = document.getElementById("print")
btnEt.addEventListener("click", function () {
    if (Number(num1.value) == Number(num2.value)) {
        alert("2 numbers must be different ")
    } else if (Number(num1.value) >Number(num2.value)) {
        alert("1st number must be less than 2nd number ")
    } else {
        content.innerHTML = `prime number is :`
        for (let i = Number(num1.value); i <= Number(num2.value); i++) {
            if (isprime(i) == 1) {
                content.innerHTML += i + ` , `
            }
        }
    }
})
function isprime(n) {
    let check = 1;
    if (n < 2)
        return check = 0;
    let j = 2;
    while (j < n) {
        if (n % j == 0) {
            check = 0;
            break;
        }
        j++;
    }
    return check;
}