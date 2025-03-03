let text = document.getElementById("text");
let button1 = document.getElementById("button1");



let clicks=0;

button1.addEventListener("click", yell_at_user);

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
                                                      }
                                                      if( clicks == 21 ){
                                                         text.innerHTML = "But serously stop pressing the button";
                                                            }
                                                            if( clicks == 22 ){
                                                               text.innerHTML = "something bad might happent to Lebron";
                                                                  }
                                                                  if( clicks == 23 ){
                                                                     text.innerHTML = "if you press it again hes going to retire";
                                                                        }


}