//task1
var btn = document.querySelector("button");
var p = document.querySelector(".p");
btn.addEventListener("click", function () {
  p.textContent = "HEllo how are you?";
});

//task2
var btn2 = document.querySelector(".btn2");
var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");

btn2.addEventListener("click", function () {
  var src1 = img1.src;
  var src2 = img2.src;

  img1.src = src2;
  img2.src = src1;
});


//task3
var form = document.querySelector('form');
var inps = document.querySelectorAll('.inp[type="text"]');
var h4 = document.querySelector('h4');


form.addEventListener('submit',function(ev){
    ev.preventDefault();

    console.log(inps)
  for(var i = 0; i<inps.length; i++){
    if(inps[i].value  ===  ''){
        h4.textContent = 'Error,some fields are empty';
       h4.style.color = 'red';
       break;
    }
   
    
  }
 
})

//task4
var add = document.querySelector('#add')
var remove = document.querySelector('#remove')
var inp = document.querySelector('#addItem')
var ul = document.querySelector('ul')
var li;
add.addEventListener('click',function(){
  if(inp.value.trim() === '' ){}
  else{
    li = document.createElement('li')
    li.textContent = inp.value;
    ul.appendChild(li)
    inp.value = '';
  }
})
remove.addEventListener('click',function(){
  
    ul.removeChild(li)
   
})

//task5
var start = document.querySelector('.start')
var stop = document.querySelector('.stop')
var h3 = document.querySelector('.h3')
var reset = document.querySelector('.reset')

var itrvel;
var count;
start.addEventListener('click',function () {
  var count = 0;
  inter = setInterval(function () {
     h3.textContent = count;
    
    count++;
  },1000);
});

stop.addEventListener('click',function () {
 clearInterval(inter)
});
reset.addEventListener('click',function () {
  var count = 0;
  h3.textContent = count;
  
 });