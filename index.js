const btn = document.querySelector("#new-quote");

let quote = document.querySelector(".quote");

let person = document.querySelector(".person");

const quotes = [{
    quote: "To love oneself is the beginning of a lifelong romance." ,
    person: "— Oscar Wilde"
},
{
    quote: "Sometimes the most important thing in a whole day is the rest we take between two deep breaths." ,
    person: "— Etty Hillesum"
},
{
    quote:"Loved you yesterday, love you still, always have, always will." ,
    person:"TheKnownOne"
},
{
    quote:"Love more than being loved." ,
    person:"TheKnownOne"
},
{
    quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn." ,
    person:"Benjamin Franklin"
},
{
    quote:"It is during our darkest moments that we must focus to see the light." ,
    person:"-Aristotle"
},
{
    quote:"Whoever is happy will make others happy too." ,
    person:"Anne Frank"
},
{
    quote:"The only impossible journey is the one you never begin." ,
    person:"Tony Robbins"
},
{
    quote:"Only a life lived for others is a life worthwhile" ,
    person:"Einstein"
},
{
    quote:"May you live all the days of your life." ,
    person:"Jonathan Swift"
},
{
    quote:"Love , because before than anything else love is something else." ,
    person:"TheKnownOne"
},
];

btn.addEventListener("click", function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})
