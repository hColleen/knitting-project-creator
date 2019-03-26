//gather form information (assistance from here https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
//set up variables
let form = document.querySelector('form');
let output = [];
let fibonacciArray = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89], binaryArray = [2, 4, 8, 16, 32, 64, 128];
let rowSelection = null;
let colors;
let repeats;
let rowArray = [];
let fullColorArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let colorArray = [];
let patternColors = [];
let rowNumbers = [];
let rows = [];


//on submit function
form.addEventListener("submit", function (e) {
    event.preventDefault();
    let data = new FormData(form);
    for (const entry of data) {
        //gather information from form
        output.push(entry[1]);
    };
    //hide article, reveal print button, reveal pattern
    document.querySelector('article').classList.add('hide');
    document.querySelector('button').classList.remove('hide');
    document.getElementById('pattern').classList.remove('hide');
    //assign colors and repeat values
    let colorCount = output[0];
    let repeatCount = output[1];
    //change color and repeat from string to interger
    colors = Number(colorCount);
    repeats = Number(repeatCount);
    //select array and reset output array
    if (output[2] === "binary") {
        rowSelection = binaryArray;
        output = [];
    } else if (output[2] === "fibonacci") {
        rowSelection = fibonacciArray;
        output = [];
    } else {
        rowSelection = null;
    }

    //repeat number arrays
    rows = rowSelection.concat(rowSelection.concat(rowSelection))
    
    for (let i = 0; i < repeats; i++) {
        rowArray.push(rows[i]);
    }

    //color array
    for (let i = 0; i < colors; i++) {
        colorArray.push(fullColorArray[i]);
    }

    function getRandomItem(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    }

    //select color 

    for (let i = 0; i < repeats; i++){
        let patColor = getRandomItem(colorArray)
        patternColors.push(patColor);
    }
    //select random repeat numbers


    for (let i = 0; i < repeats; i++){
        let num = getRandomItem(rowArray)
        rowNumbers.push(num);
    }

    //display color and number

    document.getElementById('pattern').innerHTML = `${patternColors} <br /> ${rowNumbers}`
}, false);