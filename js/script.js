/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Initialize all the quote objects
***/

var quotes = [
  {
    quote: "I think I have learned that the best way to lift one’s self up is to help some one else.",
    source: "Booker T. Washington",
    citation: "The Story of My Life and Work",
    year: "1900",
    link: "https://www.amazon.com/dp/1477481079/"
  },
  {
    quote: "It's the possibility of having a dream come true that makes life interesting.",
    source: "Paulo Coelho",
    citation: "The Alchemist",
    year: "2014",
    link: "https://www.amazon.com/dp/0061122416"
  },
  {
    quote: "Memories warm you up from the inside. But they also tear you apart.",
    source: "Haruki Murakami",
    citation: "Kafka on the Shore",
    year: "2006",
    link: "https://www.amazon.com/dp/1400079276"
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "Stephen King",
    citation: "The Shawshank Redemption",
    year: "1995",
    link: "https://www.amazon.com/dp/0751514624"
  },
  {
    quote: "My advice is, never do tomorrow what you can do today. Procrastination is the thief of time.",
    source: "Charles Dickens",
    citation: "David Copperfield",
    year: "1850",
    link: "https://www.amazon.com/dp/1479387576"
  }
];



/***
 * Gets a random object from the quotes array, random object is generated
 * by randomNumber
***/


function getRandomQuote() {
  var randomNumber = Math.floor(quotes.length * Math.random());
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}


/***
 * Generates a random HEX color based on possible characters
***/


function getRandomColor() {
  var possibleCharacters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += possibleCharacters[Math.floor(Math.random() * 16)];
  }
  return color;
}


/***
 * Prints the quote to index.html
***/

function printQuote() {
  var getQuote = getRandomQuote();

  var quote = "";

  quote = '<p class="quote">' + getQuote.quote + '</p>';
  quote += '<p class="source">' + getQuote.source;

  if (getQuote.citation)
    quote += '<span class="citation">' + getQuote.citation + '</span>';
    
  if (getQuote.year)
    quote += '<span class="year">' + getQuote.year + '</span>';

  if (getQuote.link)
    quote += '<span class="link"><a href="'+ getQuote.link + '" target="_blank">Get the book</a></span>'

  quote += '</p>';
  
  document.getElementById('quote-box').innerHTML = quote;

  // Sets a random background color
  setRandomColor();
  update();
}


/***
 * Sets the random HEX color 
***/


function setRandomColor() {
  document.body.style.backgroundColor = getRandomColor();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);