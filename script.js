function operasi(val){
    const lastChar = display.value.slice(-1);
    const operators = ["+", "-", "×", "÷"];

    if (operators.includes(val)) {
        if (operators.includes(lastChar)) {
            display.value = display.value.slice(0, -1) + val;
            return;
        }

        if (display.value === "") {
            return;
        }
    }

    document.getElementById("display").value += val
}

function bersihDisplay(){
    document.getElementById("display").value = ""
}

function kalkulasi(){
    if (document.getElementById("display").value === ""){
        return;
    }

    let nilaiDisplay = document.getElementById("display").value
    nilaiDisplay = nilaiDisplay.replace(/×/g, '*').replace(/÷/g, '/');

    let hasil = eval(nilaiDisplay)
    document.getElementById("display").value = hasil
}