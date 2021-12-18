let h1 = document.createElement("h1")
h1.setAttribute("id", "title");
h1.innerText = "DOM Calculator";
document.body.appendChild(h1);

let p = document.createElement("p")
p.setAttribute("id", "description");
p.innerText = "Create the Calculator using DOM";
document.body.appendChild(p);


let divmain = document.createElement("div")
divmain.setAttribute("class", "main");
document.body.appendChild(divmain);

let divdisplay = document.createElement("div")
divdisplay.setAttribute("class", "display");
divmain.appendChild(divdisplay);

let buttondisplay = document.createElement("button")
buttondisplay.setAttribute("class", "dark_mode_btn");
divdisplay.appendChild(buttondisplay);

let idisplay = document.createElement("i")
idisplay.setAttribute("class", "fa fa-moon-o");
idisplay.setAttribute("aria-hidden", "true");
buttondisplay.appendChild(idisplay);

let p1 = document.createElement("p")
p1.setAttribute("id", "history");
divdisplay.appendChild(p1);

let idisplay1 = document.createElement("i")
idisplay1.setAttribute("class", "fa fa-history");
idisplay1.setAttribute("aria-hidden", "true");
p1.appendChild(idisplay1);

let h2 = document.createElement("h2")
h2.setAttribute("id", "result");
divdisplay.appendChild(h2);

let divrow1 = document.createElement("div")
divrow1.setAttribute("class", "buttons");
divmain.appendChild(divrow1);

let buttonclear = document.createElement("button")
buttonclear.setAttribute("id", "clear");
buttonclear.innerText = "C";
divrow1.appendChild(buttonclear);


// {/* <div class="main">
//         <div class="display"> <button class="dark_mode_btn"><i class="fa fa-moon-o" aria-hidden="true"></i></button>
//             <p id="history"><i class="fa fa-history" aria-hidden="true"></i>&nbsp;History</p>
//             <h2 id="result"></h2>
//         </div>
//         <div class="buttons"> <button id="clear">C</button> <button id="delete_single_num"><i class="fa fa-scissors" aria-hidden="true"></i></button> <button id="Normal_btn">/</button> <button id="Normal_btn">*</button> </div>
//         <div class="buttons"> <button id="Normal_btn">7</button> <button id="Normal_btn">8</button> <button id="Normal_btn">9</button> <button id="Normal_btn">-</button> </div>
//         <div class="buttons"> <button id="Normal_btn">4</button> <button id="Normal_btn">5</button> <button id="Normal_btn">6</button> <button id="Normal_btn">+</button> </div>
//         <div class="buttons"> <button id="Normal_btn">1</button> <button id="Normal_btn">2</button> <button id="Normal_btn">3</button> <button id="Normal_btn">.</button> </div>
//         <div class="buttons"> <button id="Normal_btn">0</button> <button id="Normal_btn">00</button> <button id="equalTo">=</button> </div>
// </div> */}
let buttonsclear = document.createElement("button")
buttonsclear.setAttribute("id", "delete_single_num");
buttonsclear.innerHTML = `<i class="fa fa-scissors" aria-hidden="true"></i>`;
divrow1.appendChild(buttonsclear);

let buttondivide = document.createElement("button")
buttondivide.setAttribute("id", "Normal_btn");
buttondivide.innerText = "/";
divrow1.appendChild(buttondivide);

let buttonmultiply = document.createElement("button")
buttonmultiply.setAttribute("id", "Normal_btn");
buttonmultiply.innerText = "*";
divrow1.appendChild(buttonmultiply);

// Row - 2

let divrow2 = document.createElement("div")
divrow2.setAttribute("class", "buttons");
divmain.appendChild(divrow2);

let button7 = document.createElement("button")
button7.setAttribute("id", "Normal_btn");
button7.innerText = 7;
divrow2.appendChild(button7);

let button8 = document.createElement("button")
button8.setAttribute("id", "Normal_btn");
button8.innerText = 8;
divrow2.appendChild(button8);

let button9 = document.createElement("button")
button9.setAttribute("id", "Normal_btn");
button9.innerText = 9;
divrow2.appendChild(button9);

let buttonsub = document.createElement("button");
buttonsub.setAttribute("id", "Normal_btn");
buttonsub.innerText = "-";
divrow2.appendChild(buttonsub);

// Row - 3

let divrow3 = document.createElement("div")
divrow3.setAttribute("class", "buttons");
divmain.appendChild(divrow3);

let button4 = document.createElement("button")
button4.setAttribute("id", "Normal_btn");
button4.innerText = 4;
divrow3.appendChild(button4);

let button5 = document.createElement("button")
button5.setAttribute("id", "Normal_btn");
button5.innerText = 5;
divrow3.appendChild(button5);

let button6 = document.createElement("button")
button6.setAttribute("id", "Normal_btn");
button6.innerText = 6;
divrow3.appendChild(button6);

let buttonadd = document.createElement("button")
buttonadd.setAttribute("id", "Normal_btn");
buttonadd.innerText = "+";
divrow3.appendChild(buttonadd);

// Row - 4

let divrow4 = document.createElement("div")
divrow4.setAttribute("class", "buttons");
divmain.appendChild(divrow4);

let button1 = document.createElement("button")
button1.setAttribute("id", "Normal_btn");
button1.innerText = 1;
divrow4.appendChild(button1);

let button2 = document.createElement("button")
button2.setAttribute("id", "Normal_btn");
button2.innerText = 2;
divrow4.appendChild(button2);

let button3 = document.createElement("button")
button3.setAttribute("id", "Normal_btn");
button3.innerText = 3;
divrow4.appendChild(button3);

let buttondot = document.createElement("button")
buttondot.setAttribute("id", "Normal_btn");
buttondot.innerText = ".";
divrow4.appendChild(buttondot);

// Row - 5

let divrow5 = document.createElement("div")
divrow5.setAttribute("class", "buttons");
divmain.appendChild(divrow5);

let button0 = document.createElement("button")
button0.setAttribute("id", "Normal_btn");
button0.innerText = 0;
divrow5.appendChild(button0);

let button00 = document.createElement("button")
button00.setAttribute("id", "Normal_btn");
button00.innerText = "00";
divrow5.appendChild(button00);

let buttonequal = document.createElement("button")
buttonequal.setAttribute("id", "equalTo");
buttonequal.innerText = "=";
divrow5.appendChild(buttonequal);

// Functions

document.addEventListener("DOMContentLoaded", function(event) {
    let body = document.querySelector('body');
    let result = document.querySelector('#result');
    
    let dark_mode_btn = document.querySelector('.dark_mode_btn');
    let clear = document.querySelector('#clear');
    let history = document.querySelector('#history');
    let equalTo = document.querySelector('#equalTo');
    let delete_single_num = document.querySelector('#delete_single_num');
    
    let Normal_btn = document.querySelectorAll('#Normal_btn');
    
    
    let initial_value = "";
    
    Normal_btn.forEach((Normal_btn, index)=>{
          Normal_btn.addEventListener('click', function(){
                   let text = this.innerHTML;
                   initial_value += text;
                   result.innerHTML = initial_value;
          });
    });
    
    /*equal to button action*/
    equalTo.addEventListener('click', function(){
         if (result.innerHTML != "") {
                history.innerHTML = result.innerHTML;
                result.innerHTML = eval(result.innerHTML);
                initial_value = eval(result.innerHTML);
          }else{
                alert('please enter any Number');
          }
    });
    
    
    /*dark_mode*/
    let dark_mode_status = false;
    dark_mode_btn.addEventListener('click', function(){
      body.classList.toggle('dark_mode_active');
        if (dark_mode_status == false) {
            this.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
            dark_mode_status = true;
        }else{
            this.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
            dark_mode_status = false;
        }
    });
    
    
    /*clear all number*/
    clear.addEventListener('click', function(){
            result.innerHTML = "";
            initial_value = "";
    });
    
    /*delete single number*/
    delete_single_num.addEventListener('click', function(){
            result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-1);
            initial_value = result.innerHTML;
    });
    
});