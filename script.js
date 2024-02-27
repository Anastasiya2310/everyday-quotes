// const url = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100${}`;
let category = 'happiness';
const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
const options = {
	method: 'GET',
  headers: { 
    'X-Api-Key': 'q7vgN8rfruSZjWOqgzuTXQ==bW7HnCZ1VQeRDJbD'
  },
  contentType: 'application/json',
};
let quoteHtml = document.querySelector('#quote-body p');
let quoteAuthorHtml = document.getElementById('quote-author');

function getRandom(items) {
  let randomItem = items[(Math.floor(Math.random() * items.length))];
  return randomItem;
}

function addQuoteToHTML(quote, author) {
  quoteHtml.innerText = quote;
  quoteAuthorHtml.innerText = `— ${author}`;
}

async function getQuotes() {
  const response = await fetch(url, options);
  const quotes = await response.json();
  quoteOfTheDay = getRandom(quotes).quote;
  quoteAuthor = getRandom(quotes).author;
  return addQuoteToHTML(quoteOfTheDay, quoteAuthor);

  // fetch(url, options)
  //   .then(response => {
  //     if(response.ok) {
  //       return response.json();
  //     }else {
  //       throw new Error('API is not available');
  //     }
  //   })
  //   .then(data => {
  //     quoteOfTheDay = getRandom(data);
  //     return addQuoteToHTML(quoteOfTheDay);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   })
}

getQuotes();

