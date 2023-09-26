const output = document.getElementById('output')

let inputx   = ''
let op = ''
let inputy = ''
let mark = 0

function display() {
    console.log(inputx, op, inputy, mark)
    output.innerText = inputx   + ' ' + op + ' ' + inputy;
}

function entry(int) {
    if (mark == 0) { inputx  += int }
    if (mark == 1) {  inputy += int }
    display()
}

    function operation(val) {
        
    if (mark == 1 && inputy != '') {
       calc();     
    }
    op = val;

    mark = 1;
    display()
}

function deletion() {
    console.log(inputx.length)
    if (mark == 0) { inputx   = inputx.substring(0, inputx.length -1) }
    if (mark == 1) {  inputy  = inputy.substring(0, inputy.length -1) }
    display()
}

function erase() {
    console.log("erase")

    inputx   = ''
    op = ''
     inputy= ''
    mark = 0
    display()
}

function calc() {
    console.log("calculating answer")

    if (op == '+') { inputx   = parseInt(inputx)    + parseInt(inputy)    };
    if (op == '-') { inputx   = parseInt(inputx)    - parseInt(inputy)    };
    if (op == '*') { inputx   = parseInt(inputx)    * parseInt(inputy)    };
    if (op == '/') { inputx   = parseInt(inputx)    / parseInt(inputy)    };
    

    op = ''
     inputy= ''
    display()

}
