var str_numbers, alert, clear_arr;
var app = document.getElementById("app");

// Enter more than 5 elements)))
str_numbers = prompt("Enter your numbers('comma' is separator)");

//12,1,56,adf,100,2,7,101,777a,3,35,rrrr,30

if(str_numbers && (clear_arr = parseNumbers(str_numbers)) && clear_arr.length){
    clear_arr = clear_arr.sort((x,y) => x-y);

    alertMsg(makeElement("Your numbers: " + clear_arr.join(", ")));
    alertMsg(makeElement("Minimum: " + clear_arr[0]));
    alertMsg(makeElement("Maximum: " + clear_arr[clear_arr.length - 1]));
    alertMsg(makeElement("Sum: " + clear_arr.reduce( (a,b) => a+b,0)));
}else{
    alertMsg(makeElement("Not a Numbers! Press F5 and try again"));
}

/**
 * Create DOM element
 * @param {*} str 
 * @return DOM object
 */
function makeElement(str){
    el = document.createElement("div");
    el.innerHTML = str;
    return el;
}

/**
 * Parse entered string and convert to Number
 * @param {*} str 
 * @return Array
 */
function parseNumbers(str){
    return str.split(',').filter(el => !isNaN(el)).map((el) => Number(el));
}

/**
 * Show msg in HTML
 * @param {*} msg 
 */
function alertMsg(msg){
    app.appendChild(msg);
}
