////////SOFT VISION TEMA 2///////

// exercitiu1
const exercitiu1 = numar => {
    if(numar % 2 == 0 ){
        return numar - 2
    }else{
        return 2 * numar
    }
}
const rezultatExercitiu1 = exercitiu1(7);
console.log(rezultatExercitiu1);


//exercitiu 2
let a = [1,2,3,4,5,6,7,8,9,11,12,432,123,346,1236,77,55,44,33,876,90,100]
let prim = [];

function exercitiu2(sp) {
    let identifier = sp / 2;
      for (let i = 2; i <= identifier; i++) {
       if ((sp % i) == 0) { 
        return false;
       } 
     }
     return true;
}
for (let index = 0; index < a.length; index++) {
  if (exercitiu2(a[index])) {
      prim.push(a[index])
  }
}
console.log(prim);

//exercitiu 3

const  lista  =  [1, "1", "salut", 2, 6, true, "true"];
const stringss = lista.filter(
    element => typeof element === "string"
);
console.log(stringss);


// exercitiu4
function suma(n)
{
    let sum;
    for(sum = 0; n > 0; 
        sum += n % 10, 
        n = parseInt(n / 10)){continue}
        ;
    return sum;
}
let n = 12345671;
console.log(suma(n));

//exercitiu 5
 const  Echipa = "PSG"
 switch (Echipa) {
     case "Real Madrid":
         console.log("Atacantul  Real Madrid-ului este Karim Benzema.");
         break;
    case "Barcelona":
        console.log("Atacantul  Barcelonei este Aubameyang.");
        break;
    case "PSG":
    case "Franta":
        console.log("Atacantul Frantei si al PSG-ului este nimeni altul decat...KYLIAN Mbappeeeeee.");
        break;
    case "Atletico Madrid":
        console.log("Atacantul  Atletico Madrid-ului este Griezmann");
        break;
    case "CFR Clui":
    case "Romania":
        console.log("Atacantul Romaniei si al CFR Cluj-ului este Ovidiu Popescu");
        break;  
    default:
        console.log("Nu detin aceasta informatie.");     
}