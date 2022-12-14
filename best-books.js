const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/`
  // Usually API_key needs to stay secret
  const API_KEY = '9PQ46JC0RXhkMuVMTY0AcKECLY6qpqm1'

  // The base url pattern can be found on API docs
  const url = `${BASE_URL}/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`


//fetching
  fetch(url).then((data)=>{
    // fetch the data onto a json object
    return data.json()
  }).then((responseJSON)=>{ //this is what the resonse to data.json


    // console.log(responseJson.results.books[0])
    // console.log(responseJson.results.books[1])


    // since we only need 5 books out of a list of 15 loop through 5 items
    for(let i = 0; i<=4;i++){
      //create a book object with the responseJSON
      let book = responseJSON.results.books[i]
      console.log(book)
      // create the book values persay
      const title =book.title
      const author = book.author
      const description = book.description

      // create the html 
      const container = document.getElementById('books-container')
      const ul = document.createElement('ul')
      const li = document.createElement('li')
      container.append(ul)
      ul.append(li.innerText =`\n${title}, ${author}, ${description}`)
    }
  })





});
