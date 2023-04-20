// ----------------------------------object. map, lifter. 
// const people = [
//     { name: 'Alice', age: 25, city: 'Paris' },
//     { name: 'Bob', age: 35, city: 'rabat' },
// ]
// //1
// function getNames(people){
// return people.map(person=> person.name)
// }
// const arrayname=getNames(people);
// document.write(arrayname.join());
// document.write('<br/>');
// //2
// function getNamesCity(people){
// return people.map(person=>({name:person.name, city: person.city }))
// }
// const arrayNamesCity=getNamesCity(people);
// document.write(typeof arrayNamesCity)
// for(listnameCity of arrayNamesCity){
// document.write(listnameCity.name + ' ' + listnameCity.city)
// document.write('<br/>');
// }
// //3
// function getNameAge(people){
// return people.filter(person=>person.age < 30).map(person=>({name:person.name, age: person.age }))
// }
// const arrayameAge=getNameAge(people);
// for(listameAge of arrayameAge){
// document.write(listameAge.name + ' ' + listameAge.age)
// document.write('<br/>');
// }
// const people = [
//     { name: 'Alice', age: 25, city: 'Paris' },
//     { name: 'Bob', age: 35, city: 'rabat' },
//     { name: 'adin', age: 35, city: 'newyork' },
//     { name: 'abdelfettah', age: 21, city: 'Marrakech' },
// ]
// //for in return index 
// //for of return index value's
// //arrow function is function not named we use it inside a loop or another fuction like " lambda"
// function getChartName(people){
//     var results=[];
//     for(value of people.filter(person => person.name.charAt(0).person.CharAt(0) ==='A'))
//     //.toUpperCase() == 'A' 
//     results.push(value.name)
// return results;
// }
// document.write(getChartName(people));

// const langages =['Java','Python','Php','Scala']
// langages.map(value => document.write(value + "\t"))
// document.write('<br/>')

// langages.forEach((value,index) => {
//     if(value.length > 4)document.write(value +'<br/>')
// })
// var display = (a, b) => {
//     return a+b;
// }
// document.write(display(4,6))
// ----------------------setTimeout, clearTimeout. setInterval, clearInterval-------------------------------
function testDisplay(){
    document.write("<h1>Hello Mr.Rachid</h1>" +"<br/>");
}
// var test = setTimeout("testDisplay()", 7000)
// clearTimeout(test)
var test = setInterval("testDisplay()", 2000)
// clearInterval(test)
// ---------------------------------------les exprition reguliaire----------------------------------------
// let text = "cours JS"
// let expr = /[A-Z]/;
// document.write(text.search(expr))
// let text = "cours JS"
//  let expr = /[A-Z]/g;
//  document.write(text.replace(expr,"python"))



