// const form=document.querySelector("form");

// const name =form.document.querySelector("#name");

// const email=form.document.querySelector("#email");

// const password=form.document.querySelector("#password");

// console.log(name);
// form.addEventListener("submit", formhandler);

// function formhandler(e){
// e.preventDefault();
// console.log("submit");
   
//     const userInfo = {
//         name : name.value,
//         email : email.value,
//         password: password.value,
//     }

//   document.write("userInfo");
 
// }

//  var write=document.querySelector(".userdetail").innerHTML = userInfo + "it is data";
 
//  document.write(write);


document.querySelector("form");

// form tag er maddome tree style form er vitore thaka input fil gulo select: 
var  name= form.document.querySelector("#name");
var email= form.document.querySelector("#email");
var password=form.document.querySelector("#password");

form.addEventlistener("submit",submithandler);
// submit er jonno form tag e eventlistener add korte hoi.
function submithandler(eve){
eve.preventDefault();

console.log(name.value);
console.log(email.value);
console.log(password.value);


// user theke newa data backend e niye jawar jonno const diye ekta object niye then tar vitore user er input e dewa value gulo save korte hobe.
 const userinfo={
        name : name.value,
        email: email.value,
        password: password.value,
        
 };


// nise user theke newa data backend e entry kore newa hoyece.
name.values= '';
email.value='';
password.value='';


}
