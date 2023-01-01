let myarray = ["PJCHENder","2"];
let myCountry = "Taiwan";
const ref ="https://pjchender.blogspot.com/2017/01/javascript-es6-template-literalstagged.html";
mytag `<p> My name is ${myarray} and my coutry is ${myCountry}</p>`;

function mytag(t){
	console.log(`ref = ${ref}`);
  console.log(t);
  console.log(arguments);
  console.log("arguments[0] = "+arguments[0]);
   console.log("arguments[1] = "+arguments[1]);
}