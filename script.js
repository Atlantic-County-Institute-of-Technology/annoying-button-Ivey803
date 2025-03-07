const text = document.getElementById("text");
const button1 = document.getElementById("button1");
const container = document.getElementById("container")

let lebron = new Audio('assets/lebron.mp3');
let clicking= new Audio('assets/clicking.mp3')
let clicks=0;

button1.addEventListener("click", yell_at_user);
clicking.play();
function yell_at_user() {
   clicks++;
   if( clicks == 1 ){
text.innerHTML = "hey Stop";
   }
   if( clicks == 3 ){
    text.innerHTML = "hey man read the button";
       }
       if( clicks == 5 ){
        text.innerHTML = "... stop";
           }
           if( clicks == 7 ){
            text.innerHTML = "You may regret it";
               }
               if( clicks == 9 ){
                text.innerHTML = "i guess you won't stop pressing the button";
                   }
                   if( clicks == 11 ){
                     text.innerHTML = "Wait...";
                        } 
                        if( clicks == 13 ){
                           text.innerHTML = "You know what can't stop";
                              }
                              if( clicks == 15 ){
                                 text.innerHTML = "A goat";
                                    }
                                    if( clicks == 17 ){
                                       text.innerHTML = "you know who else is the goat";
                                          }
                                          if( clicks == 19 ){
                                             text.innerHTML = "LEBRON";
                                                }
                                                if( clicks == 20 ){
                                                   text.innerHTML = "BOOM BOOM BOOM BOOM";
                                                   lebron.play();
                                                      }
                                                      if( clicks == 21 ){
                                                         button1.classList.add("rotate");
                                                         text.innerHTML = "But serously stop pressing the button";
                                                         
                                                            }
                                                            if( clicks == 22 ){
                                                               button1.classList.remove("rotate")
                                                               text.innerHTML = "something bad might happent to Lebron";
                                                                  }
                                                                  if( clicks == 23 ){
                                                                     text.innerHTML = "if you press it again hes going to retire";
                                                                        }
                                                                        if( clicks == 24 ){
                                                                     text.innerHTML = "NOOOOOOOOO";
                                                                     if( clicks == 26 ){
                                                                        text.innerHTML = "i know where you live...";
                                                                        
                                                                           }
                                                                        }
                                                                        if( clicks == 27 ){
                                                                           text.innerHTML = "your not safe from me...";
                                                                           
                                                                         
                                                                          
                                                                              }
                                                                              if( clicks == 28 ){
                                                                                 text.innerHTML = "i will wind your address ";
                                                                                 
                                                                                    }
                                                                                    if( clicks == 29 ){
                                                                                       text.innerHTML = "is it about 6-7 miles away? ";
                                                                                       
                                                                                          }

                                                                                          if( clicks == 30 ){
                                                                                             text.innerHTML = "i am coming to your house good bye. ";
                                                                                             
                                                                                                }


}