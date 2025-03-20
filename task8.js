//task8
var input = document.querySelector('input')
var data = [
    {name: 'Apple', src: './apple.jpeg'},
    {name: 'Banana', src: './banana.jpeg'},
    {name: 'Avocado', src: './Avocado.jpeg'},
    {name: 'Strawberry', src: './stobery.jpeg'},
    {name: 'Pineapple', src: './pineApple.jpeg'},
    {name: 'Orange', src: './orange.jpeg'},
    {name: 'Coconut ', src: './coconut.jpeg'},
   ]
   var pers = '';
   data.forEach(function(elem){
    pers += ` <div class="person">
                 <div class="img">
                  <img src="${elem.src}"
                   alt="">
                   </div>
                 <h4 class="Pname">${elem.name}</h4>
              </div>`
   })
   document.querySelector('.people').innerHTML = pers;



   //here we check input value and match with name
   input.addEventListener('input',function(){

   var matching= data.filter(function(e){
       return e.name.startsWith(input.value)
    })
    var newUsers = '';
    matching.forEach(function(elem){
        newUsers += ` <div class="person">
                  <div class="img">
                   <img src="${elem.src}"
                    alt="">
                    </div>
                  <h4 class="Pname">${elem.name}</h4>
               </div>`
    })
    document.querySelector('.people').innerHTML = newUsers;
 

   })

   //task9

   var textarea = document.querySelector('textarea')
   var counter = document.querySelector('.counter')

   textarea.addEventListener('input',function(){
 
   counter.textContent = textarea.value.length;

   })