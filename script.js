function operasi(val){
    const lastChar = display.value.slice(-1);
    const operators = ["+", "-", "×", "÷"];
    const digits = ['0', '1','2','3','4','5','6','7','8','9'];

    if (operators.includes(val)) {
        if (operators.includes(lastChar)) {
            display.value = display.value.slice(0, -1) + val;
            return;
        }

        if (display.value === "") {
            return;
        }

        if (lastChar === '.') {
            return;
        }

    }

    if (digits.includes(val)) {
        const parts = display.value.split(/[\+\-×÷]/);
        const lastNumber = parts[parts.length - 1];

        if (lastNumber === '0' && val !== '0') {
            display.value = display.value.slice(0, -1) + val;
            return;
        }

        if (lastNumber === '0' && val === '0') {
            return;
        }
    }

    if (val === '.' && pengecekanDot(display.value)) {
        return;
    }

    if (val === '.' && operators.includes(lastChar)) {
        return;
    }

    document.getElementById("display").value += val
}

function pengecekanDot(displayValue) {
    const parts = displayValue.split(/[\+\-×÷]/);
    const lastNumber = parts[parts.length - 1];
    return lastNumber.includes('.');
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

    if (eval(nilaiDisplay) === Infinity || eval(nilaiDisplay) === -Infinity) {
        display.value = "Tidak bisa dibagi 0.";
        return;
    }
    
    document.getElementById("display").value = hasil
}

function hapus() {
    const lastChar = display.value.slice(-1);
    const operators = ["+", "-", "×", "÷"];

    if(operators.includes(lastChar)){
        return;
    }

    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
}

function negate() {
    const display = document.getElementById("display");

    if (display.value === "") {
        return;
    }

    const parts = display.value.split(/([\+\-×÷])/);
    let last = parts.pop();

    if (!isNaN(last) && last !== "") {
        last = `(-${last})`;
    }

    parts.push(last);
    display.value = parts.join('');
}
