//gather form information (assistance from here https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
let form = document.querySelector('form');
let output = [];
let fibonacciArray = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89], binaryArray = [2, 4, 8, 16, 32, 64, 128];
let rowSelection = null;
let colorCount = "";
let repeatCount = "";

form.addEventListener("submit", function(e){
    let data = new FormData(form);
    for (const entry of data){
        output.push(entry[1]);
        console.log(output);
    };
    document.querySelector('article').classList.add('hide');
    document.querySelector('button').classList.remove('hide');
    if (output[2] === "binary"){
        rowSelection = binaryArray;
        output = [];
    } else if (output[2] === "fibonacci") {
        rowSelection = fibonacciArray;
        output = [];
    } else {
        rowSelection = null;
    }
    event.preventDefault();
}, false);

//pseudo random, non repeating array generator (tutorial from here: https://inteist.com/javascript-generate-pseudo-random-set/ )
function numArr(limit) {
    list = [];
    for (let i = 0; i < limit; i++) {
        list.push(i);
    }
    return list;
}

function shuffle(array) {
    let i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//repeat number arrays

let rowArray = [];

for(let i = 0; i < repeatCount; i++){
    rowArray.push(rowSelection[i]);
}

//color array

let fullColorArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let colorArray = [];

for (let i = 0; i < colorCount; i++) {
    colorArray.push(fullColorArray[i]);
}

//select color without repeats

let getColors = shuffle(numArr(colorArray.length))

//select random repeat numbers

//display color and number
