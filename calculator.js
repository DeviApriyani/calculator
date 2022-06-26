//let hasil = document.getElementById('input')

function tutup(){
    close()
}

function masuk(num){
    document.kalkulator.input.value = document.kalkulator.input.value + num
}

function hapus(){
    document.kalkulator.input.value = ''
}
 function equal(){
    let result = document.kalkulator.input.value
    document.kalkulator.input.value = eval(document.kalkulator.input.value)
 }

function pangkat(){
    document.kalkulator.input.value = document.kalkulator.input.value*document.kalkulator.input.value
}