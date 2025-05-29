function operasi(val){
    document.getElementById("display").value += val
}

function bersihDisplay(){
    document.getElementById("display").value = ""
}

function kalkulasi(){
    let nilaiDisplay = document.getElementById("display").value
    nilaiDisplay = nilaiDisplay.replace(/×/g, '*').replace(/÷/g, '/');

    let hasil = eval(nilaiDisplay)
    document.getElementById("display").value = hasil
}