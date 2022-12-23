const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const nav = document.querySelector('.nav');
let windowWidth = window.innerWidth;
const animationSpeed = 750;
const distanceOfLetGo = windowWidth*0.2;
let currentSlide = 1;
let animation = false;
let autoScrollVar = true;
let diff = 0;
let citiesArray = ['Amsterdam','Rome','New-York','Singapore','Prague'];
let numOfCities = citiesArray.length;
let devidedCitiesArray = [];
citiesArray.map(city=>{
    let length = city.length;
    let letters = Math.floor(length/4); 
    // city = ROME , length = 4 , Letters = 1
    
    // let exp = new RegExp(`.{1,${letters}},g`)
    let exp = new RegExp(".{1," + letters + "}", "g");
    //* . Match any character (except for line terminators)
    //* {1,..} Matches t
    //* g global and dont return after first match
    devidedCitiesArray.push(city.match(exp));
})
// window.addEventListener('DOMContentLoaded',()=>{
//     console.log('content loaded');
// })