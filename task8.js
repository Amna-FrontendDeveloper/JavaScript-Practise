//task8
var input = document.querySelector('input')
var data = [
    {name: 'Amna', src: './photo-1741557571786-e922da981949----2.avif'},
    {name: 'AmnaMushtaq', src: './photo-1734899889244-37963ab66ca4.avif'},
    {name: 'Fatima', src: './photo-1741567348603-0bef4612bea2.avif'},
    {name: 'Ali', src: './photo-1741567348603-0bef4612bea2.avif'},
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