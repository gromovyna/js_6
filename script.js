
debugger
priceNow = 0;

vegetables =["cabbage", "avocado", "tomato",];

fruits =["grapes", "raspberry", "coconut",];

seasons =["winter", "summer",];

price =[8, 30, 10, 20, 25, 50,]

addedPrice = [2, 0.8]

do{
    seasonNow = prompt("Зараз зима чи літо?").toLowerCase().replaceAll(" ","")
    } while(seasonNow !==seasons[0] && seasonNow !==seasons[1]);
    
do{
category = prompt("Яка категорія вас цікавить?").toLowerCase().replaceAll(" ","")
} while(category !=="vegetables" && category !=="fruits");

if(category =="vegetables"){ 
    do{
    choise  = prompt("Який саме овоч хочете купити?").toLowerCase().replaceAll(" ","");
    }while(choise !==vegetables[0] && choise!==vegetables[1] && choise!==vegetables[2] );}
else 
    do{
    choise  = prompt("Який саме фрукт хочете купити?").toLowerCase().replaceAll(" ","");
    }while(choise !==fruits[0] && choise!==fruits[1] && choise!==fruits[2] );

            if(choise  == vegetables[0]){
                priceNow = price[0]
                img = "images/vegetables/cabbage.svg";
            }
            else if (choise  == vegetables[1]){
                priceNow = price[1]
                img = "images/vegetables/avocado.svg"
            }
            else if (choise  == vegetables[2]){
                priceNow = price[2]
                img = "images/vegetables/tomato.svg";
            }
            else if(choise  == fruits[0]){
                priceNow = price[3];
                img = "images/fruits/grapes.svg";
            }
            else if (choise  == fruits[1]){
                priceNow  = price[4]
                img = "images/fruits/raspberry.svg"
            }
            else{
                priceNow = price[5]
                img = "images/fruits/coconut.svg";
            };
            
    do{
    couned =prompt("Скільки продуктів хочете купити").replaceAll(" ","");
    }while (couned <= 1 || isNaN(couned));   

    totalPrice = priceNow * couned;       
       
    seasonNow === seasons[0] ? totalPrice = totalPrice*addedPrice[0] : totalPrice =totalPrice * addedPrice[1];
    
    document.write(`<div class="product" align="center">
    <img src =${img} alt = fruit width="100" height="100">
    <p>Selected product: <b>${choise}</b></p>
    <p>Count of cabbages: <b>${couned}</b></p>
    <p>Selected period: <b>${seasonNow}</b></p>
    <p>Selected category: <b>${category}</b></p>
    <p>Final sum: <b>${totalPrice} UAH</b></p>
    </div>`)
