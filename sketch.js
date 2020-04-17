const quotes = [
  {name: 'Bertrand Russel', quote: 'Wenn alle Experten sich einig sind, ist Vorsicht geboten'},    
  {name: 'Johann Wolfgang von Goethe', quote: 'Alle Wege bahnen sich vor mir,weil ich in der Demt wandle.'}, 
  {name: 'Albert Einstein', quote: 'Geniale Menschen sind selten ordentlich, Ordentliche selten genial.'},    
  {name: 'Wolfgang Amadeus Mozart', quote: 'Das ist kurios'},    
  {name: 'Ludwig van Beethoven', quote: 'Musik ist das Klima meiner Seele.'},    
  ];
const quoteBtn = document.querySelector('#quoteBtn');


quoteBtn.addEventListener('click',displayQuote)

function displayQuote(){
  let number= Math.floor(Math.random() * quotes.length);
  console.log(number);
  quoteAuthor.innerHTML= quotes[number].name;  
  quote.innerHTML= quotes[number].quote;
}
