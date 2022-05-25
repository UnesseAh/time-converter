//Write your pseduo code first! 
//0 -> 32
document.querySelector('#convertDays').addEventListener('click', convert1)

function convert1() {
    //need the value that is in selseeyus
    let temp1 = document.querySelector('#days').value
    //convert from selseeyus to fairinheight
    temp1 = temp1 / 30.417
    //show it
    document.querySelector('#showMonths').innerText = temp1 + " month/s"
}

document.querySelector('#convertMonths').addEventListener('click', convert2)

function convert2(){
    let temp2 = document.querySelector('#months').value
    temp2 = temp2 * 30.417
    document.querySelector('#showDays').innerText = temp2 + " day/s"
}

 ///////////////////////////////////
 
 document.querySelector('#convertMinutes').addEventListener('click', convert3)

 function convert3(){
     let temp3 = document.querySelector('#minutes').value
     temp3 = temp3 / 60
     document.querySelector('#showHours').innerText = temp3 + " hour/s"
 }

document.querySelector('#convertHours').addEventListener('click', convert4)

function convert4(){
    let temp4 = document.querySelector('#hours').value
    temp4 = temp4 * 60
    document.querySelector('#showMinutes').innerText = temp4 + " minute/s"
}

 ///////////////////////////////////

document.querySelector('#convertYears').addEventListener('click', convert5)

function convert5(){
    let temp5 = document.querySelector('#years').value
    temp5 = temp5 * 12
    document.querySelector('#showMonths2').innerText = temp5 + " month/s"
}

document.querySelector('#convertMonthsto').addEventListener('click', convert6)

function convert6(){
    let temp6 = document.querySelector('#monthsto').value
    temp6 = temp6 / 12
    document.querySelector('#showYearto').innerText = temp6 + " year/s"
}