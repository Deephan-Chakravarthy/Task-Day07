
var request =  new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")

request.send();

request.onload = function(){
var res = JSON.parse(request.response);
console.log(res);

//a)Get all the countries from Asia continent /region using Filter function
var country_asia = res.filter((ele) => ele.continents == "Asia");
console.log(country_asia);

//b)Get all the countries with a population of less than 2 lakhs using Filter function
var pop=res.filter((ele)=>ele.population < 200000);
console.log(pop);

//c)Print the following details name, capital, flag, using forEach function
Object.values(res).forEach((ele) => {
    console.log("Name: " + ele.name.common);
    console.log("Capital: " + ele.capital);
    console.log("Flags: " + ele.flags.png);
})

//d)Print the total population of countries using reduce function
var popu = res.reduce((acc,cv) => acc+cv.population,0);
console.log("Total population of all the countries: " + popu);

//e)Print the country that uses US dollars as currency.
var a = res.filter((ele) => ele.currencies == "United State dollar");
console.log(a);
}