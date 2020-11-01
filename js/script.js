'use strict';
// function test(a,c, d){
    
//     let b = `<p class = "${c}">${a}</p>`;
//     document.querySelector(d).innerHTML = b;
// }


 class Test {

     constructor(selector, height, width, bg,  fontSize, message){

         this.selector = selector;
         this.height = height;
         this.width = width;
         this.bg = bg;
         this.fontSize = fontSize;
         this.message = message;
           
              
         
                
        };       
// создание метода 
     showTest(){
      //  создаем класс с Div
      if(this.selector[0] === '.'){
            let newDiv = document.createElement('div');
               newDiv.classList.add(this.selector.substring(1));
               newDiv.textContent = this.message; 
               newDiv.style.height = this.height + 'px';
                newDiv.style.width = this.width + 'px';
                newDiv.style.background = this.bg;
                newDiv.style.fontSize = this.fontSize + 'px' ;
                document.body.append(newDiv);

             }

            //  создаем по Id с #
             if(this.selector[0] === '#'){
                let newParag = document.createElement('p');
                newParag.setAttribute('id',this.selector.substring(1));
                newParag.textContent = this.message; 
                newParag.style.height = this.height + 'px';
                newParag.style.width = this.width + 'px';
                newParag.style.background = this.bg;
                newParag.style.fontSize = this.fontSize + 'px' ;
                    document.body.append(newParag);
    
                 }
};
 };

//  constructor(selector, height, width, bg,  fontSize,message){
 let domElementary = new Test('.test2', '150','200', 'red', '100', ' итог');
 let domElementary2 = new Test('#test2', '50','100', 'yellow', '20', ' Второй');
domElementary.showTest();
domElementary2.showTest();
 

